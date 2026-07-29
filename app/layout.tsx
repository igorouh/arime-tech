import "./globals.css";

export const metadata = {
  title: "ARIME TECH",
  description: "Des solutions durables pour vos installations et équipements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}