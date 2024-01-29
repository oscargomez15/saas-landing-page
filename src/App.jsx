import {Hero} from './Hero'
import { Features } from './FeaturesList'
import { Pricing } from './Pricing'
import { FeatureOne } from './FeatureOne'
import { FeatureTwo } from './FeatureTwo'
import { Footer } from './Footer'

function App() {
  return (
    <div className="flex flex-col box-border bg-[#0F1C2E] bg-gradient-to-b from-[#0F1C2E] via-[#1f2b3e] to-[#0F1C2E] scroll-smooth">
      <Hero/>
      <FeatureOne/>
      <FeatureTwo/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
