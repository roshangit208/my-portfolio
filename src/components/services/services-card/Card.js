import "./Card.css"
// import Img from "../assets/mern-img.png"

export default function Card({service}) {
  return (
    <>
    <div className="col col-lg-4 col-md-12  col-sm-6">
    <figure>
          <img src={service.serviceimg} alt="Mountains" />
          <figcaption>
            <div className="card-title"><h5>{service.servicename}</h5>
            </div>
            <div className="card-content">
            <span>{service.servicedesc}</span>
            </div>
          </figcaption>
        </figure>
    </div>
        
    </>
  )
}
