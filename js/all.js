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
  document.getElementById('total').textContent = hamBurgerCash  + colaNum;
}


