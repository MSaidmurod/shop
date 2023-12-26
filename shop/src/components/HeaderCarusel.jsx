function HeaderCarusel() {
  return (
    <div className="max-xl:mx-4 cursor-pointer">
      <div className="carousel rounded-xl max-md:h-48 my-9 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://media.bulavka.uz/products/JG21E2NM08/JG21E2NM08?version=1702966275012"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="">
              ❮
            </a>
            <a href="#slide2" className="">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://media.bulavka.uz/products/GlIt9xFsm5/GlIt9xFsm5?version=1702552562150"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="">
              ❮
            </a>
            <a href="#slide3" className="">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.bulavka.uz/products/PRJgCAq0uW/PRJgCAq0uW?version=1702552585854"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="">
              ❮
            </a>
            <a href="#slide4" className="">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media.bulavka.uz/products/NbEgIvox90/NbEgIvox90?version=1702552608886"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="">
              ❮
            </a>
            <a href="#slide1" className="">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCarusel;
