import React, { useState } from 'react';

const IssuedBooks = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [books, setBooks] = useState([
    { name: 'Book 1' },
    { name: 'Book 2' },
    { name: 'Book 3' }
  ]);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === 'pending' ? 'active' : ''}`}
            id="pending-tab"
            onClick={() => handleTabClick('pending')}
          >
            Pending
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === 'issued' ? 'active' : ''}`}
            id="issued-tab"
            onClick={() => handleTabClick('issued')}
          >
            Issued
          </a>
        </li>
      </ul>
      <div className="tab-content mt-2" id="myTabContent">
        <div
          className={`tab-pane fade ${selectedTab === 'pending' ? 'show active' : ''}`}
          id="pending"
          role="tabpanel"
          aria-labelledby="pending-tab"
        >
          <div className="container">
            <h4>Pending Books</h4>
            <div className='pending-requests'>
              <ul>
                {books.map((book, index) => (
                  <li key={index}>
                    <div className='request d-flex'>
                      <h4>{book.name}</h4>
                      <button
                        className='btn btn-outline-danger'
                        onClick={() => onDelete(index)}>
                        delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedTab === 'issued' ? 'show active' : ''}`}
          id="issued"
          role="tabpanel"
          aria-labelledby="issued-tab"
        >
          <div className="container">
            <h4>Issued Books</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>BookName</th>
                    <th>IssueDate</th>
                    <th>DueDate</th>
                    <th>Details</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {books?.map((book, index) => (
                    <tr key={index}>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssuedBooks;
