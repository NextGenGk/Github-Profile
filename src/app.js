import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import "./app.css";
import INFO from "./data/data.js";
import Profile from "./components/Profile/Profile.js";
import Readme from "./components/Readme/Readme.js";

document.querySelector("#app").innerHTML = `
    <header class="header"></header>
        <main class="main">
            <section class="hero">
                <section class="profile">
                </section>
                <section class="readme">
                </section>
            </section>
        </main>
    <footer class="footer"></footer>
`

NavBar();
Profile();
Readme();
Footer();