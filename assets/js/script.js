var score_1 = 0;
var current1 = 0;
var lancerDe = document.getElementById('lancerde');
var des = document.getElementById('des');


lancerDe.addEventListener('click', function(){
  var nombreAleatoire = Math.floor(Math.random()*6) + 1;
  des.src = '../images/dice-'+ nombreAleatoire +'.svg';
  des.style.display = 'block';
  console.log('click'); 

  if(nombreAleatoire === 1) {
    




  }

});



 /* function hold() {
    score_1 += current1;
    if (score_1 >= 100) {
      alert('Félicitations ! Vous avez atteint un score de 100 ou plus.');
      score_1 = 0;
    }
    document.querySelector('.score1').textContent = score_1;
  }*/


  
