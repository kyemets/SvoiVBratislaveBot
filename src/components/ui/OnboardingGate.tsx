"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function OnboardingGate() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/onboarding") return;
    const done = localStorage.getItem("onboarding_done");
    if (!done) {
      router.replace("/onboarding");
    }
  }, [pathname, router]);

  return null;
}
