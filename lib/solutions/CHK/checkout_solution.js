export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    [...skus.matchAll(/([a-zA-Z]+)(\d+)/g)].forEach((match) => {
      const letter = match[1];
      const number = Number(match[2]);
      const mapItemValue = skuMap.get(letter);
      if (mapItemValue) {
        skuMap.set(letter, mapItemValue + number);
      } else {
        skuMap.set(letter, number);
      }
    });
    Object.values(skuMap).forEach((item) => {
      total += item;
    });
    console.log(total);
    return total;
  }
}

