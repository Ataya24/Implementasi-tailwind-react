import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function DocumentationFeature() {
  return (
    <div className="flex-1 basis-0 border-r border-[var(--border)] p-8 max-[1024px]:border-b max-[1024px]:border-r-0 max-[1024px]:px-5 max-[1024px]:py-6" >
      <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2 className="mb-2 text-2xl font-medium leading-[118%] tracking-[-0.24px] text-[var(--text-h)] max-[1024px]:text-xl">Documentation</h2>
      <p>Your questions, answered</p>
      <ul className="m-0 mt-8 flex list-none gap-2 p-0 max-[1024px]:mt-5 max-[1024px]:flex-wrap max-[1024px]:justify-center">
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://vite.dev/" target="_blank">
            <img className="h-[18px]" src={viteLogo} alt="" />
            Explore Vite
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://react.dev/" target="_blank">
            <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
            Learn more
          </a>
        </li>
      </ul>
    </div>
  )
}

export default DocumentationFeature
