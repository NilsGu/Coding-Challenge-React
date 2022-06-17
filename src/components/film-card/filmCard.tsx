import React from "react"
import '../../styles/cards.css'
import {Box} from '@chakra-ui/react'

export type films = {

}

const FilmCard = ({films}: any) => {

    const {title, release_date, producer} = films

    console.log('card: ', films)
    return (
        <Box className={'card'}>
            <div className={'details'}>
                <h4>{title}</h4>
                <h5>{release_date}</h5>
                <h6>{producer}</h6>
            </div>
        </Box>
    )
}
export default FilmCard
