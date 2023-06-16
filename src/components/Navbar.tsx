import Link from 'next/link'
import { FC } from 'react'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
    <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-1">
        <Link href='/' className=''>
            <Icons.logo className='h-8 w-8 sm:h-6 sm:2-6'/>
            <p className="hidden text-zinc-700 text-sm font-medium md:block">leadit</p>
         </Link>
         {/* search bar */}
         <Link href={'/sign-in'} className={buttonVariants()}>Sign in</Link>
    </div>
  </div>
}

export default Navbar