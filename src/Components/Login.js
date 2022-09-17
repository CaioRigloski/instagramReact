import React from "react"
import styled from "styled-components"
import Images from "../Features/Images"

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 350px;
  border 1px solid #dbdbdb;
  background-color: white;
  margin: 0;
`


const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  & > img {
    width: 100px;
  }
`
const LoginButton = styled.button`
  cursor: pointer;
  background-color: #0095F4;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: sans-serif;
  font-weight: 600;
  & > p {
    margin: 5px 20px 5px 20px;
  }
`

const ChangeAccount = styled.p`
  font-family: sans-serif;
  font-size: 13px;
  color: rgb(38, 38, 38)
`

const Link = styled.a`
  color: #0094f6;
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
`

function Login() {

  const User = 'caio_rig'

  return(
    <LoginContainer>
      <LoginBox>
        <div>
          <img src={Images.Logo} alt="Instagram"></img>
        </div>
        <ProfilePic>
          <img src={Images.Profile} alt="Profile"></img>
        </ProfilePic>
        <LoginButton type="button">
          <p>Continuar como {User}</p>
        </LoginButton>
        <ChangeAccount>Não é {User}? <Link href="#">Trocar de conta</Link></ChangeAccount>
      </LoginBox>
    </LoginContainer>
  )
}

export default Login