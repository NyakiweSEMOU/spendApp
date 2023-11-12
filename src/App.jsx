import { useState } from 'react'
import { SpendForm } from './conponents/SpendForm'


const App = () => {

  const [spends, setSpends] = useState([])

  const addSpend = (spends) => {
    setSpends((prevState) => [...prevState, spends])
  }

  const total = () => {
    const init = 0
    return spends.reduce((cumul, spend) => (cumul + parseInt(spend.price)), init)
  }

  return (<div>
    <SpendForm addSpend={addSpend} />



    {(spends.length > 0) ? (
      <table border={2}>
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prix</td>
          </tr>
        </thead>

        <tbody>
          {
            spends.map(spend => <tr key={spend.id}>
              <td>{spend.name}</td>
              <td>{spend.price}</td>
            </tr>)
          }
          <tr>
            <td>Total</td>
            <td>{total()}</td>
          </tr>

        </tbody>

      </table>

    ) : <p>Liste Vide</p>}
  </div>
  )

}


export default App
