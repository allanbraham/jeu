class Personnage {
    constructor() {
        this.positionTaille();
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
        this.obstacle10 = document.querySelector('.obstacle10');

        this.positionInitialeObstacle1();
        this.positionInitialeObstacle2();
        this.positionInitialeObstacle3();
        this.positionInitialeObstacle4();
        this.positionInitialeObstacle5();
        this.positionInitialeObstacle6();
        this.positionInitialeObstacle7();
        this.positionInitialeObstacle8();
        this.positionInitialeObstacle9();
        this.positionInitialeObstacle10();
        
    }

    positionInitialeObstacle1(){
        this.obstacle1.style.position = 'absolute';
        this.obstacle1.style.bottom = '2%';
        this.obstacle1.style.right = '0';
    }
    positionInitialeObstacle2() {
        this.obstacle2.style.position = 'absolute';
        this.obstacle2.style.bottom = '12%';
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
        this.obstacle5.style.bottom = '12%';
        this.obstacle5.style.right = '0';
    }
    positionInitialeObstacle6(){
        this.obstacle6.style.position = 'absolute';
        this.obstacle6.style.bottom = '2%';
        this.obstacle6.style.right = '0';
    }
    positionInitialeObstacle7() {
        this.obstacle7.style.position = 'absolute';
        this.obstacle7.style.bottom = '12%';
        this.obstacle7.style.right = '0';
    }
    positionInitialeObstacle8() {
        this.obstacle8.style.position = 'absolute';
        this.obstacle8.style.bottom = '12%';
        this.obstacle8.style.right = '0';
    }
    positionInitialeObstacle9(){
        this.obstacle9.style.position = 'absolute';
        this.obstacle9.style.bottom = '2%';
        this.obstacle9.style.right = '0';
    }
    positionInitialeObstacle10() {
        this.obstacle10.style.position = 'absolute';
        this.obstacle10.style.bottom = '12%';
        this.obstacle10.style.right = '0';
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

  

const score = new Score();
score.demarrerMAJScore();
  
  

const perso = new Personnage();
const obstacle = new Obstacle();


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