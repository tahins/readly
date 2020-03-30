<template>
    <div id="Home">
        <div class="title-bar">
            <div class="title">Top Stories</div>
            <div class="search"><font-awesome-icon icon="search" size="lg"/></div>
        </div>
        <div class="article-container">
            <div class="article" v-for="(article, index) in articles" :key="index">
                <div class="article-image" :style="{backgroundImage: 'url(' + article.urlToImage + ')'}"></div>
                <div class="article-source">{{article.source.name}}</div>
                <div class="article-title">{{article.title}}</div>
                <div class="article-time">{{fromNow(article.publishedAt)}}</div>
            </div>
        </div>
        <button class="button default load-more">Load more</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import AppConstant from "../constants/AppConstant";

    export default {
        data () { return {
            articles: []
        }},
        mounted () {
            axios
                .get(AppConstant.newsApi.topHeadlines + process.env.VUE_APP_NEWS_API_KEY)
                .then(response => {this.articles = response.data.articles});
        },
        methods: {
            fromNow(unixTimestamp) {
                const tomezoneless_timestamp = unixTimestamp.replace('Z', '');
                return moment(tomezoneless_timestamp).fromNow();
            }
        }
    };
</script>

<style>
    #Home {
        display: flex;
        padding-bottom: 30px;
        flex-direction: column;
    }

    .title-bar {
        display: flex;
        padding: 10px 15px;
        justify-content: space-between;
    }

    .title {
        color: #d30000;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -1px;
    }

    .search {
        padding: 7px 0;
        cursor: pointer;
        color: darkgray;
    }

    .article-container {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }

    .article {
        cursor: pointer;
        flex-basis: 50%;
        overflow: hidden;
        padding: 5px 15px;
    }

    .article:hover,
    .article:focus,
    .article:active {
        opacity: 0.7;
    }

    .article-image {
        width: 100%;
        height: 120px;
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        background-image: url("https://static.politico.com/1a/8f/5f53553048d98b3afa2e42c0944c/200328-trump-wh-getty-773.jpg");
    }

    .article-source {
        padding: 5px 0 2px 0;
        font-size: 16px;
        font-weight: 900;
        text-transform: uppercase;
    }

    .article-title {
        font-size: 16px;
        font-weight: 900;
        padding-bottom: 5px;
        font-family: 'Exo', sans-serif;
    }

    .article-time {
        color: grey;
        font-size: 12px;
        padding: 10px 0;
        font-weight: 900;
    }

    .article-container .article:first-child {
        flex-basis: 100%;
    }

    .article-container .article:first-child .article-image {
        height: 300px;
    }

    .article-container .article:first-child .article-title {
        font-size: 20px;
    }

    .button.load-more {
        align-self: center;
    }
</style>