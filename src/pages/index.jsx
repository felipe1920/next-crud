import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={`
      flex h h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to to-blue-600
    `}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
