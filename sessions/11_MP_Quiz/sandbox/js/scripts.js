const correctAnswers = ['B', 'A', 'B'];
const scoreBox = document.querySelector('.score-box');

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value,form.q3.value];

  //check answers
  userAnswers.forEach( (answer, index) => {
    if(answer === correctAnswers[index]){
      score += 33.4;      
    }
  });
  const total = Math.round(score) + '%';
  // console.log(total);


  //show results
  scrollTo(0,0);
  scoreBox.parentElement.classList.add('show');
  scoreBox.textContent = total;
});