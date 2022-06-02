import "./style.scss";

let copy: any;


const codes: Array<HTMLElement> = Array.prototype.slice.call(document.getElementsByTagName("code"));


document.addEventListener("DOMContentLoaded", () => {
    let div = document.createElement('div');
    div.id = 'copy';
    div.textContent = 'Skopiowano!';
    document.body.appendChild(div);
    copy = div;
});

codes.forEach((code: HTMLElement) => {
    code.addEventListener("click", (e: Event & {target: HTMLElement}) => {
        navigator.clipboard.writeText(e.target.innerText)
        .then(() => {

            console.log(copy)
            copy.classList.add('showUp');

            setTimeout(() => {
                copy.classList.remove('showUp');
            }, 1000)
        });
    });
});

document.addEventListener('mousemove', (e: MouseEvent & {target: HTMLElement}) => {
    document.getElementById('copy').style.left = (e.pageX + 20)+'px';
    document.getElementById('copy').style.top = (e.pageY + 20)+'px';

});