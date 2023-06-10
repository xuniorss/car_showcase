'use client'

import { CustomButonProps } from '@/types'
import clsx from 'clsx'
import Image from 'next/image'

export const CustomButton = ({
   title,
   containerStyles,
   handleClick,
   btnType,
   textStyles,
   rightIcon,
}: CustomButonProps) => {
   return (
      <button
         disabled={false}
         type={btnType || 'button'}
         className={clsx('custom-btn', containerStyles)}
         onClick={handleClick}
      >
         <span className={clsx('flex-1', textStyles)}>{title}</span>
         {rightIcon && (
            <div className="relative h-6 w-6">
               <Image
                  src={rightIcon}
                  alt="right icon"
                  fill
                  className="object-contain"
               />
            </div>
         )}
      </button>
   )
}
