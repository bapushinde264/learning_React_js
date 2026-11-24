function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-0">

        {/* <a className="navbar-brand" href="#">
          My Website
        </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer">Footer</a>
            </li>

          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Header;