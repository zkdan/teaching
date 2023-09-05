const curry = {
  type: 'baingan bharta',
  side: 'naan',
  spiciness: ['mild', 'medium', 'hot', 'extra hot'],
  variants: {
    gujarat: 'ringan no oro',
    karnataka: 'ennegayi',
    maharashtra: 'vangyache bharit'
  }
}
const {side} = curry;
// What is the value of side? Why?

const {spiciness} = curry;
// What is the value of spiciness? Why?

const {gujarat} = curry;
// What is the value of gujarat? Why?

const [,,myFav] = spiciness;
// What's the value of myFav? Why?

const {maharashtra:tasty} = curry.variants;
// What's the value of tasty? Why?
