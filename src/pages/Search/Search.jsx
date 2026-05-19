import { useSearchParams } from 'react-router-dom'
import Card from "../../components/Card/Card.jsx";
import useFetch from '../../hooks/useFetch';
import { API_BASE } from '../../config';
import './Search.css'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const url = query ? `${API_BASE}/search/shows?q=${query}` : null
    const { data: results, loading, error } = useFetch(url)

    return (
        <div className="search">
            {query ? (
                <>
                    <p className="search_label">Resultados para</p>
                    <h2 className="search_query">{query}</h2>
                </>
            ) : (
                <p className="status">Digite algo para buscar.</p>
            )}

            {loading && <p className="status">Carregando...</p>}
            {error && <p className="status">Não foi possível realizar a busca.</p>}
            {!loading && !error && results?.length === 0 && query && (
                <p className="status">Nenhum resultado para "{query}".</p>
            )}

            <div className="search_grid">
                {results?.map((item) => (
                    <Card key={item.show.id} movie={item.show} />
                ))}
            </div>
        </div>
    )
}

export default Search
