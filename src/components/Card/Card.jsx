import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import './Card.css'

const Card = ({ movie }) => {
    const year = movie.premiered ? movie.premiered.split('-')[0] : null
    const image = movie.image && movie.image.medium ? movie.image.medium : null // api nem sempre retorna imagem

    return (
        <Link to={`/movie/${movie.id}`} className="card">
            <div className="card_poster">
                {image
                    ? <img src={image} alt={movie.name} />
                    : <div className="card_sem_imagem" />
                }
            </div>
            <div className="card_info">
                <p className="card_nome">{movie.name}</p>
                <div className="card_sub">
                    {movie.rating && movie.rating.average && (
                        <span className="card_rating">
                            <FaStar /> {movie.rating.average}
                        </span>
                    )}
                    {year && <span>{year}</span>}
                </div>
            </div>
        </Link>
    )
}

export default Card
