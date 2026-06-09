export const useAuthService = () => {
  const API_URL = process.env.NEXT_PUBLIC_USERS_ENDPOINT!;
  // console.log(API_URL);
  const register = async (formData: User) => {
    try {
      // console.log("Api url is " + API_URL);

      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log("Registration response:", data);

      return data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      return data.user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const getCurrentUser = () => {
    if (typeof window === "undefined") return null;

    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  };

  const getToken = () => {
    if (typeof window === "undefined") return null;

    return localStorage.getItem("token");
  };

  return {
    register,
    login,
    logout,
    getCurrentUser,
    getToken,
  };
};