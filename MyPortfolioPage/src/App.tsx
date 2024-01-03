
import './App.css'
import './index.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {
  

  return (
    <>

      <div className="wrapper">
        <div className="sidebar">
          <div>
            <Header />
            <h3>Ranulfo "NeoThanatus" Reis</h3>
            <p>Desenvolvedor de Jogos</p>
          </div>
          <Sidebar />
        </div>
      </div>

      <div className="main-content">
        <h2>Ranulfo "NeoThanatus" Reis</h2>
        <h2>Desenvolvedor de Jogos</h2>

        <p>
          <i>"Se a Sociedade vende Jesus, por que não ia vender Rap?"</i>
          <br />
          <b>-Emicida</b>
        </p>

        <p className="read-the-docs">
          É só um teste boy
        </p>
      </div>
  
    </>
  )
}

export default App
