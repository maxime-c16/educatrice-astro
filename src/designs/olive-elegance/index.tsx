import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { Manifeste } from './Manifeste'
import { Expertises } from './Expertises'
import { Portfolio } from './Portfolio'
import { Ecosystem } from './Ecosystem'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { tokens } from './tokens'

export function OliveEleganceMain() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <Manifeste />
        <Expertises />
        <Portfolio />
        <Ecosystem />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
OliveEleganceMain.displayName = 'OliveEleganceMain'

export default OliveEleganceMain
