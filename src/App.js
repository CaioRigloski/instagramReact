import './App.css'
import Phone from './Components/Phone'
import Login from './Components/Login'
import styled from 'styled-components'

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
