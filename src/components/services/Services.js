import "./Services.css";
import Card from "./services-card/Card";
import { Service } from "../../data";


export default function Services() {
  return (
    <>
        <div className="container ">
       
       <div className="services-wrapper "id="services">
            <div className="services-header" >
              <h6>&lt; SERVICES&#47;&gt;</h6>
            </div>
 
            <div className="services-content" >
 
           
         <div className="row justify-content-evenly">
         { Service.map((s)=>(<Card key={s.id} service ={s}/>))}
         </div>  
           </div>
        </div>
 
       </div>
        
    </>
  )
}
