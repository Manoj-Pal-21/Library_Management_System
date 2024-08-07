import React, { useState } from 'react';

const BookForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        availabilityStatus: true,
        quantity: '',
        genre: '',
        borrower: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or perform validation
        console.log(formData);
        // Reset form after submission if needed
        setFormData({
            name: '',
            author: '',
            availabilityStatus: true,
            quantity: '',
            genre: '',
            borrower: []
        });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input type="text" className="form-control" id="genre" name="genre" value={formData.genre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="availabilityStatus" className="form-label">Availability Status</label>
                    <select className="form-select" id="availabilityStatus" name="availabilityStatus" value={formData.availabilityStatus} onChange={handleChange}>
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default BookForm;
