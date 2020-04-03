<template>
    <div id="Home">
        <div class="title-bar">
            <div class="section-title">Top Stories</div>
            <div class="search">
                <b-button type="is-text" icon-left="search">Search</b-button>
            </div>
        </div>
        <article-list/>
    </div>
</template>

<script>
    import ArticleList from "./ArticleList";

    export default {
        components: {ArticleList}
    };
</script>

<style scoped>
    #Home {
        margin: auto;
        display: flex;
        max-width: 640px;
        padding-bottom: 30px;
        flex-direction: column;
    }

    .title-bar {
        display: flex;
        padding: 10px 15px;
        justify-content: space-between;
    }

    .section-title {
        color: #d30000;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -1px;
    }

    .search button {
        margin: 3px 0;
        padding-right: 0;
        text-decoration: none;
        background-color: transparent !important;
    }
</style>