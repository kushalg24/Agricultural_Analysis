import React from 'react';
import './TableStyle.css'; // Make sure this file exists with your CSS styles

// Sample Okta system log data for one month
const oktaSystemLogs = [
  { date: "2023-06-01", user: "admin@example.com", eventType: "system", action: "System Boot", result: "Success" },
  { date: "2023-06-02", user: "jdoe@example.com", eventType: "system", action: "Configuration Change", result: "Failure" },
  { date: "2023-06-03", user: "jdoe@example.com", eventType: "system", action: "Security Patch", result: "Success" },
  { date: "2023-06-04", user: "admin@example.com", eventType: "system", action: "User Creation", result: "Success" },
  { date: "2023-06-05", user: "admin@example.com", eventType: "system", action: "User Deletion", result: "Success" },
  { date: "2023-06-06", user: "jdoe@example.com", eventType: "system", action: "Group Assignment", result: "Failure" },
  { date: "2023-06-07", user: "admin@example.com", eventType: "system", action: "Policy Update", result: "Success" },
  { date: "2023-06-08", user: "jsmith@example.com", eventType: "system", action: "Password Reset", result: "Success" },
  { date: "2023-06-09", user: "jsmith@example.com", eventType: "system", action: "Login Attempt", result: "Failure" },
  { date: "2023-06-10", user: "admin@example.com", eventType: "system", action: "System Boot", result: "Success" },
  { date: "2023-06-11", user: "jdoe@example.com", eventType: "system", action: "Configuration Change", result: "Failure" },
  { date: "2023-06-12", user: "admin@example.com", eventType: "system", action: "Security Patch", result: "Success" },
  { date: "2023-06-13", user: "admin@example.com", eventType: "system", action: "User Creation", result: "Success" },
  { date: "2023-06-14", user: "admin@example.com", eventType: "system", action: "User Deletion", result: "Success" },
  { date: "2023-06-15", user: "jdoe@example.com", eventType: "system", action: "Group Assignment", result: "Failure" },
  { date: "2023-06-16", user: "admin@example.com", eventType: "system", action: "Policy Update", result: "Success" },
  { date: "2023-06-17", user: "jsmith@example.com", eventType: "system", action: "Password Reset", result: "Success" },
  { date: "2023-06-18", user: "jsmith@example.com", eventType: "system", action: "Login Attempt", result: "Failure" },
  { date: "2023-06-19", user: "admin@example.com", eventType: "system", action: "System Boot", result: "Success" },
  { date: "2023-06-20", user: "jdoe@example.com", eventType: "system", action: "Configuration Change", result: "Failure" },
  { date: "2023-06-21", user: "admin@example.com", eventType: "system", action: "Security Patch", result: "Success" },
  { date: "2023-06-22", user: "admin@example.com", eventType: "system", action: "User Creation", result: "Success" },
  { date: "2023-06-23", user: "admin@example.com", eventType: "system", action: "User Deletion", result: "Success" },
  { date: "2023-06-24", user: "jdoe@example.com", eventType: "system", action: "Group Assignment", result: "Failure" },
  { date: "2023-06-25", user: "admin@example.com", eventType: "system", action: "Policy Update", result: "Success" },
  { date: "2023-06-26", user: "jsmith@example.com", eventType: "system", action: "Password Reset", result: "Success" },
  { date: "2023-06-27", user: "jsmith@example.com", eventType: "system", action: "Login Attempt", result: "Failure" },
  { date: "2023-06-28", user: "admin@example.com", eventType: "system", action: "System Boot", result: "Success" },
  { date: "2023-06-29", user: "jdoe@example.com", eventType: "system", action: "Configuration Change", result: "Failure" },
  { date: "2023-06-30", user: "admin@example.com", eventType: "system", action: "Security Patch", result: "Success" },
];

const OktaSystemLogsTable = () => {
  return (
    <div className="table-container" style={{width:"100%",height:"100%"}}>
   
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>User</th>
            <th>Event Type</th>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {oktaSystemLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.user}</td>
              <td>{log.eventType}</td>
              <td>{log.action}</td>
              <td>{log.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OktaSystemLogsTable;
