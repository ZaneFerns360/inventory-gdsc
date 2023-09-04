import Image from 'next/image'
import Login from '@components/Login'

export default function Home() {
  return (
    <>
      <div className="h-32 w-full bg-sky-950">
        <div className="flex items-center justify-center pt-4">
          <Image
            src="/assets/Fr.CRCE_name.png"
            width={170}
            height={200}
            alt="Father Agnel"
          />
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Login />
      </main>
    </>
  )
}
