"use client"

import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

    const handleRedirect = () => {
      router.push('/');
    }
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex flex-col w-full">
        <p className="text-center">THIS IS THE DASHBOARD</p>
        <button onClick={handleRedirect}>
            <p className="text-center">BACK TO HOME</p>
            </button>
        </div>
    </div>
  );
}
