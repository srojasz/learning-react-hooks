import {Link} from 'react-router-dom';

export default function GifDetail(props) {
    const {imgUrl, title, id} = props;
    return (
        <Link to={id} className="card-container">
            <img alt={title} src={imgUrl}></img>
            <p>{title}</p>
        </Link>
    
    )
    }