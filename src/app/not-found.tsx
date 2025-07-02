'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404 — Not Found</h1>
      <p className="text-white/50 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
      >
        ← Go back home
      </Link>
    </main>
  );
}
