'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { CustomButton } from '../CustomButton'

export const Hero = () => {
   const handleScroll = useCallback(() => {}, [])

   return (
      <div className="hero">
         <div className="flex-1 p-px pt-36">
            <h1 className="hero__title">
               Encontre, reserve ou alugue um carro - de forma rápida e fácil!
            </h1>
            <p className="hero__subtitle">
               Simplifique sua experiência de aluguel de carros com nosso
               processo de reserva sem esforço.
            </p>

            <CustomButton
               title="Explorar carros"
               containerStyles="bg-primary-blue text-white rounded-full mt-10"
               handleClick={handleScroll}
            />
         </div>
         <div className="hero__image-container">
            <div className="hero__image">
               <Image
                  src="/hero.png"
                  alt="hero"
                  fill
                  className="object-contain"
               />

               <div className="hero__image-overlay" />
            </div>
         </div>
      </div>
   )
}
