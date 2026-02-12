import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { Manifeste } from './Manifeste'
import { Expertises } from './Expertises'
import { Portfolio } from './Portfolio'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { tokens } from './tokens'

export { Navigation, Hero, Manifeste, Expertises, Portfolio, Testimonials, Contact, Footer }
export { ModernInstitutionServices } from './ServicesPage'
export { ModernInstitutionLegal } from './LegalPage'
export { tokens }

export function ModernInstitutionMain() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.offWhite, color: tokens.colors.text }}>
      <Navigation />
      <Hero />
      <Manifeste />
      <Expertises />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
ModernInstitutionMain.displayName = 'ModernInstitutionMain'

export default ModernInstitutionMain
