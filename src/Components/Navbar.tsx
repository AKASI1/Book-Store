import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

/*____________________________________________________________________________*/

const Navbar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    navigate("/books", { state: text });
  };

  return (
    <nav className="container flex justify-between items-center my-5 md:my-10 gap-14">
      <h3 onClick={() => navigate("/")} className="cursor-pointer">
        KASI
      </h3>

      <form
        onSubmit={handleSearch}
        className="search relative bg-zinc-100 h-max w-full md:w-2/4 rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search by author, title, name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=" w-full bg-transparent outline-none border-none py-3 px-6 font-semibold placeholder:text-slate-400 placeholder:font-bold"
        />
        <button className=" absolute top-3 right-2 md:right-6 cursor-pointer border-none">
          <FiSearch />
        </button>
      </form>

      <div className="features hidden md:flex gap-7 items-center ">
        <AiOutlineHeart />
        <div className="cart rounded-full text-white bg-main py-2 px-3">0</div>
        <div className="lang">EN</div>
      </div>
    </nav>
  );
};

export default Navbar;

/*____________________________________________________________________________*/
