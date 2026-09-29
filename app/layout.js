import './globals.css';

export const metadata = {
  title: 'Arvinth weds Mohanapriya',
  description: 'With the blessing of our families, we are excited to invite you to celebrate our special day.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
