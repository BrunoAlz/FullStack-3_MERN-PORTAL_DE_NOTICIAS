import "./Navbar.css";
import logo from "../../images/logo.png";
import styled from "styled-components";

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

const Button = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  font-weight: 500;
  
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;
