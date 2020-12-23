import {post} from './axios'

const api = {

    getArticles(data){
        return post('/articles',data)
    },

    getTags(data){
        return post('/tags',data)
    },
    allTags(data){
        return post('/allTags',data)
    },

    getCategories(data){
        return post('/categories',data)
    },
    allCategories(data){
        return post('/allCategories',data)
    },

    archives(data){
        return post('/archives',data)
    }
}


export default api
