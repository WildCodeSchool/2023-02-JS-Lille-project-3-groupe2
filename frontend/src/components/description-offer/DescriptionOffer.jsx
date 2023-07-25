import "./DescriptionOffer.scss";
import { FiMapPin } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import PropTypes from "prop-types";

export default function DescriptionOffer({ role }) {
  return (
    <div
      className={
        role === "default"
          ? ""
          : role === "enterprise" && "role_descriptionOffer_enterprise"
      }
    >
      <div className="container-offer-page">
        <div className="header-offer-page">
          <div className="title-head-offer">
            <h1>Développeur Web FullStack</h1>
            <h3>
              <span>
                <FiMapPin />
              </span>{" "}
              Situé à Lille
            </h3>
            <h3>
              <span>
                <IoSchoolOutline />
              </span>{" "}
              ≥ 3 ans d'expérience
            </h3>
          </div>
          <div className="img-offer-page">
            <img src="./src/assets/durable.jpg" alt="" />
          </div>
        </div>
        <div className="description-offer-page">
          <h2>Description du poste :</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisis libero at dolor tincidunt consectetur. Proin eleifend
            blandit tellus sed dictum. Nulla facilisi. Nulla sollicitudin, eros
            ac lobortis congue, tellus arcu elementum felis, fermentum aliquam
            dui nisl quis sapien. Nullam augue ante, convallis quis eros tempus,
            placerat egestas ante. Nunc convallis neque eget ipsum rutrum
            placerat. Vestibulum vestibulum libero non turpis blandit, vel
            luctus dui bibendum. Pellentesque elementum nulla finibus, malesuada
            diam quis, imperdiet purus.
          </p>

          <p>
            Nulla dictum lacus sem, vel blandit neque tincidunt sit amet. Morbi
            nec ornare quam, et rhoncus elit. Nulla pretium ante quis purus
            condimentum, at hendrerit mi tempus. Nulla urna sem, molestie
            efficitur ullamcorper vel, fringilla a velit. Curabitur viverra
            dolor ut nibh ullamcorper faucibus. Duis maximus euismod vehicula.
            Praesent nibh magna, interdum a turpis a, pretium lacinia libero.
            Vestibulum ultricies iaculis quam ac rhoncus. Mauris lectus leo,
            volutpat ac neque in, molestie scelerisque lorem. Quisque congue
            odio non libero tincidunt, et tempus nisi vestibulum. Duis vehicula
            sodales leo id suscipit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris ac dolor
            tincidunt, elementum justo ut, feugiat nulla. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Pellentesque nec semper massa, in consectetur elit.
          </p>
        </div>
      </div>
    </div>
  );
}

DescriptionOffer.propTypes = {
  role: PropTypes.string.isRequired,
};
