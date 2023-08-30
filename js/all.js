/*let hamBurger = 5 ;
let hamBurgerCash = 40 ;
let cola = 4 ;
let colaCash = 20 ;

function total(){
  let hamBurgerTotal = hamBurger * hamBurgerCash;
  let colaTotal = cola * colaCash;
  total = hamBurgerTotal + colaTotal;

}

total();

document.getElementById('hamBurger').textContent = hamBurger;
document.getElementById('cola').textContent = cola;
document.getElementById('total').textContent = total;
document.getElementById('calcuLate').onclick = function() {
  alert('計算中');
}
*/




document.getElementById('calcuLate').onclick = function() {
  let hamBurgerCash = 40 ;
  let colaCash = 20 ;
  let hamBurgerNum = parseInt(document.getElementById('hamBurger').value)*hamBurgerCash;
  let colaNum = parseInt(document.getElementById('cola').value)*colaCash;
  document.getElementById('total').textContent = hamBurgerNum  + colaNum;
}


let member = false;
let birthday = true;


if (andCheck = member == true && birthday == true){
  document.getElementById('andCheck').textContent = '是的，我可以使用折扣';
}else{
  document.getElementById('andCheck').textContent = '我不符合資格';
}

if (orCheck = member == true || birthday == true){
  document.getElementById('orCheck').textContent = '太棒了我可以折扣';
}else{
  document.getElementById('orCheck').textContent = '我不符合資格';
}


let guest = 1500;

function sopping(gift){
  document.getElementById('shoppingGiftA').textContent = '那我可以換' + gift;
}

function shoppingGift(){
  if ( guest >= 1000 ){
    sopping('布偶');
  }
  else if( guest >=500 && guest >300 ){
    sopping('收納箱');
  }
  else if( guest >=300 && guest >200 ){
    sopping('購物袋');
  }
  else{
    sopping('一個寂寞');
  };  
}

shoppingGift();


let betray = '劉宗翰';

switch(betray){
  case '林岳廷':
    alert('賣賣王');
  break;
  case '邱品鈞':
    alert('你敷衍我');
  break;
  case '劉宗翰':
    alert('你敷衍我好像蠻久了');
  break;
  default:
}