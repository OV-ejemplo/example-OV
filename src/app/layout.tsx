import './globals.css';

import { Metadata } from 'next';

import { encode } from './fonts';

export const metadata: Metadata = {
  title: 'Plan Seguro Ejemplo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className={`${encode.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
