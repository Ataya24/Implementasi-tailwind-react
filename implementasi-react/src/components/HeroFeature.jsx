import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function HeroFeature() {
  const [count, setCount] = useState(0)

  return (
    <section className="flex flex-grow flex-col place-content-center place-items-center gap-[25px] max-[1024px]:gap-[18px] max-[1024px]:px-5 max-[1024px]:pb-6 max-[1024px]:pt-8">
      <div className="relative">
        <img src={heroImg} className="relative z-0 mx-auto w-[170px]" width="170" height="179" alt="" />
        <img src={reactLogo} className="absolute inset-x-0 top-[34px] z-[1] mx-auto h-7 transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]" alt="React logo" />
        <img src={viteLogo} className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]" alt="Vite logo" />
      </div>
      <div>
        <h1 className="my-8 text-[56px] font-medium tracking-[-1.68px] text-[var(--text-h)] max-[1024px]:my-5 max-[1024px]:text-4xl">Get started</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-[var(--accent-bg)] px-[10px] py-[5px] font-mono text-base text-[var(--accent)] transition-colors hover:border-[var(--accent-border)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Count is {count}
      </button>
    </section>
  )
}

export default HeroFeature
