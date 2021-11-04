import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../../styles/commons.css'


export default function ImageSlider({imageURLS, className=''}: { imageURLS: any[], className?: string }) {
    const ref = useRef<HTMLDivElement>()
    const navRef = useRef<HTMLDivElement>()
    const [currentImgIdx, setCurrentImageIndex] = useState(0)

    const handleScroll = (idx=0) => {
        (navRef.current.children[currentImgIdx] as HTMLElement).style.backgroundColor = 'white';
        setCurrentImageIndex(idx)
    }

    useLayoutEffect(() => {
        (navRef.current.children[currentImgIdx] as HTMLElement).style.backgroundColor = 'orange';
        ref.current.children[currentImgIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        const imageTimeout = setTimeout(() => {
            (navRef.current.children[currentImgIdx] as HTMLElement).style.backgroundColor = 'white';
            setCurrentImageIndex((currentImgIdx + 1) % imageURLS.length)
        }, 3000)

        return () => clearTimeout(imageTimeout)

    }, [currentImgIdx])

    return (
        <div className={`img-slider-container ${className}`}>
            <div ref={ref} className='img-slider'>
                {imageURLS.map(URL => 
                    <img src={URL} className='slider-img' />
                    )}
            </div>
            <div ref={navRef} className='img-slider-nav'>
                {imageURLS.map((URL, idx) => 
                    <button onClick={() => handleScroll(idx)} ></button>
                    )}
            </div>
        </div>
    )
}