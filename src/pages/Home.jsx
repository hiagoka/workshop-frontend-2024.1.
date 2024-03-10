import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../componentes/Card/Card.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Casa = () => {

    const [filmes, setFilmes] = useState([]);
    const getFilmes = async () => {
        try{
            const response = await axios.get(
                "https://api.tvmaze.com/shows"
            );
            const data = response.data;


            setFilmes(data);
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        getFilmes();
    }, []);


    return(
        <div className="container">
            <h1 className="populares"> Populares na netflix </h1>
                <Swiper
                    slidesPerView = {1}
                    navigation
                >
                {filmes.length === 0 ? <p>Carregando...</p> : (
                filmes.map((filme) => (
                    <SwiperSlide key={filme.id}>
                        <Card className="slider-item" filme={filme} 
                        />
                    </SwiperSlide>
        )))};
                </Swiper>

            </div>
            
              

    );
};

export default Casa