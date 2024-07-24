import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../utils/Cookie";
import toast, { Toaster } from 'react-hot-toast';

const IssuedBooks = () => {
  const [selectedTab, setSelectedTab] = useState("pending");

  const [issuedBooks, setIssuedBooks] = useState([]);
  const [pendingBookRequest, setPendingBookRequest] = useState([]);
  const token = getToken("token");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    getIssuedBookList();
  }, []);

  const getIssuedBookList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/books/getIssuedBooks", token);

      const data = response.data;
      const issued = data.filter(
        (book) => book.issueStatus === true && book.transactionType === "borrowed"
      );
      const pending = data.filter(
        (book) => book.issueStatus === false && book.transactionType === "borrowed"
      );

      setIssuedBooks(issued);
      setPendingBookRequest(pending);

      toast.success("Books fetched successfully!");
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("Failed to fetch books.");
    }
  };

  const onDelete = (index) => {
    console.log("Delete button clicked for index", index);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === "pending" ? "active" : ""}`}
            id="pending-tab"
            onClick={() => handleTabClick("pending")}
          >
            Pending
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === "issued" ? "active" : ""}`}
            id="issued-tab"
            onClick={() => handleTabClick("issued")}
          >
            Issued
          </a>
        </li>
      </ul>
      <div className="tab-content mt-2" id="myTabContent">
        <div
          className={`tab-pane fade ${selectedTab === "pending" ? "show active" : ""}`}
          id="pending"
          role="tabpanel"
          aria-labelledby="pending-tab"
        >
          <div className="container">
            <h4>Pending Books</h4>
            <div className="pending-requests">
              <ul className="list-group">
                {pendingBookRequest.map((book, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>{book?.bookId?.name}</h4>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedTab === "issued" ? "show active" : ""}`}
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
                <tbody>
                  {issuedBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{book?.bookId?.name}</td>
                      {/* Render more columns as needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default IssuedBooks;



