import { Baloo_2, Quicksand } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-baloo',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata = {
  title: 'Alejandro De La Mora | Resume',
  description:
    'AI Solutions Architect and Governance Specialist focused on secure, auditable GenAI workflows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} ${quicksand.variable}`}>{children}</body>
    </html>
  );
}
