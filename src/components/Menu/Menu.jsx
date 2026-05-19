import './Menu.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"

const Menu = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (search.trim() === '') return

        navigate(`/search?q=${encodeURIComponent(search)}`) // encode pra não quebrar com espaço na url
        setSearch('')
    }

    return (
        <header className="menu">
            <Link to="/" className="logo">CENA</Link>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar título"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit" aria-label="Buscar">
                    <BiSearchAlt2 />
                </button>
            </form>
        </header>
    )
}

export default Menu
