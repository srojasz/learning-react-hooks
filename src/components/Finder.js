import { useState, Fragment } from "react";
import fetchGifs from "../services/fetchGifs";
import ListOfGifs from "./ListOfGifs";


export default function Finder() {
    const [gifs, setGifs] = useState([]);

    console.log(gifs, 'gifs')

    function getGifsbyValue(ev) {
        const keyword = ev.target.value;
        fetchGifs(keyword).then(setGifs);
    }
    
  

//   useEffect(() => {
//     fetchGifs("panda").then(setGifs);
//   })

if (gifs.length === 0) {
    return (
        <div>
            <input onChange={getGifsbyValue} type="text" placeholder="¿Qué gifs te gustaría encontrar hoy"></input>
            <p className="text-center">
                ¿A qué esperas para buscar?
            </p>
        </div>
    )
} else {
    return (
        <Fragment>
            <div className="container">
                <input onChange={getGifsbyValue} type="text" placeholder="¿Qué gifs te gustaría encontrar hoy"></input>
                <div className="list-container">
                    <ListOfGifs gifs= {gifs} />     
                </div>       
            </div>
        </Fragment>
    )

}

    
}