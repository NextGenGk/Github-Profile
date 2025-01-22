import './profile.css';
import INFO from '../../data/data.js';

function Profile() {
    document.querySelector('.profile').innerHTML = `
        <div class="main-profile">
            <div class="profile-img">
                <img src=${INFO.assets.logo} alt="">
            </div>
            <div class="profile-name-wapper">
                <span>${INFO.main.name}</span>
            </div>
            <div class="profile-username-wapper">
                <span>${INFO.main.username}</span>
                ·
                <span>${INFO.main.gender}</span>
            </div>
        </div>
        <div class="desc">
            <p>${INFO.main.desc}</p>
        </div>
        ${INFO.main.org && INFO.main.org.trim() !== '' ? `
            <div class="org">
                <div class="org-icon">
                    <img src=${INFO.assets.org} alt="" />
                </div>
                <span>${INFO.main.org}</span>
            </div>
        ` : ''}
        ${INFO.main.location && INFO.main.location.trim() !== '' ? `
            <div class="location">
                <div class="location-icon">
                    <img src=${INFO.assets.location} alt="">
                </div>
                <span>${INFO.main.location}</span>
            </div>
        ` : ''}
        ${INFO.main.email && INFO.main.email.trim() !== '' ? `
            <div class="email">
                <div class="email-icon>
                    <img src=${INFO.assets.mail} alt="" />
                </div>
                <span>${INFO.main.email}</span>
            </div>
        ` : ''}
        ${INFO.main.website && INFO.main.website.trim() !== '' ? `
            <div class="website">
                <div class="website-icon">
                    <img src=${INFO.assets.link} alt="" />
                </div>
                <a href=${INFO.main.website} target="_blank">${INFO.main.website}</a>
            </div>
        ` : ''}
        <!-- Twitter -->
        ${INFO.main.twitter_username && INFO.main.twitter_username.trim() !== '' ? `
            <div class="twitter">
                <div class="twitter-icon">
                    <img src=${INFO.assets.twitter} alt="" />
                </div>
                <a href=${INFO.main.twitter} target="_blank">${INFO.main.twitter_username}</a>
            </div>
        ` : ''}
        <!-- Instagram -->
        ${INFO.main.instagram && INFO.main.instagram.trim() !== '' ? `
            <div class="instagram">
                <div class="instagram-icon">
                    <img src=${INFO.assets.instagram} alt="" />
                </div>
                <a href=${INFO.main.instagram} target="_blank">${INFO.main.instagram_username}</a>
            </div>
        ` : ''}
        <div class="exprience">
            <div class="title-wapper">
                <span>Exprience</span>
                <div class="works">
                    ${
                        INFO.work.map(work => {
                            return `
                                <div class="work">
                                    <div class="work-info">
                                        <div class="work-company-icon">
                                        <img src=${work.icon} />
                                        </div>
                                        <div class="work-company">
                                            <span>${work.company}</span>
                                        </div>
                                    </div>
                                    <div class="work-info">
                                        <span>${work.title}</span>
                                        <span>${work.duration}</span>
                                    </div>
                                </div>
                            `
                        })
                    }
                </div>
            </div>
        </div>
        <div class="achivments-wapper">
            ${
                INFO.achivments.map(achivment => {
                    return `
                        <a href=${achivment.url}><img src=${achivment.icon} alt=${achivment.title} /></a>
                    `
                })
            }
        </div>
    `
}

export default Profile;
