import { FC } from "react";
import { IoDownloadSharp } from "react-icons/io5";
import { Book } from "../Hooks/useFetch";

/*____________________________________________________________________________*/

const BookCard: FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="cursor-pointer transition-all hover:shadow-2xl hover:shadow-main rounded-lg overflow-hidden">
      <img
        src={book.formats["image/jpeg"]}
        alt="book"
        className=" w-full h-52"
      />
      <div className="info px-2">
        <h5 className="mt-5 mb-1">{book.title}</h5>
        <h6 className="my-0 text-slate-500">{book.authors[0]?.name}</h6>
        <h6 className="my-1 text-slate-400">
          <IoDownloadSharp className=" text-zinc-700 text-lg" />
          {book.download_count} downloads
        </h6>
      </div>
    </div>
  );
};

export default BookCard;

/*____________________________________________________________________________*/