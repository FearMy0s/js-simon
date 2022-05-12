let Arrayrandom = [];
let Arrayanswer =[];
const numbers = Arrayanswer.join(" - ");
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
    for(let i=1 ; i<=5;i++){    
        Usernumber = prompt("Inserisci Numero");
        Arrayanswer.push(Usernumber);
        if (Arrayrandom.includes(Usernumber)) {
          Arrayanswer.push(Usernumber);
      }
    }    
    alert(`Hai indovinato ${Arrayanswer.length} numeri: ${numbers}`);
  }
 