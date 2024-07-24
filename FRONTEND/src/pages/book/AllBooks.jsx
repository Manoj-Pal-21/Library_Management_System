import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBooks } from '../../redux/slice/book';
import AllBooksTable from '../../components/AllBooksTable';

const AllBooks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getBookList();
    }, []);

    const getBookList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books');
            dispatch(setBooks(response.data));
        } catch (error) {
            console.log('Error fetching books:', error);
        }
    };

    return (
        <div className="book-list-container">
            <h2>Book List</h2>
            <AllBooksTable getBookList={getBookList}/>
        </div>
    )
}

export default AllBooks;
