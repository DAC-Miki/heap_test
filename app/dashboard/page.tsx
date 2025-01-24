import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex-col text-center">
        <p className="mb-4">THIS IS THE DASHBOARD</p>

        <Link href="/">
          <button 
            style={{
              padding: '10px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'inline-block', // Ensures button respects flex layout
            }}
            className="mt-4" // Optional: Adds margin-top to separate button from text
          >
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
