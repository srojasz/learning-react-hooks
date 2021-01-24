import { useState, Fragment } from "react";
import fetchGifs from "../services/fetchGifs";
import ListOfGifs from "./ListOfGifs";
import Favourites from './Favourites';

export default function Finder() {
	const [gifs, setGifs] = useState([]);
	const [favourites, setFavourites] = useState([]);

	console.log(favourites)

    function getGifsbyValue(ev) {
        const keyword = ev.target.value;
        fetchGifs(keyword).then(setGifs);
    }
    
    function setNewKeyword(ev) {
        const keyword = ev.target.id;
        fetchGifs(keyword).then(setGifs);
	}
	
	function setNewFavourites(gif) {
		setFavourites(
			...favourites,
			gif
		);
	}

    if (gifs.length === 0) {
		return (
            <div className="finder">
	        	<form> 
	                <input className="finder__input" onChange={getGifsbyValue} type="text" placeholder="¿Qué gifs te gustaría encontrar hoy?"/>
	                <div className="finder-no-idea">
	                    <p className="finder__text">
	                       ¿No sabes por dónde empezar?
	                    </p>
	                    <div className="finder__recommendations">
	                       <input onClick={setNewKeyword} id="cats" type="radio" name="surprise-me"/>
	                       <label htmlFor="cats">Gatitos' style</label>
	                       <input onClick={setNewKeyword} id="pandas" type="radio" name="surprise-me"/>
	                       <label htmlFor="pandas">Panda's mood</label>
	                       <input onClick={setNewKeyword} id="dogs" type="radio" name="surprise-me"/>
	                       <label htmlFor="dogs">Dog life</label>
	                    </div>
	                </div>
	            </form>
	        </div>
		)
	} else {
		return (
	        <Fragment>
	            <div className="container">
	                <div className="finder">
	                    <form> 
	                        <input className="finder__input" onChange={getGifsbyValue} type="text" placeholder="¿Qué gifs te gustaría encontrar hoy?"/>
	                    </form>
	                </div>
	                <div className="list-container">
	                    <ListOfGifs setNewFavourites={setNewFavourites} gifs= {gifs} />
						 <Favourites favourites={favourites}/>        
	                </div>       
	            </div>
	        </Fragment>
		 )   
	} 
}