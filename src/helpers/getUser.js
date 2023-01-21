
export const getUser = async(UserName) => {
    const urls = `https://api.github.com/users/${UserName}`;
    const resp = await fetch( urls );
    const { id, login, url, following, followers, public_repos, location, twitter_username, name, created_at, avatar_url } = await resp.json();

    const users = {
        id: id,
        login: login,
        url: url,
        following: following,
        followers: followers,
        public_repos: public_repos,
        location: location,
        twitter: twitter_username,
        name: name,
        date: created_at,
        avatar: avatar_url
    };

    return users;
}
