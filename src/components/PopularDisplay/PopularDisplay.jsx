import getTvName from '../../helpers/getTvName.js'
import { bestSellingTv } from '../../constants/inventory.js'
import createPriceTag from '../../helpers/createPriceTag.js'
import getScreenSizes from '../../helpers/getScreenSizes.js'

import './PopularDisplay.css'
import getIconTags from '../../helpers/getIconTags.js'

export function PopularDisplay () {

  return (
    <div className="popular-display">
      <img className="display-image" src={bestSellingTv.sourceImg} alt="Television" />
      <div className="display-description">
        <h2 className={'title'}>{getTvName(bestSellingTv)}</h2>
        <h1 className={'price'}>{createPriceTag(bestSellingTv.price)}</h1>
        <p className={'sizeDescription'}>{getScreenSizes(bestSellingTv)}</p>
        <p className="display-options">{getIconTags(bestSellingTv)}</p>
      </div>
    </div>
  )
}