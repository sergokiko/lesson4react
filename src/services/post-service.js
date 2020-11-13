export default class PostService {
    getPosts(){
      return  (fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()))
    }
    getPostComments(id){
        return(   fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + id)
            .then(resp => resp.json()))
    }
}
