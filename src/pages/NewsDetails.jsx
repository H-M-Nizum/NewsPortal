import { Link, useLoaderData, useNavigate } from "react-router";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { data: detailsNews } = useLoaderData();
  console.log(detailsNews);
  const navigate = useNavigate();
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 pt-5">
        <section className=" col-span-9">
          <h2 className="font-semibold">News Portal</h2>
          <div className="p-5 border-gray-200 border-2 rounded-lg mt-3">
            <div>
              <img className="w-full" src={detailsNews[0]?.image_url} alt="" />
            </div>
            <h2 className="font-semibold text-2xl py-4">
              {detailsNews[0]?.title}
            </h2>
            <p>{detailsNews[0]?.details}</p>
            <button
              onClick={() => navigate(-1)}
              // navigate(-1) takes the user back one page in the browser history, just like hitting the back button.
              className="w-fit flex items-center gap-2 mt-5 btn bg-pink-600 text-white hover:bg-red-700"
            >
              <FaArrowLeft />
              All News in This Category
            </button>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
