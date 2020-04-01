<template>
    <div class="article-container">
        <div class="article-list">
            <article-item v-for="(article, index) in articleList"
                          :articleItem="article" :key="index"
                          :isFirstItem="index == 0">
            </article-item>
        </div>
        <button class="button default load-more">Load more</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import AppConstant from "../constants/AppConstant";
    import ArticleItem from "./ArticleItem";

    export default {
        name: "ArticleList",
        components: {ArticleItem},
        data () { return {
            articleList: []
        }},
        mounted () {
            axios
                .get(AppConstant.newsApi.topHeadlines + process.env.VUE_APP_NEWS_API_KEY)
                .then(response => {this.articleList = response.data.articles});
        }
    }
</script>

<style scoped>
    .article-list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }

    .button.load-more {
        margin: auto;
        display: flex;
    }
</style>