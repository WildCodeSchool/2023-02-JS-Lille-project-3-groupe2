import "./ModifySection.scss";
import React, { useState } from "react";

export default function ModifySection() {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const sectionContents = {
    "Vos Identifiants": (
      <div>
        <h2>Je suis l'option 1</h2>
        <p>Ceci est un paragraphe pour l'option 1</p>
        <p>Vous pouvez ajouter autant de contenu que vous le souhaitez ici.</p>
      </div>
    ),
    "Votre Profil": (
      <div>
        <h2>Je suis l'option 2</h2>
        <p>Ceci est un paragraphe pour l'option 2</p>
        <p>Plus de contenu pour l'option 2.</p>
      </div>
    ),
    "Votre Adresse": (
      <div>
        <h2>Je suis l'option 3</h2>
        <p>Ceci est un paragraphe pour l'option 3</p>
        <p>Contenu supplémentaire pour l'option 3.</p>
      </div>
    ),
    "Vos Recherches Emploi": (
      <div>
        <h2>Je suis l'option 4</h2>
        <p>Ceci est un paragraphe pour l'option 4</p>
        <p>Contenu personnalisé pour l'option 4.</p>
      </div>
    ),
  };

  return (
    <div>
      <h2>Que souhaitez-vous modifier ?</h2>
      <select value={selectedSection} onChange={handleSectionChange}>
        <option value="">Choisissez une section à modifier :</option>
        <option value="Vos Identifiants">Vos Identifiants</option>
        <option value="Votre Profil">Votre Profil</option>
        <option value="Votre Adresse">Votre Adresse</option>
        <option value="Vos Recherches Emploi">Vos Recherches d'emploi</option>
      </select>
      {sectionContents[selectedSection]}
      {selectedSection && <p>Vous êtes dans : {selectedSection}</p>}
    </div>
  );
}
