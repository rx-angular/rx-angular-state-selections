export function work(n: number = 1000) {
  for(let i = 0; i < 999 * n; i++) {
    new Array(10).reduce((a,i, idx) => ([a, idx]), [])
  }
}
