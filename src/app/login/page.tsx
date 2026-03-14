'use client';

import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    window.location.href = 'https://builder-service-platform-gm84uvd3e.vercel.app';
  }, []);

  return (
    <section className="bg-navy min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting to Homefront App...</h1>
        <p className="text-gray-400">
          If you are not redirected automatically,{' '}
          <a
            href="https://builder-service-platform-gm84uvd3e.vercel.app"
            className="text-gold hover:text-gold-light underline"
          >
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
