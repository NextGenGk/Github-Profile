import "./Footer.css"
import INFO from "../../data/data.js"

function Footer() {
  document.querySelector(".footer").innerHTML = `
    <span>
      © ${new Date().getFullYear()} ${INFO.main.username}. All rights reserved.
    </span>
  `
}

export default Footer