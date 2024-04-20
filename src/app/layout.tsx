import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alissa Nguyen",
  description: "Portfolio website of Alissa Nguyen, a Seattle's front-end developer specializing in AI/ML, JavaScript, React, and Next.js. Explore my projects, blog posts, and expertise in creating innovative web applications.",
  icons: {
    icon: '/src/app/favicon.ico', // TODO: Fix this not showing
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Alissa Nguyen', 'Seattle','portfolio', 'front-end development', 'AI', 'ML', 'artificial intelligent', 'machine learning', 'blog', 'technical', 'web development'],
  creator: 'Alissa Nguyen',
  publisher: 'Alissa Nguyen',
  twitter: {
    card: "summary_large_image",
    title: "Alissa Nguyen - Portfolio",
    description: "Portfolio website of Alissa Nguyen, Seattle's front-end developer specializing in AI/ML, JavaScript, React, and Next.js. Explore my projects, blog posts, and expertise in creating innovative web applications."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-dark-bgPrimary"}>{children}
      </body>
    </html>
  );
}
