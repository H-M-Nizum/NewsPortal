import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav> </nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
