'use client'

import { useCallback, useState } from 'react'
import { SearchManufacturer } from '../SearchManufacturer'

export const SearchBar = () => {
   const [manufacturer, setManufacturer] = useState('')

   const handleSearch = useCallback(() => {}, [])

   return (
      <form className="searchbar" onSubmit={handleSearch}>
         <div className="searchbar__item">
            <SearchManufacturer
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}
            />
         </div>
      </form>
   )
}
