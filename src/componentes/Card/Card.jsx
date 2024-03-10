
import {FaStar} from "react-icons/fa"
import './Card.css'


const Card = ({filme, mostraLink = true}) => {
    return (
        <div className="card_filme">
            <img  src={ filme.image.medium}  alt={filme.name}></img>
            <h3 className="titulo">{filme.name}</h3>
            <p className="rating">
                <FaStar /> {filme.rating.average}
            </p>
            
            <p className="sinopse">
                {filme.summary}
            </p>
        </div>
    )
}

export default Card