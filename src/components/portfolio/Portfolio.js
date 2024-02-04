import "./Portfolio.css";
import Card from "./portfolio-card/Card";
import {Cards} from "../../data";

export default function Portfolio() {
  return (
    <> 
      <div className="container ">
       
      <div className="portfolio-wrapper " id="portfolio">
           <div className="portfolio-header" >
             <h6>&lt; PORTFOLIO&#47;&gt;</h6>
           </div>

           <div className="portfolio-content" >

          
        <div className="row justify-content-evenly">  
        <Card key={Cards[0].id} card={Cards[0]} />  
        </div>  
        <div className="row justify-content-evenly flex-row-reverse ">   
        <Card key={Cards[1].id} card={Cards[1]} />  
        </div> 
        <div className="row justify-content-evenly ">   
        <Card key={Cards[2].id} card={Cards[2]} />  
        </div>  
        <div className="row justify-content-evenly flex-row-reverse ">  
        <Card key={Cards[3].id} card={Cards[3]} />   
        </div> 
          </div>
       </div>

      </div>
       
    </>
  )
}
