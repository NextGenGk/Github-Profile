import INFO from '../../data/data.js';
import './readme.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function Readme() {
    const readmeContent = marked(INFO.main.Readme);
    const sanitizedContent = DOMPurify.sanitize(readmeContent);

    document.querySelector('.readme').innerHTML = `
        <div class="readme-header">
            <p>
                ${INFO.main.username}
                <span>/</span>
                README<span>.md</span>
            </p>
        </div>
        <div class="md">
            ${sanitizedContent}
        </div>
    `;
}

export default Readme;
