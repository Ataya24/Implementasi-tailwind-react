function SocialFeature() {
  return (
    <div className="flex-1 basis-0 p-8 max-[1024px]:px-5 max-[1024px]:py-6" >
      <svg className="mb-4 h-[22px] w-[22px] max-[1024px]:mx-auto" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2 className="mb-2 text-2xl font-medium leading-[118%] tracking-[-0.24px] text-[var(--text-h)] max-[1024px]:text-xl">Connect with us</h2>
      <p>Join the Vite community</p>
      <ul className="m-0 mt-8 flex list-none gap-2 p-0 max-[1024px]:mt-5 max-[1024px]:flex-wrap max-[1024px]:justify-center">
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://github.com/vitejs/vite" target="_blank">
            <svg className="h-[18px] w-[18px] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://chat.vite.dev/" target="_blank">
            <svg className="h-[18px] w-[18px] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://x.com/vite_js" target="_blank">
            <svg className="h-[18px] w-[18px] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)] max-[1024px]:w-full max-[1024px]:justify-center" href="https://bsky.app/profile/vite.dev" target="_blank">
            <svg className="h-[18px] w-[18px] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Bluesky
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialFeature
