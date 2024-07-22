
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const AllBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBookList();
    }, [])

    const getBookList = async () => {
        try {
            const list = await axios.get('http://localhost:3000/api/books');
            setBooks(list.data.books)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Book List</h2>
            <table>
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
                            <td><button onClick={() => handleBookIssue(book)}>Issue Book</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const handleBookIssue = (book) => {

    console.log(`Issuing book: ${book.name}`);
}

export default AllBooks;
