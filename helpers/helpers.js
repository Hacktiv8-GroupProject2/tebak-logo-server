function generateQuestion() {
  const num1 = getRandomLogo();
  const num2 = getRandomLogo();
  const op = "*";

  const question = `${num1} ${op} ${num2}`

  return {
      q: question,
      a: eval(question)
  }
}

function getRandomLogo(){
  return Math.floor(Math.random()*10)
}

module.exports = {
  generateQuestion,
  getRandomLogo
}