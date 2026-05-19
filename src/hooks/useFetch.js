import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(!!url)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return

        // evita setar state depois que o componente desmontou
        let active = true

        setLoading(true)
        setError(null)

        axios.get(url).then(res => {
            if (active) {
                setData(res.data)
                setLoading(false)
            }
        }).catch(err => {
            console.error('useFetch error:', err)
            if (active) {
                setError(err.message)
                setLoading(false)
            }
        })

        return () => {
            active = false
        }
    }, [url])

    return { data, loading, error }
}

export default useFetch
