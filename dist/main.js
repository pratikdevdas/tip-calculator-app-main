const billInput = document.querySelector('.billInput')

const result = document.querySelector('.result')
billInput.addEventListener('input', updated);

function updated (e) {
    const val = result.textContent = e.target.value
    console.log(val)
    return val 
    
} 

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btn5 = document.querySelector('.btn-5')

btn1.addEventListener('onClick',()=>console.log('h'))
// btn2.addEventListener('onClick'()=>{})
// btn3.addEventListener('onClick'()=>{})
// btn4.addEventListener('onClick'()=>{})
// btn5.addEventListener('onClick'()=>{})