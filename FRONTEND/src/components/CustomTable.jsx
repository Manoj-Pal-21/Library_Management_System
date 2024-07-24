import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const CustomTable = ({ token, data }) => {

    const handleAccept = async (transactionId, bookId) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/transactions/getacceptbook/${transactionId}/${bookId}`, {}, token);
            console.log(response.data);
            toast.success('Book accepted successfully');
        } catch (error) {
            console.log('Error accepting book:', error);
            toast.error('Failed to accept book');
        }
    };

    const handleReject = async (transactionId) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/transactions/rejectbookrequest/${transactionId}`, {}, token);
            console.log(response.data);
            toast.success('Book request rejected successfully');
        } catch (error) {
            console.log('Error rejecting book request:', error);
            toast.error('Failed to reject book request');
        }
    };


    return (
        <>
            <div className="container-fluid p-2">
                <div className="table-container">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    {Object.keys(data[0]).map((item, index) => (
                                        !['TransactionId', 'BookId'].includes(item) && (
                                            <th key={index}>{item}</th>
                                        )
                                    ))}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((book, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.keys(book).map((key, colIndex) => (
                                            !['TransactionId', 'BookId'].includes(key) && (
                                                <td key={colIndex}>{book[key]}</td>
                                            )
                                        ))}
                                        <td>
                                            <div className="btn-group" role="group">
                                                <button className='btn btn-success btn-sm mr-2' onClick={() => handleAccept(book.TransactionId, book.BookId)}>ACCEPT</button>
                                                <button className='btn btn-danger btn-sm' onClick={() => handleReject(book.TransactionId, book.BookId)}>REJECT</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default CustomTable;
