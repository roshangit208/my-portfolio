import "./Card.css";



export default function Card({card}) {

  
 


  return (
    <>

      <div className=" col col-lg-4 col-md-8 col-sm-12 col-xs-12 card card-image cust-img shadow-lg p-3 mb-5 " style = {{ backgroundImage : `url(${card.projectimg})` }} >

        <div className=" text-center d-flex align-items-center rgba-black-strong py-5 px-4 project-desc ">
          <div>
            {/* <h5 className="pink-text"><i class="fas fa-chart-pie"></i> Tindog website </h5> */}
            {/* <h3 class="card-title pt-2"><strong></strong></h3> */}
            {/* <p>A single-page website created using  CSS Framework Bootstrap container , carousel , btn component</p> */}
            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
          </div>
        </div>

      </div>

      <div className="col col-lg-5 col-md-8 col-sm-12 col-xs-12">
         <div className="card-detail-wrapper">
            <div className="project-title"> <h6>{ card.projectname} </h6> </div>
            <div className="project-content"> 
             <p>{card.desc}</p>
            </div>
         </div>

      </div>


    </>
  )
}
