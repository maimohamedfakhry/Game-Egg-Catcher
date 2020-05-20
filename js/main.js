var basket = document.getElementById("basket");
var h3score = document.querySelector("#basket h3");
var endyourscore = document.querySelector("#end #yourscore");
var divStart = document.getElementById("start");
var divEnd = document.getElementById("end");
var divscore = document.getElementById("score");
var divlife = document.getElementById("life");
var Egg1 = document.querySelector(".egg1");
var Egg2 = document.querySelector(".egg2");
var Egg3 = document.querySelector(".egg3");
var eggbroken1 = document.getElementById("eggbroken1");
var eggbroken2 = document.getElementById("eggbroken2");
var eggbroken3 = document.getElementById("eggbroken3");
var maxleft = window.innerWidth - 0.18 * window.innerWidth;
var leftBox = 0;
var eggg1top = 0;
var eggg2top = 0;
var eggg3top = 0;
var score = 0;
var life = 10;
var valuecounter = 2;
var level1 = 10;
var level2 = 20;
var mybrokenegg1;
var mybrokenegg2;
var mybrokenegg3;
var audiochic = document.querySelector(".audiochic");
var audioegg = document.querySelector(".audioegg");
var audiogameover = document.querySelector(".audiogameover");
var audioscore = document.querySelector(".audioscore");
/////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("mousemove", movebasket);
function movebasket(e) {
  if (e.clientX <= maxleft) {
    basket.style.left = e.clientX;
  }
}

