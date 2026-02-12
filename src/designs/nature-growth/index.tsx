import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { Manifeste } from './Manifeste'
import { Expertises } from './Expertises'
import { Portfolio } from './Portfolio'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { tokens } from './tokens'

export function NatureGrowthMain() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal }}>
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
NatureGrowthMain.displayName = 'NatureGrowthMain'

export default NatureGrowthMain
