import { useState } from 'react'
import './App.css'

function App() {
  const [total, setTotal] = useState(0);
  const [itemSold, setItemSold] = useState(0);

  return (
    <div className="App">
      <h1>Calculateur de frais</h1>
      <h3 className="underline">De 0,00 € à 999,99 € </h3>
      <div className="card">
        <label>Total des revenus</label>
        <input onChange={(e) => setTotal(e.target.value)}/>
      </div>
      <div className="card">
        <label>Nombre d'articles vendus</label>
        <input onChange={(e) => setItemSold(e.target.value)}/>
      </div>
      <h2>Revenu total</h2>
      <h1>{((total - (total * .078)) - (itemSold * .27)).toFixed(2)} €</h1>
      <p className="read-the-docs">
        7,80% du montant mensuel + 0.27€ par objet vendu
      </p>
    </div>
  )
}

export default App
