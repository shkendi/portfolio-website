import Nav from "./nav"
import Hero from './hero'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'
const main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

    </div>
  )
}

export default main