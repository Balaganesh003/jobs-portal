import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={`  items-center justify-between p-24 ${inter.className}`}>
      <Link href="/admin" className="block">
        <p className="text-3xl text-link">Admin</p>
      </Link>
      <Link href="/user" className="block">
        <p className="text-3xl text-link">User</p>
      </Link>
    </main>
  );
}
