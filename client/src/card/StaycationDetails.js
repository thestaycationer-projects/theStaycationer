import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StaycationDetails = () => {
  const { _id } = useParams();
  console.log("Object ID:", _id);
  const [staycation, setStaycation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("yourTokenKey");

    axios.get('http://localhost:5000/api/staycation/fetchData', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        const data = response.data;
        console.log("Fetched data:", data);

        // Find the staycation in the array based on _id
        const foundStaycation = data.find(item => item._id === _id);
        
        if (foundStaycation) {
          setStaycation(foundStaycation);
        } else {
          setError('Staycation not found');
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staycation details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {staycation && (
        <>
          <h1>{staycation.title}</h1>
          <p>Location: {staycation.location}</p>
          <p>Price: {staycation.price}</p>
          <p>Description: {staycation.description}</p>
          {/* Render other details as needed */}
        </>
      )}
    </div>
  );
};

export default StaycationDetails;
