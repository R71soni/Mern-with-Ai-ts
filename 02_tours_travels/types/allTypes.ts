type AuthContextType = {
  isLoggedIn: boolean;
  userPrinciple: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout:  () => void;
};
export type { AuthContextType };