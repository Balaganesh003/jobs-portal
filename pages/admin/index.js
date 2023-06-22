import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${inter.className} `}>
      <div className="w-full bg-primary flex items-center flex-col h-full justify-center">
        <p className="text-3xl text-primary-text">Welcome</p>
      </div>
    </div>
  );
}
