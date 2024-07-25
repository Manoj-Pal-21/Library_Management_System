import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/Cookie';

const Status = () => {
  const [bookRequests, setBookRequests] = useState([]);
  const token = getToken('token');

  useEffect(() => {
    const fetchBookRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/transactions/issueDeatils', token);
        setBookRequests(response.data);
      } catch (error) {
        console.error('Error fetching book requests:', error);
      }
    };

    fetchBookRequests();
  }, []);

  const handleButtonClick = (requestId) => {
    console.log(`Button clicked for request ID: ${requestId}`);
  };

  return (
    <div className="container mt-4">
      <h2>User Status</h2>
      <div className="table-responsive">
        {bookRequests.length > 0 ? (
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Book Name</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.userId.name}</td>
                  <td>{request.bookId.name}</td>
                  <td>{request.userId.contactNumber}</td>
                  <td>{request.transactionType?.toUpperCase()}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleButtonClick(request._id)}
                    >
                      Returned
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Status;
