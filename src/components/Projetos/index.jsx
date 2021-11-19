import ipiList from '../../assets/API'
import Card from './Card'
import './style.scss'


export default function Projetos() {

  return (
    <>
      <div className="div-projetos" id="projetos">
        <h2>Projetos</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4 bg" >
          {
            ipiList.map(({id,img,title,description})=>{
              return(
                <>
                <Card img={img} title={title} description={description} />
                </>
              )             
            })
          }
        </div>
      </div>
    </>
  )
}