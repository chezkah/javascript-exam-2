const getTheExactNumber = (numbers) => {
  return Math.max(...numbers.filter(item => item % 3 === 0));
}

export default getTheExactNumber;