import { Navigate, useParams, useRouteError } from "react-router-dom";
import RegistrationCandidatepage from "../../components/registrationCandidatePage/RegistrationCandidatePage";

export default function RegisterPage() {
  const { type } = useParams();
  const error = useRouteError();
  console.error(error);

  if (type === "enterprise") return <h1>{type}</h1>;
  if (type === "candidate") return <RegistrationCandidatepage />;
  return <Navigate to="/error" />;
}
