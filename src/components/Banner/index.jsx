
import './style.scss'
import imagem from './img-port.png'

export default function Banner() {
  return (
    <>

      <section>

        <div className="row flex-lg-row-reverse align-items-center banner" >

          <div className="col-10 col-sm-8 col-lg-6 div-item">
            <img src={imagem} className="d-block mx-lg-auto  " alt="img-portifolio" loading="lazy"></img>
          </div>

          <div className="col-lg-6 div-item tittle">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-light ">Sophia Fiama</h1>
            <p className="lead text-light">Desenvolvedora Full Stack</p>
            <button className="btn btn-outline-light" type="button">Projetos</button>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

