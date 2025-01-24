import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex flex-col w-full">
        <p className="text-center">THIS IS THE DASHBOARD</p>

        <Link href="/">
        <button style={{ padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Go to About Page
        </button>
      </Link>
        </div>
    </div>
  );
}
