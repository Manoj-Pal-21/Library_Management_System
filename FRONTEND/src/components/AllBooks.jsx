import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, setBooks } from '../redux/slice/book';
import { selectUser } from '../redux/slice/auth';

const AllBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    const user = useSelector(selectUser);

    useEffect(() => {
        getBookList();
    }, []);

    const getBookList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books');
            dispatch(setBooks(response.data.books));
        } catch (error) {
            console.log('Error fetching books:', error);
        }
    };

    const handleBookAction = (book) => {
        if (user && user.isAdmin) {
            console.log(`Deleting book: ${book.name}`);
            // Implement delete book logic
        } else {
            console.log(`Issuing book: ${book.name}`);
            // Implement issue book logic
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
                                    {user && user.isAdmin ? 'Delete Book' : 'Issue Book'}
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

