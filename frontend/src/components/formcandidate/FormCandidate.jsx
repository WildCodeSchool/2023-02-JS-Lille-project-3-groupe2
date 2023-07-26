import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
// import "primeicons/primeicons.css";
import "./FormCandidate.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";

export default function FormCandidate() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("password");

  const [registerFormData, setRegisterFormData] = useState({
    lastname: "loumachi",
    firstname: "sacha",
    birthdate: "1997-11-16",
    phoneNumber: "06 75 30 11 41",
    about: "",
    pictureUrl: "",
    streetNumber: "22",
    streetType: "Rue",
    streetName: "Poincarré",
    city: "Lille",
    postalCode: "59000",
    department: "Nord",
    region: "Haut de France",
    country: "France",
    registerEmail: "test@example.com",
    password: "password",
    accountType: "candidat",
  });

  const [passwordMatch, setPasswordMatch] = useState();

  useEffect(() => {
    if (confirmPassword.length === 0) {
      setPasswordMatch();
    } else {
      const { password } = registerFormData;
      setPasswordMatch(password === confirmPassword);
    }
  }, [confirmPassword, registerFormData.password]);

  const handleChangeData = (event) => {
    setRegisterFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const steps = [
    {
      // Envoyer dans la table AUTH
      label: "Etape 1/4",
      content: (
        <div className="mail-password-container">
          <h1>Choisissez vos identifiants</h1>
          <div className="all-first-input">
            <div className="mail-input">
              <label htmlFor="email"> Email : *</label>
              <input
                required
                type="email"
                id="email"
                name="registerEmail"
                value={registerFormData.registerEmail}
                onChange={handleChangeData}
                placeholder="johndoe@exemple.com"
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Mot de passe : *</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={registerFormData.password}
                onChange={handleChangeData}
                placeholder="Insérer votre mot de passe ..."
              />
            </div>
            <div className="confirm-password-input">
              <label htmlFor="confirmpassword">
                Confirmer le mot de passe : *
              </label>
              <input
                required
                type="password"
                id="confirmpassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirmer votre mot de passe ..."
              />
              {!passwordMatch && passwordMatch !== false && (
                <span style={{ visibility: "hidden" }}>null</span>
              )}
              {passwordMatch === false && (
                <span style={{ color: "red" }}>
                  Les mots de passe ne correspondent pas.
                </span>
              )}
              {passwordMatch && passwordMatch === true && (
                <span
                  style={{
                    color: "green",
                    position: "relative",
                  }}
                >
                  Les mots de passe sont identiques.
                </span>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      // Envoyer dans la table CANDIDATE
      label: "Etape 2/4",
      content: (
        <div className="name-birthday-container">
          <h1>Dites-nous en plus à propos de vous !</h1>
          <div className="all-second-input">
            <div className="firstname-input">
              <label htmlFor="firstname"> Prénom : *</label>
              <input
                required
                type="text"
                id="firstname"
                name="firstname"
                value={registerFormData.firstname}
                onChange={handleChangeData}
                placeholder="John ..."
              />
            </div>
            <div className="lastname-input">
              <label htmlFor="lastname">Nom : *</label>
              <input
                required
                type="text"
                id="lastname"
                name="lastname"
                value={registerFormData.lastname}
                onChange={handleChangeData}
                placeholder="Doe ..."
              />
            </div>

            <div className="birthday-input">
              <label htmlFor="birthdate">Date de naissance : *</label>
              <input
                required
                type="date"
                id="birthdate"
                name="birthdate"
                value={registerFormData.birthdate}
                onChange={handleChangeData}
                min="1900-01-01"
                max="2005-07-27"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      // Envoyer dans la table ADDRESS
      label: "Etape 3/4",
      content: (
        <div className="address-container">
          <h1>N'oubliez pas votre adresse postale</h1>
          <div className="all-third-input">
            <div className="container-right">
              <div className="number-way-input">
                <label htmlFor="numberway">N° de voirie : *</label>
                <input
                  required
                  type="number"
                  id="numberway"
                  name="streetNumber"
                  value={registerFormData.streetNumber}
                  onChange={handleChangeData}
                  placeholder="32"
                />
              </div>
              <div className="type-way-input">
                <label htmlFor="typeway">Type de voirie : *</label>
                <input
                  required
                  type="text"
                  id="typeway"
                  name="streetType"
                  value={registerFormData.streetType}
                  onChange={handleChangeData}
                  placeholder="Rue, Boulevard ..."
                />
              </div>
              <div className="name-way-input">
                <label htmlFor="nameway">Nom de la voirie : *</label>
                <input
                  required
                  type="text"
                  id="nameway"
                  name="streetName"
                  value={registerFormData.streetName}
                  onChange={handleChangeData}
                  placeholder="Henry de la Mouette ..."
                />
              </div>
              <div className="country-input">
                <label htmlFor="country">Pays : *</label>
                <input
                  required
                  type="text"
                  id="country"
                  name="country"
                  value={registerFormData.country}
                  onChange={handleChangeData}
                  placeholder="France ..."
                />
              </div>
            </div>
            <div className="container-left">
              <div className="region-input">
                <label htmlFor="region">Région : *</label>
                <input
                  required
                  type="text"
                  id="region"
                  name="region"
                  value={registerFormData.region}
                  onChange={handleChangeData}
                  placeholder="Île de France ..."
                />
              </div>
              <div className="department-input">
                <label htmlFor="department">Département : *</label>
                <input
                  required
                  type="text"
                  id="department"
                  name="department"
                  value={registerFormData.department}
                  onChange={handleChangeData}
                  placeholder="Val-de-Marne ..."
                />
              </div>
              <div className="city-input">
                <label htmlFor="city">Ville : *</label>
                <input
                  required
                  type="text"
                  id="city"
                  name="city"
                  value={registerFormData.city}
                  onChange={handleChangeData}
                  placeholder="Paris ..."
                />
              </div>
              <div className="postal-code-input">
                <label htmlFor="postalcode">Code postal : *</label>
                <input
                  required
                  type="number"
                  id="postalcode"
                  name="postalCode"
                  value={registerFormData.postalCode}
                  onChange={handleChangeData}
                  placeholder="94220 ..."
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: "Etape 4/4",
      content: (
        <div className="rgpd-check-container">
          <h1>Dernière étape !</h1>
          <div className="all-fifth-input">
            <div className="rgpd-input">
              <input type="checkbox" id="rgpd" value="rgpd" required />
              <label htmlFor="rgpd">
                En soumettant ce formulaire, vous consentez à ce que vos données
                personnelles soient traitées conformément au Règlement général
                sur la protection des données (RGPD). Vos informations seront
                utilisées dans le but de traiter votre candidature à des offres
                d'emploi et faciliter le processus de recrutement. Veuillez
                consulter notre politique de confidentialité pour plus
                d'informations sur la manière dont nous protégeons et utilisons
                vos données.
              </label>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = async (e) => {
    e.preventDefault();
    if (activeStep === 0) {
      if (!passwordMatch) {
        return;
      }
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }

    if (activeStep === steps.length - 1) {
      try {
        const result = await registerUser(registerFormData);
        if (result !== 409) {
          navigate("/login");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ton compte a bien été créé !",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setError("Un compte est déjà lié à cet email");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Un compte est déjà lié à cet email !",
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderCarouselItem = (stepIndex) => {
    const step = steps[stepIndex];
    if (!step) {
      return null; // Ou un message d'erreur approprié
    }

    return (
      <div key={stepIndex}>
        <h3>{step.label}</h3>
        {step.content}
      </div>
    );
  };
  if (error) {
    return (
      <div className="container-register-candidate">
        <h2>Une erreur est survenue</h2>
        <button
          type="button"
          onClick={() => {
            setActiveStep(0);
            setError(null);
          }}
        >
          Retour
        </button>
      </div>
    );
  }
  return (
    <div className="container-register-candidate">
      <form className="form-candidate-container" onSubmit={handleNext}>
        <Carousel
          value={[activeStep]}
          numVisible={1}
          numScroll={1}
          circular={false}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
          itemTemplate={renderCarouselItem}
        />

        {/* Boutons de navigation */}
        <div className="btn-navigation">
          {activeStep > 0 && activeStep < steps.length ? (
            <Button
              type="button"
              label={<BsArrowLeftCircle />}
              onClick={(e) => handlePrev(e)}
              className="p-button-secondary"
            />
          ) : (
            <div className="p-button-secondary" />
          )}
          {activeStep < steps.length - 1 ? (
            <Button
              type="submit"
              label={<BsArrowRightCircle />}
              className="p-button-success"
            />
          ) : (
            activeStep === steps.length - 1 && (
              <Button
                type="submit"
                label="Valider"
                className="p-button-success"
                // onClick={(e) => handleSubmit(e)}
              />
            )
          )}
        </div>
      </form>
    </div>
  );
}
