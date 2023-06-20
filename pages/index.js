import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import TiptapEditor from './components/TiptapEditor';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  const [description, setDescription] = useState('');
  return (
    <main
      className={` min-h-screen  items-center justify-between p-24 ${inter.className}`}>
      <TiptapEditor description={description} setDescription={setDescription} />
    </main>
  );
}
