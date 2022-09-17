import './App.css'
import Phone from './Components/Phone'
import Login from './Components/Login'
import styled from 'styled-components'

const HomePage = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(250, 250, 250);
  gap: 25px;
  text-align: center;
`

function App() {
  return (
    <HomePage className="App">
      <Phone />
      <Login />
    </HomePage>
  );
}

export default App;
