
import { useEffect } from 'react'
import { useState } from 'react'
import { getRandomFact } from '../services/facts'

export default function useCatFact() {

    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact, [])

    return { fact, refreshFact }
}
