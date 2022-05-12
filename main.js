let Arrayrandom = [];
let Arraynumber =[];
let Arrayanswer =[];
function Random() {
    return Math.floor(Math.random() * 100 );
}
for(let i = 1 ; i<=5; i++){
    const Numrandom = Random();
    alert(Random());
    Arrayrandom.push(Numrandom)
}
console.log(Arrayrandom)
setTimeout(Userimput,1000);

function Userimput() {
    for(i=1 ; i<=5;i++){
        Usernumber = prompt("Inserisci Numero");
        const Num = Usernumber;
        Arraynumber.push(Num);
        if (Arrayrandom.includes(Num)) {
          correctNumbers.push(Num);
      }
    }    
    const numbers = Arrayanswer.join(" - ");
    alert(`Hai indovinato ${Arrayanswer.length} numeri: ${numbers}`);
  }
 