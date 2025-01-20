import "./NavBar.css";
import INFO from "../../data/data.js";

const NavBar = () => {
  document.querySelector(".header").innerHTML = `
    <nav class="top-nav">
        <div class="left-nav">
            <div class="nav-ghlogo">
                <img src=${INFO.assets.ghlogo} alt="nav gh-logo" />
            </div>
            <div class="nav-title">
                <span>${INFO.main.username}</span>
            </div>
        </div>
        <div class="right-nav">
            <div class="nav-logo">
                <img src=${INFO.assets.logo} alt="nav logo" />
            </div>
        </div>
    </nav>
    <nav class="bott-nav">
        <a href="/" class="nav-item"><img src=${INFO.assets.book} />Overview</a>
        <a href="/skills" class="nav-item"><img src=${INFO.assets.psychology} />Skills</a>
        <a href="/projects" class="nav-item"><img src=${INFO.assets.folder} />Projects</a>
        <a href="/blog" class="nav-item"><img src=${INFO.assets.article} />Blog</a>
        <a href="/contact" class="nav-item"><img src=${INFO.assets.mail} />Contact</a>
    </nav>
  `
}

export default NavBar;