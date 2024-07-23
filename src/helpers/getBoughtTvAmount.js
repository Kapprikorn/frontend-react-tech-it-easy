import { bestSellingTv, inventory } from '../constants/inventory.js'

export default function getBoughtTvAmount() {
  let tvAmount = 0;
  for (const Television of inventory) {
    tvAmount += Television.originalStock;
  }
  tvAmount += bestSellingTv.originalStock;
  return tvAmount;
}
