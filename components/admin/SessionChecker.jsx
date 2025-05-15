"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SessionChecker() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      // ✅ wait before checking
      try {
        const res = await fetch("/api/auth/session");
        if (!res.ok) {
          throw new Error("Session invalid");
        }
      } catch (error) {
        toast.error("Session expired. Please login again.");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    }, 1500); // ✅ 1.5 second delay

    return () => clearTimeout(timeout);
  }, [router]);

  return null;
}
