export interface UserData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  location: string;
  image: string;
  teams?: UserData[];
}
