import React, { useState } from "react";
import PermissionTable from "./PermissionTable";
import "./PermissionsDashboard.css";

const PermissionsDashboard = () => {
    const initialActivePermissions = [
      {
        id: 1,
        dataUser: "Bank A",
        permissionDate: "2023-10-01",
        purpose: "To analyze transaction history for credit evaluation",
        dataAccessed: [
          { id: 1, name: "Account balance", granted: true },
          { id: 2, name: "Transaction history", granted: true },
          { id: 3, name: "Credit score", granted: true },
        ],
      },
      {
        id: 2,
        dataUser: "Insurance B",
        permissionDate: "2023-09-15",
        purpose: "To provide tailored insurance plans",
        dataAccessed: [
          { id: 4, name: "Insurance policies", granted: true },
          { id: 5, name: "Claim history", granted: true },
        ],
      },
    ];
  
    const initialRevokedPermissions = [
      {
        id: 3,
        dataUser: "Financial Service C",
        permissionDate: "2023-07-20",
        revokeDate: "2023-08-15",
        purpose: "To offer investment options",
        dataAccessed: [
          { id: 6, name: "Investment portfolio", granted: false },
          { id: 7, name: "Transaction history", granted: false },
        ],
      },
    ];
  
    const [activePermissions, setActivePermissions] = useState(initialActivePermissions);
    const [revokedPermissions, setRevokedPermissions] = useState(initialRevokedPermissions);
  
    const handleRevoke = (permissionId) => {
      const permissionToRevoke = activePermissions.find((permission) => permission.id === permissionId);
  
      // Move the permission to the revoked list
      setRevokedPermissions([
        ...revokedPermissions,
        { ...permissionToRevoke, revokeDate: new Date().toISOString().split("T")[0] },
      ]);
  
      // Remove it from active permissions
      setActivePermissions(activePermissions.filter((permission) => permission.id !== permissionId));
    };
  
    return (
      <div className="permissions-dashboard">
        <h2>Permissions Details</h2>
        <p>Below are the details of the permissions granted to various data users. You can review the information and revoke individual permissions if necessary.</p>
        <PermissionTable permissions={activePermissions} isRevoked={false} onRevoke={handleRevoke} />
  
        <h2>Revoked Permissions</h2>
        <PermissionTable permissions={revokedPermissions} isRevoked={true} />
      </div>
    );
  };
  
  export default PermissionsDashboard;