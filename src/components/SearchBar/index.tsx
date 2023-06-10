'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useState } from 'react'
import { SearchManufacturer } from '../SearchManufacturer'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
   <button type="submit" className={clsx('z-10 -ml-3', otherClasses)}>
      <Image
         src="/magnifying-glass.svg"
         alt="magnifying glass"
         width={40}
         height={40}
         className="object-contain"
      />
   </button>
)

export const SearchBar = () => {
   const [manufacturer, setManufacturer] = useState('')
   const [model, setModel] = useState('')

   const router = useRouter()

   const updateSearchParams = useCallback(
      (model: string, manufacturer: string) => {
         const searchParams = new URLSearchParams(window.location.search)

         if (model) searchParams.set('model', model)
         else searchParams.delete('model')

         if (manufacturer) searchParams.set('manufacturer', manufacturer)
         else searchParams.delete('manufacturer')

         const newPathname = `${
            window.location.pathname
         }?${searchParams.toString()}`

         router.push(newPathname)
      },
      [router]
   )

   const handleSearch = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault()

         if (manufacturer === '' && model === '')
            return alert('Por favor preencha os campos de pesquisa')

         updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
      },
      [manufacturer, model, updateSearchParams]
   )

   return (
      <form className="searchbar" onSubmit={handleSearch}>
         <div className="searchbar__item">
            <SearchManufacturer
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <div className="searchbar__item">
            <Image
               src="/model-icon.png"
               width={25}
               height={25}
               className="absolute ml-4 h-[20px] w-[20px]"
               alt="car model"
            />
            <input
               type="text"
               name="model"
               value={model}
               onChange={(e) => setModel(e.target.value)}
               placeholder="Tiguan..."
               className="searchbar__input"
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <SearchButton otherClasses="max-sm:hidden" />
      </form>
   )
}
