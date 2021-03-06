
"use scrpit";

let userLim = document.getElementById('limit');
const hiddenResultForm = document.getElementById('forma');
let resultText = document.getElementById('resultext');
let randomColor1 = document.getElementById('color1');
let randomColor2 = document.getElementById('color2');
let colorcost1 = getRandomInt(0,100);
let colorcost2 = getRandomInt(0,100);
let taxcost1 = getRandomInt(0,100);
let taxcost2 = getRandomInt(0,100);
let way1 = colorcost1 + taxcost1; 
let way2 = colorcost2 + taxcost2; 
let randomLimits = document.getElementById('randomLimits');
let closeButton = document.getElementById('close');
let currencyButton = document.getElementById('currency');
let resultColor = document.querySelector('.resultColor');
let secondResultColor = document.querySelector('.secondResultColor');
let resultcolorText = document.querySelector('.resultColor-text');
let tittleColor1 = document.getElementById('tittleColor1');
let tittleColor2 = document.getElementById('tittleColor2');
let rgbColorText1 = document.getElementById('rgbColorText-1');
let rgbColorText2 = document.getElementById('rgbColorText-2');
let currencyLetter = "";

hiddenResultForm.style.visibility = 'hidden';

function mainFunc() {
    if(randomLimits.value == 100) {
      colorcost1 = getRandomInt(0,100);
      colorcost2 = getRandomInt(0,100);
      taxcost1 = getRandomInt(0,100);
      taxcost2 = getRandomInt(0,100);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
      }

    if(randomLimits.value == 1000) {
      colorcost1 = getRandomInt(100,1000);
      colorcost2 = getRandomInt(100,1000);
      taxcost1 = getRandomInt(100,1000);
      taxcost2 = getRandomInt(100,1000);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   if(randomLimits.value == 50) {
      colorcost1 = getRandomInt(0,50);
      colorcost2 = getRandomInt(0,50);
      taxcost1 = getRandomInt(0,50);
      taxcost2 = getRandomInt(0,50);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   if(randomLimits.value == 500) {
      colorcost1 = getRandomInt(0,500);
      colorcost2 = getRandomInt(0,500);
      taxcost1 = getRandomInt(0,500);
      taxcost2 = getRandomInt(0,500);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   if(randomLimits.value == 250) {
      colorcost1 = getRandomInt(0,250);
      colorcost2 = getRandomInt(0,250);
      taxcost1 = getRandomInt(0,250);
      taxcost2 = getRandomInt(0,250);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   if(randomLimits.value == 300) {
      colorcost1 = getRandomInt(0,300);
      colorcost2 = getRandomInt(0,300);
      taxcost1 = getRandomInt(0,300);
      taxcost2 = getRandomInt(0,300);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   if(randomLimits.value == 10) {
      colorcost1 = getRandomInt(0,10);
      colorcost2 = getRandomInt(0,10);
      taxcost1 = getRandomInt(0,10);
      taxcost2 = getRandomInt(0,10);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays();
   }

   else {
      colorcost1 = getRandomInt(0,randomLimits.value);
      colorcost2 = getRandomInt(0,randomLimits.value);
      taxcost1 = getRandomInt(0,randomLimits.value);
      taxcost2 = getRandomInt(0,randomLimits.value);
      way1 = colorcost1 + taxcost1;
      way2 = colorcost2 + taxcost2;
      calculateMinimalWay();
      getRandomCostWays(); 
   }
}

function calculateMinimalWay() {
   if(userLim.value > way1 && userLim.value > way2) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями на ваш выбор";
      resultcolorText.textContent = "Оба цвета";
      resultcolorText.style.visibility = 'visible';
      resultColor.style.background = randomColor1.style.background;
      resultColor.style.left = '50%';
      resultColor.style.visibility = "visible";
      secondResultColor.style.visibility = "visible";
      secondResultColor.style.background = randomColor2.style.background;
   }
  
   if(way1 < way2 && userLim.value >= way1 && userLim.value < way2) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      let wayColor1 = randomColor1.style.background;
      resultText.textContent = "Первый путь за " + way1 + " " + currencyLetter + " до магазина с краской- " + wayColor1 +
      " самый минимальный для вашего лимита";
      resultcolorText.style.visibility = "visible";
      resultcolorText.textContent = "Первый цвет";
      resultColor.style.background = randomColor1.style.background;
      resultColor.style.left = '46.5%';
      resultColor.style.visibility = 'visible';
      secondResultColor.style.visibility = 'hidden';
   }
  
   if(way2 < way1 && userLim.value >= way2 && userLim.value < way1) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      let wayColor2 = randomColor2.style.background;
      resultText.textContent = "Второй путь за " + way2 + " " + currencyLetter + " до магазина с краской- " + wayColor2 +  
      "; самый минимальный для вашего лимита";
      resultcolorText.textContent = "Второй цвет";
      resultcolorText.style.visibility = "visible";
      resultColor.style.background = randomColor2.style.background;
      resultColor.style.left = '46.5%';
      resultColor.style.visibility = 'visible';
      secondResultColor.style.visibility = 'hidden';
   }
  
   if(way1 == way2 && userLim.value > way1 && way2) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      resultText.textContent = "Ваш лимит позволяет вам воспользоваться обеями путями на ваш выбор";
      resultcolorText.textContent = "Оба цвета";
      resultcolorText.style.visibility = 'visible';
      resultColor.style.background = randomColor1.style.background;
      resultColor.style.left = '50%';
      resultColor.style.visibility = "visible";
      secondResultColor.style.visibility = "visible";
      secondResultColor.style.background = randomColor2.style.background;
   }
  
   if(userLim.value < way1 && userLim.value < way2 || userLim.value == 0) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      resultText.textContent = 'Ваш лимит очень маленький';
      resultColor.style.visibility = 'hidden';
      secondResultColor.style.visibility = 'hidden';
      resultcolorText.style.visibility = 'hidden';
   }
  
   if(userLim.value < 0) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      resultText.textContent = 'Ваш лимит минусовой, напишете число больше 0 ' + currencyLetter;
      resultColor.style.visibility = 'hidden';
      secondResultColor.style.visibility = 'hidden';
      resultcolorText.style.visibility = 'hidden';
   }

   if(userLim.value == 0 && way1 == 0 && way2 == 0) {
      hiddenResultForm.style.visibility = 'visible';
      closeButton.style.visibility = 'visible';
      resultText.textContent = 'Введите лимит';
      resultColor.style.visibility = 'hidden';
      secondResultColor.style.visibility = 'hidden';
      resultcolorText.style.visibility = 'hidden';
   }
}

