import { useEffect, useState } from "react";
import { NavLink } from "react-router";

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
      <h2 className="font-semibold mb-3">All Category </h2>
      <div className="pl-5 flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className=" hover:bg-gray-200 p-2"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
