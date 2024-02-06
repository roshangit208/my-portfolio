import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/profile/Profile';
import Portfolio from '../../components/portfolio/Portfolio';
import Aboutme from '../../components/about-me/Aboutme';
import Services from '../../components/services/Services';
import Toolsandtech from '../../components/toolsandtech/Toolsandtech';
import Contact from '../../components/contact-me/Contact';
import Footer from '../../components/footer/Footer';
export default function Home() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <Aboutme/>
    <Services/>
    <Portfolio/>
    <Toolsandtech/>
    <Contact/>
    <Footer/>
    </>
  )
}
