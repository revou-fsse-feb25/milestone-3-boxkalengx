"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./components/LoadingSpinner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  if (!mounted || status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-2">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="border" required />

        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="border" required />

        <button type="submit" className="border bg-amber-500 text-grey-800">
          Submit
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
