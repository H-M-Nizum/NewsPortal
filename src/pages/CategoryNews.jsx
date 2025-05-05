import { useLoaderData } from "react-router";
import NewsItem from "../components/NewsItem";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-3">News Home</h2>
      <div>
        {news.map((singleNews) => (
          <NewsItem key={singleNews._id} singleNews={singleNews}></NewsItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
