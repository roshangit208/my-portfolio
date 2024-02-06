import "./Profile.css";
import Img from "./assets/profilepic4.png"

export default function Profile() {
  return (
    <div>

      <div className="container">
        <div className="row  justify-content-evenly" >
          <div className="col-lg-6 col-md-6" >
            <div className="heading-area">

              <div className="small-heading" >
                <h4>I'm a</h4>
              </div>
              <div className="big-heading" >
                <h1>Full Stack Web Developer.</h1>
              </div>
              <button type="button" className="btn btn-dark btn-lg"> <a href="#contact"> Contact Me </a> </button>
            
            </div>
          </div>
          <div className="col-lg-5 col-md-5" >
            <div className="img-area">
              <svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(246.213, 200.689, 0, 1)" offset="0%"/>
                            <stop id="stop2" stop-color="rgba(251, 113.442, 31, 1)" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <mask id="mask1" mask-type = "alpha" >
                    <path  className="svg-path" fill="url(#sw-gradient)" d="M27.1,-31.6C35.2,-25.5,41.8,-17,42.3,-8.4C42.8,0.3,37,9.2,31.6,17.9C26.1,26.6,21,35.1,14.4,35.9C7.9,36.7,-0.2,29.6,-9.9,26.4C-19.6,23.2,-30.9,23.8,-35.6,18.9C-40.3,14.1,-38.3,3.8,-32.9,-2.2C-27.6,-8.2,-18.8,-10.1,-12.7,-16.5C-6.6,-23,-3.3,-34,3.1,-37.7C9.5,-41.4,19,-37.7,27.1,-31.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" />

                    </mask>
                    <g mask="url(#mask1)">
              
                <path  className="svg-path" fill="url(#sw-gradient)" d="M27.1,-31.6C35.2,-25.5,41.8,-17,42.3,-8.4C42.8,0.3,37,9.2,31.6,17.9C26.1,26.6,21,35.1,14.4,35.9C7.9,36.7,-0.2,29.6,-9.9,26.4C-19.6,23.2,-30.9,23.8,-35.6,18.9C-40.3,14.1,-38.3,3.8,-32.9,-2.2C-27.6,-8.2,-18.8,-10.1,-12.7,-16.5C-6.6,-23,-3.3,-34,3.1,-37.7C9.5,-41.4,19,-37.7,27.1,-31.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" />
               {/* <image className="profile-pic"  x={16}  y={12} xlinkHref={Img} />  */}
               <image
         mask="url(#mask1)"
         preserveAspectRatio="xMidYMid meet" x="-2" y="8"
         xlinkHref={Img}
         width="120%" height="120%" />            
                </g>
              </svg>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
