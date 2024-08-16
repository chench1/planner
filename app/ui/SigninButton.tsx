'use client'

import Link from 'next/link';

export default function SigninButton({ text}: { text: string}) {
  return (
    <Link href={`/${text.toLowerCase().replaceAll(' ', '')}`}>
      <button className={`rounded-md bg-blue-500 text-white text-xl py-1 px-1`} >
        {text}
      </button>
    </Link>
  )
}
