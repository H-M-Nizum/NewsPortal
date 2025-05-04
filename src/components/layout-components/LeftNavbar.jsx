import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.news_category);
        console.log(data.data.news_category);
      });
  }, []);

  return (
    <div>
      <h2 className="font-semibold">All Category </h2>
      <ul className="pl-5">
        {categories.map((category) => (
          <li key={category.category_id} className="my-2 hover:bg-gray-200 p-2">
            <a href="#" className="text-gray-700 hover:text-gray-900 ">
              {category.category_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNavbar;
