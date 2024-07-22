import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`).then(res => res.json()).then(response => {
            const { _id } = response
            const url = `/cat/${_id}/says/${threeFirstWords}`
            setImageUrl(url)
        })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
