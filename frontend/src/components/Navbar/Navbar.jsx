import logo from "../../images/logo.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavBarStyled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <InputSpace className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
};

export default Navbar;

