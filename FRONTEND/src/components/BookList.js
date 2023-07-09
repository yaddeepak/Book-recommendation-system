import React, { useState } from "react";

import "./BookList.css";
import { useNavigate } from "react-router-dom";

const bookss = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publicationDate: "July 11, 1960",
    description:
      "A novel set in the 1930s that explores racial injustice in a small town.",
    rating: 0,
    reviews: [],
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationDate: "June 8, 1949",
    description:
      "A chilling novel that depicts a totalitarian society where individuality and freedom are suppressed.",
    rating: 0,
    reviews: [],
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationDate: "January 28, 1813",
    description:
      "A classic love story exploring social class and societal norms.",
    rating: 0,
    reviews: [],
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationDate: "April 10, 1925",
    description:
      "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    rating: 0,
    reviews: [],
  },
  {
    id: 5,
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    genre: "Modernist",
    publicationDate: "May 5, 1927",
    description:
      "An experimental novel that explores the shifting perspectives and inner lives of its characters.",
    rating: 0,
    reviews: [],
  },
  {
    id: 6,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publicationDate: "October 18, 1851",
    description:
      "A classic tale of obsession and the pursuit of a legendary white whale.",
    rating: 0,
    reviews: [],
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age",
    publicationDate: "July 16, 1951",
    description:
      "A story that follows the disillusioned teenage protagonist as he navigates through adolescence and societal expectations.",
    rating: 0,
    reviews: [],
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "July 29, 1954",
    description:
      "An epic high fantasy series that follows a group of individuals on a quest to destroy a powerful ring.",
    rating: 0,
    reviews: [],
  },
  {
    id: 9,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    genre: "Gothic",
    publicationDate: "October 16, 1847",
    description:
      "A novel that explores themes of love, independence, and societal expectations through the life of the protagonist.",
    rating: 0,
    reviews: [],
  },
  {
    id: 10,
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    publicationDate: "8th century BCE",
    description:
      "An ancient Greek epic poem that follows the adventures of Odysseus as he tries to return home after the Trojan War.",
    rating: 0,
    reviews: [],
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publicationDate: "January 1, 1932",
    description:
      "A dystopian novel that envisions a future society controlled by technology and social conditioning.",
    rating: 0,
    reviews: [],
  },
  {
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "September 21, 1937",
    description:
      "A fantasy novel that follows the adventures of Bilbo Baggins as he embarks on a quest to reclaim a treasure.",
    rating: 0,
    reviews: [],
  },
  {
    id: 13,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic",
    publicationDate: "January 1, 1818",
    description:
      "A classic Gothic novel that explores the consequences of playing god and the complexities of human nature.",
    rating: 0,
    reviews: [],
  },
  {
    id: 14,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publicationDate: "1988",
    description:
      "A philosophical novel that follows a young shepherd on his journey to fulfill his personal legend.",
    rating: 0,
    reviews: [],
  },
  {
    id: 15,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Adventure",
    publicationDate: "December 10, 1884",
    description:
      "A coming-of-age story that explores themes of race, freedom, and morality through the eyes of a young boy.",
    rating: 0,
    reviews: [],
  },
  {
    id: 16,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    genre: "Gothic",
    publicationDate: "1847",
    description:
      "A dark and passionate tale of love and revenge set in the Yorkshire moors.",
    rating: 0,
    reviews: [],
  },
  {
    id: 17,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Gothic",
    publicationDate: "July 1, 1890",
    description:
      "A novel that explores the moral decay and corruption of a young man who remains forever young while his portrait ages.",
    rating: 0,
    reviews: [],
  },
  {
    id: 18,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    publicationDate: "1866",
    description:
      "A psychological novel that delves into the mind of a troubled protagonist who commits a heinous crime.",
    rating: 0,
    reviews: [],
  },
  {
    id: 19,
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    genre: "Historical",
    publicationDate: "March 16, 1850",
    description:
      "A story set in Puritan New England, exploring themes of sin, guilt, and redemption.",
    rating: 0,
    reviews: [],
  },
  {
    id: 20,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    genre: "Modernist",
    publicationDate: "October 22, 1926",
    description:
      "A novel that follows a group of expatriates as they navigate love, friendship, and the aftermath of World War I.",
    rating: 0,
    reviews: [],
  },
];
function BookList() {
  const navigate = useNavigate();
  const [books, setBooks] = useState(bookss);
  const [searchBy, setSearchBy] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [rating, setRating] = useState(0);
  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };
  const handleBookClick = (bookID) => {
    console.log(bookID);
    navigate(`/books/${bookID}`);
  };

  const handleSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value === "") {
      setBooks(bookss);
    }
  };

  const handleSearch = () => {
    let filteredBooks = [];

    if (searchBy === "title") {
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (searchBy === "genre") {
      filteredBooks = books.filter((book) =>
        book.genre.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (searchBy === "author") {
      filteredBooks = books.filter((book) =>
        book.author.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setBooks(filteredBooks);
  };

  const handleRatingChange = (event, index) => {
    const rating = parseInt(event.target.value);
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks[index].rating = rating;
      return updatedBooks;
    });
    setRating(Number(event.target.value));
  };

  const handleReviewChange = (event, index) => {
    setReviewInput(event.target.value);
  };
  const handleReviewSubmit = (index) => {
    if (reviewInput.trim() !== "") {
      const updatedBooks = books.map((item) => {
        if (item.id === index) {
          item.reviews.push(reviewInput);
        }
      });
      setReviewInput("");
    }
  };

  return (
    <div className="booklist-container">
      <div className="search-fields">
        <div className="search-by">
          <label>Search By:</label>
          <select value={searchBy} onChange={handleSearchByChange}>
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="author">Author</option>
          </select>
        </div>
        <div className="search-value">
          <label>Search Value:</label>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchValueChange}
          />
        </div>
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3 onClick={() => handleBookClick(book.id)}>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <p>Description: {book.description}</p>
            <p>Rating: {book.rating}</p>
            <p>Reviews:</p>
            <ul>
              {book.reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>{review}</li>
              ))}
            </ul>
            <div>
              <label>Rating:</label>
              <input
                type="number"
                min={0}
                max={5}
                value={rating}
                onChange={(event) => handleRatingChange(event, book.id)}
              />
            </div>
            <div>
              <label>Review:</label>
              <input
                type="text"
                value={reviewInput}
                onChange={handleReviewChange}
              />
              <button onClick={() => handleReviewSubmit(book.id)}>
                Submit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
