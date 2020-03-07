// 1 prim
var n = 5 (n)
// 1 prim
var m = 7 (m)
// 1 prim
var sum = 0
// assignment = 1 prim, comparison = 3 * (n + 1) prim, iterator = 3 * n prim, 1 + 3n + 3 + 3n = 6n + 4
for(var i = 0; i < n; i++) 
// assignment = 1 prim, comparison = 3 * (m + 1) prim, iterator = 3 * m prim, n(6m + 4) = 6nm + 4n
  for(var j = 0; j < m; j++)
// n(3 * m) prim, 3nm prim
    sum += 1
// 2 prim
console.log(sum) 

// 5 + 6n + 4 + 6nm + 4n + 3nm = 9nm + 10n + 9

// 1 prim
var n = 5 (n)
// 1 prim
var sum = 0
// assignment = 1 prim, comparison = 3 * (n + 1) prim, iterator = 3 * n prim, 1 + 3n + 3 + 3n = 6n + 4
for(var i = 0; i < n; i++) 
// assignment = 1 prim, comparison = 3 * (n + 1) prim, iterator = 3 * m prim, n(6n + 4) = 6n^2 + 4n
  for(var j = 0; j < n; j++)
// n(3 * n) prim, 3n^2 prim
    sum += 1
// 2 prim
console.log(sum) 

// 4 + 6n + 4 + 6n^2 + 4n + 3n^2 = 9n^2 + 10n + 8
