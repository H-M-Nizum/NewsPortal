import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsItem = ({ singleNews }) => {
  const getShortText = (text) => {
    return text?.split(" ").slice(0, 30).join(" ") + "...";
  };

  return (
    <div className="mb-5  rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-4 bg-base-300 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={singleNews.author?.img}
            alt=""
          />
          <div>
            <p className="font-semibold">{singleNews.author?.name}</p>
            <p>{singleNews.author?.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button>
            <CiBookmark className="text-2xl" />
          </button>
          <button>
            <CiShare2 className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold pb-2">{singleNews?.title}</h2>
        <div>
          <img className="w-full" src={singleNews?.image_url} alt="" />
        </div>
        {/* <p>{singleNews?.details}</p> */}
        <p className="mt-3">{getShortText(singleNews?.details)}</p>
        <Link to={`/news/${singleNews._id}`} className="text-blue-500 mt-2">
          Show more
        </Link>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {Array.from({
              length: Math.ceil(singleNews?.rating?.number || 0),
            }).map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            <p className="font-semibold">{singleNews?.rating?.number}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEye />
            <p className="font-semibold">{singleNews?.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
