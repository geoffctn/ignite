import React, { useState } from 'react'
// style and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// image
import logo from '../img/logo.svg'
// redux
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gamesAction'

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }

  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input type="text" onChange={inputHandler} value={textInput} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #ff7676;
    color: white;
    border: none;
    cursor: pointer;
  }
`
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`

export default Nav
