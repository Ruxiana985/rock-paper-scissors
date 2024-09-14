let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissors');  
let point1 =  document.querySelector('.user-point');
let point2 =  document.querySelector('.comp-point');
let user=document.querySelector('.user');
let comp= document.querySelector('.comp');
let start=document.querySelector('.start');
let count1=0;
let count2=0;




rock.onclick = function rockop() {

  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0:
      count1=0;
      count2=0;
      break;
    case 1:
      count1=0;
      count2++;
      break;
    case 2:
      count1++;
      count2=0;
      break;
    
  }
  
  point1.textContent=`ROUND 1 POINT: ${count1}`
  point2.textContent=`ROUND 1 POINT: ${count2}`
  
};

paper.onclick = function paperop() {
  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0:
      count1++;
      count2=0;
      break;
    case 1:
     count1=0;
      count2=0;
      break;
    case 2:
      count1=0;
      count2++;
      break;
    
  
  }
  point1.textContent=`ROUND 1 POINT: ${count1}`
  point2.textContent=`ROUND 1 POINT: ${count2}`
};

scissor.onclick = function sciop() {
  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0:
      count1=0;
      count2++;
      break;
    case 1:
      count1++;
      count2=0;
      break;
    case 2:
      count1=0;
      count2=0;
      break;
    
  }
  point1.textContent=`ROUND 1 POINT: ${count}`
  point2.textContent=`ROUND 1 POINT: ${count2}`
};
