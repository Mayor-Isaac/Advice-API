'use strict'
/*https://api.adviceslip.com/advice/{slip_id}*/
const adviceNumber = document.querySelector('.advice-number')
const advice = document.querySelector('.advice')
const dice = document.querySelector('.dice')
const renderAdvice = function(content){
    adviceNumber.textContent = content.id
    advice.textContent = content.advice
}
const getAdvice = function(id){
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then(response => response.json())
    .then(function(data){
        renderAdvice(data.slip)
    })
}
dice.addEventListener('click', function(){
    const randomNum = Math.trunc((Math.random()*224)+1)
    getAdvice(`${randomNum}`)
})