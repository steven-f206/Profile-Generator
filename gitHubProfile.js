const axios = require('axios');

async function gitHubProfile(answers, createPdf){
    const response1 = await axios("https://api.github.com/users/steven-f206");
    let gitHubInfo = {
        name: response1.data.name,
        location: response1.data.location,
        followers: response1.data.followers,
        following: response1.data.following,
        bio: response1.data.bio,
        blog: response1.data.blog,
        location: response1.data.location,
        public_repos: response1.data.public_repos,
    } 
    const response2 = await axios('https://api.github.com/users/steven-f206/starred');
    gitHubInfo.starred = Object.keys(response2.data).length;

    createPdf(answers, gitHubInfo);
}

//gitHubProfile();

module.exports.gitHubProfile = gitHubProfile;