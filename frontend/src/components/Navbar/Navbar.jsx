import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </div>

        {/* <img src={logo} alt="Logo do Breaking News" /> */}

        <button>Entrar</button>
      </nav>
    </>
  )
}

export default Navbar