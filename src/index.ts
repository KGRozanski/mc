import "./style.scss";
import {inspirations, others} from './assets/js/images';
import HEADER from "./assets/js/components/header";
let copy: any;

const codes: Array<HTMLElement> = Array.prototype.slice.call(
	document.getElementsByTagName("code")
);


document.addEventListener("DOMContentLoaded", function() {
	let div = document.createElement("div");
	div.id = "copy";
	div.textContent = "Skopiowano!";
	document.body.appendChild(div);
	copy = div;

	addCopyHintEventListener();
	renderHeader();
	renderGallery('gallery');
	renderGallery('othersGallery');
});

function addCopyHintEventListener() {
	document.addEventListener(
		"mousemove",
		(e: MouseEvent & { target: HTMLElement }) => {
			document.getElementById("copy").style.left = e.pageX + 20 + "px";
			document.getElementById("copy").style.top = e.pageY + 20 + "px";
		}
	);
}

codes.forEach((code: HTMLElement) => {
	code.addEventListener("click", (e: Event & { target: HTMLElement }) => {
		navigator.clipboard.writeText(e.target.innerText).then(() => {
			console.log(copy);
			copy.classList.add("showUp");

			setTimeout(() => {
				copy.classList.remove("showUp");
			}, 1000);
		});
	});
});



function renderGallery(name: string) {
	const GALLERY = document.getElementById(name);
	const OTHERS_GALLERY = document.getElementById(name);
	let tmpl = '';



	if(GALLERY && name == "gallery") {
		let sortedInspirations = inspirations.sort(function (a: any, b: any) {
			const LEFT = Number(a.split('.')[0]);
			const RIGHT =  Number(b.split('.')[0]);
	
			if( LEFT > RIGHT ) { return 1; }
	
			if ( LEFT < RIGHT ) { return -1; }
	
			return 0;
		});

		for (let file of sortedInspirations) {
			tmpl += `
				<figure>
					<img src="/images/inspirations/${file}">
					<figcaption>${file}</figcaption>
				</figure>
				`;
		}

		GALLERY.insertAdjacentHTML("beforeend", tmpl);
	}

	if(OTHERS_GALLERY && name === "othersGallery") {
		for (let file of others) {
			tmpl += `
				<figure>
					<img src="/images/others/${file}">
					<figcaption>${file}</figcaption>
				</figure>
				`;
		}

		GALLERY.insertAdjacentHTML("beforeend", tmpl);
	}


}

function renderHeader() {
	document.getElementById('header').insertAdjacentHTML("beforeend", HEADER);
}