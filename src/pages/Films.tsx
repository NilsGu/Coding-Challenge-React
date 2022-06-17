import React, {useEffect, useState} from "react"
import FilmCard from "../components/film-card/filmCard";
import axios from "axios";
import '../styles/cards.css'
import { Grid, GridItem } from '@chakra-ui/react'


const Films = () => {

    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        const {data} = await axios.get('https://swapi.dev/api/films')
        setFilms(data.results)
    }

    useEffect(() => {
        getFilms().then()
    }, [])

    return(
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
            {films && films.map((film, index)=> {
                return(
                    <GridItem>
                        <FilmCard key={index} films={film}/>
                    </GridItem>
                )
            })}
        </Grid>
    )
}

export default Films
