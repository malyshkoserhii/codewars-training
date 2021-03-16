// TASK:

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  let mainArr = [];

  for (let i = 1; i <= size; i += 1) {
    const startArr = [];

    for (let y = 1; y <= size; y += 1) {
      startArr.push(y);
    }

    const additionalArr = [];

    startArr.map((el) => {
      const res = el * i;
      additionalArr.push(res);
    });

    mainArr.push(additionalArr);
  }

  return mainArr;
}

console.log(multiplicationTable(8));
