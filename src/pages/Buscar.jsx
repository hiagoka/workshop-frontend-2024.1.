import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import Card from "../componentes/Card/Card.jsx";
import axios from 'axios'




const Buscar = () => {
    const [searchParams] = useSearchParams()
    
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getBusca = async () => {
        try{
            const response = await axios.get(
                "/search/shows?q=:query"
            );
            const data = response.data;

            setMovies(data)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getBusca();
    }, []);
    
    return(


        <div className='container'>
            <h2 title='populares'> Resultados para: <span className="texto_query">{query}</span>
            
            </h2>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.lenght > 0 &&
                movies.map((filme) => ( <Card key={filme.id} filme = {filme} />))}
        </div>
    )
}

export default Buscar