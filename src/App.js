import {Helmet} from "react-helmet";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Home from "./Component/Home/Home";

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
              </Switch>
              <Footer />
            </Router>
    </div>
  );
}

export default App;
