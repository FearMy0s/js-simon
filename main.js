let Arrayrandom = [];
let Arrayanswer =[];
function Random() {
    for(let i = 1 ; i<=5; i++){
    const NumRandom =  Math.floor(Math.random() * 100 );
    alert(NumRandom);
    Arrayrandom.push(NumRandom)
 }
 console.log(Arrayrandom)
}
Random();

setTimeout(Userimput , 30000);
function Userimput() {
    for(let i=1 ; i<=5;i++){    
    const  Usernumber = Number (prompt("Inserisci Numero"));
    if (Arrayrandom.includes(Usernumber)) {
      Arrayanswer.push(Usernumber);
}
    }
    console.log(Arrayanswer)
    alert(`Hai indovinato ${Arrayanswer.length} numeri: ${Arrayanswer}`);
}