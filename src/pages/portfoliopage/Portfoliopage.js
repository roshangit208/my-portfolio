import "./Portfoliopage.css";
import Navbar from '../../components/navbar/Navbar';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact-me/Contact';
import Footer from '../../components/footer/Footer';

export default function Portfoliopage() {
  return (
    <>
        <Navbar/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}
