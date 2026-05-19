import { useParams, Link } from 'react-router-dom'
import { FaStar, FaArrowLeft } from 'react-icons/fa'
import useFetch from '../../hooks/useFetch'
import { API_BASE } from '../../config'
import { stripHtml } from '../../utils/stripHtml'
import './Movie.css'

const Movie = () => {
    const { id } = useParams()
    const { data: show, loading, error } = useFetch(`${API_BASE}/shows/${id}`)

    if (loading) return <p className="movie_status">Carregando...</p>
    if (error || !show) return <p className="movie_status">Série não encontrada.</p>

    const year = show.premiered?.split('-')[0]

    return (
        <div className="movie">
            <div className="movie_top">
                <div className="movie_poster_col">
                    {show.image?.medium && (
                        <img
                            className="movie_poster"
                            src={show.image.medium}
                            alt={show.name}
                        />
                    )}
                </div>

                <div className="movie_info_col">
                    <Link to="/" className="movie_back">
                        <FaArrowLeft /> Voltar
                    </Link>

                    <div>
                        <h1 className="movie_title">{show.name}</h1>

                        <div className="movie_meta">
                            {show.rating?.average && (
                                <span className="movie_rating">
                                    <FaStar /> {show.rating.average}
                                </span>
                            )}
                            {year && <span>{year}</span>}
                            {show.status && (
                                <span className={`movie_status_badge${show.status === 'Running' ? ' active' : ''}`}>
                                    {show.status === 'Running' ? 'Em exibição' : 'Encerrado'}
                                </span>
                            )}
                        </div>

                        {show.genres?.length > 0 && (
                            <div className="movie_genres">
                                {show.genres.map(g => <span key={g}>{g}</span>)}
                            </div>
                        )}

                        {show.summary && (
                            <p className="movie_synopsis">{stripHtml(show.summary)}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="movie_footer">
                {show.network?.name && (
                    <div className="movie_detail">
                        <span className="detail_label">Rede</span>
                        <span className="detail_value">{show.network.name}</span>
                    </div>
                )}
                {show.language && (
                    <div className="movie_detail">
                        <span className="detail_label">Idioma</span>
                        <span className="detail_value">{show.language}</span>
                    </div>
                )}
                {show.premiered && (
                    <div className="movie_detail">
                        <span className="detail_label">Estreia</span>
                        <span className="detail_value">{show.premiered}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Movie
