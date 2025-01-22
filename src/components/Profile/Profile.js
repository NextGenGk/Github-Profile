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
        <div class="profile-desc">
            <p>${INFO.main.desc}</p>
        </div>
        <div class="profile-social">
            ${INFO.main.org && INFO.main.org.trim() !== '' ? `
                <div class="org profile-social-info">
                    <div class="org-icon">
                        <img src=${INFO.assets.org} alt="" />
                    </div>
                    <span>${INFO.main.org}</span>
                </div>
            ` : ''}
            ${INFO.main.location && INFO.main.location.trim() !== '' ? `
                <div class="location profile-social-info">
                    <div class="location-icon">
                        <img src=${INFO.assets.location} alt="">
                    </div>
                    <span>${INFO.main.location}</span>
                </div>
            ` : ''}
            ${INFO.main.email && INFO.main.email.trim() !== '' ? `
                <div class="email profile-social-info">
                    <div class="email-icon>
                        <img src=${INFO.assets.mail} alt="" />
                    </div>
                    <a href=${`mailto:${INFO.main.email}`}>${INFO.main.email}</a>
                </div>
            ` : ''}
            ${INFO.main.website && INFO.main.website.trim() !== '' ? `
                <div class="website profile-social-info">
                    <div class="website-icon">
                        <img src=${INFO.assets.link} alt="" />
                    </div>
                    <a href=${INFO.main.website} target="_blank">${INFO.main.website}</a>
                </div>
            ` : ''}
            ${INFO.main.twitter_username && INFO.main.twitter_username.trim() !== '' ? `
                <div class="twitter profile-social-info">
                    <div class="twitter-icon">
                        <img src=${INFO.assets.twitter} alt="" />
                    </div>
                    <a href=${INFO.main.twitter} target="_blank">${INFO.main.twitter_username}</a>
                </div>
            ` : ''}
            ${INFO.main.instagram && INFO.main.instagram_username.trim() !== '' ? `
                <div class="instagram profile-social-info">
                    <div class="instagram-icon">
                        <img src=${INFO.assets.instagram} alt="" />
                    </div>
                    <a href=${INFO.main.instagram} target="_blank">${INFO.main.instagram_username}</a>
                </div>
            ` : ''}
            ${INFO.main.linkedin && INFO.main.linkedin_username.trim() !== '' ? `
                <div class="linkedin profile-social-info">
                    <div class="linkedin-icon">
                        <img src=${INFO.assets.linkedin} alt="" />
                    </div>
                    <a href=${INFO.main.linkedin} target="_blank">${INFO.main.linkedin_username}</a>
                </div>
            ` : ''}
            ${INFO.main.facebook && INFO.main.facebook_username.trim() !== '' ? `
                <div class="facebook profile-social-info">
                    <div class="facebook-icon">
                        <img src=${INFO.assets.facebook} alt="" />
                    </div>
                    <a href=${INFO.main.facebook} target="_blank">${INFO.main.facebook_username}</a>
                </div>
            ` : ''}
        </div>
        <div class="exprience">
            <div class="title-wapper">
                <span>Exprience</span>
            </div>
                <div class="works">
                    ${INFO.work.map(work => {
                        return `
                                <div class="work">
                                    <div class="work-org-info">
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
                            }).join('')
                    }
                </div>
        </div>
        <div class="achivments">
            ${INFO.achivments.map(achivment => {
                    return `
                        <div class="achivment-wapper">
                            <a href=${achivment.url}><img src=${achivment.icon} alt=${achivment.title} /></a>
                        </div>
                    `;
                }).join('')
            }
        </div>

    `
}

export default Profile;
