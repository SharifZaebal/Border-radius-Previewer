const elementSquare = document.querySelector('.square-radius')
const inlineStyles = elementSquare.style 

function allAngles () {
    const inputValues = document.getElementById('all-values').value;
    inlineStyles.borderRadius = `${inputValues}`
    document.getElementById('value-border-radius').innerText = inputValues
}
function pixelsForAllAngles () {
    const inputValues = document.getElementById('all-values').value;
    const type = document.getElementById('px').value;
    inlineStyles.borderRadius = `${inputValues}${type}`
    document.getElementById('value-border-radius').innerText = `${inputValues}${type}`
}
function percentagesForAllAngles () {
    const inputValues = document.getElementById('all-values').value;
    const type = document.getElementById('%').value;
    inlineStyles.borderRadius = `${inputValues}${type}`
    document.getElementById('value-border-radius').innerText = `${inputValues}${type}`
}
function emForAllAngles () {
    const inputValues = document.getElementById('all-values').value;
    const type = document.getElementById('em').value
    inlineStyles.borderRadius = `${inputValues}${type}`
    document.getElementById('value-border-radius').innerText = `${inputValues}${type}`
}