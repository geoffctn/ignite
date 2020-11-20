import React from 'react'
import { Link } from 'react-router-dom'
// style and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'

const Game = ({ name, released, image, id }) => {
  // load details
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>Release Date: {released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
