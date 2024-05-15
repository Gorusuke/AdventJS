function fitsInOneBox(boxes) {
  boxes.sort((a, b) => a.l - b.l);
  for (const idx in boxes) {
    const a = boxes[idx];
    const b = boxes[Number(idx) + 1] || 0;
    if (a.l >= b.l || a.w >= b.w || a.h >= b.h) return false;
  }
  return true
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

const boxes3 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes)) // true
console.log(fitsInOneBox(boxes2)) // false
console.log(fitsInOneBox(boxes3)) // true