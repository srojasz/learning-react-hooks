import "./App.css";
import { Fragment } from "react";


import Finder from './components/Finder';

function App() {
  
  return (
      <Fragment>
          <div className="app-container">
              <h2>Buscador de gifs</h2>
              <Finder />                
          </div>
      </Fragment>
  )
  
}  

export default App;
