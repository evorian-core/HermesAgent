import { MotionConfig } from "framer-motion";
import { AmbientBackground } from "./components/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ComprehensionSection } from "./components/ComprehensionSection";
import { DemonstrationSection } from "./components/DemonstrationSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ConfigurationSection } from "./components/ConfigurationSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";

const LAUNCH_STYLES = `
  .hermes-launch {
    --launch-bg: #030303;
    --launch-panel: rgba(15, 15, 18, 0.66);
    --launch-border: rgba(255, 255, 255, 0.1);
    --launch-muted: #a1a1aa;
    background-color: var(--launch-bg);
    background-image:
      radial-gradient(ellipse at 12% 18%, rgba(84, 70, 190, 0.12), transparent 34%),
      radial-gradient(ellipse at 88% 37%, rgba(37, 145, 186, 0.09), transparent 32%),
      linear-gradient(180deg, #050507 0%, #030305 48%, #050408 100%);
    color: #fff;
  }

  @keyframes hermes-aurora-breathe {
    from { opacity: 0.36; background-position: 0% 50%; }
    to { opacity: 0.72; background-position: 100% 50%; }
  }

  .hermes-launch > div[aria-hidden="true"] > div:nth-child(1),
  .hermes-launch > div[aria-hidden="true"] > div:nth-child(2) {
    opacity: 0.6;
    background-size: 180% 180%;
    animation: hermes-aurora-breathe 18s ease-in-out infinite alternate;
  }

  .hermes-launch > div[aria-hidden="true"] > div:nth-child(1) {
    background: radial-gradient(ellipse at 40% 36%, rgba(131, 88, 255, 0.25), rgba(89, 70, 190, 0.12) 42%, transparent 72%);
  }

  .hermes-launch > div[aria-hidden="true"] > div:nth-child(2) {
    background: radial-gradient(ellipse at 60% 52%, rgba(42, 188, 226, 0.15), rgba(199, 75, 193, 0.1) 38%, transparent 72%);
    animation-delay: -8s;
  }

  .hermes-launch > div[aria-hidden="true"] > .bg-grid-subtle {
    opacity: 0.42;
    background-image: radial-gradient(rgba(220, 220, 255, 0.27) 0.7px, transparent 0.9px);
    background-position: center;
    background-size: 27px 27px;
    mask-image: radial-gradient(ellipse at center, #000 8%, transparent 76%);
    -webkit-mask-image: radial-gradient(ellipse at center, #000 8%, transparent 76%);
  }

  .hermes-launch > div[aria-hidden="true"] > canvas {
    opacity: 0.72;
  }

  .hermes-launch > div[aria-hidden="true"] > div:last-child {
    opacity: 0.46;
  }

  .hermes-launch #inicio > div:first-child {
    background: radial-gradient(ellipse at center, rgba(124, 99, 255, 0.13), rgba(37, 176, 212, 0.06) 42%, transparent 72%);
    filter: blur(100px);
  }

  .hermes-launch header nav {
    border-color: var(--launch-border);
    background: rgba(9, 9, 11, 0.72);
    box-shadow: 0 12px 44px -24px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .hermes-launch header nav > div:last-of-type > a,
  .hermes-launch header > div > div:last-child {
    border-color: var(--launch-border);
  }

  .hermes-launch main > section {
    border-color: rgba(255, 255, 255, 0.07);
    background-color: transparent;
  }

  .hermes-launch #inicio {
    display: flex;
    min-height: min(900px, 100svh);
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 96px;
  }

  .hermes-launch #inicio > div:nth-of-type(2) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 54px;
    text-align: center;
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:first-child {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .hermes-launch #inicio h1 {
    max-width: 980px;
    background: linear-gradient(105deg, #fff 8%, #e8e7ff 48%, #a5edff 92%);
    background-clip: text;
    color: transparent;
    font-size: clamp(3.25rem, 7.2vw, 6rem);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.99;
    -webkit-background-clip: text;
  }

  .hermes-launch #inicio h1 .text-metallic {
    background: linear-gradient(100deg, #e7e4ff 4%, #bcb5ff 46%, #83e5ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:first-child > p {
    max-width: 650px;
    color: var(--launch-muted);
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:first-child > div:last-of-type {
    justify-content: center;
  }

  .hermes-launch #inicio a[href^="https://wa.me"] {
    border: 1px solid rgba(184, 178, 255, 0.45);
    background: linear-gradient(110deg, #635bdb, #317da9);
    color: #fff;
    box-shadow: 0 0 38px -16px rgba(113, 106, 255, 0.75);
  }

  .hermes-launch #inicio a[href^="https://wa.me"]:hover {
    background: linear-gradient(110deg, #746df0, #3997c5);
    box-shadow: 0 0 44px -12px rgba(116, 109, 240, 0.85);
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:first-child > div:last-of-type > a:last-child {
    border-color: rgba(255, 255, 255, 0.16);
    background: transparent;
    backdrop-filter: none;
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:nth-child(2) {
    width: min(100%, 760px);
  }

  .hermes-launch #inicio > div:nth-of-type(2) > div:nth-child(2) > div > div:last-child {
    border-color: var(--launch-border);
    background: linear-gradient(145deg, rgba(20, 20, 25, 0.88), rgba(8, 8, 10, 0.92));
    box-shadow: 0 30px 100px -52px rgba(109, 101, 240, 0.55);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .hermes-launch main > section > div > div:first-child h2 {
    letter-spacing: 0;
  }

  .hermes-launch #como-funciona dl {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;
    overflow: visible;
    border: 0;
    background: transparent;
  }

  .hermes-launch #como-funciona dl > div:nth-child(1) { grid-column: span 7; }
  .hermes-launch #como-funciona dl > div:nth-child(2) { grid-column: span 5; }
  .hermes-launch #como-funciona dl > div:nth-child(n + 3) { grid-column: span 4; }

  .hermes-launch #como-funciona dl > div > div {
    display: flex;
    min-height: 184px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid var(--launch-border);
    border-radius: 24px;
    background: linear-gradient(145deg, rgba(22, 22, 28, 0.74), rgba(10, 10, 12, 0.72));
    padding: 28px;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    transition: border-color 220ms ease, transform 220ms ease;
  }

  .hermes-launch #como-funciona dl > div:first-child > div {
    min-height: 230px;
    background: radial-gradient(ellipse at 90% 5%, rgba(99, 91, 219, 0.16), transparent 52%),
      linear-gradient(145deg, rgba(22, 22, 28, 0.82), rgba(10, 10, 12, 0.72));
  }

  .hermes-launch #como-funciona dl > div:hover > div {
    transform: translateY(-3px);
    border-color: rgba(167, 160, 255, 0.35);
  }

  .hermes-launch #como-funciona dl dt { font-size: 1.3rem; }
  .hermes-launch #como-funciona dl dd { max-width: 34rem; color: var(--launch-muted); }

  .hermes-launch #demonstracao [class*="rounded-2xl"],
  .hermes-launch #aplicacoes [class*="rounded-2xl"],
  .hermes-launch #configuracao [class*="rounded-2xl"],
  .hermes-launch #planos [class*="rounded-2xl"] {
    border-color: var(--launch-border);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .hermes-launch #demonstracao [class*="rounded-2xl"] {
    background-color: var(--launch-panel);
  }

  .hermes-launch #aplicacoes #sector-panel > div,
  .hermes-launch #configuracao [class*="rounded-2xl"],
  .hermes-launch #planos .max-w-6xl > div:nth-child(2) > div > div {
    background-color: var(--launch-panel);
  }

  .hermes-launch #planos .max-w-6xl > div:nth-child(2) > div > div {
    border-radius: 24px;
    padding: 32px;
  }

  .hermes-launch #planos .max-w-6xl > div:nth-child(2) > div:nth-child(2) > div {
    border-color: rgba(155, 149, 255, 0.36);
    box-shadow: 0 22px 70px -44px rgba(105, 97, 235, 0.65);
  }

  .hermes-launch #contato {
    background: radial-gradient(ellipse at 50% 100%, rgba(81, 74, 170, 0.12), transparent 55%), #030303;
  }

  .hermes-launch #contato a[href^="https://wa.me"],
  .hermes-launch header a[href^="https://wa.me"] {
    border: 1px solid rgba(184, 178, 255, 0.45);
    background: linear-gradient(110deg, #635bdb, #317da9);
    color: #fff;
    box-shadow: 0 0 38px -16px rgba(113, 106, 255, 0.75);
  }

  .hermes-launch footer {
    border-color: rgba(255, 255, 255, 0.08);
    background: #030303;
  }

  @media (max-width: 760px) {
    .hermes-launch #inicio {
      min-height: auto;
      padding-top: 132px;
      padding-bottom: 76px;
    }

    .hermes-launch #inicio > div:nth-of-type(2) { gap: 38px; }

    .hermes-launch #como-funciona dl {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hermes-launch #como-funciona dl > div:nth-child(n) { grid-column: span 1; }
    .hermes-launch #como-funciona dl > div:first-child { grid-column: span 2; }
    .hermes-launch #como-funciona dl > div > div { min-height: 170px; padding: 22px; }
  }

  @media (max-width: 520px) {
    .hermes-launch #inicio h1 { font-size: clamp(3rem, 13vw, 4rem); }
    .hermes-launch #como-funciona dl { grid-template-columns: 1fr; }
    .hermes-launch #como-funciona dl > div:nth-child(n) { grid-column: span 1; }
    .hermes-launch #como-funciona dl > div > div,
    .hermes-launch #como-funciona dl > div:first-child > div { min-height: 160px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hermes-launch > div[aria-hidden="true"] > div:nth-child(1),
    .hermes-launch > div[aria-hidden="true"] > div:nth-child(2) { animation: none; }
    .hermes-launch #como-funciona dl > div > div { transition: none; }
  }
`;

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <style>{LAUNCH_STYLES}</style>
        <div className="hermes-launch relative min-h-screen bg-ink font-sans text-white selection:bg-white selection:text-black">
          <AmbientBackground />
          <Navbar />

          <main className="relative z-10">
            <HeroSection />
            <ComprehensionSection />
            <DemonstrationSection />
            <ApplicationsSection />
            <ConfigurationSection />
            <PricingSection />
            <FaqSection />
            <FinalCtaSection />
          </main>

          <Footer />
        </div>
      </>
    </MotionConfig>
  );
}

export default App;
