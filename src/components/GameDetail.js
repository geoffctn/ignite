import React from 'react'
import { useHistory } from 'react-router-dom'
// style and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// redux
import { useSelector } from 'react-redux'
// utils
import { smallImage } from '../util.js'
// image
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathId }) => {
  const history = useHistory()

  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  // get stars
  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 0; i < 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" />)
      } else {
        stars.push(<img src={starEmpty} alt="star" />)
      }
    }
    return stars
  }

  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 5':
        return playstation
      case 'PlayStation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'Nintendo Switch':
        return nintendo
      case 'PC':
        return steam
      case 'iOS':
        return apple
      default:
        return gamepad
    }
  }

  // data
  const { screen, game, isLoading } = useSelector((state) => state.detail)

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {getStars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
                layoutId={pathId}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt="screen"
                  key={screen.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`
const Detail = styled(motion.div)`
  position: absolute;
  left: 10%;
  width: 80%;
  padding: 2rem 5rem;
  color: black;
  background: white;
  border-radius: 1rem;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
    width: 2rem;
    height: 2rem;
  }
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`
const Description = styled(motion.div)`
  margin: 5rem 0;
`

export default GameDetail
