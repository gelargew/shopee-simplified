import { useLayoutEffect, useState } from "react";


export default function useWindowSize() {
    const [size, setSize] = useState({
        x: 1080,
        y: 720
    })
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize({
                x: window.innerWidth,
                y: window.innerHeight
            })
        }
        window.addEventListener('resize', updateSize)
        updateSize()

        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}