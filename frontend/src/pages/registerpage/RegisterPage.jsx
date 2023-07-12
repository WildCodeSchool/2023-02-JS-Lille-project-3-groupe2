import { Navigate, useParams, useRouteError } from "react-router-dom";

export default function RegisterPage() {
  const { type } = useParams();
  const error = useRouteError();
  console.error(error);

  if (type === "enterprise") return <h1>{type}</h1>;
  if (type === "candidate") return <h1>ça marche {type}</h1>;
  return <Navigate to="/error" />;
}
