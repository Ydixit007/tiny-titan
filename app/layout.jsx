import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Tiny-titan : Empowers you to achieve big things with small steps.",
  description:
    "Tiny-titan empowers you to break down ambitious goals into actionable steps, making progress feel achievable and fulfilling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary flex items-center text-lighterGrey`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
