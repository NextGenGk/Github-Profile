import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import "./app.css";

document.querySelector("#app").innerHTML = `
    <header class="header"></header>
    <main class="main"></main>
    <footer class="footer"></footer>
`

NavBar();
Footer();