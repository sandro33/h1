import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  

  return (
    <>
      <Header/>
      <Main FirstName="Sandro" LastName="Abashidze" Age={16}/>
      <Main FirstName="Lasha" LastName="Mosidze" Age={15}/>
      <Main FirstName="Sergi" LastName="Verdzadze" Age={17}/>

    </>
  )
}

export default App;