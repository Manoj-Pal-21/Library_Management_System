import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/UserContext';

const AllBooks = () => {
    const { isAdminVal } = useAuth();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBookList();
    }, []);

    const getBookList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books');
            setBooks(response.data.books);
        } catch (error) {
            console.log('Error fetching books:', error);
        }
    };

    const handleBookAction = (book) => {
        if (isAdminVal.role === 'admin') {
            console.log(`Deleting book: ${book.name}`);           
        } else {
            console.log(`Issuing book: ${book.name}`);
        }
    };

    return (
        <div className="book-list-container">
            <h2>Book List</h2>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.availabilityStatus ? 'Available' : 'Not Available'}</td>
                            <td>{book.genre}</td>
                            <td>
                                <button className="action-button" onClick={() => handleBookAction(book)}>
                                    {isAdminVal.role ? 'Delete Book' : 'Issue Book'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooks;
