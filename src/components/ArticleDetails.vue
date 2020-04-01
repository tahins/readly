<template>
    <div class="article-details">
        <div class="article-image"
             :style="{backgroundImage: 'url(' + this.$route.params.articleDetails.urlToImage + ')'}"></div>
        <div class="article-text-content">
            <div class="article-title">{{this.$route.params.articleDetails.title}}</div>
            <div class="article-source">{{this.$route.params.articleDetails.source.name}}</div>
            <div class="article-time">{{this.$route.params.articleDetails.publishedAt}}</div>
            <div class="article-description">{{this.$route.params.articleDetails.description}}</div>
            <div class="article-content">{{this.$route.params.articleDetails.content}}</div>
        </div>
        <a :href="this.$route.params.articleDetails.url" target="_blank"
           class="button default full-article">Read full article</a>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails",
        props: ['image', 'title', 'content']
    }
</script>

<style scoped>
    .article-details {
    }

    .article-image {
        top: 0;
        width: 100%;
        z-index: -1;
        height: 300px;
        position: fixed;
        background-size: cover;
    }

    .article-text-content {
        padding: 15px;
        margin-top: 300px;
        background-color: white;
    }

    .article-title {
        font-size: 22px;
        font-weight: 900;
        padding-bottom: 5px;
        font-family: 'Exo', sans-serif;
    }

    .article-source {
        font-size: 16px;
        font-weight: 900;
        padding: 5px 0 2px 0;
        text-transform: uppercase;
    }

    .article-time {
        color: grey;
        font-size: 12px;
        padding: 10px 0;
        font-weight: 900;
    }

    .article-description {
        color: gray;
        font-size: 18px;
    }

    .article-content {
        margin: 15px 0;
        line-height: 1.5;
        font-family: 'Bree Serif', serif;
    }

    .article-content::first-letter {
        float: left;
        line-height: 1;
        font-size: 48px;
        margin-top: 0px;
        font-weight: bold;
        padding-right: 7px;
    }

    .button.full-article {
        margin: auto;
        display: flex;
    }
</style>
