import styled from 'styled-components'

export const ShowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 30px;
`

export const ShowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ShowPiece = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  margin: 20px;
`

export const ShowTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`

export const ShowImage = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
  padding: 20px;
`

export const PriceContainer = styled.div`
  margin-bottom: 10px;
`

export const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const EpisodeTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`

export const EpisodePiece = styled.div`
  margin: 0 10px;
`

export const EpisodeImage = styled.img`
width: 100%;
height: auto;
margin-bottom: 5px;
max-width: 200px;
`