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

    const vItem = skuMap.get("V");
    if (vItem) {
      const times3 = Math.floor(vItem / 3);
      const times3Rest = Math.floor(vItem % 3);

      total +=
        times3 * 130 +
        90 * Math.floor(times3Rest / 2) +
        50 * (vItem - (times3 * 3 + 2 * Math.floor(times3Rest / 2)));
    }

    const uItem = skuMap.get("U");
    if (uItem) {
      if (uItem >= 4) {
        total += 40 * uItem - Math.floor(uItem / 3) * 40;
      } else total += 40 * uItem;
    }

    const rItem = skuMap.get("R");
    if (rItem) {
      skuMap.set("Q", skuMap.get("Q") - Math.floor(rItem / 3) || 0);
      total += 50 * rItem;
    }

    const qItem = skuMap.get("Q");
    if (qItem) {
      total += Math.floor(qItem / 3) * 80 + (qItem % 3) * 30;
    }

    const pItem = skuMap.get("P");
    if (pItem) {
      total += Math.floor(pItem / 5) * 200 + (pItem % 5) * 50;
    }

    const nItem = skuMap.get("N");
    if (nItem) {
      skuMap.set("M", skuMap.get("M") - Math.floor(nItem / 3) || 0);
      total += 40 * nItem;
    }

    const kItem = skuMap.get("K");
    if (kItem) {
      const times2 = Math.floor(kItem / 2);
      const times2Rest = kItem % 2;
      total += times2 * 150 + times2Rest * 80;
    }

    const hItem = skuMap.get("H");
    if (hItem) {
      const times10 = Math.floor(hItem / 10);
      const times5 = Math.floor((hItem - times10 * 10) / 5);
      total +=
        times10 * 80 + times5 * 45 + 10 * (hItem - times10 * 10 - times5 * 5);
    }

    const eItem = skuMap.get("E");
    if (eItem) {
      skuMap.set("B", skuMap.get("B") - Math.floor(eItem / 2) || 0);
      total += 40 * eItem;
    }
    const fItem = skuMap.get("F");
    if (fItem) {
      if (fItem >= 3) {
        total += 10 * fItem - Math.floor(fItem / 3) * 10;
      } else total += 10 * fItem;
    }
    skuMap.entries().forEach(([key, value]) => {
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
      } else if (key === "G") {
        total += 20 * value;
      } else if (key === "I") {
        total += 35 * value;
      } else if (key === "J") {
        total += 60 * value;
      } else if (key === "L") {
        total += 90 * value;
      } else if (key === "M") {
        total += 15 * value;
      } else if (key === "O") {
        total += 10 * value;
      } else if (key === "S") {
        total += 30 * value;
      } else if (key === "T") {
        total += 20 * value;
      } else if (key === "W") {
        total += 20 * value;
      } else if (key === "X") {
        total += 90 * value;
      } else if (key === "Y") {
        total += 10 * value;
      } else if (key === "Z") {
        total += 50 * value;
      }
    });

    return total;
  }
}


