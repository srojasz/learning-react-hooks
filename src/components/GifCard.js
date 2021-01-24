import {Link} from 'react-router-dom';

export default function GifCard(props) {
    const {id, title, imgUrl, setNewFavourites} = props;
    function addFav(gif) {
        // if (id === gif) {
        //     setNewFavourites(gif);
        // }
    }

    return (
        <a id={id} className="card-container" onClick={() => addFav(id)}>
            <img alt={title} src={imgUrl}></img>
            <p>{title}</p>
        </a>
    
    )
    }