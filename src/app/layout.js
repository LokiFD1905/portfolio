import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lokesh Kumar",
  description: "lokifd , hi i am lokesh kumar , im a full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="pX7f_2J9N1DSkcxG4E1Zzb3lezDqP61WYbTHBpgIhKE" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
