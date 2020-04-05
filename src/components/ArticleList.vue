<template>
    <div class="article-container">
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true">
            <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-large"
                    custom-class="fa-spin">
            </b-icon>
        </b-loading>
        <div class="article-list">
            <article-item v-for="(article, index) in articleList"
                          :articleItem="article" :key="index"
                          :isFirstItem="index == 0">
            </article-item>
        </div>
        <div v-if="articleList.length > 0" class="section is-small">
            <b-button rounded expanded type="is-info" size="is-large" @click="fetchTopHeadlines()">Load more</b-button>
        </div>
    </div>
</template>

<script>
    import ArticleItem from "./ArticleItem";
    import NewsApiService from "../services/NewsApiService";

    const newsApiService = new NewsApiService();

    export default {
        name: "ArticleList",
        components: {ArticleItem},
        data() {
            return {
                articleList: [],
                isLoading: true,
                pageNo: 1
            }
        },
        async mounted() {
            this.fetchTopHeadlines();
        },
        methods: {
            fetchTopHeadlines: async function () {
                this.isLoading = true;
                const articles = await newsApiService.getTopHeadlines(this.pageNo);
                this.articleList.push(...articles);
                this.pageNo++;
                this.isLoading = false;
            }
        }
    }
</script>

<style scoped>
    .article-list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }

    .section { padding-top: 0.5rem; }

</style>