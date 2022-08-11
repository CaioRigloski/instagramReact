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
  background-size: 465px 635px;
  background-position: center;
  background-position-y: top;
  width: 390px;
  height: 590px;
  & > div {
    margin: 24px 0 0 97px;
  }
`

function Phone() {
  const phoneUrl = Images.Cellphone

  return (
    <PhoneContainer>
      <PhoneDiv imageUrl={phoneUrl}>
        <div>
          {Images.PhoneImages.map(RenderImage)}
        </div>
      </PhoneDiv>
    </PhoneContainer>
  )
}

export default Phone