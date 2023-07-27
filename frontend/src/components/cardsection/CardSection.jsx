import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/api";
import "./CardSection.scss";

export default function CardSection() {
  const navigate = useNavigate();
  const { user, setUser, setIsLogin } = useAuth();
  function formatDateToFrench(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleString("fr-FR", options);
  }
  function formatBirthDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleString("fr-FR", options);
  }

  const deleteAccount = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Veux tu vraiment supprimer ton compte ?",
      text: "Cette action est irreversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Non, annuler !",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        "Compte supprimé !",
        "Votre compte n'est plus accessible.",
        "success"
      );
      await api.delete(`/candidate/${user.userInfos.ID}`);
      await api.get("/logout");
      setUser({
        userAuth: {
          ID: null,
          account_type: null,
          active: null,
          creation_date: null,
          password: null,
          register_email: null,
        },
        userInfos: {
          ID: null,
          auth_ID: null,
          about: null,
          birthdate: null,
          firstname: null,
          lastname: null,
          phone_number: null,
          picture_url: null,
        },
        userAddress: {
          ID: null,
          candidate_ID: null,
          street_number: null,
          street_type: null,
          street_name: null,
          city: null,
          postal_code: null,
          department: null,
          region: null,
          country: null,
        },
      });
      setIsLogin(false);
      navigate("/");
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        "Action annulée",
        "Ton compte est sain et sauf :)",
        "error"
      );
    }
  };
  return (
    <div className="card-section-profil">
      <div className="container-left-profil">
        <h1>
          Bonjour{" "}
          <span>{`${user.userInfos.firstname} ${user.userInfos.lastname}`}</span>{" "}
          !
        </h1>
        <div className="picture-profile">
          <img
            src="https://www.akor-alternance.com/wp-content/uploads/2017/11/photo-profil-cv-e1512731498394.png"
            alt="profil"
          />
        </div>
        <p>Un mot sur vous :</p>
        <p>{user.userInfos.about}</p>
      </div>
      <div className="container-right-profil">
        <div className="title-information">
          <h1>Informations personnelles</h1>
        </div>
        <div className="container-global-information">
          <div className="information">
            <h2>Date de naissance :</h2>
            <p>{formatBirthDate(user.userInfos.birthdate)}</p>
          </div>

          <div className="information">
            <h2>Adresse :</h2>
            <p>
              {`${user.userAddress.street_number} 
               ${user.userAddress.street_type}
               ${user.userAddress.street_name}
               ${user.userAddress.city}
               ${user.userAddress.postal_code}
               ${user.userAddress.department}
               ${user.userAddress.region}
               ${user.userAddress.country}`}
            </p>
          </div>
          <div className="information">
            <h2>Téléphone :</h2>
            <p>{user.userInfos.phone_number}</p>
          </div>
          <div className="information">
            <h2>Email :</h2>
            <p>{user.userAuth.register_email}</p>
          </div>
          <div className="information">
            <h2>Date de création :</h2>
            <p>{formatDateToFrench(user.userAuth.creation_date)}</p>
          </div>
          <div className="information">
            <button type="button" onClick={deleteAccount}>
              Supprimer mon compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
