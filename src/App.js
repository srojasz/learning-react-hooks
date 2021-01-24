import "./App.scss";
import { Fragment } from "react";
import Header from './components/Header';

import Finder from './components/Finder';

function App() {
  
  return (
      <Fragment>
          <div className="app__container">
              <Header />
              <Finder />                
          </div>
      </Fragment>
  )
  
}  

export default App;
