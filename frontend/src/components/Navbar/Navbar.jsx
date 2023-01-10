import "./Navbar.css";
import logo from "../../images/logo.png";
import { Button } from "./NavBarStyled";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </div>

        <img src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </nav>
    </>
  );
};

export default Navbar;