function getCurrency() {

   if(currencyButton.value == "$") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "доллар";
      }
      if(userLim.value <= 0 || way1 > 4 || way2 > 4) {
         currencyLetter = "долларов";
      }
      if(way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "доллара";
      }
   }

   if(currencyButton.value == "евро") {
      currencyLetter = "eвро";
   }

   if(currencyButton.value == "грн") {
      currencyLetter = "грн";
   }

   if(currencyButton.value == "рубль") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "рубль";
      }
      if(userLim.value <= 0 || way1 > 4 || way2 > 4) {
         currencyLetter = "рублей";
      }
      if(way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "рубля";
      }
   }

   if(currencyButton.value == "фунт") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "фунт";
      }
      if(userLim.value <= 0 || way1 > 4 || way2 > 4) {
         currencyLetter = "фунтов";
      }
      if(way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "фунта";
      }
   }

   if(currencyButton.value == "юань") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "юань";
      }
      if(userLim.value <= 0 || way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "юаня";
      }
      if(way1 > 4 || way2 > 4) {
         currencyLetter = "юаней";
      }
   }

   if(currencyButton.value == "крона") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "крона";
      }
      if(userLim.value <= 0 || way1 > 4 || way2 > 4) {
         currencyLetter = "крон";
      }
      if(way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "кроны";
      }
   }

   if(currencyButton.value == "злотый") {
      if(userLim.value <= 0 || way1 > 1 || way2 > 1) {
         currencyLetter = "злотых";
      }
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "злотый";
      }
   }

   if(currencyButton.value == "франк") {
      if(way1 == 1 || way2 == 1) {
         currencyLetter = "франк";
      }
      if(userLim.value <= 0 || way1 > 4 || way2 > 4) {
         currencyLetter = "франков";
      }
      if(way1 == 2 || way2 == 2 || way1 == 3 || way2 == 3 || way1 == 4 || way2 == 4) {
         currencyLetter = "франка";
      }
   }  
}

function getRandomColors() {
   randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
   randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
   rgbColorText1.textContent = randomColor1.style.background;
   rgbColorText1.style.color = randomColor1.style.background;
   rgbColorText2.textContent = randomColor2.style.background;
   rgbColorText2.style.color = randomColor2.style.background;
   tittleColor1.style.color = randomColor1.style.background;
   tittleColor2.style.color = randomColor2.style.background;
}

function ifEqualyColors() {
    if(randomColor1.style.background == randomColor2.style.background) {
      randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
      randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
      rgbColorText1.textContent = randomColor1.style.background;
      rgbColorText1.style.color = randomColor1.style.background;
      rgbColorText2.textContent = randomColor2.style.background;
      rgbColorText2.style.color = randomColor2.style.background;
   }
}

function ifEgualyRandomCostWay() {
    if(way1 == way2) {
      getRandomCostWays();
    }
}

function getRandomColor1() {
   randomColor1.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
   rgbColorText1.textContent = randomColor1.style.background;
   rgbColorText1.style.color = randomColor1.style.background;
   tittleColor1.style.color = randomColor1.style.background;
}

function getRandomColor2() {
   randomColor2.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
   rgbColorText2.textContent = randomColor2.style.background;
   rgbColorText2.style.color = randomColor2.style.background;
   tittleColor2.style.color = randomColor2.style.background;
}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomCostWays() {
   colorcost1 = getRandomInt(0,100);
   colorcost2 = getRandomInt(0,100);
   taxcost1 = getRandomInt(0,100);
   taxcost2 = getRandomInt(0,100);
   way1 = colorcost1 + taxcost1;
   way2 = colorcost2 + taxcost2;
}

function closeResultForm() {
   hiddenResultForm.style.visibility = 'hidden';
   closeButton.style.visibility = 'hidden';
   closeButton.style.transition = '0s';
   resultColor.style.visibility = 'hidden';
   resultcolorText.style.visibility = 'hidden';
   secondResultColor.style.visibility = 'hidden';
   colorcost1 = getRandomInt(0,100);
   colorcost2 = getRandomInt(0,100);
   taxcost1 = getRandomInt(0,100);
   taxcost2 = getRandomInt(0,100);
   getRandomColors();
   getRandomCostWays();
}


getRandomColors();
ifEqualyColors();
getRandomCostWays();
ifEgualyRandomCostWay();

