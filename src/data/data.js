const userid = "95544839";
const instagram_username = "nvm_pratyush";
const facebook_username = "nvmPratyush";
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
                    company: "Paramount Tech Solutions Pvt. Ltd",
                    icon: "https://paramounttechnetwork.com/wp-content/uploads/2017/08/cropped-square.png",
                    duration: "2024 - 2024",
                    desc: "Creating Wordpress websites for clients. Working on custom themes and plugins."
                },
                {
                    title: "Web devloper",
                    company: "Microsoft",
                    icon: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
                    duration: "2025 - current",
                    desc: "Creating Custom websites."
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
                    icon: "https://blobaccountproduction.blob.core.windows.net/educationwebblobstorage/kicupcaijp0kyzvg9hm3cf4koq78?sp=r&sv=2018-11-09&se=2025-01-22T13%3A55%3A05Z&rscd=inline%3B+filename%3D%22GitHub+Foundations+Badge.png%22%3B+filename*%3DUTF-8%27%27GitHub%2520Foundations%2520Badge.png&rsct=image%2Fpng&sr=b&sig=hfJFIQx%2FQJ5aAK8yYAH6F9z8rSKFkSCxPBL6OgH2Pck%3D",
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
