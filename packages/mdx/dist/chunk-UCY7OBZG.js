// src/utils/count-lines.ts
function countLines(s) {
  let num = 0;
  for (const c of s) {
    if (c === "\n") num++;
  }
  return num;
}

export {
  countLines
};
