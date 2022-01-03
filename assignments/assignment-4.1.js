function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) if (number % i == 0) return false;

  return true;
}

const  array = [2,3,9,11,8,15,4,17 ]; 

const primes = array.filter(isPrime);

console.log(primes);

const alt = array.filter(a => array.indexOf(a)%2==0);

console.log(alt);