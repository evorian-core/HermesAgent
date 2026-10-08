import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { NotAChatbotSection } from './components/NotAChatbotSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { AdaptationSection } from './components/AdaptationSection';
import { ActionSimulationSection } from './components/ActionSimulationSection';
import { ChannelsSection } from './components/ChannelsSection';
import { RealOperationsSection } from './components/RealOperationsSection';
import { CustomizationMatrixSection } from './components/CustomizationMatrixSection';
import { DisappearingTechSection } from './components/DisappearingTechSection';
import { InteractiveAgentSection } from './components/InteractiveAgentSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#ededed] selection:bg-white selection:text-black font-sans">
      {/* Cinematic subtle ambient lighting and floating dust particles */}
      <AmbientBackground />

      {/* Floating Header */}
      <Navbar />

      <main className="relative z-10">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: O Problema */}
        <ProblemSection />

        {/* Section 3: Não é apenas um chatbot */}
        <NotAChatbotSection />

        {/* Section 4: O que o HERMES faz */}
        <CapabilitiesSection />

        {/* Section 5: O HERMES se adapta */}
        <AdaptationSection />

        {/* Section 6: HERMES em ação (Live Simulation) */}
        <ActionSimulationSection />

        {/* Section 7: Onde o HERMES pode atuar */}
        <ChannelsSection />

        {/* Section 8: Para empresas reais */}
        <RealOperationsSection />

        {/* Section 9: Personalização profunda */}
        <CustomizationMatrixSection />

        {/* Section 10: A tecnologia desaparece */}
        <DisappearingTechSection />

        {/* Section 11: Converse com o HERMES (Simulador Interativo) */}
        <InteractiveAgentSection />

        {/* Section 12: Planos */}
        <PricingSection />

        {/* Section 13: FAQ */}
        <FaqSection />

        {/* Section 14: CTA Final */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
