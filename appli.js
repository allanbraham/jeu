document.addEventListener('keydown', () => {
    document.getElementById('instructions-message').style.display = 'none';
});


class Personnage {
    constructor() {
        this.positionTaille();
        this.looseAnimationDuration = 2000;
    }

    positionTaille() {
        this.element = document.querySelector('.perso');

        this.element.style.position = 'absolute';
        this.element.style.bottom = '3%';
        this.element.style.left = '3%';
    }
    
    saut() {
        this.element.classList.add('saut');
            
        setTimeout(() => {
            this.element.classList.remove('saut');
        }, 1000);
    }

    glissade() {
        this.element.classList.add('glissade');
            
        setTimeout(() => {
            this.element.classList.remove('glissade');
        }, 1000);
    }


    checkCollision(obstacle) {
        const persoRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();
    
        // Ajouter la taille de la fenêtre pour les obstacles situés en bas
        const windowHeight = window.innerHeight;
    
        // Vérifier si le personnage saute
        const isJumping = this.element.classList.contains('saut');
    
        // Vérifier si les rectangles de collision se chevauchent
        if (!isJumping &&
            ((persoRect.bottom > obstacleRect.top && persoRect.top < obstacleRect.bottom) ||
            (persoRect.top < obstacleRect.bottom && persoRect.bottom > obstacleRect.top - windowHeight))) {
            if (persoRect.right > obstacleRect.left && persoRect.left < obstacleRect.right) {
                loose();
            }
        }
    }
    

   
}

class Obstacle {
    constructor() {
        this.obstacle1 = document.querySelector('.obstacle1');
        this.obstacle2 = document.querySelector('.obstacle2');
        this.obstacle3 = document.querySelector('.obstacle3');
        this.obstacle4 = document.querySelector('.obstacle4');
        this.obstacle5 = document.querySelector('.obstacle5');
        this.obstacle6 = document.querySelector('.obstacle6');
        this.obstacle7 = document.querySelector('.obstacle7');
        this.obstacle8 = document.querySelector('.obstacle8');
        this.obstacle9 = document.querySelector('.obstacle9');

        this.positionInitialeObstacle1();
        this.positionInitialeObstacle2();
        this.positionInitialeObstacle3();
        this.positionInitialeObstacle4();
        this.positionInitialeObstacle5();
        this.positionInitialeObstacle6();
        this.positionInitialeObstacle7();
        this.positionInitialeObstacle8();
        this.positionInitialeObstacle9();
        
    }

    positionInitialeObstacle1(){
        this.obstacle1.style.position = 'absolute';
        this.obstacle1.style.bottom = '2%';
        this.obstacle1.style.right = '0';
    }
    positionInitialeObstacle2() {
        this.obstacle2.style.position = 'absolute';
        this.obstacle2.style.bottom = '14%';
        this.obstacle2.style.right = '0';
    }
    positionInitialeObstacle3(){
        this.obstacle3.style.position = 'absolute';
        this.obstacle3.style.bottom = '2%';
        this.obstacle3.style.right = '0';
    }
    positionInitialeObstacle4(){
        this.obstacle4.style.position = 'absolute';
        this.obstacle4.style.bottom = '2%';
        this.obstacle4.style.right = '0';
    }
    positionInitialeObstacle5() {
        this.obstacle5.style.position = 'absolute';
        this.obstacle5.style.bottom = '14%';
        this.obstacle5.style.right = '0';
    }
    positionInitialeObstacle6(){
        this.obstacle6.style.position = 'absolute';
        this.obstacle6.style.bottom = '2%';
        this.obstacle6.style.right = '0';
    }
    positionInitialeObstacle7() {
        this.obstacle7.style.position = 'absolute';
        this.obstacle7.style.bottom = '14%';
        this.obstacle7.style.right = '0';
    }
    positionInitialeObstacle8() {
        this.obstacle8.style.position = 'absolute';
        this.obstacle8.style.bottom = '14%';
        this.obstacle8.style.right = '0';
    }
    positionInitialeObstacle9(){
        this.obstacle9.style.position = 'absolute';
        this.obstacle9.style.bottom = '2%';
        this.obstacle9.style.right = '0';
    }


    cacherTousLesObstacles() {
        this.obstacle1.style.display = 'none';
        this.obstacle2.style.display = 'none';
        this.obstacle3.style.display = 'none';
        this.obstacle4.style.display = 'none';
        this.obstacle5.style.display = 'none';
        this.obstacle6.style.display = 'none';
        this.obstacle7.style.display = 'none';
        this.obstacle8.style.display = 'none';
        this.obstacle9.style.display = 'none';
    }

}

class Score {
    constructor() {
      this.score = 0;
      this.elementScore = document.getElementById('score');
    }
  
    mAJScore() {
      this.score += 10;
      this.elementScore.innerText = this.score;
    }
  
    demarrerMAJScore() {
        setTimeout(() => {
            this.mAJScore(); 
            this.intervalId = setInterval(() => {
              this.mAJScore();
            }, 1500);
          }, 3000); 
    }
}


// Fonction pour gérer la défaite
function loose() {
    // Animation du personnage lors de la perte
    perso.element.classList.add('loose-animation');

    const youLooseMessage = document.getElementById('you-loose-message');
    youLooseMessage.style.display = 'block';
    youLooseMessage.innerText = `Your score: ${score.score}`

    obstacle.cacherTousLesObstacles();

    // Affichage du message "You Lose" après l'animation
    setTimeout(() => {
        reinitialiserJeu();
        youLooseMessage.style.display = 'none';
    }, perso.looseAnimationDuration);
}




function reinitialiserJeu() {
    // Réinitialiser le score
    score.score = 0;
    score.elementScore.innerText = score.score;

    perso.positionTaille();

    // Réinitialiser les obstacles
    obstacle.positionInitialeObstacle1();
    obstacle.positionInitialeObstacle2();
    obstacle.positionInitialeObstacle3();
    obstacle.positionInitialeObstacle4();
    obstacle.positionInitialeObstacle5();
    obstacle.positionInitialeObstacle6();
    obstacle.positionInitialeObstacle7();
    obstacle.positionInitialeObstacle8();
    obstacle.positionInitialeObstacle9();
}



const score = new Score();
score.demarrerMAJScore();
  
  

const perso = new Personnage();
const obstacle = new Obstacle();



// Vérification de la collision
setInterval(() => {
    perso.checkCollision(obstacle.obstacle1);
    perso.checkCollision(obstacle.obstacle2);
    perso.checkCollision(obstacle.obstacle3);
    perso.checkCollision(obstacle.obstacle4);
    perso.checkCollision(obstacle.obstacle5);
    perso.checkCollision(obstacle.obstacle6);
    perso.checkCollision(obstacle.obstacle7);
    perso.checkCollision(obstacle.obstacle8);
    perso.checkCollision(obstacle.obstacle9);
    
}, 100);


addEventListener('keydown',({key}) =>{
    switch (key) {
        case 'ArrowUp':
            perso.saut();
            break;
        case 'ArrowDown':
            perso.glissade();
            break;
        
    }   
})