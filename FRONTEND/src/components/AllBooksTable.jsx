import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/slice/book';
import { selectUser } from '../redux/slice/auth';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { getToken } from '../utils/Cookie';

const AllBooksTable = () => {
    const { books } = useSelector(selectBooks);
    const { user } = useSelector(selectUser);
    const token = getToken('token');

    const handleBookAction = async (book) => {
        if (user && user.isAdmin) {
            deleteBook(book._id)
        } else {
            issueBook(book._id);
        }
    };

    const deleteBook = async (bookId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/books/${bookId}`, token);
            console.log(response);
            toast.success(`Book deleted successfully`);
        } catch (error) {
            console.error('Error deleting book:', error);
            toast.error(`Error deleting book: ${error.message}`);
        }
    };
    

    const issueBook = async (bookId) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/transactions/issueBook/${bookId}`, {}, token);
            console.log(response);
            toast.success(`Book issued successfully`);
        } catch (error) {
            console.log(error);
            toast.error(`Error issuing book: ${error.message}`);
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Genre</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((book, index) => (
                        <tr key={index}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.availabilityStatus ? 'Available' : 'Not Available'}</td>
                            <td>{book.genre}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button
                                    className={`btn ${user && user.isAdmin ? 'btn-danger' : 'btn-primary'}`}
                                    onClick={() => handleBookAction(book)}
                                >
                                    {user && user.isAdmin ? 'Delete Book' : 'Issue Book'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Toaster/>
        </div>
    );
};

export default AllBooksTable;
