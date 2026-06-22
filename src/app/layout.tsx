import * as React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { CrossDomainNav, CrossDomainFooter } from "@/lib/cross-nav";

export const metadata: Metadata = {
  title: "seo · AgeZero UI",
  description: "seo — part of the AgeZero UI suite.",
  metadataBase: new URL("https://seo.agezero.io"),
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <CrossDomainNav active="seo" />
      <main className="flex-1">{children}</main>
      <CrossDomainFooter />
    </div>
  );
}
