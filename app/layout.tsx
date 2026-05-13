import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryCheck – Analyze If Job Posting Salaries Are Competitive",
  description: "Compare job posting salaries against real market rates. Get competitive salary ranges instantly. Built for HR managers and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec1737ec-d673-40e8-9035-9f14f7e2ebf9"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
