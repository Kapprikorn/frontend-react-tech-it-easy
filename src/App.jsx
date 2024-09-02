import './App.css';
import getSoldTvAmount from './helpers/getSoldTvAmount.js';
import getBoughtTvAmount from './helpers/getBoughtTvAmount.js'
import getToBeSoldTvAmount from './helpers/getToBeSoldTvAmount.js'
import { PopularDisplay } from './components/PopularDisplay/PopularDisplay.jsx'
import { bestSellingTv, inventory } from './constants/inventory.js'

function App() {

  console.log(getSoldTvAmount());
  console.log(getBoughtTvAmount());
  console.log(getToBeSoldTvAmount());

  console.log('Deel 2, Opdracht 1 a)');
  const tvNames = inventory.map(entry => entry.name);
  console.log(tvNames);

  console.log('Deel 2, Opdracht 1 b)');
  const soldOutTvs = inventory.filter(entry => entry.originalStock - entry.sold === 0);
  console.log(soldOutTvs);

  console.log('Deel 2, Opdracht 1 c)');
  const NH32TV = inventory.filter(entry => entry.type === 'NH3216SMART');
  console.log(NH32TV);

  console.log('Deel 2, Opdracht 1 d)');
  const sportTvs = inventory.map(entry => {
    return {name: entry.name, suitable: entry.refreshRate >= 100};
  });
  console.log(sportTvs);

  console.log('Deel 2, Opdracht 1 e)');
  const bigTvs = inventory.filter(entry => entry.availableSizes.filter(size => size >= 65).length > 0);
  console.log(bigTvs);

  console.log('Deel 2, Opdracht 1 f)');
  const ambiLightTvs = inventory.filter(entry => entry.options.filter(option => option.name === 'ambiLight' && option.applicable === true).length > 0);
  console.log(ambiLightTvs);

  function buttonMostBoughtClicked() {
    console.log('Meest verkocht eerst');

    console.table(inventory.sort(
      (televisionA, televisionB) => televisionB.sold - televisionA.sold
    ), ['name', 'sold']);
  }

  function buttonCheapestClicked() {
    console.log('Goedkoopste eerst');

    console.table(inventory.sort(
      (televisionA, televisionB) => televisionA.price - televisionB.price
    ), ['name', 'price']);
  }

  function buttonSportClicked() {
    console.log('Meest geschikt voor sport eerst');

    console.table(inventory.sort(
      (televisionA, televisionB) => televisionB.refreshRate - televisionA.refreshRate
    ), ['name', 'refreshRate']);
  }

  function buttonBiggestSizeClicked() {
    console.log('Meest geschikt voor sport eerst');

    const sortedTelevisions = inventory.sort((televisionA, televisionB) => {
      const largestSizeA = Math.max(...televisionA.availableSizes);
      const largestSizeB = Math.max(...televisionB.availableSizes);

      return largestSizeB - largestSizeA;
    });

    console.log(sortedTelevisions.map((television) => {
      return television.availableSizes.sort((a, b) => b - a)[0];
    }));
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
        <PopularDisplay televisionObject={bestSellingTv} />
      </div>

      <h2>Alle tvs</h2>
      <div className="sort-button-list">
        <button onClick={buttonMostBoughtClicked}>Meest verkocht eerst</button>
        <button onClick={buttonCheapestClicked}>Goedkoopste eerst</button>
        <button onClick={buttonSportClicked}>Meest geschikt voor sport eerst</button>
        <button onClick={buttonBiggestSizeClicked}>Grootste schermgroottes eerst</button>
      </div>
      <div className="television-list">
        {
          inventory.map(entry =>
            <PopularDisplay key={entry.name} televisionObject={entry} />
          )
        }
      </div>
    </>
  )
}

export default App
