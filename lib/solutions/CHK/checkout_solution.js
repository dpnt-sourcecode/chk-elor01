export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    for (let i = 0; i < skus.length; i++) {
      const letter = skus[i];
      const mapItem = skuMap.get(letter);
      if (mapItem) {
        skuMap.set(letter, mapItem + 1);
      } else {
        skuMap.set(letter, 1);
      }
    }
    Object.keys(skuMap).forEach((key) => {
      const mapItem = skuMap.get(key);
      if (key === "A") {
        total += 50 * Math.floor(mapItem % 3) + Math.floor(mapItem / 3) * 130;
      } else if (key === "B") {
        total += 30 * Math.floor(mapItem % 2) + Math.floor(mapItem / 2) * 45;
      } else if (key === "C") {
        total += 20;
      } else if (key === "D") {
        total += 15;
      }
    });

    console.log(total);
    return total;
  }
}



