import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StdDataRecord() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:8000/registers');
        setTableData(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTable = () => {
    if (isLoading) {
      return <p>Loading data...</p>;
    }

    if (error) {
      return <p>Error fetching data: {error.message}</p>;
    }

    if (tableData.length === 0) {
      return <p>No data found.</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row._id}> {/* Use _id as unique identifier */}
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {renderTable()}
    </div>
  );
}

export default StdDataRecord;
