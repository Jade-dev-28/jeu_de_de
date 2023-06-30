var score_1 = 0;
var current1 = 0;



//function qui me permet de générer un nombre aléatoire entre 1 et 6
function NombreAleatoire() {
    var nombreAleatoire = Math.floor(Math.random()*6) + 1;
    document.querySelector('.compteur').textContent = nombreAleatoire;
    current1 = nombreAleatoire;
  }


  

  function hold() {
    score_1 += current1;
    if (score_1 >= 100) {
      alert('Félicitations ! Vous avez atteint un score de 100 ou plus.');
      score_1 = 0;
    }
    document.querySelector('.score1').textContent = score_1;
  }



  
