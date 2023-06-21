"use client"
import { HomeIcon } from 'lucide-react'
import { useFetch } from '../hooks/usefetch'

const url = `http://jsonplaceholder.typicode.com/posts`
interface Post {
  userId: number
  id: number
  title: string
  body: string
}


export default function Home() {
  const { data, error } = useFetch<Post[]>(url)
  return(<>
    <h1 className='font-bold text-3xl md:text-4xl'>Your Feed</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
      {/* feed */}
      {/* subreaddit info */}
      <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
        <div className="bg-emerald-100 px-6 py-4">
          <p className='font-semibold py-3 flex items-center gap-1.5'>
            <HomeIcon />
            Home
          </p>
        </div>
        <div className="-my-3 divide-y divide-gray-100 px-6 text-sm leading-6">
          <div className='flex justify-between gap-x-4 py-3'>
            <p className='text-zinc-500'>Your personal leadit</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}