const quizData = [
    {
        question : 'How much is 2+2*2= ?',
        a: '10',
        b: '6',
        c: '12',
        d: '2',
        correct : 'b'
    }, 
    {
        question: 'Who is the inventor of JavaScript?',
        a: 'Donald Trump',
        b: 'Luciana Rosu',
        c: 'Brendan Eich',
        d: 'Jhon Eillornanth',
        correct: 'c'

    },
    {
        question: 'What is the latest version of HTML in 2023?',
        a: '3Xml',
        b: 'HTML4',
        c: 'ECMA6',
        d: 'HTML5',
        correct: 'd'
    },
    {
        question : 'Who is the President of US?',
        a: 'Joe Biden',
        b: 'Barak Obama',
        c: 'Donald Trump',
        d: 'Vladimir Putin',
        correct : 'a'
    },
    {
        question: 'How many cats Luciana have?',
        a: 'she dont have cats',
        b: '2 cats',
        c: '3 cats',
        d: 'all the cats in world',
        correct: 'c'
    },
    {
        question : 'How much is 2+10+20+5*8= ?',
        a: '72',
        b: '78',
        c: '178',
        d: '94',
        correct : 'a'
    }, 
    {
        question : 'Wich animal is a domestic one?',
        a: 'Tiger',
        b: 'Lion',
        c: 'Panther',
        d: 'Cat',
        correct : 'd'
    }, 
    {
        question : 'What is not a car brand ?',
        a: 'Java',
        b: 'BMW',
        c: 'Volvo',
        d: 'Ford',
        correct : 'a'
    }, 
    {
        question : 'Who was the inventor of Apple?',
        a: 'Ion Iliescu',
        b: 'Megan Fox',
        c: 'Steve Jobs',
        d: 'Rihanna',
        correct : 'c'
    }, 
    {
        question : 'Who played Jake in Titanic?',
        a: 'Kurt Russel',
        b: 'Morgan Freeman',
        c: 'Antonio Banderas',
        d: 'none of them',
        correct : 'd'
    }, 
]

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score= 0;
let points = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question ;
    a_text.innerText = currentQuizData.a ;
    b_text.innerText = currentQuizData.b ;
    c_text.innerText = currentQuizData.c ;
    d_text.innerText = currentQuizData.d ;

};

let answer = undefined;

function getSelected() {
    answersEls.forEach(answerEl =>{
        if (answerEl.checked) {
            answer= answerEl.id;
        }
    });
    return answer;
};

//deselect the radio button when we go to the next question
function deselectAnswers(){
    answersEls.forEach(answerEl => {
        answerEl.checked= false
    });
}

submitBtn.addEventListener('click', ()=> {
    
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
            points = points + 10;
        } 

        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score} from ${quizData.length} questions 
            and you won ${points} points from 100.</h2>`
        };
    }     
});