import axios from 'axios';
import AppConstant from "../constants/AppConstant";

class NewsApiService {
    constructor () {
        this.apiKey = process.env.VUE_APP_NEWS_API_KEY;
    }

    getTopHeadlines (pageNo = 0) {
        const apiURL = AppConstant.newsApi.topHeadlines
            .replace("{pageNo}", pageNo.toString())
            .replace("{apiKey}", this.apiKey);

        return axios
            .get(apiURL)
            .then(response => {
                const articles = response.data.articles;
                const articleList = articles.map(article => ({
                    title: article.title,
                    source: article.source.name,
                    url: article.url,
                    featuredImageUrl: article.urlToImage,
                    description: article.description,
                    content: article.content,
                    publishedAt: article.publishedAt
                }));

                return articleList;
            });
    }
}

export default NewsApiService;