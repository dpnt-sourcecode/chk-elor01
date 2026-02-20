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
    Object.values(skuMap).forEach((item) => {
      total += item;
    });
    console.log(total);
    return total;
  }
}


