"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-2">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="border " required />

        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="border " required />
        <button
          type="submit"
          className="border bg-amber-500
                text-white"
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
