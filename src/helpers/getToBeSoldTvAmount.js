import getBoughtTvAmount from './getBoughtTvAmount.js'
import getSoldTvAmount from './getSoldTvAmount.js'

export default function getToBeSoldTvAmount() {
  return getBoughtTvAmount() - getSoldTvAmount();
}
