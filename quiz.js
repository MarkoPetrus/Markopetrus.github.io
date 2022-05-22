var myQuestions = [
  {
    question: "Хто входить до верхівки ієрархії мурах?",
    answers: {
      А: 'Королева ',
      Б: 'Король, личинки ',
      В: 'Королева, король ',
      Г: 'Королева, король, личинки '
    },
    correctAnswer: 'В'
  },
  {
    question: "Яка з цих професій мурах є найпоширенішою в мурашнику?",
    answers: {
      А: 'Доглядачі ',
      Б: 'Мисливці ',
      В: 'Щити ',
      Г: 'Воїни '
    },
    correctAnswer: 'Б'
  },
  {
    question: "В якій з цих категорій мураха є чемпіоном світу?",
    answers: {
      А: 'Найменша комаха ',
      Б: 'Найотруйніша комаха ',
      В: 'Найсильніша комаха ',
      Г: 'Найрозумніша комаха '
    },
    correctAnswer: 'Б'
  },
  {
    question: "Який з цих видів мурах найбільший?",
    answers: {
      А: 'Мураха жнець ',
      Б: 'Бродяча мураха ',
      В: 'Медова мураха ',
      Г: 'Мураха куля '
    },
    correctAnswer: 'Г'
  },
  {
    question: "Скільки осіб може бути в колонії бродячих мурах?",
    answers: {
      А: '1.75 млн ',
      Б: '15 млн ',
      В: '22 млн ',
      Г: '250 тис '
    },
    correctAnswer: 'В'
  },
  {
    question: "як називається феномен показаний в першому відео(зліва зверху)?",
    answers: {
      А: 'Спіраль смерті ',
      Б: 'Циклон смерті ',
      В: 'Мурашиний торнадо ',
      Г: 'Круг безвиходдя '
    },
    correctAnswer: 'А'
  },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ') '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML ='Ви дістали ' + numCorrect + ' питаннь правильно з ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
