import './style.scss'
import { GoMarkGithub} from "react-icons/go"
import { SiLinkedin } from "react-icons/si"
import { AiOutlineMail } from 'react-icons/ai';

export default function Projetos() {
  return (
    <>
      <div className="container" id="contatos">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              Sophia Fiama
            </a>
            <span className="text-muted">© 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted icon-footer" href="https://github.com/sophiafiama"><GoMarkGithub/> </a></li>
            <li className="ms-3"><a className="text-muted icon-footer" href="https://www.linkedin.com/in/sophiafiama/"><SiLinkedin/></a></li>
            <li className="ms-3"><a className="text-muted icon-footer" href="tomail:fiama.sophia.sf@gmail.com"><AiOutlineMail/></a></li>
          </ul>
        </footer>
      </div>

    </>
  )
}