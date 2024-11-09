import React, { useState } from 'react';
import './PermissionTable.css';

const PermissionTable = () => {
  const initialPermissions = [
    {
      dataHolder: 'Schufa',
      permissionDate: '2023-10-01',
      purpose: 'To provide personalized financial advice and services',
      permissions: [
        { id: 1, type: 'Account balance', revoked: false },
        { id: 2, type: 'Transaction history', revoked: false },
        { id: 3, type: 'Credit score', revoked: false }
      ]
    },
    {
      dataHolder: 'Deutsche Bank',
      permissionDate: '2023-09-15',
      purpose: 'To offer tailored investment opportunities',
      permissions: [
        { id: 4, type: 'Investment portfolio', revoked: false },
        { id: 5, type: 'Transaction history', revoked: false }
      ]
    }
  ];

  const [permissions, setPermissions] = useState(initialPermissions);

  const revokePermission = (dataHolder, permissionId) => {
    setPermissions(prevPermissions =>
      prevPermissions.map(holder =>
        holder.dataHolder === dataHolder
          ? {
              ...holder,
              permissions: holder.permissions.map(permission =>
                permission.id === permissionId
                  ? { ...permission, revoked: true }
                  : permission
              )
            }
          : holder
      )
    );
  };

  const activePermissions = permissions
    .map(holder => ({
      ...holder,
      permissions: holder.permissions.filter(permission => !permission.revoked)
    }))
    .filter(holder => holder.permissions.length > 0);

  const revokedPermissions = permissions
    .map(holder => ({
      ...holder,
      permissions: holder.permissions.filter(permission => permission.revoked)
    }))
    .filter(holder => holder.permissions.length > 0);

  return (
    <div className="permission-table">
      <h2>Permission Details</h2>
      <p>Below are the details of the permissions you have granted. You can review and revoke any specific permission as needed.</p>

      {/* Only render the Active Permissions table if there are active permissions */}
      {activePermissions.length > 0 && (
        <>
          <h3>Active Permissions</h3>
          <table>
            <thead>
              <tr>
                <th>Data Holder</th>
                <th>Permission Date</th>
                <th>Purpose</th>
                <th>Data Accessed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {activePermissions.map(holder =>
                holder.permissions.map(permission => (
                  <tr key={permission.id}>
                    <td>{holder.dataHolder}</td>
                    <td>{holder.permissionDate}</td>
                    <td>{holder.purpose}</td>
                    <td>{permission.type}</td>
                    <td>
                      <button
                        className="revoke-button"
                        onClick={() => revokePermission(holder.dataHolder, permission.id)}
                      >
                        Revoke Permission
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}

      {/* Only render the Revoked Permissions table if there are revoked permissions */}
      {revokedPermissions.length > 0 && (
        <>
          <h3>Revoked Permissions</h3>
          <table>
            <thead>
              <tr>
                <th>Data Holder</th>
                <th>Permission Date</th>
                <th>Revoke Date</th>
                <th>Purpose</th>
                <th>Data Accessed</th>
              </tr>
            </thead>
            <tbody>
              {revokedPermissions.map(holder =>
                holder.permissions.map(permission => (
                  <tr key={permission.id}>
                    <td>{holder.dataHolder}</td>
                    <td>{holder.permissionDate}</td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>{holder.purpose}</td>
                    <td>{permission.type}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PermissionTable;
