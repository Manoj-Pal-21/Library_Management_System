import React from 'react';

const CustomTable = ({ data }) => {

    const handleAccept = (id) => {
        console.log(`Accepted ID: ${id}`);
    }

    const handleReject = (id) => {
        console.log(`Rejected ID: ${id}`);
    }

    return (
        <div className="container-fluid p-2">
            <div className="table-container">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                {Object.keys(data[0]).map((item, index) => (
                                    item !== 'id' && <th key={index}>{item}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((book, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.keys(book).map((key, colIndex) => (
                                        key !== 'id' &&
                                        <td key={colIndex}>{book[key]}</td>
                                    ))}
                                    <td>
                                        <div className="btn-group" role="group">
                                            <button className='btn btn-success btn-sm mr-2' onClick={() => handleAccept(book.id)}>ACCEPT</button>
                                            <button className='btn btn-danger btn-sm' onClick={() => handleReject(book.id)}>REJECT</button>
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
