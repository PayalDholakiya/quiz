var questions = [
  {
    question: '1. Who invented JavaScript?',
    answers: ['Douglas', 'Sheryl', 'Brendan '],
    correctAnswer: 'Douglas`',
  },
  {
    question: '2. What is the original name of JavaScript?',
    answers: ['LiveScript', 'EScript', 'Mocha'],
    correctAnswer: 'Mocha',
  },
  {
    question: '3. Which of them is not the looping structures in JavaScript?',
    answers: ['for', 'while', 'do while'],
    correctAnswer: 'while',
  },
  {
    question: '4. Which company developed JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'IBM '],
    correctAnswer: 'Netscape',
  },
  {
    question: '5. Which one of these is a JavaScript package manager?',
    answers: ['Node.js', 'TypeScript', 'npm'],
    correctAnswer: 'npm',
  },
  {
    question: '6. Which tool can you use to ensure code quality?',
    answers: ['Angular', 'ESLint', 'RequireJS'],
    correctAnswer: 'ESLint',
  },
  {
    question: '7. Who invented JavaScript?',
    answers: ['Douglas ', 'Sheryl', 'Brendan '],
    correctAnswer: 'Sheryl',
  },
  {
    question: '8. Which of the following is not JavaScript Data Types?',
    answers: ['Undefined', 'Number', 'float'],
    correctAnswer: 'float',
  },
  {
    question: '9. What are the types of Pop up boxes available in JavaScript?',
    answers: ['Alert', 'Prompt', 'both '],
    correctAnswer: 'both',
  },
  {
    question: '10. What are the two basic groups of data types in JavaScript?',
    answers: ['Primitive', 'Reference types', 'Brendan '],
    correctAnswer: 'Primitive',
  },
]
for (var i = 0; i < questions.length; i++) {
  var question = questions[i].question
  document.write(question)
  var options = questions[i].answers
  document.body.appendChild(document.createElement('br'))
  var name = 'radio' + i // radio0, radio1
  for (var opt in options) {
    var radio = document.createElement('input')
    radio.type = 'radio'
    radio.value = options[opt]
    radio.id = Math.random()
    radio.name = name
    document.body.appendChild(radio)
    var label = document.createElement('Label')
    label.htmlFor = radio.id
    document.body.appendChild(radio)
    label.innerHTML = options[opt]
    document.body.appendChild(label)
    document.body.appendChild(document.createElement('br'))
  }
  document.body.appendChild(document.createElement('br'))
}
var score = 0
function submitAnswer() {
  for (var i = 0; i < questions.length; i++) {
    var checkedAns = (
      document.querySelector(`input[name=radio${i}]:checked`) || {}
    ).value
    var correctAnswer = questions[i].correctAnswer
    if (checkedAns === correctAnswer) {
      score++
    }
  }
  document.write('your score is ' + score + ' out of 10.')
  document.body.appendChild(document.createElement('br'))
  document.write('your percentage is: ' + (score * 100) / 10 + '%')
  document.body.appendChild(document.createElement('br'))
  if (score <= 5) {
    document.write('you are fail.')
  } else if (score <= 7 && score > 5) {
    document.write('average.')
  } else if (score <= 8 && score > 7) {
    document.write('good.')
  }
}
