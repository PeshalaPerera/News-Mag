import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

  useEffect(() => {
   fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
          return <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage ? news.urlToImage : "https://via.placeholder.com/150"}
          url={news.url}
        />
        })}
    </div>
  );
};

export default NewsBoard;
