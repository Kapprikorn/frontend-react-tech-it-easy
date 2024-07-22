import './App.css';
import getSoldTvAmount from './helpers/getSoldTvAmount.js';
import getBoughtTvAmount from './helpers/getBoughtTvAmount.js'
import getToBeSoldTvAmount from './helpers/getToBeSoldTvAmount.js'

function App() {

  console.log(getSoldTvAmount());
  console.log(getBoughtTvAmount());
  console.log(getToBeSoldTvAmount());

  return (
    <>
      <h1>Begin hier met met maken van de applicatie!</h1>
      <p className="text-color-green">Sold TV amount: {getSoldTvAmount()}</p>
      <p className="text-color-blue">Bought TV amount: {getBoughtTvAmount()}</p>
      <p className="text-color-red">To be sold TV amount: {getToBeSoldTvAmount()}</p>
    </>
  )
}

export default App
