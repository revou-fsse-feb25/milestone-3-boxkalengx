"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      {session ? (
        <div>
          <p>Logged in as: {session.user.email}</p>
          <p>Access Token: {session.accessToken}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
