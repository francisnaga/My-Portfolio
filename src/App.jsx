import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative w-full overflow-x-hidden selection:bg-accent selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
      </main>
      <Contact />
    </div>
  )
}

export default App
