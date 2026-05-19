import useFetch from '../../hooks/useFetch'
import { API_BASE } from '../../config'
import Hero from '../../components/Hero/Hero'
import SectionRow from '../../components/SectionRow/SectionRow'

const Home = () => {
    const { data: movies, loading, error } = useFetch(`${API_BASE}/shows`)

    if (loading && !movies) return <p className="status">Carregando...</p>
    if (error) return <p className="status">Não foi possível carregar os títulos.</p>

    const dramas = movies ? movies.filter(f => f.genres && f.genres.includes('Drama')) : []
    const comedias = movies ? movies.filter(f => f.genres && f.genres.includes('Comedy')) : []
    const acao = movies ? movies.filter(f => {
        return f.genres && (f.genres.includes('Action') || f.genres.includes('Thriller'))
    }) : []
    const ficcao = movies ? movies.filter(f => f.genres && f.genres.includes('Science-Fiction')) : []
    const crime = movies ? movies.filter(f => f.genres && f.genres.includes('Crime')) : []
    const romance = movies ? movies.filter(f => f.genres && f.genres.includes('Romance')) : []
    const terror = movies ? movies.filter(f => f.genres && f.genres.includes('Horror')) : []

    return (
        <main className="home">
            {movies && <Hero movies={movies} />}

            {movies && <SectionRow title="Mais Assistidos" list={movies.slice(0, 30)} />}

            {/* seção só aparece se tiver pelo menos 4 itens, senão fica estranho */}
            {dramas.length >= 4 && (
                <SectionRow title="Para Chorar" list={dramas.slice(0, 30)} />
            )}

            {comedias.length >= 4 && (
                <SectionRow title="Para Rir" list={comedias.slice(0, 30)} />
            )}

            {acao.length >= 4 && (
                <SectionRow title="Adrenalina Pura" list={acao.slice(0, 30)} />
            )}

            {ficcao.length >= 4 && (
                <SectionRow title="Outros Mundos" list={ficcao.slice(0, 30)} />
            )}

            {crime.length >= 4 && (
                <SectionRow title="Mistério & Crime" list={crime.slice(0, 30)} />
            )}

            {romance.length >= 4 && (
                <SectionRow title="Romance" list={romance.slice(0, 30)} />
            )}

            {terror.length >= 4 && (
                <SectionRow title="Arrepia" list={terror.slice(0, 30)} />
            )}
        </main>
    )
}

export default Home
