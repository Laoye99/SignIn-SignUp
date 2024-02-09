const questions = [
    {
        question: 'Which was never a capital of Nigeria ?',
        answers: [
            {text: "Calabar", correct: false},
            {text: "Lagos", correct: false},
            {text: "Kano", correct: true},
            {text: "Abuja", correct: false}
        ]
    },
    {
        question: 'Who was the first military head of state in Nigeria ?',
        answers: [
            {text: "General Yakubu Gowon", correct: false},
            {text: "General Aguiyi Ironsi", correct: true},
            {text: "Sir Tafawa Balewa", correct: false},
            {text: "Dr Nnamdi Azikwe", correct: false}
        ]
    },
    {
        question: 'When did the first military coup detat take place ?',
        answers: [
            {text: "January 15 1966", correct: true},
            {text: "January 29 1966", correct: false},
            {text: "January 6 1966", correct: false},
            {text: "January 20 1966", correct: false}
        ]
    },
    {
        question: 'Who was the premier of the western region during the first coup ?',
        answers: [
            {text: "Chief Obafemi Awolowo", correct: false},
            {text: "Brigadier Samuel Ademulegun", correct: false},
            {text: "Chief Samuel Ladoke Akintola", correct: true},
            {text: "Chief Adegoke Adelabu", correct: false}
        ]
    },
    {
        question: 'Who was popularly known as the "Black Scorpion" in the Civil War ?',
        answers: [
            {text: "General Olusegun Obasanjo", correct: false},
            {text: "General Murtala Mohammed", correct: false},
            {text: "Major Theophilus Danjuma", correct: false},
            {text: "Lt.Colonel Benjamin Adekunle", correct: true}
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score ++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML ='You scored '+ score + ' out of '+ questions.length +'!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});



startQuiz();