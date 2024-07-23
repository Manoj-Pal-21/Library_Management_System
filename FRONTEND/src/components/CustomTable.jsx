import axios from 'axios';
import React from 'react';

const CustomTable = ({ token, data }) => {

    const handleAccept = async (transactionId, bookId) => {
        console.log(`Accepted Transaction ID: ${transactionId}, Book ID: ${bookId}`);
        await getAccept(transactionId, bookId);
    }

    const handleReject = async (transactionId, bookId) => {
        console.log(`Rejected Transaction ID: ${transactionId}, Book ID: ${bookId}`);
        // Implement reject functionality here if needed
    }

    const getAccept = async (transactionId, bookId) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/transactions/getacceptbook/${transactionId}/${bookId}`, {}, token);
            console.log(response);
        } catch (error) {
            console.log('Error accepting book:', error);
        }
    }

    return (
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
    );
};

export default CustomTable;
