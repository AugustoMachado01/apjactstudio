import { Link } from "react-scroll";

import "./style.module.css";
import Image from "../assets/Logo.png";

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <img src={Image} alt="Logo" />
        {/* <h1>GRAPHER SHOT.</h1> */}
      </div>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Testemunhas
          </Link>
        </li>
        <li>
          <Link to="pricelist" smooth={true} duration={500}>
            Lista de preços
          </Link>
        </li>
        <li>
          <Link to="pricelist" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
