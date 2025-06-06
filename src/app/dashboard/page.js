"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      {session && (
        <div>
          <p>Logged in as: {session.user.email}</p>
          <p>Access Token: {session.accessToken}</p>
          <div>
            <button onClick={handleLogout} className="border bg-red-500 text-black-800">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
