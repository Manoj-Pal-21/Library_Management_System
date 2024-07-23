import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomTable from '../../components/CustomTable';
import { selectRequests, setRequests } from '../../redux/slice/transaction';
import { getToken } from '../../utils/Cookie';
import axios from 'axios';
import UnAuthorized from '../../components/UnAuthorized';
import { selectUser } from '../../redux/slice/auth';

const BookRequest = () => {
  const requests = useSelector(selectRequests);
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const token = getToken('token');

  useEffect(() => {
    fetchBookRequests();
  }, []);

  const fetchBookRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/transactions/getbookrequest', token);
      const data = response.data.map(item => ({ id: item._id, Name: item.userId.name, Book: item.bookId.name }));
      dispatch(setRequests(data));
    } catch (error) {
      console.error('Error fetching book requests:', error);
    }
  };

  if (!user?.isAdmin) return <UnAuthorized />

  return (
    <div>
      {requests.length > 0 && <CustomTable data={requests} />}
    </div>
  );
};

export default BookRequest;
