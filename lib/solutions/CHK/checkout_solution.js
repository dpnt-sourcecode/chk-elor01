export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    for (let i = 0; i < skus.toString().length; i++) {
      const letter = skus.charAt(i);
      if (!["A", "B", "C", "D", "E"].some((item) => item === letter)) return -1;
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
        const times5 = Math.floor(value / 5);
        const times5Rest = Math.floor(value % 5);
        total +=
          times5 * 200 +
          130 * Math.floor(times5Rest / 3) +
          50 * (value - (times5 * 5 + 3 * Math.floor(times5Rest / 3)));
      } else if (key === "B") {
        total += 30 * Math.floor(value % 2) + Math.floor(value / 2) * 45;
      } else if (key === "C") {
        total += 20 * value;
      } else if (key === "D") {
        total += 15 * value;
      } else if (key === "E") {
        total +=
          40 * value -
          (Math.floor((Math.floor(value / 2) + (skuMap.get("B") || 0)) / 2) *
            30 || 0);
        skuMap.set("B", skuMap.get("B") - Math.floor(value / 2));
      }
    });

    return total;
  }
}



