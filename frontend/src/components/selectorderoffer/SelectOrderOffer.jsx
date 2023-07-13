import "./SelectOrderOffer.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function SelectOrderOffer() {
  const contracts = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Alternance", label: "Alternance" },
    { value: "Stage", label: "Stage" },
  ];
  const sorting = [
    { value: "Les plus récents", label: "Les plus récents" },
    { value: "Les moins récents", label: "Les plus anciens" },
    { value: "Salaire", label: "Salaire" },
    { value: "Favoris d'abord", label: "Favoris d'abord" },
  ];
  return (
    <div className="SelectOrderOfferContainer">
      <div className="SelectOfferContainer">
        <span>Type de contrat</span>
        <Select
          defaultValue="true"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={contracts}
        />
      </div>
      <div className="SelectOfferContainer">
        <span>Trier Par </span>{" "}
        <Select
          defaultValue="true"
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={sorting}
        />
      </div>
    </div>
  );
}
