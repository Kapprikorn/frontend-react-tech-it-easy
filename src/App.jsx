import './App.css';
import getSoldTvAmount from './helpers/getSoldTvAmount.js';
import getBoughtTvAmount from './helpers/getBoughtTvAmount.js'
import getToBeSoldTvAmount from './helpers/getToBeSoldTvAmount.js'
import { PopularDisplay } from './components/PopularDisplay/PopularDisplay.jsx'

function App() {

  console.log(getSoldTvAmount());
  console.log(getBoughtTvAmount());
  console.log(getToBeSoldTvAmount());

  function buttonMostBoughtClicked() {
    console.log('Meest verkocht eerst');
  }

  function buttonCheapestClicked() {
    console.log('Goedkoopste eerst');
  }

  function buttonSportClicked() {
    console.log('Meest geschikt voor sport eerst');
  }

  return (
    <>
      <h1>Tech it easy dashboard</h1>
      <h2>Verkoopoverzicht</h2>
      <div className="sales-overview">
        <div className="stat-block sales-block green">
          <p>Aantal verkochte producten</p>
          <p>{getSoldTvAmount()}</p>
        </div>
        <div className="stat-block sales-block blue">
          <p>Aantal ingekochte producten</p>
          <p>{getBoughtTvAmount()}</p>
        </div>
        <div className="stat-block sales-block red">
          <p>Aantal te verkopen producten</p>
          <p>{getToBeSoldTvAmount()}</p>
        </div>
      </div>
      <h2>Best verkochte tv</h2>
      <div className="stat-block border-striped black">
        <PopularDisplay />
      </div>
      <div className="sort-button-list">
        <button onClick={buttonMostBoughtClicked}>Meest verkocht eerst</button>
        <button onClick={buttonCheapestClicked}>Goedkoopste eerst</button>
        <button onClick={buttonSportClicked}>Meest geschikt voor sport eerst</button>
      </div>
    </>
  )
}

export default App
