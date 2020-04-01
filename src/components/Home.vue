<template>
    <div id="Home">
        <div class="title-bar">
            <div class="title">Top Stories</div>
            <div class="search"><font-awesome-icon icon="search" size="lg"/></div>
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
</style>