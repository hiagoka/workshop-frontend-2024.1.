import './Menu.css'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi";

const Menu = () => {

    const [busca, setBusca] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        console.log(busca)

        if (!busca) return;
         
        navigate(`/busca?q=${busca}`);
        setBusca("");
    }
    return (
        <header className="menu"> 
            <Link to ="/">
                <img className="imagem"src="./imagens/Netflixlogo.png" alt="Logo da netflix"></img>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Titulos, gente e gêneros' onChange={(evento) => setBusca(evento.target.value)} value={busca}/>
                <button type="submit"> 
            <BiSearchAlt2 />
            </button>
            </form>
        </header>
    
    )
}

export default Menu