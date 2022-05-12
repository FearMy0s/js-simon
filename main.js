let Arrayrandom = [];
let Arrayanswer =[];
const numbers = Arrayanswer.join(" - ");
function Random() {
    for(let i = 1 ; i<=5; i++){
    const NumRandom =  Math.floor(Math.random() * 100 );
    alert(NumRandom);
    Arrayrandom.push(NumRandom)
 }
 console.log(Arrayrandom)
}
let PcNumbers = Random();
setTimeout(Userimput,1000);

function Userimput() {
    for(let i=1 ; i<=5;i++){    
        Usernumber = prompt("Inserisci Numero");
        Arrayanswer.push(Usernumber);
        if (Arrayrandom.includes(Usernumber)) {
          Arrayanswer.push(Usernumber);
      }
    }    
    }
    let Results = Userimput();
    alert(`Hai indovinato ${Arrayanswer.length} numeri: ${numbers}`);