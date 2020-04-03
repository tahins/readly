<template>
    <div class="article-details">
        <div class="article-details-topbar">
            <router-link to="/">
                <b-button type="is-text" icon-left="chevron-left">Back</b-button>
            </router-link>
            <b-button v-if="shareEnabled" type="is-text" icon-left="share-alt" @click="shareArticle()">Share</b-button>
        </div>
        <div class="article-image"
             :style="{backgroundImage: 'url(' + this.featuredImageUrl + ')'}"></div>
        <div class="article-text-content">
            <div class="article-title">{{this.title}}</div>
            <div class="article-source">{{this.source}}</div>
            <div class="article-time">{{this.publishedAt}}</div>
            <div class="article-description">{{this.description}}</div>
            <div class="article-content">{{this.content}}</div>
        </div>
        <div class="section is-small">
            <b-button rounded expanded type="is-info" size="is-large"
                      tag="a" :href="this.url" target="_blank">
                Read full article
            </b-button>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "ArticleDetails",
        data: function () {
            return {
                title: "", source: "", url: "", featuredImageUrl: "",
                description: "", content: "", publishedAt: ""
            }
        },
        mounted: function () {
            this.title = this.$route.params.title;

            if (this.$route.params.articleDetails) {
                this.source = this.$route.params.articleDetails.source;
                this.url = this.$route.params.articleDetails.url;
                this.featuredImageUrl = this.$route.params.articleDetails.featuredImageUrl;
                this.publishedAt = moment(this.$route.params.articleDetails.publishedAt).format('LLLL');
                this.description = this.$route.params.articleDetails.description;
                this.content = this.$route.params.articleDetails.content;
            }
        },
        computed: {
            shareEnabled: function () {
                return navigator.share;
            }
        },
        methods: {
            shareArticle() {
                navigator.share({
                    url: this.url,
                    title: this.title,
                    text: this.description
                });
            }
        }
    }
</script>

<style scoped>
    .section { padding-top: 0.5rem; }

    .article-details {}

    .article-details-topbar {
        top: 0;
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        max-width: 640px;
        align-items: center;
        justify-content: space-between;

        background: rgba(0,0,0,0.7);
        background: -moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(234,81,67,0) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,0.7)), color-stop(100%, rgba(234,81,67,0)));
        background: -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(234,81,67,0) 100%);
        background: -o-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(234,81,67,0) 100%);
        background: -ms-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(234,81,67,0) 100%);
        background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(234,81,67,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#ea5143', GradientType=0 );
    }

    .article-details-topbar button {
        background-color: transparent !important;
        color: white !important;
        text-decoration: none;
    }

    .article-details-topbar button:focus,
    .article-details-topbar button:hover,
    .article-details-topbar button:active {
        border: 0;
        outline: none;
        box-shadow: none;
    }

    .article-image {
        top: 0;
        z-index: -1;
        position: fixed;
    }

    .article-text-content {
        padding: 15px;
        margin-top: 50%;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .article-title {
        font-size: 24px;
        line-height: 1.3;
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
        font-size: 20px;
    }

    .article-content {
        margin: 15px 0;
        font-size: 18px;
        line-height: 1.5;
        font-family: 'Bree Serif', serif;
    }

    .article-content::first-letter {
        float: left;
        line-height: 1;
        font-size: 60px;
        margin-top: -8px;
        font-weight: bold;
        padding-right: 7px;
    }
</style>
