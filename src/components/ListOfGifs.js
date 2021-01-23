import { Fragment } from "react";
import GifCard from './GifCard';
import {Switch, Route} from 'react-router-dom';
import GifDetail from "./GifDetail";

export default function ListOfGifs(props) {
    const {gifs} = props;

    if (gifs.length === 0 ) {
        return <p>Lo sentimos, no hemos encontrado resultados de búsqueda</p>
    } else {
        return (
        <Fragment>
        {
            gifs.map(gif => {
               const {id, title, url} = gif;
               
                return ( 
                <Switch>
                    <Route exact path="/">
                        <GifCard key={id} imgUrl={url} title={title} />
                    </Route>
                    <Route path={id}>
                        <GifDetail key={id} imgUrl={url} title={title} />
                    </Route>

                </Switch>
                )
            })
        }
        </Fragment>
        )
    }

}


// gifs.map(image => {
//                 return <img src={image}></img>
//             })