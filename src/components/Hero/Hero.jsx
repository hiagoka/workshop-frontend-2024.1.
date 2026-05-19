import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { stripHtml } from '../../utils/stripHtml'
import './Hero.css'

const HERO_COUNT = 5

const Hero = ({ movies }) => {
    const [heroIdx, setHeroIdx] = useState(0)
    const current = movies[heroIdx]

    useEffect(() => {
        const t = setInterval(() => setHeroIdx(i => (i + 1) % HERO_COUNT), 7000)
        return () => clearInterval(t) // limpa o intervalo quando sai da tela
    }, [])

    if (!current) return null

    return (
        <section className="hero">
            <div className="hero_texto" key={heroIdx}>
                <span className="hero_label">Em destaque</span>
                <h1 className="hero_titulo">{current.name}</h1>
                <div className="hero_meta">
                    {current.rating?.average && (
                        <span className="hero_rating"><FaStar /> {current.rating.average}</span>
                    )}
                    {current.premiered && <span>{current.premiered.split('-')[0]}</span>}
                    {current.genres?.slice(0, 2).map(g => <span key={g}>{g}</span>)}
                </div>
                <p className="hero_sinopse">
                    {stripHtml(current.summary)?.slice(0, 210)}...
                </p>
                <div className="hero_acoes">
                    <Link to={`/movie/${current.id}`} className="hero_btn">
                        Ver agora
                    </Link>
                    <div className="hero_dots">
                        {Array.from({ length: HERO_COUNT }).map((_, i) => (
                            <button
                                key={i}
                                className={`hero_dot${i === heroIdx ? ' ativo' : ''}`}
                                onClick={() => setHeroIdx(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero_poster_wrap" key={`p${heroIdx}`}>
                <img
                    className="hero_poster"
                    src={current.image?.medium}
                    alt={current.name}
                />
                <span className="hero_num">0{heroIdx + 1}</span>
            </div>
        </section>
    )
}

export default Hero
