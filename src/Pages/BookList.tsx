import { useLocation } from "react-router-dom";
import BookCard from "../Components/BookCard";
import Navbar from "../Components/Navbar";
import useFetch from "../Hooks/useFetch";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useState } from "react";

/*____________________________________________________________________________*/

const BookList = () => {
  window.scrollTo(0, 0);
  const location = useLocation();

  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `/books/?page=${page}&search=${location.state ? location.state : ""}`
  );

  const books = data?.results;

  return (
    <>
      <Navbar />

      {loading && <h3 className="my-10 text-center">Loading please wait..</h3>}
      {error && (
        <h3 className="my-10 text-center text-red-700">
          Error connecting to the server
          <span
            className=" text-xs underline cursor-pointer hover:text-neutral-800"
            onClick={() => window.location.reload()}
          >
            Click here to reload!
          </span>
        </h3>
      )}

      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-20 mt-20">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {!loading && !error && data && (
        <div className="pages flex justify-center items-center gap-10 mt-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={!data?.previous}
            className="cursor-pointer disabled:cursor-not-allowed border-none bg-transparent"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <h4>{!loading && page}</h4>
          <button
            onClick={() => setPage(page + 1)}
            disabled={!data?.next}
            className=" cursor-pointer disabled:cursor-not-allowed border-none bg-transparent"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      )}
    </>
  );
};

export default BookList;

/*____________________________________________________________________________*/
