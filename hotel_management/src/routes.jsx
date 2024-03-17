import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {/*
  {
    name: "Docs",
    href: "",
    target: "_blank",
    element: "",
  },*/}
];

export default routes;
