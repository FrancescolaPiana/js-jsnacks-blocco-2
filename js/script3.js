const num = [1, 2, 3, 4, 5, 6, 7]
console.log(num);
document.getElementById("array11").innerHTML = num;
let somma = 0;

for (let i = 0; i <= num.length; i++) {
    if (i % 2 != 0){
        console.log(i);

        let moment = i;
        console.log(moment);
       
        somma = somma + moment;
        console.log(somma);
        document.getElementById('somma').innerHTML = somma
    }
    
}