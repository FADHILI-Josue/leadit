"use client"
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import {signIn} from 'next-auth/react'
import { Icons } from './Icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>  {
  
}


const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const loginwithgoogle = async () => {
        setIsLoading(true);
        try {
            await signIn()
        } catch (error) {
            //toast notification
        }finally{
            setIsLoading(false)
        }
    }
  return <div className={cn("flex justify-center", className)} {...props}>
  <Button size={'sm'} className='w-full' isLoading={isLoading} onClick={loginwithgoogle}>
    {isLoading ? null : <Icons.google className='h-4 w-4 mr-2'/>}
    Google
    </Button>
</div>
}

export default UserAuthForm