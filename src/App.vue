<template>
    <div id="App">
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<style src="./App.css"></style>

<script>
    import Footer from "./components/Footer";

    export default {
        name: "App",
        components: {Footer}
    };
</script>
