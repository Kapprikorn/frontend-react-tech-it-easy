import {
    bestSellingTv,
    inventory,
} from '../constants/inventory.js'

export default function getSoldTvAmount() {
    let tvAmount = 0;
    for (const Television of inventory) {
        tvAmount += Television.sold;
    }
    tvAmount += bestSellingTv.sold;
    return tvAmount;
}
