import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { title } from "process";

export async function generateMetadata(): Promise<any> {
  const response = await fetch(`https://swyp-live-back.swypebites.com/dev/user/seller/meomeo`).then((res) =>
    res.json()
  );
  console.log("🚀 ~ response:", response);
  return {
    title: `I am ${response.data.owner.displayName}`,
    description: `I am ${response.data.owner.displayName}`,
    keywords: `I am ${response.data.owner.displayName}`,

    openGraph: {
      type: "website",
      siteName: "myapp",
      title: `${response.data.owner.displayName} | Product Information and Reviews `,
      description: `I am ${response.data.owner.displayName}`,
      images: response.data.owner.profileUrl,
    },
    twitter: {
      card: "summary",
      title: `I am ${response.data.owner.displayName} | Product Information and Reviews `,
      description: `I am ${response.data.owner.displayName}`,
      images: response.data.owner.profileUrl,
    },
  };
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
