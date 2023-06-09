import { CarCard } from '@/components/CarCard'
import { CustomFilter } from '@/components/CustomFilter'
import { Hero } from '@/components/Hero'
import { SearchBar } from '@/components/SearchBar'
import { ShowMore } from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: HomeProps) {
   const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || '',
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || '',
      limit: searchParams.limit || 10,
      model: searchParams.model || '',
   })

   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

   return (
      <main className="overflow-hidden">
         <Hero />

         <div className="padding-x padding-y max-width mt-12" id="discover">
            <div className="home__text-container">
               <h1 className="text-4xl font-extrabold">Catálogo de carros</h1>
               <p>Explore os carros que você pode gostar</p>
            </div>
            <div className="home__filters">
               <SearchBar />

               <div className="home__filter-container">
                  <CustomFilter title="Combustível" options={fuels} />
                  <CustomFilter title="Ano" options={yearsOfProduction} />
               </div>
            </div>

            {!isDataEmpty && (
               <section>
                  <div className="home__cars-wrapper">
                     {allCars?.map((car) => (
                        <CarCard key={car} car={car} />
                     ))}
                  </div>

                  <ShowMore
                     pageNumber={(searchParams.limit || 10) / 10}
                     isNext={(searchParams.limit || 10) > allCars.length}
                  />
               </section>
            )}

            {isDataEmpty && (
               <div className="home__error-container">
                  <h2 className="text-xl font-bold text-black">
                     Oops, sem resultado
                  </h2>
                  <p>{allCars?.message}</p>
               </div>
            )}
         </div>
      </main>
   )
}
