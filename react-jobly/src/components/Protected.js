import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context";

export default function Protected({
  check,
  redirect = {
    route: "/",
  },
  message,
  children,
}) {
  const user = useContext(UserContext);
  if (check) return children;

  user.invalidMsg = message;

  return <Navigate to={redirect.route} />;
}
