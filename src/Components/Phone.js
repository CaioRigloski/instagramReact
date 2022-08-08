import React from "react"
import RenderImage from "./RenderImage"
import Images from "../Features/Images"
import styled, { css } from 'styled-components'

const PhoneDiv = styled.div`
  height: 100vh;
  background-image: url('${props => props.imageUrl}');
  background-repeat: no-repeat;
`

function Phone() {
  const phoneUrl = Images.Cellphone

  return (
    <PhoneDiv imageUrl={phoneUrl}>
      {Images.PhoneImages.map(RenderImage)}
    </PhoneDiv>
  )
}

export default Phone