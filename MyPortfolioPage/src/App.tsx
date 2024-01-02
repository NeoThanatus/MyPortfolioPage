import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Ranulfo "NeoThanatus" Reis</h2>
      <h2>Desenvolvedor de Jogos</h2>
      <div>
        <Header />
      </div>

      <div className="card">

        <p>
          <i>"Se a Sociedade vende Jesus, por que não ia vender Rap?"</i>
          <br />
          <b>-Emicida</b>
        </p>
      </div>
      <p className="read-the-docs">
        É só um teste boy
      </p>
    </>
  )
}

export default App
