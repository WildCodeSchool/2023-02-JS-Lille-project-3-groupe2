import React from "react";
import technologie from "../../assets/technologies.jpeg";
import managementMarketing from "../../assets/management-marketing.jpeg";
import dataPhoto from "../../assets/data.jpeg";
import ressourcesHumaines from "../../assets/ressource-humaine.png";
import "./OurJobDescriptions.scss";

function OurJobDescriptions() {
  const jobsManagmentMarketing = [
    "DSI – Directeur du Système d’Informations",
    "Directeur / chef de projet",
    "Directeur technique / CTO",
    "Responsable de la Sécurité du Système Informatique (RSSI)",
    "Directeur Marketing (CMO)",
    "Service Delivery Manager (SDM)",
    "Customer Success Manager (CSM)",
  ];
  const jobsTechnologie = [
    "Développeur Back End",
    "Développeur Front End",
    "Développeur Full Stack",
    "DevOps",
    "Lead technique",
    "Architecte Infrastructure",
    "Scrum master",
    "Product owner",
    "Product Manager",
    "Ingénieur Test",
    "UX / UI designer",
  ];
  return (
    <div className="our-job-descriptions">
      <div className="ourJobTitleContainer">
        <h1 className="ourJobMainTitle">Nos listes métiers</h1>
      </div>

      <div className="ourJobFirstContainer">
        <h2 className="ourJobH2"> - Les métiers de l’informatique :</h2>
        <br />
        <p>
          cette expression souvent employée est très généraliste et vise en
          réalité plusieurs secteurs de recrutement ainsi qu’un panel très varié
          de métiers et de compétences. Lorsque l’on parle des métiers de
          l’informatique, il s’agit donc de désigner l’univers numérique au sens
          large.
        </p>
        <br />
        <p>
          Aussi, on peut exercer un métier de l’informatique dans différents
          secteurs d’activités (e-commerce, e-santé, environnement, logistique,
          banque, assurance, économie circulaire…) sur différentes fonctions qui
          vont du technicien support en passant par le développement à la
          gestion de projet et le management.
        </p>
        <br />
        <p>
          Mais alors, quels sont les différents métiers de l’informatique ?{" "}
          <br />
          <br />
          Quels sont ceux qui ont le plus d’avenir et vers lesquels s’orienter ?
        </p>
        <br />
      </div>
      <div className="ourJobSecondTextContainer">
        <h2 className="ourJobH2">
          - Quels sont les métiers d’avenir en informatique ?
        </h2>
        <br />
        <p>
          L’informatique est un secteur très dynamique sur le marché de
          l’emploi, il s’étend à de très nombreux domaines d’activité et
          continue à progresser dans des secteurs comme la santé et l’éducation,
          mais aussi les transports, la finance ainsi que la production
          industrielle. Les compétences informatiques prennent de plus en plus
          d’importance dans nos sociétés et les métiers liés à la virtualisation
          des systèmes ou encore à l’informatique décisionnelle ont de beaux
          jours devant eux.
        </p>
        <br />
        <p>
          Parmi les métiers les plus souvent cités dans le futur du secteur
          informatique, citons l’incontournable développeur (full stack, front
          end, d’applications, etc.). Les ingénieurs logiciels figurent eux
          aussi en tête des profils les plus recherchés. Dans les années à
          venir, on recherchera également de plus en plus d’ingénieurs big data.
          Parce que l’informatique touche d’année en année davantage de secteurs
          d’activité, la sécurité tend à jouer un rôle de plus en plus important
          : ainsi l’ingénieur en cyber-sécurité occupera progressivement un
          poste indispensable pour garantir la sécurité des systèmes
          d’information.
        </p>
        <br />
        <p>
          Citons également l’ingénieur en intelligence artificielle,
          l’architecte informatique ou encore l’ingénieur DevOps.
        </p>
      </div>
      <br />
      <div className="ourJobThirdTextContainer">
        <h2 className="ourJobH2">
          - Comment choisir son futur métier dans l’informatique ?
        </h2>
        <br />
        <p>
          Il existe plusieurs voies de formation pour accéder à un métier de
          l’informatique : bac +2, bac+5, BTS, DUT, licences ou encore écoles.
          Les formations les plus courtes correspondent à des DUT ou à des BTS
          en informatique, citons le BTS Systèmes numériques option informatique
          et réseau ou encore le BTS Services Informatiques et Organisations,
          mais aussi le DUT Génie Électrique et Informatique industrielle. Il
          existe également des licences générales ou professionnelles : la
          licence professionnelle mène à une alternance, la licence générale
          mène à un master de type Méthodes Informatiques Appliquées à la
          Gestion des Entreprises.
        </p>
        <br />
        <p>
          Les écoles d’ingénieurs sont les formations les plus recherchées pour
          accéder aux métiers de l’informatique. Elles sont accessibles en post
          bac ou après une année de classe préparatoire et offrent la
          possibilité d’accéder à plus de 100 diplômes différents liés aux
          métiers de l’informatique et reconnus par la Commission des titres
          d’ingénieur.Si une reconversion professionnelle est tout à fait
          envisageable, accéder à un métier de l’informatique demande souvent de
          repasser par la case formation. Aussi, n’hésitez pas à en parler
          autour de vous et à participer à des salons dédiés à ces métiers. Vous
          pouvez également consulter les différentes fiches métiers que nous
          mettons à disposition sur Externatic.
        </p>
      </div>
      <br />
      <br />
      <div className="container-job-description">
        <div className="container-img-list">
          <img src={technologie} alt="ordinateur" />
          <div className="data-job">
            <h3>TECHNOLOGIES</h3> <br />
            <div className="data-job-ul">
              <ul>
                {jobsTechnologie.map((jobTechnologie) => (
                  <li>{jobTechnologie}</li>
                ))}
              </ul>
            </div>
          </div>
          <br />
        </div>

        <div className="container-img-list">
          <div className="data-job">
            <h3>MANAGEMENT / MARKETING</h3>
            <br />
            <div className="data-job-ul">
              <ul>
                {jobsManagmentMarketing.map((jobManagmentMarketing) => (
                  <li>{jobManagmentMarketing}</li>
                ))}
              </ul>
            </div>
          </div>
          <img src={managementMarketing} alt="bureau" />
        </div>

        <div className="container-img-list">
          <img src={dataPhoto} alt="data-code" />
          <div className="data-job">
            <h3>DATA</h3>
            <br />
            <div className="data-job-ul">
              <ul>
                <li>Data Architect</li>
                <li>Data Engineer</li>
                <li>Data Analyst</li>
                <li>Data Scientist</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-img-list">
          <div className="data-job">
            <h3>RESSOURCES HUMAINES</h3>
            <br />
            <div className="data-job-ul">
              <ul>
                <li>Consultant en recrutement IT </li>
                <li>Recruteur tech</li>
              </ul>
            </div>
          </div>

          <img src={ressourcesHumaines} alt="ressources-humaines" />
        </div>
      </div>
    </div>
  );
}

export default OurJobDescriptions;
