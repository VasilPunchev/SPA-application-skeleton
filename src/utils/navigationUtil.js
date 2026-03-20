import { html, render } from "../lib.js";
import { userUtils } from "./userUtils.js";

const navRoot = document.querySelector() // TO DO check nav container 

const navTemp = (hasUser) => html ` 

`
export function updateNav() {
     render(navTemp(userUtils.hasUser()), navRoot);
}