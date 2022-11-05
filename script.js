let number = ``,
    operator =  ``;
keyborad();

function keyborad() {
    const keys = document.querySelector(`.keyboard-container`);
    const operationScreen = document.querySelector(`.operation`);
    const lcd = document.querySelector(`.lcd`);
    let screenUpdate = false;
    keys.addEventListener(`click`, (e) => {
        if (e.target && e.target.classList.contains(`key`)) {
            for(let item of keys.children) {
                if (item.classList.contains(`selected`)) {
                    item.classList.remove(`selected`);
                }
            }
            e.target.classList.add(`selected`);

            switch (true) {
                case e.target.classList.contains(`Ca`):
                    clearAllButton(lcd, operationScreen);
                    break;
                case e.target.classList.contains(`c`):
                    deleteButton(lcd);
                    break;
                case e.target.classList.contains(`sign`):
                    signButton(lcd);
                    break;
                case e.target.classList.contains(`equal`):
                    equalButton(lcd, operationScreen, operate);
                    break;
                case e.target.classList.contains(`sign-k`):
                    operationButtons (lcd, operationScreen, e.target, screenUpdate);
                    break;
                case e.target.classList.contains(`dot`):
                    screenUpdate = writeDot(lcd, e.target);
                    break;
                default:
                    screenUpdate = writeNumbers(lcd, e.target);
                    break;
            }
        }
    });
}

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    if (b === `0`) {
        alert(`Can't divide by 0`);
        return;
    }
    return Number(a) / Number(b);
}

function operate(a, b, operator) {
    switch (operator) {
        case `+`:
            a = add(a,b);
            break;
        case `-`:
            a = subtract(a,b);
            break;
        case `x`:
            a = multiply(a,b);
            break;
        case `/`:
            a = divide(a,b);
            break;
    }
    return a;
}

function writeNumbers(lcd, e) {
    if (lcd.textContent === `0`) {
        lcd.textContent = e.textContent;
    }
    else {
        lcd.textContent += e.textContent;
    }
    return true; 
}

function writeDot(lcd, e) {
    if (lcd.textContent.includes(`.`)) return;
    lcd.textContent += e.textContent;
    return true;
}

function deleteButton(lcd) {
    lcd.textContent= lcd.textContent.substring(0, lcd.textContent.length-1)
    if (lcd.textContent.length === 0) {
        lcd.textContent = `0`;
    }
}

function clearAllButton(lcd, operationScreen) {
    lcd.textContent = ``;
    operationScreen.textContent = ``;
    number = ``;
    operator = ``;   
}

function signButton(lcd) {
    if (!lcd.textContent.includes(`-`)){
        if (lcd.textContent === `0` || lcd.textContent.length === 0) {
            return;
        }
        lcd.textContent = `-${lcd.textContent}`;
    }
    else {
        lcd.textContent = lcd.textContent.slice(1);
    }
}

function equalButton(lcd, operationScreen, operate) {
    if (number.length > 0 && lcd.textContent.length > 0 && lcd.textContent !== `.`) {
        operationScreen.textContent = `${number} ${operator} ${lcd.textContent} =`;
        lcd.textContent = operate(number, lcd.textContent, operator);
        number = ``;
        operator= ``;
    }
}

function operationButtons (lcd, operationScreen, e, screenUpdate) {
    if (number.length === 0 && lcd.textContent.length === 0 || lcd.textContent === `.`) return;
    else if (number.length > 0 && lcd.textContent.length > 0 && lcd.textContent !== `.`) {
        lcd.textContent = operate(number, lcd.textContent, operator);
        number = ``;
    }
    operator = e.textContent;
    if (screenUpdate === true) {
        number = lcd.textContent;
        lcd.textContent = ``;
    }
    operationScreen.textContent = `${number} ${operator}`;
    screenUpdate = false;  
}