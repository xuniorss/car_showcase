import { CustomFilter } from '@/components/CustomFilter'
import { Hero } from '@/components/Hero'
import { SearchBar } from '@/components/SearchBar'

export default function Home() {
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
                  <CustomFilter title="Combustível" />
                  <CustomFilter title="Gás" />
               </div>
            </div>
         </div>
      </main>
   )
}
