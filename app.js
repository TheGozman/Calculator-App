const universal = document.querySelectorAll(`*`);
const body = document.querySelector(`body`);
const keypadBg = document.querySelector(`main`);
const btns = document.querySelectorAll(`li`);
const display = document.querySelector(`section`);
const total = document.querySelector(`.total`);
const del = document.querySelector(`.delete`);
const reset = document.querySelector(`.reset`);
const toggle = document.querySelector(`.state__toggle`);
const toggleIndicator = document.querySelector(`.toggle__indicator`);
const firstState = document.querySelector(`.first__state`);
const secondState = document.querySelector(`.second__state`);
const thirdState = document.querySelector(`.third__state`);
const contrast = document.querySelectorAll(`.contrast`);
let state = ``;

firstState.addEventListener(`click`, () => {
    state = `first`;
    body.style.backgroundColor = `hsl(222, 26%, 31%)`;
    display.style.backgroundColor = `hsl(224, 36%, 15%)`;
    keypadBg.style.backgroundColor = `hsl(223, 31%, 20%)`;
    universal.forEach(el => {
        el.style.color = `hsl(0, 100%, 100%)`;
    })
    btns.forEach(btn => {
        btn.style.color = `hsl(221, 14%, 31%)`;
        btn.style.backgroundColor = `hsl(0, 0%, 90%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(28, 16%, 65%)`
    })
    contrast.forEach(btn => {
        btn.style.color = `hsl(0, 100%, 100%)`;
        btn.style.backgroundColor = `hsl(225, 21%, 49%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(224, 28%, 35%)`
    })
    total.style.color = `hsl(0, 100%, 100%)`;
    total.style.backgroundColor = `hsl(6, 63%, 50%)`;
    total.style.boxShadow = `0 5px 1px -1px hsl(6, 70%, 34%)`;
    toggle.style.backgroundColor = `hsl(223, 31%, 20%)`;
    toggle.style.border = `1px solid hsl(223, 31%, 20%)`;
    toggleIndicator.style.backgroundColor = `hsl(6, 63%, 50%)`;
})

secondState.addEventListener(`click`, () => {
    state = `second`;
    body.style.backgroundColor = `hsl(0, 0%, 90%)`;
    display.style.backgroundColor = `hsl(0, 0%, 93%)`;
    keypadBg.style.backgroundColor = `hsl(0, 5%, 81%)`;
    universal.forEach(el => {
        el.style.color = `hsl(60, 10%, 19%)`;
    })
    btns.forEach(btn => {
        btn.style.color = `hsl(60, 10%, 19%)`;
        btn.style.backgroundColor = `hsl(0, 0%, 90%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(35, 11%, 61%)`
    })
    contrast.forEach(btn => {
        btn.style.color = `hsl(0, 100%, 100%)`;
        btn.style.backgroundColor = `hsl(185, 42%, 37%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(185, 58%, 25%)`
    })
    total.style.color = `hsl(0, 100%, 100%)`;
    total.style.backgroundColor = `hsl(25, 98%, 40%)`;
    total.style.boxShadow = `0 5px 1px -1px hsl(25, 99%, 27%)`;
    toggle.style.backgroundColor = `hsl(0, 5%, 81%)`;
    toggle.style.border = `1px solid hsl(0, 5%, 81%)`;
    toggleIndicator.style.backgroundColor = `hsl(25, 98%, 40%)`;
})

thirdState.addEventListener(`click`, () => {
    state = `third`;
    body.style.backgroundColor = `hsl(268, 75%, 9%)`;
    display.style.backgroundColor = `hsl(268, 71%, 12%)`;
    keypadBg.style.backgroundColor = `hsl(268, 71%, 12%)`;
    universal.forEach(el => {
        el.style.color = `hsl(52, 100%, 62%)`;
    })
    btns.forEach(btn => {
        // btn.style.color = `hsl(60, 10%, 19%)`;
        btn.style.backgroundColor = `hsl(268, 47%, 21%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(290, 70%, 36%)`
    })
    contrast.forEach(btn => {
        btn.style.color = `hsl(0, 100%, 100%)`;
        btn.style.backgroundColor = `hsl(281, 89%, 26%)`;
        btn.style.boxShadow = `0 5px 1px -1px hsl(285, 91%, 52%)`
    })
    total.style.color = `hsl(198, 20%, 13%)`;
    total.style.backgroundColor = `hsl(176, 100%, 44%)`;
    total.style.boxShadow = `0 5px 1px -1px hsl(177, 92%, 70%)`;
    toggle.style.backgroundColor = `hsl(268, 71%, 12%)`;
    toggle.style.border = `1px solid hsl(268, 71%, 12%)`;
    toggleIndicator.style.backgroundColor = `hsl(176, 100%, 44%)`;
})

const displayItems = [];
let variables = [];

btns.forEach(btn => {
    btn.addEventListener(`click`, () => {
        if (btn.textContent !== `DEL` && btn.textContent !== `RESET` && btn.textContent !== `=` && btn.textContent !== `x`) {
            variables.push(btn.textContent);
            displayItems.push(btn.textContent);
            const expressn = displayItems.join(``);
            display.textContent = expressn;
            display.scrollLeft = display.scrollWidth;
        }

        if (btn.textContent === `x`) {
            variables.push(`*`);
            displayItems.push(btn.textContent);
            const expressn = displayItems.join(``);
            display.textContent = expressn;
            display.scrollLeft = display.scrollWidth;
        }

        if (btn.textContent === `DEL`) {
            displayItems.pop();
            variables.pop();
            if (variables.length === 0) {
                display.textContent = ``;
            } else {
                display.textContent = displayItems.join(``);
            }
        }

        if (btn.textContent === `+` || btn.textContent === `x` || btn.textContent === `-` || btn.textContent === `/`) {
            if (typeof variables[variables.length - 1] !== `number`) {
                variables.pop();
                displayItems.pop();
                variables.push(btn.textContent);
                displayItems.push(btn.textContent);
            }
        }
    })
})

total.addEventListener(`click`, () => {
    const expressn = variables.join(``);
    let char = `,`;
    let regex = new RegExp(char, `gi`);
    const updExpressn = expressn.replace(regex, ``);
    const newExpressn = updExpressn.replace(`x`, `*`);
    const calculatedValue = eval(newExpressn).toLocaleString();

    display.textContent = calculatedValue;
    variables.length = 0;
    variables.push(calculatedValue);
    displayItems.length = 0;
    displayItems.push(calculatedValue);
    display.scrollLeft = display.scrollWidth;
})

reset.addEventListener(`click`, () => {
    display.textContent = ``;
    variables.length = 0;
    displayItems.length = 0;
})
