let number1= "",
    number2= "",
    operator= "";
keyboard();

function keyboard() {
    const keyboardContainer = document.querySelector(`.keyboard-container`);
    const lcd = document.querySelector(`.lcd`);
    keyboardContainer.addEventListener(`click` , (e)=>{
        if (e.target && e.target.classList.contains(`key`)) {
            for(let item of keyboardContainer.children) {
                if (item.classList.contains(`selected`)) {
                    item.classList.remove(`selected`);
                }
            }




            
            switch (e.target.textContent) {
                case `CA`:
                    number2 = ``;
                    lcd.textContent = `0`; 
                break;
                case `C`:
                    number2 = number2.substring(0,number2.length-1);
                    console.log(number2)
                    lcd.textContent = number2;
                    if (number2.length === 0) {
                        lcd.textContent = `0`;
                    }
                break;
                case `+/-`:
                    
                break;
                default:
                    if (e.target.id === `+` ||
                        e.target.id === `-` ||
                        e.target.id === `*` ||
                        e.target.id === `/`) {
                        number1 = number2;
                        number2 = ``;
                        operator = e.target.id;
                        lcd.textContent = ``;
                        console.log(operator);
                    }
                    else if (e.target.id === `=`) {
                        console.log(`he dado igual`);
                        number2 = operate(number1,number2, operator, lcd);
                        lcd.textContent = number2;
                    }
                    else {
                        console.log(number1)
                        number2= number2+e.target.textContent;
                        console.log(number2);
                        lcd.textContent = number2;
                    }
                break;
            }





            e.target.classList.add(`selected`);





            return number1;
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.key>=`0` && e.key<=`9` ||
            e.key === `+` ||
            e.key === `-` ||
            e.key === `*` ||
            e.key === `/` ||
            e.key === `.` ||
            e.key === `=` ||
            e.key === `Backspace` ||
            e.key === `s` ||
            e.key === `Delete`) {
            for(let item of keyboardContainer.children) {
                if (item.classList.contains(`selected`)) {
                    item.classList.remove(`selected`);
                }
                if (item.id === e.key) {
                    item.classList.add(`selected`);
                }
            }
            console.log(number1)
            number1= number1+e.key;
            console.log(number1);
            return number1;
        }
    });




    function add(a,b) {
        return parseInt(a) + parseInt(b);
    }

    function subtract(a,b) {
        return parseInt(a) - parseInt(b);
    }

    function multiply(a,b) {
        return parseInt(a) * parseInt(b);
    }

    function divide(a,b) {
        return parseInt(a) / parseInt(b);
    }

    function operate(a, b, sign, lcd) {
        let result = 0;
        switch (sign) {
            case `+`:
                result=add(a,b);
            break;
            case `-`:
                result=subtract(a,b);
            break;
            case `*`:
                result=multiply(a,b);
            break;
            case `/`:
                result=divide(a,b);
            break;
            default:
            break;  
        }
        // lcd.textContent = result;
        return result;
    }
}