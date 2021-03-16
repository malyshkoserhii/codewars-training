function solution(digits) {
  let arrDigits = digits.split('');
  let begin = 0;
  let end = 5;
  let numbers = [];

  for (let i = 0; i <= arrDigits.length; i += 1) {
    let num = arrDigits.slice(begin, end).join('');
    numbers.push(Number(num));
    begin += 1;
    end += 1;
  }

  return Math.max(...numbers);
}

console.log(solution('123132154657487464613516846416168468441'));
