import "./style.scss";
import { inspirations, archivas } from './assets/js/img';
import HEADER from "./assets/js/components/header";
import FOOTER from "./assets/js/components/footer";

let copy: any;

const codes: Array<HTMLElement> = Array.prototype.slice.call(
	document.getElementsByTagName("code")

);



document.addEventListener("DOMContentLoaded", function() {
	let div = document.createElement("div");
	div.id = "copy";
	div.textContent = "Copied!";
	document.body.appendChild(div);
	copy = div;

	addCopyHintEventListener();
	renderHeader();
	renderFooter();
	renderGallery('gallery');
	renderGallery('archivasGallery');
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
	const ARCHIVAS_GALLERY = document.getElementById(name);
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
					<img src="images/inspirations/${file}">
					<figcaption>${file}</figcaption>
				</figure>
				`;
		}

		GALLERY.insertAdjacentHTML("beforeend", tmpl);
	}

	if(ARCHIVAS_GALLERY && name === "archivasGallery") {
		for (let file of archivas) {
			tmpl += `
					<figure>
						<a class="archivePhotoLink" target="_blank" href="images/archivas/${file}"> 
							<img src="images/archivas/${file}">
							<figcaption>${file}</figcaption>
						</a>
					</figure>
				`;
		}

		GALLERY.insertAdjacentHTML("beforeend", tmpl);
	}


}

function renderHeader() {
	document.getElementById('header').insertAdjacentHTML("beforeend", HEADER);
	addClickOnIpListener();
}
function renderFooter() {
	document.getElementById('footer').insertAdjacentHTML("beforeend", FOOTER);
}

function addClickOnIpListener() {
	document.querySelector('.serverIp').addEventListener("click", (e: Event & { target: HTMLElement }) => {
		navigator.clipboard.writeText( 'play.krdevelop.pl').then(() => {
			copy.classList.add("showUp");

			setTimeout(() => {
				copy.classList.remove("showUp");
			}, 1000);
		});
	});
}