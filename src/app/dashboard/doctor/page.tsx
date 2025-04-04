"use client";

import { useSession } from "next-auth/react";

export default function DoctorDashboard() {
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
      <p className="dashboard-info"><span className="dashboard-label">Specialization:</span> {user.specialization}</p>
      <p className="dashboard-info"><span className="dashboard-label">Experience:</span> {user.experience} years</p>
      <p className="dashboard-info"><span className="dashboard-label">Medical License Number:</span> {user.medicalLicenseNumber}</p>
      <p className="dashboard-info"><span className="dashboard-label">Availability Schedule:</span> {user.availabilitySchedule}</p>
      <p className="dashboard-info"><span className="dashboard-label">Consultation Fee:</span> {user.consultationFee}</p>
      <p className="dashboard-info"><span className="dashboard-label">Address:</span> {user.address}</p>
    </div>
  );
}
