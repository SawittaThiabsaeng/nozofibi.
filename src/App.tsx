/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import EmotionVisuals from "./components/EmotionVisuals";
import FocusHighlight from "./components/FocusHighlight";
import Features from "./components/Features";
import Experience from "./components/Experience";
import HowItWorks from "./components/HowItWorks";
import Screenshots from "./components/Screenshots";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative p-2 md:p-6 lg:p-10">
        <div className="atmospheric-bg" aria-hidden="true" />
        <div className="atmospheric-bg-blob-3" aria-hidden="true" />
        
        <div className="canvas-layout">
          <Navbar />
          <main>
            <Hero />
            <Why />
            <Features />
            <FocusHighlight />
            <Experience />
            <EmotionVisuals />
            <HowItWorks />
            <Screenshots />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
