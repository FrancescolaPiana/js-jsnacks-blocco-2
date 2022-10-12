
const button = document.getElementById('btn1')

let fx = function() {
    let number1 = document.getElementById('input1').value 
    console.log(number1);

    if(number1 % 2 == 0){
        document.getElementById('stamp1').innerHTML = number1;
    }
    else{
        let number1b = parseInt(number1 + 1);
        document.getElementById('stamp1').innerHTML = number1b;

    }
}

  

button.addEventListener('click' ,fx)