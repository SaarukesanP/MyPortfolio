import { Hanken_Grotesk} from "next/font/google";
import "./globals.css";

const grotesk = Hanken_Grotesk({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Premkumar Saarukesan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${grotesk.className} ${grotesk.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
