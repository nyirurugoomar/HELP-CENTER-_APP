import CreateCardForm from "./Dashboard/CreateCardForm";
import UserProfile from "./Dashboard/UserProfile";

export const privateRoutes = [
  { path: "/create", component: CreateCardForm },
  { path: "/profile", component: UserProfile },
];
