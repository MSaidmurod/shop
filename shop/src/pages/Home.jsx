import Boy from "../components/Boy";
import Girl from "../components/Girl";
import HeaderCarusel from "../components/HeaderCarusel";
import Kasmetica from "../components/Kasmetica";

function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <HeaderCarusel />
        <div className="max-xl:mx-4">
          <h1 className="font-bold pb-3 text-xl">Brendning takliflari</h1>
          <div className="rounded-xl overflow-hidden h-72">
            <img
              className="object-cover h-72 w-full"
              src="https://media.bulavka.uz/products/KafK1c0s3v/KafK1c0s3v?version=1702551931532"
              alt=""
            />
          </div>
        </div>
        <Boy />
        <Girl />
        <Kasmetica />
      </div>
    </div>
  );
}

export default Home;
