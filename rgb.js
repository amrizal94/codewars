function rgb(r, g, b) {
  r <= 0 ? (r = "00") : r > 255 ? (r = "FF") : (r = r.toString(16).toUpperCase().padStart(2,0));
  g <= 0 ? (g = "00") : g > 255 ? (g = "FF") : (g = g.toString(16).toUpperCase().padStart(2,0));
  b <= 0 ? (b = "00") : b > 255 ? (b = "FF") : (b = b.toString(16).toUpperCase().padStart(2,0));

  return`${r}${g}${b}`;
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");
console.log(rgb(20,299,9), "14FF09"); 
