keyboard();

function keyboard() {
    const keyboardContainer = document.querySelector(`.keyboard-container`);
    keyboardContainer.addEventListener(`click` , (e)=>{
        if (e.target) {
            console.log(e.target);
        }
    });
}