export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    for (let i = 0; i < skus.toString().length; i++) {
      const letter = skus.charAt(i);
      if (!["A", "B", "C", "D"].some((item) => item === letter)) return -1;
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
        total +=
          50 * (Math.floor(value % 3) || 1) + Math.floor(value / 3) * 130;
      } else if (key === "B") {
        total += 30 * (Math.floor(value % 2) || 1) + Math.floor(value / 2) * 45;
      } else if (key === "C") {
        total += 20;
      } else if (key === "D") {
        total += 15;
      }
    });

    return total;
  }
}

