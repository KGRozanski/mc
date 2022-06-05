import "./style.scss";
import "./style2.scss";
// let copy: any;

// const codes: Array<HTMLElement> = Array.prototype.slice.call(
// 	document.getElementsByTagName("code")
// );

// document.addEventListener("DOMContentLoaded", () => {
// 	let div = document.createElement("div");
// 	div.id = "copy";
// 	div.textContent = "Skopiowano!";
// 	document.body.appendChild(div);
// 	copy = div;
// });

// codes.forEach((code: HTMLElement) => {
// 	code.addEventListener("click", (e: Event & { target: HTMLElement }) => {
// 		navigator.clipboard.writeText(e.target.innerText).then(() => {
// 			console.log(copy);
// 			copy.classList.add("showUp");

// 			setTimeout(() => {
// 				copy.classList.remove("showUp");
// 			}, 1000);
// 		});
// 	});
// });

// document.addEventListener(
// 	"mousemove",
// 	(e: MouseEvent & { target: HTMLElement }) => {
// 		document.getElementById("copy").style.left = e.pageX + 20 + "px";
// 		document.getElementById("copy").style.top = e.pageY + 20 + "px";
// 	}
// );

let tasks: any = [];

const list = document.getElementById("list") as any;
const title = document.getElementById("title") as any;
const desc = document.getElementById("desc") as any;
const adder = document.getElementById("add") as any;

adder.addEventListener("click", () => {
    add();
});

window.addEventListener("keypress", (e: any) => {
    if (e.keyCode === 13) {
        add();
    }
});

function add() {
    tasks.push({
        title: title.value,
        desc: desc.value,
    });

    render();
    addListeners();
}

function render() {
    list.innerHTML = '';

    tasks.forEach((element: any) => {
        const input = document.createElement("input");
        input.value = element.title;
        input.readOnly = true;

        const wrapper = document.createElement("div");
        wrapper.className = 'task';

        const content = document.createElement("div");
        content.appendChild(input);

        const actions = document.createElement("div");
        actions.className = "actions"

        const delBtn = document.createElement("button");
        delBtn.append(document.createTextNode('Delete'));

        const editBtn = document.createElement("button");
        editBtn.append(document.createTextNode('Edit'));


        wrapper.appendChild(content);
        actions.appendChild(delBtn);
        actions.appendChild(editBtn);
        wrapper.appendChild(actions);

        list.appendChild(wrapper);

    });

}

function addListeners() {
    let elements = document.querySelectorAll('.task');
    elements.forEach((element, index) => {
        element.addEventListener("click", (el: any) => {
            tasks.splice(index, 1);
            render();
            addListeners();
        });
    });
}

