import React from 'react';

const Status = () => {
  const booksData = [
    { name: 'Book 1', author: 'Author A', contact: 'Contact A', availabilityStatus: true },
    { name: 'Book 2', author: 'Author B', contact: 'Contact B', availabilityStatus: false },
    { name: 'Book 3', author: 'Author C', contact: 'Contact C', availabilityStatus: true },
    { name: 'Book 4', author: 'Author D', contact: 'Contact D', availabilityStatus: true },
    { name: 'Book 5', author: 'Author E', contact: 'Contact E', availabilityStatus: false }
  ];

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
            {booksData.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.contact}</td>
                <td>{book.availabilityStatus ? 'Available' : 'Not Available'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
