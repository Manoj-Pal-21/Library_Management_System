import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/Cookie';

const Status = () => {
  const [bookRequests, setBookRequests] = useState([]);
  const token = getToken('token');

  useEffect(() => {
    const fetchBookRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/transactions/getbookrequest', token);
        setBookRequests(response.data);
      } catch (error) {
        console.error('Error fetching book requests:', error);
      }
    };

    fetchBookRequests();
  }, []);

  return (
    <div className="container mt-4">
      <h2>User Status</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>BookName</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.userId.name}</td>
                <td>{request.bookId.name}</td>
                <td>{request.contact || ''}</td> 
                <td>{request.transactionType === 'borrowed' ? 'Borrowed' : 'Other Status'}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
