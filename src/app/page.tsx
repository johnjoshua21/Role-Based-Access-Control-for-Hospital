"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession(); // Get user session data

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
      // Wait for session to update with role
      setTimeout(async () => {
        const res = await fetch("/api/auth/session");
        const sessionData = await res.json();

        console.log("User Role:", sessionData?.user?.role); // Debugging

        // Redirect based on user role
        if (sessionData?.user?.role === "admin") {
          router.push("/dashboard/admin");
        } else if (sessionData?.user?.role === "doctor") {
          router.push("/dashboard/doctor");
        } else {
          router.push("/dashboard/patient");
        }
      }, 500); // Small delay to ensure session updates
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
