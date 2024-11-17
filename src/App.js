import AboutUs from "./AboutUs";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import "./styles.css";
import Testimonials from "./Testimonials";
import WhyMe from "./WhyMe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <Portfolio />
      <WhyMe />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
