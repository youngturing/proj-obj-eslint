import React from 'react'
import Products from './components/Products'
import Payments from './components/Payements'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Payements and Products data</h3>
      </header>
      <Products/>
      <Payments/>
    </div>
  )
}

export default App
