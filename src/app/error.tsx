'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Something went wrong</h1>
      <p style={{ fontSize: '16px', color: '#666' }}>{error.message || 'An unexpected error occurred'}</p>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => reset()}
          style={{
            padding: '10px 20px',
            border: '1px solid #000',
            background: '#fff',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Try Again
        </button>
        
        <Link href="/" style={{
          padding: '10px 20px',
          border: '1px solid #000',
          background: '#fff',
          cursor: 'pointer',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#000'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
