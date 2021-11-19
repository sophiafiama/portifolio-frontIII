import './style.scss'
import frontimg from '../../assets/icons/frot-icon.png'
import backendimg from '../../assets/icons/backend-icon.png'
import ideaimg from '../../assets/icons/idea-icon.png'
import infraimg from '../../assets/icons/infra-icon.png'

export default function Skills() {
  return (
    <>
      
      <div className="div-Skills" >
      <h2 id="skills">Skills</h2>
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img src={frontimg} className="card-img-style" alt="front-img"></img>
              <div className="card-body">
                <h5 className="card-title">Front-end</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={backendimg} className="card-img-style" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Back-end</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={infraimg} className="card-img-style" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Infraestrutura</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ideaimg} className="card-img-style" alt="idea-icon"></img>
              <div className="card-body">
                <h5 className="card-title">Soft Skills</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}