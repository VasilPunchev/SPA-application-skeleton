import { render as renderer } from "../../lib.js";
const root = document.querySelector(); // TODO check root for views 

export function render(temp) {
    renderer(temp , root) 
}