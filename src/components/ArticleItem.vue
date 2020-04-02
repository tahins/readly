<template>
    <div class="article-item" :class="{'first-item': isFirstItem}" @click="gotoDetails()">
        <div class="article-image" :style="{backgroundImage: 'url(' + articleItem.featuredImageUrl + ')'}"></div>
        <div class="article-source">{{articleItem.source}}</div>
        <div class="article-title">{{articleItem.title}}</div>
        <div class="article-time">{{fromNow(articleItem.publishedAt)}}</div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "ArticleItem",
        props: ['articleItem', 'isFirstItem'],
        methods: {
            fromNow(unixTimestamp) {
                const tomezoneless_timestamp = unixTimestamp.replace('Z', '');
                return moment(tomezoneless_timestamp).fromNow();
            },
            gotoDetails() {
                this.$router.push({
                    name:'details',
                    params:{
                        title: this.articleItem.title,
                        articleDetails: this.articleItem
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .article-item {
        cursor: pointer;
        flex-basis: 50%;
        overflow: hidden;
        padding: 5px 15px;
    }

    .article-item:hover,
    .article-item:focus,
    .article-item:active {
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
        font-size: 16px;
        font-weight: 900;
        padding: 5px 0 2px 0;
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

    .article-item.first-item {
        flex-basis: 100%;
    }

    .article-item.first-item .article-image {
        height: 300px;
    }

    .article-item.first-item .article-title {
        font-size: 20px;
    }
</style>