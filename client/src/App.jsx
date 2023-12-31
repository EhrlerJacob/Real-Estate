import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./components/NotFound";
import Layout from "./hocs/Layout"

import { Provider } from "react-redux";
import store from "./store";


import './sass/main.scss';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/listings" Component={Listings}/>
          <Route exact path="/listings/:id" Component={ListingDetail}/>
          <Route exact path="/login" Component={Login}/>
          <Route exact path="/register" Component={Register}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>

);

export default App
