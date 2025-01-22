const userid = "95544839";
// use empty string for no username
const instagram_username = "";
const facebook_username = "";
const linkedin_username = "gauravkumar077";

async function fetchGitHubUser(userid) {
    try {
        const response = await fetch(`https://api.github.com/user/${userid}`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const ghAPI = await response.json();


        const INFO = {
            main: {
                username: ghAPI.login,
                name: ghAPI.name,
                email: ghAPI.email,
                desc: ghAPI.bio,
                gender: "he/him",
                location: ghAPI.location,
                twitter: `https://twitter.com/${ghAPI.twitter_username}`,
                twitter_username: ghAPI.twitter_username,
                instagram_username: instagram_username,
                instagram: `https://www.instagram.com/${instagram_username}`,
                facebook_username: facebook_username,
                facebook: `https://www.facebook.com/${facebook_username}`,
                org: ghAPI.company,
                linkedin_username: linkedin_username,
                linkedin: `https://www.linkedin.com/in/${linkedin_username}`,
                website: ghAPI.blog,
                followers: ghAPI.followers,
                following: ghAPI.following,
            },
            assets: {
                ghlogo: "/mark-github.svg",
                logo: ghAPI.avatar_url,
                article: "/article.svg",
                book: "/book.svg",
                clock: "/clock.svg",
                email: "/email.svg",
                folder: "/folder.svg",
                link: "/link.svg",
                location: "/location.svg",
                mail: "/mail.svg",
                org: "/organization.svg",
                package: "/package.svg",
                psychology: "/psychology.svg",
                repo: "/repo.svg",
                star: "/star.svg",
                table: "/table.svg",
                twitter: "/twitter.svg",
                instagram: "/instagram.svg",
                linkedin: "/linkedin.svg",
                facebook: "/facebook.svg",
                link: "/link.svg"
            },
            work: [
                {
                    title: "Wordpress devloper",
                    company: "Paramount Tech Solutions",
                    icon: "https://paramounttechnetwork.com/wp-content/uploads/2017/08/cropped-square.png",
                    duration: "2024 - 2024",
                    desc: "Creating Wordpress websites for clients. Working on custom themes and plugins."
                }
            ],
            achivments: [
                {
                    title: "Microsoft Learn Student Ambassador",
                    icon: "https://mvp.microsoft.com/Assets/Badge/LevelAlpha160x143.png",
                    url: "https://mvp.microsoft.com/studentambassadors"
                },
                {
                    title: "GitHub Foundations Certification",
                    icon: "https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/twitter_thumb_201604_image.png",
                    url: "https://education.github.com/experiences/foundations_certificate",
                }
            ]
        };
        console.log(INFO);
        return INFO;
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
    }
}

const INFO = await fetchGitHubUser(userid);
export default INFO;
