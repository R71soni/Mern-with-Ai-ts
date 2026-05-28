type AuthContextType = {
  isLoggedIn: boolean;
  userPrinciple: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout:  () => void;
};


type Destination = {
  _id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  imageUrl: string;
  tours: number;
  slug: string;
  url: string;
  price: number;
  description: string;
};
export type { AuthContextType,Destination };