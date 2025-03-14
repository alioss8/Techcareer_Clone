import Header from "../components/header";
import Signup from "../components/Signup";
import Events from "../components/events";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootcamp from "../components/bootcamp";
import Jobposting from "../components/jobposting";
import Education from "../components/education";
import Test from "../components/tests";
import SampleSlider from "../components/carousel";
import Blog from "../components/Blog_Cards";
import  CardCarousel from "../components/Reference";
import  RefLogo from "../components/RefLogo";
import  Commets from "../components/Commets";
import  Footer from "../components/Footer";

function Homepage() {
return (
    <div>
        <Header />
    <Signup/>
      <Events/>
      <Bootcamp></Bootcamp>
      <Jobposting></Jobposting>
      <Education></Education>
      <Test></Test>
      <SampleSlider></SampleSlider>
      <Blog></Blog>
      <CardCarousel></CardCarousel>
      <RefLogo></RefLogo>
      <Commets></Commets>
      <Footer></Footer>
    </div>
)
}

export default Homepage