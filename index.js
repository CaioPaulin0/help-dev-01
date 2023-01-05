const form = document.getElementById('form')

let inputValue = document.getElementById('password')

function check(value,cssA,cssD){
    let p = document.querySelector(value)
    p.classList.add(`box__form__check--${cssA}`)
    p.classList.remove(`box__form__check--${cssD}`)
}

inputV = (regex, input, div) => {
    if(regex.test(input)){
        check(div,'active','disable')  
        return true
    }
    else{
        check(div,'disable','active')
        return false
    }
}

checkPassword = () => {
    const pass = document.getElementById('password').value
    const pass2 = document.getElementById('passcheck').value
    const text = document.getElementById('textPass')
    if(pass === pass2){
        text.innerText = ''
        return true
    } else{
        return text.innerText = "insira a mesma senha"
    }
}

let sendValue

inputValue.addEventListener('input', () => {

    let f1 = inputV(/([A-Z])/g, inputValue.value, "#a1")
    let f2 = inputV(/([a-z])/g, inputValue.value, "#a2")
    let f3= inputV(/([0-9])/g, inputValue.value, "#a3")

   if(f1 === true && f2 === true && f3 === true){
    sendValue = true
   }else{
    sendValue = false
   }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let checkRulesText = document.getElementById('checkRules')

    if(sendValue === true && checkPassword() === true){
        alert('senha cadastrada')
        checkRulesText.innerHTML = ''
        location.reload()
    }
    else{
        checkRulesText.innerHTML = "Preencha todos os requisitos"
        checkRulesText.style.animation = 'not 1s '
    }

})
