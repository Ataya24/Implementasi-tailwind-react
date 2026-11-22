import HeroFeature from './components/HeroFeature'
import DocumentationFeature from './components/DocumentationFeature'
import SocialFeature from './components/SocialFeature'

function App() {
  return (
    <div className="mx-auto flex min-h-svh w-[1126px] max-w-full flex-col border-x border-[var(--border)] text-center">
      <HeroFeature />

      <div className="relative w-full before:absolute before:left-0 before:top-[-4.5px] before:border-[5px] before:border-transparent before:border-l-[var(--border)] after:absolute after:right-0 after:top-[-4.5px] after:border-[5px] after:border-transparent after:border-r-[var(--border)]"></div>

      <section className="flex border-t border-[var(--border)] text-left max-[1024px]:flex-col max-[1024px]:text-center">
        <DocumentationFeature />
        <SocialFeature />
      </section>

      <div className="relative w-full before:absolute before:left-0 before:top-[-4.5px] before:border-[5px] before:border-transparent before:border-l-[var(--border)] after:absolute after:right-0 after:top-[-4.5px] after:border-[5px] after:border-transparent after:border-r-[var(--border)]"></div>
      <section className="h-[88px] border-t border-[var(--border)] max-[1024px]:h-12"></section>
    </div>
  )
}

export default App
