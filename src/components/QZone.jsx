import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
import classroom from "../assets/class.png";
const QZone = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-lg mt-5 ">
      <h2 className="mb-4">Q-Zone</h2>
      <div className="flex flex-col gap-4">
        <div>
          <img src={swimming} alt="swimming" />
        </div>
        <div>
          <img src={playground} alt="playground" />
        </div>
        <div>
          <img src={classroom} alt="classroom" />
        </div>
      </div>
    </div>
  );
};

export default QZone;
