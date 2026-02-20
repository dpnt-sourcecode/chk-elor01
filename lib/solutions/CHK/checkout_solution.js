export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    skus.split(",").forEach((item) => {
      const [, letter, number] = item.match(/^([A-Z]+)(\d+)$/);
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
