"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      router.push("/error");
    } else {
      setTimeout(async () => {
        const res = await fetch("/api/auth/session");
        const sessionData = await res.json();

        if (sessionData?.user?.role === "admin") {
          router.push("/dashboard/admin");
        } else if (sessionData?.user?.role === "doctor") {
          router.push("/dashboard/doctor");
        } else {
          router.push("/dashboard/patient");
        }
      }, 500);
    }
  };

  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #4e54c8, #8f94fb)",
    fontFamily: "Arial, sans-serif"
  }}>
    <div style={{
      backgroundColor: "white",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      width: "300px",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: "10px", color: "#4e54c8" }}>Login</h2>
      <h3 style={{ marginBottom: "20px", color: "#888", fontWeight: "bold" }}>
        Role-Based Access
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />
        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4e54c8",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Login
        </button>
      </form>
    </div>
  </div>
);
}