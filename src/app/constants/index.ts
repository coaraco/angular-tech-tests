import { UserData } from "../interfaces";

/* eslint-disable @typescript-eslint/naming-convention */
export enum AppRoutes {
  Home = "",
  Login = "login",
  ForgotPassword = "forgot-password",
}

export const userData: UserData = {
  email: "francesc@coara.co",
  name: "Francesc",
  lastName: "Jaume",
  phone: "999666333",
  jobTitle: "Frontend Developer",
  location: "Palma de Mallorca, Illes Balears",
  image: "assets/images/1.jpg",
  teams: [
    {
      email: "ramon@coara.co",
      name: "Ramon",
      lastName: "Llompart",
      phone: "666999333",
      jobTitle: "Fullstack Developer",
      location: "Algaida, Illes Balears",
      image: "assets/images/2.jpg",
    },
    {
      email: "maria@coara.co",
      name: "Maria",
      lastName: "Tomas",
      phone: "333666999",
      jobTitle: "Backend Developer",
      location: "Alcudia, Illes Balears",
      image: "assets/images/3.jpg",
    },
    {
      email: "antonia@coara.co",
      name: "Antonia",
      lastName: "Ramis",
      phone: "666333999",
      jobTitle: "Devops",
      location: "Manacor, Illes Balears",
      image: "assets/images/4.jpg",
    },
  ],
};
