import "./DescriptionOffer.scss";
import { FiMapPin } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

export default function DescriptionOffer() {
  return (
    <div className="container-offer-page">
      <div className="header-offer-page">
        <div className="title-head-offer">
          <h1>Développeur Web FullStack</h1>
          <h3>
            <FiMapPin /> Situé à Lille
          </h3>
          <h3>
            <IoSchoolOutline /> ≥ 3 ans d'expérience
          </h3>
        </div>
        <div className="img-offer-page">
          <img src="./src/assets/durable.jpg" alt="" />
        </div>
      </div>
      <div className="description-offer-page">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis
          libero at dolor tincidunt consectetur. Proin eleifend blandit tellus
          sed dictum. Nulla facilisi. Nulla sollicitudin, eros ac lobortis
          congue, tellus arcu elementum felis, fermentum aliquam dui nisl quis
          sapien. Nullam augue ante, convallis quis eros tempus, placerat
          egestas ante. Nunc convallis neque eget ipsum rutrum placerat.
          Vestibulum vestibulum libero non turpis blandit, vel luctus dui
          bibendum. Pellentesque elementum nulla finibus, malesuada diam quis,
          imperdiet purus.
        </p>
      </div>
    </div>
  );
}
