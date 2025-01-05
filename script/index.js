const elementSquare = document.querySelector('.square-radius')
const inlineStyles = elementSquare.style 
inlineStyles.transition = '1s'

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

function copyText() {
    const textInDiv = document.querySelector('.square-radius');
    const copyText = textInDiv.innerText;
    navigator.clipboard.writeText(copyText);
}

function showvalue() {
    const anglesTopLeft = parseInt(document.getElementById('input-separate-value-top-left').value || 0);
    const anglesTopRight = parseInt(document.getElementById('input-separate-value-top-right').value || 0);
    const anglesBottomLeft = parseInt(document.getElementById('input-separate-value-bottom-left').value || 0);
    const anglesBottomRight = parseInt(document.getElementById('input-separate-value-bottom-right').value || 0);

    console.log(anglesTopLeft);
    console.log(anglesTopRight);
    console.log(anglesBottomLeft);
    console.log(anglesBottomRight);


    const topLeftSelectList = document.getElementById('top-left-select-list').value ;
    const topRightSelectList = document.getElementById('top-right-select-list').value;
    const bottomLeftSelectList = document.getElementById('bottom-left-select-list').value;
    const bottomRightSelectList = document.getElementById('bottom-right-select-list').value;

    console.log()

    inlineStyles.borderRadius = `${anglesTopLeft + topLeftSelectList} ${anglesTopRight + topRightSelectList} ${anglesBottomLeft + bottomLeftSelectList} ${anglesBottomRight + bottomRightSelectList}`
    document.getElementById('value-border-radius').innerText = `${anglesTopLeft + topLeftSelectList} ${anglesTopRight + topRightSelectList} ${anglesBottomLeft + bottomLeftSelectList} ${anglesBottomRight + bottomRightSelectList}`
}