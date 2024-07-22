import React from 'react'
import useCatFact from '../hooks/useCatFact'
import useCatImage from '../hooks/useCatImage'

export const Principal = () => {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleclick = async () => {
        refreshFact()
    }

    return (
        <main className='flex flex-col place-content-center p-10 gap-8 bg-slate-100 h-screen' >
            <h1 className="text-center font-bold text-4xl">App de Michis</h1>

            <button className=" border border-lime-400 bg-lime-300 w-48 h-10 rounded-xl mx-auto hover:bg-lime-500" onClick={handleclick}> Get new fact</button>

            {fact && <p className="text-center">{fact}</p>}
            {imageUrl && <img className="flex w-[30%] h-auto rounded-xl place-content-center mx-auto" src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>

    )
}
