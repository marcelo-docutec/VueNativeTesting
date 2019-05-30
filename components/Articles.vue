<template>
    <view class="container">
        <text>Articles list: </text>
            <!-- <view class="tableData">
                <vuetable ref="vuetable"
                    :fields="['title', 'description','action']"
                    :data="articles"
                    pagination-path=""
                ></vuetable>
            </view> -->
    </view>
</template>

<script>
// import Vuetable from "vuetable-2";
import { mapState, mapActions } from 'vuex';

export default {
    name: "articles",

    components: {
        
    },

    data () {
        return{
                newArticle : {
                    title: '',
                    description: ''
                }
            }
        },

        created () {
            let app = this;
            app.getArticles();
        },

        mounted() {

        },

        updated() {

        },
/*
        computed : {
            ...mapState('moduleArticles',['articles'])
        },

        methods : {
            ...mapActions('moduleArticles',['getArticles'])
        }
        */
}
</script>