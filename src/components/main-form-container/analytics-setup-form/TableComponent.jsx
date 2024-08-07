import React, { useState, useEffect, useMemo } from 'react';
import './TableComponent.css'; // Import your CSS file

const flattenObject = (obj, parentKey = '') => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const flattenedObject = flattenObject(value, newKey);
      return { ...acc, ...flattenedObject };
    } else {
      return { ...acc, [newKey]: value };
    }
  }, {});
};

const getNestedValue = (obj, key) => {
  const keys = key.split('.');
  return keys.reduce((acc, currentKey) => {
    return acc && typeof acc === 'object' ? acc[currentKey] : undefined;
  }, obj);
};

const fetchDataFromApi = async (url, page) => {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEwNjUwNjgsImlhdCI6MTcyMTAyOTA2OCwianRpIjoiNDU2OWE4NjAtNTRlZS00ODljLTkxZGEtNGQ0NzNjZjk4ODBjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2NjE1NmNhMS0xY2ViLTQxZjctOTE0OC0wY2EwNGNjMzI1Y2MiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJIT0xBQ1JBQ1kiLCJzZXNzaW9uX3N0YXRlIjoiNjA2MGU3Y2UtZGZhNS00ODhiLWJlZWYtYTA1NGZkNzQ4ZmViIiwibmFtZSI6Ik1vYml1cyBrdXNoYWwuZ0Btb2JpdXNkdGFhcy5haSIsImdpdmVuX25hbWUiOiJNb2JpdXMiLCJmYW1pbHlfbmFtZSI6Imt1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGFzc3dvcmRfdGVuYW50X2t1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwiZW1haWwiOiJwYXNzd29yZF90ZW5hbnRfa3VzaGFsLmdAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiSE9MQUNSQUNZIjp7InJvbGVzIjpbIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2MDYwZTdjZS1kZmE1LTQ4OGItYmVlZi1hMDU0ZmQ3NDhmZWIiLCJ0ZW5hbnRJZCI6IjY2MTU2Y2ExLTFjZWItNDFmNy05MTQ4LTBjYTA0Y2MzMjVjYyJ9.VYZcPeujLulFYl1ZOpdSXhafpRAM6qmWK48le-g30m9DGyfxsHqBSVERxBa1IqK5jTareyXvXWo2nVBCC67x_P6OfqtZRcMTUCaWQ3x_m6soScI6oCZBdEXjLPR8z_40ihhckO1aIdcqmI1ULlhrp_obPs00VdvKnXM8u9qZIhaOvb79-xYGx8CWd6LY2Foe_J_sW8YjRwEMeeVucqWBVdfJVpJ_gyuQgfigfV78ufjaKyIjy-FZ2t-ZGx5iT-ZsIaxK8eUqStljyQzDF5vZl3ZtJrdDgPZPDgU0ntbllSFSDMPt6i2BgvqQWh_ry4IV8mE2pPFYDicF3Rabzz982w'; // Replace this with your actual token

  function checkURL(url) {
    const instancesRegex = /\/instances\//;
    return instancesRegex.test(url);
  }

  function transformURL(url) {
    const instancesRegex = /\/instances\/[^\/]+/; // Match "/instances/" followed by anything except "/"
    return url.replace(instancesRegex, '/size');
  }

  if (!checkURL(url)) {
    try {
      const response = await fetch(`${url}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();

      if (result.status === 'Success') {
        const flattenedEntities = result.model.entities.map(entity => flattenObject(entity));
        return {
          items: flattenedEntities,
          totalPages: Math.ceil(result.model.totalEntities / 10),
          isAq: true
        };
      } else {
        throw new Error(result.msg || 'Error fetching data from API');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return {
        items: [],
        totalPages: 1,
      };
    }
  } else {
    try {
      const response = await fetch(`${url}?page=${page}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let totalpagesresponse;
      try {
        totalpagesresponse = await fetch(transformURL(url), {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (err) {
        totalpagesresponse = 10;
      }

      const result = await response.json();
      const pagesresponse = await totalpagesresponse?.json();

      if (result.status === 'SUCCESS') {
        const flattenedEntities = result.entities.map(entity => flattenObject(entity));
        return {
          items: flattenedEntities,
          totalPages: Math.ceil(pagesresponse.mongoCollectionSize / 10),
          isAq: false
        };
      } else {
        throw new Error(result.msg || 'Error fetching data from API');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return {
        items: [],
        totalPages: 1,
      };
    }
  }
};

const JsonTable = ({ jsonData, itemsPerPage = 5, onPageChange, isAq }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Flatten the JSON data
  const flattenedData = useMemo(() => jsonData.map(item => flattenObject(item)), [jsonData]);


  console.log("flattenedData",flattenedData)
  // Extract columns
  const columns = useMemo(() => {
    const uniqueKeys = new Set();
    flattenedData.forEach(item => {
      Object.keys(item).forEach(key => uniqueKeys.add(key));
    });
    return Array.from(uniqueKeys);
  }, [flattenedData]);

  if (!flattenedData || !flattenedData.length) {
    return <p style={{ textAlign: "center", marginTop: "15px" }}>No data to display</p>;
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(flattenedData.length / itemsPerPage);

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's data
  const currentData = flattenedData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange && onPageChange(pageNumber);
  };

  const visiblePages = 5; // Number of visible pages in the pagination

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));

    for (let i = startPage; i <= Math.min(totalPages, startPage + visiblePages - 1); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="table-container">
      <div style={{ overflowX: "scroll", overflowY: "hidden" }}>
        <table className="json-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column} className="tooltipcontainer">
                    <div className='cellvalue'>{getNestedValue(row, column)}</div>
                    <span className='tooltip'>{getNestedValue(row, column)}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {isAq && <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>}
    </div>
  );
};

const TableComponent = ({ aqId }) => {
  const url = `https://ig.gov-cloud.ai/pi-get-data-quarkus/v1.0/bigQuery/${aqId}/data?size=10000`;

  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isAq, setIsaq] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(jsonData, totalPages, "jsondata3");

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedPage = useDebounce(currentPage, 500);

  useEffect(() => {
    const fetchDataForPage = async (url) => {
      const result = await fetchDataFromApi(url, currentPage);
      console.log("response from api", result);
      setJsonData(result.items);
      setTotalPages(result.totalPages);
      setIsaq(result.isAq);
      setLoading(false);
    };

    fetchDataForPage(url);
  }, [debouncedPage, url]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const visiblePages = 5; // Number of visible pages in the pagination

  const getPageNumbers = useMemo(() => {
    const pageNumbers = [];
  
    // Calculate start and end pages
    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = startPage + visiblePages - 1;
  
    // Adjust start and end pages if they go out of bounds
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, visiblePages);
    } else if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return pageNumbers;
  }, [currentPage, totalPages]);

  return (
    <div className='container'>
      {loading ? <div id="loaderContainer1">
        <span className="loader"></span>
      </div> : <JsonTable jsonData={jsonData} onPageChange={handlePageChange} isAq={isAq} />}
    </div>
  );
};

export default TableComponent;
