import {inventory} from "../constants/inventory.js";

export default function getSoldTvAmount() {
    let tvAmount = 0;
    for (const Television of inventory) {
        tvAmount += Television.sold;
    }
    return tvAmount;
}
