"use client";

import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="dashboard-info">Loading...</p>;
  }

  const user = session.user;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome, {user.fullName}</h1>
      <p className="dashboard-info"><span className="dashboard-label">Email:</span> {user.email}</p>
      <p className="dashboard-info"><span className="dashboard-label">Phone Number:</span> {user.phoneNumber}</p>
      <p className="dashboard-info"><span className="dashboard-label">Role:</span> {user.role}</p>
      <p className="dashboard-info"><span className="dashboard-label">Designation:</span> {user.designation}</p>
      <p className="dashboard-info"><span className="dashboard-label">Access Level:</span> {user.accessLevel}</p>
      <p className="dashboard-info"><span className="dashboard-label">Date of Joining:</span> {user.dateOfJoining}</p>
      <p className="dashboard-info"><span className="dashboard-label">Address:</span> {user.address}</p>
    </div>
  );
}
