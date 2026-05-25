import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContentHub — Recursos para Creadores de Contenido",
  description: "La plataforma definitiva de recursos para creadores de contenido. Templates, LUTs, música, efectos, herramientas de IA y mucho más.",
  keywords: ["recursos creadores", "video editing", "templates", "luts", "motion graphics", "herramientas IA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
