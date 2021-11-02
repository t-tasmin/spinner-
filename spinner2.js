
const A = ['|','/','-','\\', '|'];
let end;
for (let i = 0; i < A.length; i++) {
  setTimeout(() => process.stdout.write(`\r${A[i]}    `), 100 + 400 * i);
  end = 100 + 400 * i;
}

setTimeout(() => console.log(), end + 1);
