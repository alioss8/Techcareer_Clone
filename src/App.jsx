
import Header from "./components/header";
import Signup from "./components/Signup";
import Events from "./components/events";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootcamp from "./components/bootcamp";
import Jobposting from "./components/jobposting";
import Education from "./components/education";
import Test from "./components/tests";
import MyCarousel from "./components/carousel";
import Blog from "./components/Blog_Cards";
import  CardCarousel from "./components/Reference";
function App() {
  

  return (
    <div>
      <Header />
      <Signup/>
      <Events/>
      <Bootcamp></Bootcamp>
      <Jobposting></Jobposting>
      <Education></Education>
      <Test></Test>
      <MyCarousel></MyCarousel>
      <Blog></Blog>
      <CardCarousel></CardCarousel>
    
    </div>
  )
}

export default App
