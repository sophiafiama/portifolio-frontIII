/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss'

export default function NavBar() {
  return (
    <>

      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sophia Fiama</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#abaut">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projetos">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contatos">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    


    </>
  )
}