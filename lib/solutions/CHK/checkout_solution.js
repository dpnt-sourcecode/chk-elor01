export default class CheckoutSolution {
  // skus is expected to be a string
  checkout(skus) {
    const skuMap = new Map();
    let total = 0;
    for (let i = 0; i < skus.toString().length; i++) {
      const letter = skus.charAt(i);
      if (!/^[A-Z]$/.test(letter)) return -1;
      const mapItem = skuMap.get(letter);
      if (mapItem) {
        skuMap.set(letter, mapItem + 1);
      } else {
        skuMap.set(letter, 1);
      }
    }
    const hItem = skuMap.get("H");
    if (hItem) {
      const times5 = Math.floor(value / 10);
      const times5Rest = Math.floor((value - times5 * 10) / 5);
      total +=
        times5 * 45 +
        130 * Math.floor(times5Rest / 3) +
        50 * (value - (times5 * 5 + 3 * Math.floor(times5Rest / 3)));
    }

    if (skuMap.has("E")) {
      skuMap.set("B", skuMap.get("B") - Math.floor(skuMap.get("E") / 2) || 0);
      total += 40 * skuMap.get("E");
    }
    const fItem = skuMap.get("F");
    if (fItem) {
      if (fItem >= 3) {
        total += 10 * fItem - Math.floor(fItem / 3) * 10;
      } else total += 10 * fItem;
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
      }
    });

    return total;
  }
}



