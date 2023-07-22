import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "./FormCandidate.scss";

export default function FormCandidate() {
  const [activeStep, setActiveStep] = useState([0]);

  const steps = [
    {
      label: "Etape 1/5",
      content: (
        <div className="mail-password-container">
          <h1>Choisissez vos identifiants</h1>
          <div className="all-first-input">
            <div className="mail-input">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@exemple.com"
                required
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                placeholder="Insérer votre mot de passe ..."
                required
              />
            </div>
            <div className="confirm-password-input">
              <label htmlFor="confirmpassword">
                Confirmer le mot de passe :
              </label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirmer votre mot de passe ..."
                required
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Etape 2/5",
      content: (
        <div className="name-birthday-container">
          <h1>Dites-nous en plus à propos de vous !</h1>
          <div className="all-second-input">
            <div className="firstname-input">
              <label htmlFor="firstname"> Prénom :</label>
              <input type="text" id="firstname" placeholder="John" required />
            </div>
            <div className="lastname-input">
              <label htmlFor="lastname">Nom :</label>
              <input type="text" id="lastname" placeholder="Doe" required />
            </div>
            <div className="birthday-input">
              <label htmlFor="birthdate">Date de naissance :</label>
              <input
                type="date"
                id="birthdate"
                min="1900-01-01"
                max="2005-07-27"
                required
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Etape 3/5",
      content: (
        <div className="address-container">
          <h1>N'oubliez pas votre adresse postale</h1>
          <div className="all-third-input">
            <div className="container-right">
              <div className="number-way-input">
                <label htmlFor="numberway">N° de voirie :</label>
                <input type="number" id="numberway" placeholder="32" required />
              </div>
              <div className="type-way-input">
                <label htmlFor="typeway">Type de voirie :</label>
                <input
                  type="text"
                  id="typeway"
                  placeholder="Rue, Boulevard ..."
                  required
                />
              </div>
              <div className="name-way-input">
                <label htmlFor="nameway">Nom de la voirie :</label>
                <input
                  type="text"
                  id="nameway"
                  placeholder="Henry de la Mouette ..."
                  required
                />
              </div>
            </div>
            <div className="container-left">
              <div className="region-input">
                <label htmlFor="region">Région :</label>
                <input
                  type="text"
                  id="region"
                  placeholder="Île de France ..."
                  required
                />
              </div>
              <div className="department-input">
                <label htmlFor="department">Département :</label>
                <input
                  type="text"
                  id="department"
                  placeholder="Val-de-Marne ..."
                  required
                />
              </div>
              <div className="city-input">
                <label htmlFor="city">Ville :</label>
                <input type="text" id="city" placeholder="Paris ..." required />
              </div>
              <div className="postal-code-input">
                <label htmlFor="postalcode">Code postal :</label>
                <input
                  type="number"
                  id="postalcode"
                  placeholder="94220 ..."
                  required
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Etape 4/5",
      content: (
        <div className="contract-check-container">
          <h1>Que recherchez-vous sur notre plateforme ?</h1>
          <div className="all-fourth-input">
            <div className="container-left1">
              <div className="cdi-input">
                <input id="cdi" type="checkbox" value="contract" />
                <label htmlFor="cdi">CDI</label>
              </div>
              <div className="cdd-input">
                <input id="cdd" type="checkbox" value="contract" />
                <label htmlFor="cdd">CDD</label>
              </div>
              <div className="interim-input">
                <input id="interim" type="checkbox" value="contract" />
                <label htmlFor="interim">INTERIM</label>
              </div>
            </div>
            <div className="container-right1">
              <div className="alternance-input">
                <input id="alternance" type="checkbox" value="contract" />
                <label htmlFor="alternance">ALTERNANCE</label>
              </div>
              <div className="stage-input">
                <input id="stage" type="checkbox" value="contract" />
                <label htmlFor="stage">STAGE</label>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Etape 5/5",
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

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici la logique de soumission du formulaire
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

  return (
    <div className="container-register-candidate">
      <form className="form-candidate-container" onSubmit={handleSubmit}>
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
          {activeStep !== 0 && (
            <Button
              label={<BsArrowLeftCircle />}
              onClick={handlePrev}
              className="p-button-secondary"
            />
          )}
          {activeStep !== steps.length - 1 ? (
            <Button
              label={<BsArrowRightCircle />}
              onClick={handleNext}
              className="p-button-success"
            />
          ) : (
            <Button
              type="submit"
              label="Valider"
              className="p-button-success"
            />
          )}
        </div>
      </form>
    </div>
  );
}

// import "./FormCandidate.scss";

// export default function FormCandidate() {
//   return (
//     <div className="container-register-candidate">
//       <form className="form-candidate-container">
//         <div className="mail-password-container">
//           <h1>Choisissez vos identifiants</h1>
//           <div className="all-first-input">
//             <div className="mail-input">
//               <label>Email :
//                 <input type="email" placeholder="johndoe@exemple.com" required />
//               </label>
//             </div>
//             <div className="-password-input">
//               <label>Mot de passe :
//                 <input type="password" required />
//               </label>
//             </div>
//             <div className="confirm-password-input">
//               <label>Confirmer le mot de passe :
//                 <input type="password" required />
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="name-birthday-container">
//           <h1>Dites-nous en plus à propos de vous !</h1>
//           <div className="all-second-input">
//             <div className="firstname-input">
//               <label> Prénom :
//                 <input type="text" placeholder="John" required />
//               </label>
//             </div>
//             <div className="lastname-input">
//               <label>Nom :
//                 <input type="text" placeholder="Doe" required />
//               </label>
//             </div>
//             <div className="birthday-input">
//               <label>Date de naissance :
//                 <input type="date" min="1900-01-01" max="2005-07-27" required pattern="\d{4}-\d{2}-\d{2}" />
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="address-container">
//           <h1>N'oubliez pas votre adresse postale</h1>
//           <div className="all-fourth-input">
//             <div className="number-way-input">
//               <label>N° de voirie :
//                 <input type="number" placeholder="32" required />
//               </label>
//             </div>
//             <div className="type-way-input">
//               <label>Type de voirie :
//                 <input type="text" placeholder="Rue, Boulevard ..." required />
//               </label>
//             </div>
//             <div className="name-way-input">
//               <label>Nom de la voirie :
//                 <input type="text" placeholder="Henry de la Mouette ..." required />
//               </label>
//             </div>
//             <div className="region-input">
//               <label>Région :
//                 <input type="text" placeholder="Île de France ..." required />
//               </label>
//             </div>
//             <div className="department-input">
//               <label>Département :
//                 <input type="text" placeholder="Val-de-Marne ..." required />
//               </label>
//             </div>
//             <div className="city-input">
//               <label>Ville :
//                 <input type="text" placeholder="Paris ..." required />
//               </label>
//             </div>
//             <div className="postal-code-input">
//               <label>Code postal :
//                 <input type="number" placeholder="94220 ..." required />
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="contract-check-container">
//           <h1>Que cherchez-vous sur notre plateforme ?</h1>
//           <div className="all-fifth-input">
//             <div className="cdi-input">
//               <input type="checkbox" value="contract" />
//               <label>CDI</label>
//             </div>
//             <div className="cdd-input">
//               <input type="checkbox" value="contract" />
//               <label>CDD</label>
//             </div>
//             <div className="interim-input">
//               <input type="checkbox" value="contract" />
//               <label>INTERIM</label>
//             </div>
//             <div className="alternance-input">
//               <input type="checkbox" value="contract" />
//               <label>ALTERNANCE</label>
//             </div>
//             <div className="stage-input">
//               <input type="checkbox" value="contract" />
//               <label>STAGE</label>
//             </div>
//             <div className="other-input">
//               <input type="checkbox" value="contract" />
//               <label>AUTRE ...</label>
//             </div>
//           </div>
//         </div>

//         <div className="rgpd-check-container">
//           <h1>Dernière étape !</h1>
//           <div className="sixth-input">
//             <div className="rgpd-input">
//               <input type="checkbox" value="rgpd" required />
//               <label>En soumettant ce formulaire, vous consentez à ce que vos données
//                 personnelles soient traitées conformément au Règlement général sur
//                 la protection des données (RGPD). Vos informations seront
//                 utilisées dans le but de traiter votre candidature à des offres
//                 d'emploi et faciliter le processus de recrutement. Veuillez
//                 consulter notre politique de confidentialité pour plus
//                 d'informations sur la manière dont nous protégeons et utilisons
//                 vos données.</label>
//             </div>
//             <div className="btn-inscription-final">
//               <button type="submit" className="btn-inscription">
//                 VALIDER
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
