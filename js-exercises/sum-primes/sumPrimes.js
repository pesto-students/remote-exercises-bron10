function isPrime(val) {
  for (let i = 2; i < val; i += 1) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let answer = 0;
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      answer += i;
    }
  }
  return answer;
}

export {
  sumPrimes,
};
