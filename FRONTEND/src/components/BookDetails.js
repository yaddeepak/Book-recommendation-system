import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./BookDetails.css";
import axios from 'axios';
 
function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    console.log(id);
 
    useEffect(() => {
        fetchBook();
        // eslint-disable-next-line
    }, []);
 
    const fetchBook = async () => {
        try {
            const response = await axios.get(`/api/books/${id}`);
            setBook(response.data.book);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    };
 
    const bookDetails = {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        publicationDate: "July 11, 1960",
        description: "A novel set in the 1930s that explores racial injustice in a small town.",
    };
 
    return (
        <div className="book-details-container">
            <h2 className="book-details-title">Book Details</h2>
            <div className="book-details">
                <p><span className="book-details-label">Title:</span> {bookDetails.title}</p>
                <p><span className="book-details-label">Author:</span> {bookDetails.author}</p>
                <p><span className="book-details-label">Genre:</span> {bookDetails.genre}</p>
                <p><span className="book-details-label">Publication Date:</span> {bookDetails.publicationDate}</p>
                <p><span className="book-details-label">Description:</span> {bookDetails.description}</p>
            </div>
        </div>
    );
}
 
export default BookDetails;