document.addEventListener("keydown", movebaskett);
function movebaskett(e) {
  var keyID = e.keyCode;
  if (keyID == 39) {
    leftBox += 100;
    if (leftBox >= maxleft) {
      leftBox = maxleft;
    }
    basket.style.left = leftBox;
  } else if (keyID == 37) {
    leftBox -= 100;
    if (leftBox <= 0) {
      leftBox = 0;
    }
    basket.style.left = leftBox;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function playGame() {
  divStart.style.display = "none";
  audiochic.play();
  /////////////////////////////////////////////////////
  var myVar1 = setInterval(egg1move, 25);
  function egg1move() {
    eggg1top += valuecounter;
    Egg1.style.top = eggg1top;
    ////////
    if (checkposition(Egg1, basket)) {
      eggg1top = 0;
      Egg1.style.top = eggg1top;
      score++;
      valuecounter = speed(score);
      audioscore.play();
      divscore.innerHTML = "Score " + score;
      h3score.innerHTML = score;
    } else if (checkpos(Egg1, 1)) {
      eggg1top = 0;
      Egg1.style.top = eggg1top;
      life--;
      //////////////
      if (life == 0) {
        eggbroken1.style.display = "none";
        eggbroken2.style.display = "none";
        eggbroken3.style.display = "none";
        audiochic.pause();
        audioegg.pause();
        audiogameover.play();
        h3score.innerHTML = "";
        clearInterval(myVar1);
        clearTimeout(mybrokenegg1);
        eggg1top = 0;
        Egg1.style.top = eggg1top;
        clearInterval(myVar2);
        clearTimeout(mybrokenegg2);
        eggg2top = 0;
        Egg2.style.top = eggg2top;
        clearInterval(myVar3);
        clearTimeout(mybrokenegg3);
        eggg3top = 0;
        Egg3.style.top = eggg3top;
        divEnd.style.display = "block";
        endyourscore.innerHTML = "Your Score is " + score;
      }
      divlife.innerHTML = "Life " + life;
    }
    audioegg.play();
  }
  /////////////////////////////////////////////////////
  var myVar2 = setInterval(egg2move, 35);
  function egg2move() {
    eggg2top += valuecounter;
    Egg2.style.top = eggg2top;
    ////////
    if (checkposition(Egg2, basket)) {
      eggg2top = 0;
      Egg2.style.top = eggg2top;
      score++;
      valuecounter = speed(score);
      audioscore.play();
      divscore.innerHTML = "Score " + score;
      h3score.innerHTML = score;
    } else if (checkpos(Egg2, 2)) {
      eggg2top = 0;
      Egg2.style.top = eggg2top;
      life--;
      if (life == 0) {
        eggbroken1.style.display = "none";
        eggbroken2.style.display = "none";
        eggbroken3.style.display = "none";
        audiochic.pause();
        audioegg.pause();
        audiogameover.play();
        h3score.innerHTML = "";
        clearInterval(myVar1);
        clearTimeout(mybrokenegg1);
        eggg1top = 0;
        Egg1.style.top = eggg1top;
        clearInterval(myVar2);
        clearTimeout(mybrokenegg2);
        eggg2top = 0;
        Egg2.style.top = eggg2top;
        clearInterval(myVar3);
        clearTimeout(mybrokenegg3);
        eggg3top = 0;
        Egg3.style.top = eggg3top;
        divEnd.style.display = "block";
        endyourscore.innerHTML = "Your Score is " + score;
      }
      divlife.innerHTML = "Life " + life;
    }
    audioegg.play();
  }
  ////////////////////////////////////////////////////
  var myVar3 = setInterval(egg3move, 40);
  function egg3move() {
    // Egg3.style.animationPlayState = "running";
    eggg3top += valuecounter;
    Egg3.style.top = eggg3top;
    ////////
    if (checkposition(Egg3, basket)) {
      eggg3top = 0;
      Egg3.style.top = eggg3top;
      score++;
      valuecounter = speed(score);
      audioscore.play();
      divscore.innerHTML = "Score " + score;
      h3score.innerHTML = score;
    } else if (checkpos(Egg3, 3)) {
      eggg3top = 0;
      Egg3.style.top = eggg3top;
      life--;
      ///////////
      if (life == 0) {
        eggbroken1.style.display = "none";
        eggbroken2.style.display = "none";
        eggbroken3.style.display = "none";
        audiochic.pause();
        audioegg.pause();
        audiogameover.play();
        h3score.innerHTML = "";
        clearInterval(myVar1);
        clearTimeout(mybrokenegg1);
        eggg1top = 0;
        Egg1.style.top = eggg1top;
        clearInterval(myVar2);
        clearTimeout(mybrokenegg2);
        eggg2top = 0;
        Egg2.style.top = eggg2top;
        clearInterval(myVar3);
        clearTimeout(mybrokenegg3);
        eggg3top = 0;
        Egg3.style.top = eggg3top;
        divEnd.style.display = "block";
        endyourscore.innerHTML = "Your Score is " + score;
      }
      //////////////////////
      divlife.innerHTML = "Life " + life;
    }
    audioegg.play();
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
function checkposition(egg, basket) {
  // collision bet. egg and basket
  var eggTop = Math.round(egg.getBoundingClientRect().top);
  var eggBottom = Math.round(egg.getBoundingClientRect().bottom);
  var eggheight = Math.round(egg.getBoundingClientRect().height);
  var eggcenter = eggTop + Math.round(eggheight / 2);
  var basketTop = Math.round(basket.getBoundingClientRect().top);
  var basketTopScope = Math.round(
    basketTop + basket.getBoundingClientRect().height
  );
  var eggLeft = Math.round(egg.getBoundingClientRect().left);
  var eggScope = Math.round(eggLeft + egg.getBoundingClientRect().width);
  var basketLeft = Math.round(basket.getBoundingClientRect().left);
  var basketLeftScope = Math.round(
    basketLeft + basket.getBoundingClientRect().width
  );
  if (
    eggcenter >= basketTop &&
    eggcenter <= basketTopScope &&
    eggLeft >= basketLeft &&
    eggScope <= basketLeftScope
  ) {
    return true;
  } else if (eggTop > basketTopScope) {
    return false;
  }
  /*
   else if (
    eggTop >= basketTop &&
    eggTop <= basketTopScope &&
    eggScope > basketLeft &&
    eggScope < basketLeftScope
  ) {
    return true;
  } else if (
    eggTop >= basketTop &&
    eggTop <= basketTopScope &&
    eggLeft < basketLeftScope &&
    eggLeft > basketLeft
  ) {
    return true;
  } 
  */
  ////////////////////////////////////////////////
}
function checkpos(egg, numegg) {
  // collision bet. egg and the floor
  var eggTop = Math.round(egg.getBoundingClientRect().top);
  var eggLeft = Math.round(egg.getBoundingClientRect().left);
  var basketTop = Math.round(basket.getBoundingClientRect().top);
  var basketTopScope = Math.round(
    basketTop + basket.getBoundingClientRect().height
  );
  var maxHeight = basketTopScope + 20;
  if (eggTop > basketTopScope && eggTop <= maxHeight) {
    if (numegg == 1) {
      eggbroken1.style.display = "block";
      mybrokenegg1 = setTimeout(function () {
        eggbroken1.style.display = "none";
      }, 2500);
      eggbroken1.style.left = eggLeft;
    } else if (numegg == 2) {
      eggbroken2.style.display = "block";
      mybrokenegg2 = setTimeout(function () {
        eggbroken2.style.display = "none";
      }, 2500);
      eggbroken2.style.left = eggLeft;
    } else {
      eggbroken3.style.display = "block";
      mybrokenegg3 = setTimeout(function () {
        eggbroken3.style.display = "none";
      }, 2500);
      eggbroken3.style.left = eggLeft;
    }

    return true;
  } else {
    return false;
  }
}
function speed(score) {
  if (score % 10 == 0 && score > 0) {
    valuecounter += 1;
  }
  /*
  if (score == level1) {
    valuecounter += 1;
  }
  if (score == level2) {
    valuecounter += 1;
  }
  */
  return valuecounter;
}
function playAgainGame() {
  divEnd.style.display = "none";
  divStart.style.display = "block";
  life = 10;
  score = 0;
  valuecounter = 2;
  divlife.innerHTML = "Life " + life;
  divscore.innerHTML = "Score " + score;
  h3score.innerHTML = "";
}
