'use client'

import { CustomButonProps } from '@/types'
import clsx from 'clsx'

export const CustomButton = ({
   title,
   containerStyles,
   handleClick,
}: CustomButonProps) => {
   return (
      <button
         disabled={false}
         type="button"
         className={clsx('custom-btn', containerStyles)}
         onClick={handleClick}
      >
         <span className={clsx('flex-1')}>{title}</span>
      </button>
   )
}
