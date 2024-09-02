import getTvName from '../../helpers/getTvName.js'
import createPriceTag from '../../helpers/createPriceTag.js'
import getScreenSizes from '../../helpers/getScreenSizes.js'

import './PopularDisplay.css'

import checkImage from '../../assets/check.png';
import minusImage from '../../assets/minus.png';
import outOfStockImage from '../../assets/out-of-stock.png'
import PropTypes from 'prop-types'

PopularDisplay.propTypes = {
  televisionObject: PropTypes.shape({
    sourceImg: PropTypes.string,
    price: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      applicable: PropTypes.bool
    })),
    originalStock: PropTypes.number,
    sold: PropTypes.number,
  })
};

export function PopularDisplay ({ televisionObject }) {

  return (
    <div className="popular-display">
      {
        (televisionObject.originalStock - televisionObject.sold) === 0
          ? <img className="display-image" src={outOfStockImage} alt="Out of Stock"/>
          : <img className="display-image" src={televisionObject.sourceImg} alt="Television Image"/>
      }
      <div className="display-description">
        <p>bought: {televisionObject.originalStock} - sold: {televisionObject.sold}</p>
        <h2 className={'title'}>{getTvName(televisionObject)}</h2>
        <h1 className={'price'}>{createPriceTag(televisionObject.price)}</h1>
        <p className={'sizeDescription'}>{getScreenSizes(televisionObject)}</p>
        <div className="display-options">
          {
            televisionObject.options.map(anOption => {
              let optionImage = anOption.applicable ? checkImage : minusImage;

              return <div key={anOption.name}
                        className="television-option-wrapper">
                <img className="television-option-inline-image"
                     src={optionImage}
                     alt="minus"
                />
                <p>{anOption.name}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
