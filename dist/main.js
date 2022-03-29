let billInput = document.querySelector('.billInput')
const personInput = document.querySelector('.peopleInput')
const result = document.querySelector('#value1')
const result2 = document.querySelector('#value2')
const btn = document.getElementsByClassName('btn')
const reset = document.querySelector('.reset')
const custom = document.querySelector('.custom')
let a,b=0,c,k,j,res;

const buttonValue = (e) => {
    b = Number(e.target.value)
    calculate()
    console.log(b)
    return b
}

const billValue = (e) => {
    a = Number(e.target.value)
    calculate()
    console.log(a)
    return a
}

const personValue = (e) => {
    c = Number(e.target.value)
    calculate()
    console.log(c)
    return c
}

const resetter = () => {
    a = 0
    b = 0 
    c = 0
    calculate()
    console.log('r')
    return
}

btn[0].addEventListener('click', buttonValue)
btn[1].addEventListener('click', buttonValue)
btn[2].addEventListener('click', buttonValue)
btn[3].addEventListener('click', buttonValue)
btn[4].addEventListener('click', buttonValue)
custom.addEventListener('input', buttonValue)

billInput.addEventListener('input', billValue);
personInput.addEventListener('input', personValue);

reset.addEventListener('click', resetter)
console.log()

function calculate (){
    res = a*b/100
    console.log(a,b,c)
    k = (res + a)/c
    j = res/c;
    if (isNaN(k) || k === Infinity  ){
        result.textContent = '$0.00';
        result2.textContent = '$0.00';
        return
    }
    else {
        result.textContent = `$${Math.round(j * 100)/100}`; 
        result2.textContent = `$${Math.round(k * 100)/100}`;
        return
    }
} 

