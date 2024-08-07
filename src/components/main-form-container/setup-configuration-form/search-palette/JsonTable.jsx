import React from 'react';
import "../../analytics-setup-form/TableComponent.css";

const TableCell = ({ value }) => {
  if (typeof value === 'boolean') {
    return <span>{value.toString()}</span>;
  } else if (value === null) {
    return <span>null</span>;
  } else if (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === 'object'
  ) {
    return <NestedTable data={value} />;
  } else if (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  ) {
    return <NestedTable data={[value]} />;
  } else if (typeof value === 'number' && value.toString().length === 10) {
    // Check if value is a 10-digit timestamp
    const date = new Date(value * 1000);
    const formatted_date =
      ('0' + date.getUTCDate()).slice(-2) +
      '-' +
      ('0' + (date.getUTCMonth() + 1)).slice(-2) +
      '-' +
      date.getUTCFullYear();
    return <span>{formatted_date}</span>;
  }
  return <span>{value}</span>;
};

const JsonTable = ({ jsonData }) => {
  console.log("tablererendered!")
  if (!jsonData || !jsonData.length) {
    return (
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        No data to display
      </p>
    );
  }

  let allColumns = new Set();
  let rows = [];

  // Check if jsonData has schema with fields and rows
  if (jsonData[0]?.schema?.fields && jsonData[0].rows) {
    allColumns = new Set(jsonData[0].schema.fields.map((field) => field.name));
    rows = jsonData.flatMap((obj) =>
      obj.rows.map((row) => row.f.map((cell) => cell.v))
    );
  } else {
    // Collect all unique columns
    jsonData.forEach((obj) => {
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        allColumns.add(key);
      });
    });

    rows = jsonData.map((obj) => {
      return Array.from(allColumns).map((column) => {
        return obj[column] !== undefined ? obj[column] : null;
      });
    });
  }

  let columns = Array.from(allColumns);

  if (!columns.length || !rows.length) {
    return (
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        No fields or rows in the JSON data
      </p>
    );
  }

  return (
    <div className="table-container1">
      <div>
        <table className="json-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <TableCell value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const NestedTable = ({ data }) => {
  if (!data || !data.length) {
    return null;
  }

  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>
                <TableCell value={row[column]} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsonTable;
