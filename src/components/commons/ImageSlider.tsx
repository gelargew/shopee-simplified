import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../../styles/commons.css'
import useOnScreen from '../../utils/useOnScreen'


export default function ImageSlider({imageURLS, className=''}: { imageURLS: any[], className?: string }) {
    const ref = useRef<HTMLDivElement>()
    const navRef = useRef<HTMLDivElement>()
    const [currentImgIdx, setCurrentImageIndex] = useState(0)

    const changeBulletColor = (color='white') => {
        (navRef.current.children[currentImgIdx] as HTMLElement).style.backgroundColor = color;
    }

    const handleScroll = (idx=0) => {
        if (idx != currentImgIdx) {
            changeBulletColor('white')
            setCurrentImageIndex(idx)
        }
    }

    useLayoutEffect(() => {
        changeBulletColor('orange')
        ref.current.scrollBy({
            behavior: 'smooth',
            left: ref.current.children[currentImgIdx].getBoundingClientRect().left - ref.current.getBoundingClientRect().left
        })
        const imageTimeout = setTimeout(() => {       
            changeBulletColor('white')
            setCurrentImageIndex((currentImgIdx + 1) % imageURLS.length)              
        }, 3000)

        return () => clearTimeout(imageTimeout)

    }, [currentImgIdx])


    return (
        <div className={`img-slider-container ${className}`}>
            <div ref={ref} className='img-slider'>
                {imageURLS.map(URL => 
                    <img key={URL} src={URL} className='slider-img' />
                    )}
            </div>
            <div ref={navRef} className='img-slider-nav'>
                {imageURLS.map((URL, idx) => 
                    <button key={idx} onClick={() => handleScroll(idx)} ></button>
                    )}
            </div>
        </div>
    )
}