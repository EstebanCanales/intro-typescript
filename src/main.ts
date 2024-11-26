import { charmander } from "./bases/06-decorators2";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
	`<h1>Hola, ${charmander}</h1>`;
