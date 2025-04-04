"use client";

import { useSession } from "next-auth/react";

export default function PatientDashboard() {
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
      <p className="dashboard-info"><span className="dashboard-label">Age:</span> {user.age}</p>
      <p className="dashboard-info"><span className="dashboard-label">Gender:</span> {user.gender}</p>
      <p className="dashboard-info"><span className="dashboard-label">Blood Group:</span> {user.bloodGroup}</p>
      <p className="dashboard-info"><span className="dashboard-label">Doctor Assigned:</span> {user.doctorAssigned}</p>
      <p className="dashboard-info"><span className="dashboard-label">Next Appointment:</span> {user.nextAppointmentDate}</p>
      <p className="dashboard-info"><span className="dashboard-label">Emergency Contact:</span> {user.emergencyContact?.name} ({user.emergencyContact?.phone})</p>
      <p className="dashboard-info"><span className="dashboard-label">Address:</span> {user.address}</p>
    </div>
  );
}
