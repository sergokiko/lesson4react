export default class UserService {
    _url = 'https://jsonplaceholder.typicode.com/users';
     getUsers() {
        return ( fetch(this._url).then(value => value.json()))
    }

    getUserPosts(userId){
        return ( fetch(`https://jsonplaceholder.typicode.com/posts?userId=` + userId)
            .then(resp => resp.json()))
    }
}
