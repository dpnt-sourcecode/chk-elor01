export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    let i = 0;
    for (i = 0; i < skus.toString().length; i++) {
      const letter = skus.charAt(i);
      const mapItem = skuMap.get(letter);
      if (mapItem) {
        skuMap.set(letter, mapItem + 1);
      } else {
        skuMap.set(letter, 1);
      }
    }

    skuMap.entries().forEach(([key, value]) => {
      console.log(key, value);
      if (key === "A") {
        total += 50 * Math.floor(value % 3) + Math.floor(value / 3) * 130;
      } else if (key === "B") {
        total += 30 * Math.floor(value % 2) + Math.floor(value / 2) * 45;
      } else if (key === "C") {
        total += 20;
      } else if (key === "D") {
        total += 15;
      }
    });

    return total;
  }
}







