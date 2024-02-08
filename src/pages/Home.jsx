import Hero from "../components/Hero"
import Expression from "../components/Expression"
import Projects from "../components/Projects"
import Action from "../components/Action"
import Footer from "../components/Footer"
export default function Home(){
    return (
        <section>
            <Hero />
            <Projects />
            <Expression />
            <Action />
            <Footer />
        </section>
    )
}