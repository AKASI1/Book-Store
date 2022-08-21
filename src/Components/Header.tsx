import { useNavigate } from "react-router-dom";

/*____________________________________________________________________________*/

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="container bg-secondary flex items-center md:justify-around md:rounded-2xl ">
      <div className="content py-8 md:p-0">
        <h1 className="text-[35px] md:text-[40px] text-main mb-0">
          Build your library
        </h1>

        <h5 className=" text-gray-400 w-60">
          Buy two selected books and get one for free
        </h5>

        <button
          className=" border-none py-2 px-4 rounded cursor-pointer hover:bg-btnHover transition-colors text-white bg-btn"
          onClick={() => navigate("books")}
        >
          View all
        </button>
      </div>

      <img src="./images/book.svg" alt="read" className=" hidden md:block" />
    </section>
  );
};

export default Header;

/*____________________________________________________________________________*/
