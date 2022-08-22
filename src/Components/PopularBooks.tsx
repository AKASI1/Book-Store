import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import BookCard from "./BookCard";

/*____________________________________________________________________________*/

const PopularBooks = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("https://gutendex.com//books");
  const books = data?.results.slice(0, 6);

  return (
    <section className="container my-14">
      <div className="title flex justify-between mb-4">
        <h2>Popular Now</h2>
        <h5
          className=" text-gray-400 cursor-pointer hover:underline"
          onClick={() => navigate("books")}
        >
          View all
        </h5>
      </div>

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

      <div className="booksContainer grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;

/*____________________________________________________________________________*/
