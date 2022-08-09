import React from "react"
import styled from "styled-components"
import Images from "../Features/Images"

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`

const LoginBox = styled.div`
  padding: 5rem;
  border 1px solid #dbdbdb;
  background-color: white;
`


const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`
const LoginButton = styled.button`
  height: 50%;
  background-color: #0095F4;
  color: white;
  border: 1px solid transparent;
  font-family: sans-serif;
  font-weight: 800;
`

function Login() {

  return(
    <LoginContainer>
      <LoginBox>
        <div>
          <img src={Images.Logo} alt="Instagram"></img>
        </div>
        <div>
          <ProfilePic src={Images.Profile} alt="Profile picture"></ProfilePic>
        </div>
        <LoginButton type="button">
          Continuar como caio_rig
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  )
}

export default Login