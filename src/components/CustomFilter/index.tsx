'use client'

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, useCallback, useState } from 'react'

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
   const [selected, setSelected] = useState(options[0]) // State for storing the selected option
   const router = useRouter()

   // update the URL search parameters and navigate to the new URL
   const handleUpdateParams = useCallback(
      (e: { title: string; value: string }) => {
         const newPathName = updateSearchParams(title, e.value.toLowerCase())
         router.push(newPathName)
      },
      [router, title]
   )

   return (
      <div className="w-fit">
         <Listbox
            value={selected}
            onChange={(e) => {
               setSelected(e) // Update the selected option in state
               handleUpdateParams(e) // Update the URL search parameters and navigate to the new URL
            }}
         >
            <div className="relative z-10 w-fit">
               <Listbox.Button className="custom-filter__btn">
                  <span className="block truncate">{selected.title}</span>
                  <Image
                     src="/chevron-up-down.svg"
                     width={20}
                     height={20}
                     className="ml-4 object-contain"
                     alt="chevron_up-down"
                  />
               </Listbox.Button>
               <Transition
                  as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Listbox.Options className="custom-filter__options">
                     {options.map((option) => (
                        <Listbox.Option
                           key={option.title}
                           className={({ active }) =>
                              `relative cursor-default select-none px-4 py-2 ${
                                 active
                                    ? 'bg-primary-blue text-white'
                                    : 'text-gray-900'
                              }`
                           }
                           value={option}
                        >
                           {({ selected }) => (
                              <>
                                 <span
                                    className={`block truncate ${
                                       selected ? 'font-medium' : 'font-normal'
                                    }`}
                                 >
                                    {option.title}
                                 </span>
                              </>
                           )}
                        </Listbox.Option>
                     ))}
                  </Listbox.Options>
               </Transition>
            </div>
         </Listbox>
      </div>
   )
}
