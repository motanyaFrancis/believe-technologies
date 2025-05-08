import { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/FooterSection';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
