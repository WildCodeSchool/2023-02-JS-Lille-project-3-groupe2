import { useParams } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";

export default function RegisterPage() {
  const allowedTypes = ["candidate", "enterprise"]; // Specify the allowed values for :type parameter

  const { type } = useParams();

  if (!type) return <h1>defaultpage</h1>;
  if (!allowedTypes.includes(type)) {
    return <ErrorPage />;
  }
  if (type === "enterprise") return <h1>{type}</h1>;
  if (type === "candidate") return <h1>ça marche {type}</h1>;
}
