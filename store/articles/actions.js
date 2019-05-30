import axiosInstance from '../../core/axiosInstance';

export default {
    async getArticles ({ commit }) {
        try{
            const response = await axiosInstance.get('articles');
            commit('setArticles', response.data.data);
        }catch(err){
            throw(err);
        }
    },
}