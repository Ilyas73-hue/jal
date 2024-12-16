import {Helmet} from "react-helmet";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import WhyChooseus from "./Component/Whychooseus/WhyChooseus";
import Admission from "./Component/Admission/Admission";
import Contact from "./Component/Contact/Contact";
import Gallery from "./Component/Gallery/Gallery";

function App() {
  return (
    <div className="App">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Jal_Neet_Academy</title>
            </Helmet>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about_us" component={About} />
                <Route exact path="/why_choose_us" component={WhyChooseus} />
                <Route exact path="/admission" component={Admission} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/gallery" component={Gallery} />
              </Switch>
              <Footer />
            </Router>
    </div>
  );
}

export default App;
