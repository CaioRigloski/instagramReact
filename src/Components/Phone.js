import React from "react"
import RenderImage from "./RenderImage"
import Images from "../Features/Images"
import styled, { css } from 'styled-components'

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;  
  height: 100vh;
`

const PhoneDiv = styled.div`
  background-image: url('${props => props.imageUrl}');
  background-repeat: no-repeat;
  background-position: -49px;
  width: 465px;
  height: 635px;
  display: grid;
  justify-items: center;
`

const PhoneImages = styled.div`
  margin: 27px;
`

function Phone() {
  const phoneUrl = Images.Cellphone

  return (
    <PhoneContainer>
      <PhoneDiv imageUrl={phoneUrl}>
        <PhoneImages>
          {Images.PhoneImages.map(RenderImage)}
        </PhoneImages>
      </PhoneDiv>
    </PhoneContainer>
  )
}

export default Phone