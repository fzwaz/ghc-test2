import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ProofMetrics } from './components/home/ProofMetrics';
import { StrategicPillars } from './components/home/StrategicPillars';
import { CapitalReadinessTool } from './components/home/CapitalReadinessTool';
import { CaseStudiesSection } from './components/home/CaseStudiesSection';
import { DealSignals } from './components/home/DealSignals';
import { ConversionCta } from './components/home/ConversionCta';
import { SolutionsPage } from './components/solutions/SolutionsPage';
import { MandateModal } from './components/common/MandateModal';
import { CaseStudyDrawer } from './components/common/CaseStudyDrawer';
import { CaseStudy } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'solutions'>('home');
  const [mandateModalOpen, setMandateModalOpen] = useState(false);
  const [defaultMandatePillar, setDefaultMandatePillar] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenMandate = (pillar?: string) => {
    setDefaultMandatePillar(pillar);
    setMandateModalOpen(true);
  };

  const handleOpenMandateWithMetrics = (summary: string) => {
    setDefaultMandatePillar(summary);
    setMandateModalOpen(true);
  };

  const handleNavigate = (page: 'home' | 'solutions') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-brand selection:text-obsidian-950">
      
      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMandate={handleOpenMandate}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            <Hero
              onOpenMandate={handleOpenMandate}
              onNavigateSolutions={() => handleNavigate('solutions')}
            />
            <ProofMetrics />
            <StrategicPillars
              onOpenMandate={handleOpenMandate}
              onNavigateSolutions={() => handleNavigate('solutions')}
            />
            <CapitalReadinessTool
              onOpenMandateWithMetrics={handleOpenMandateWithMetrics}
            />
            <CaseStudiesSection
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              onOpenMandate={handleOpenMandate}
            />
            <DealSignals onOpenMandate={handleOpenMandate} />
            <ConversionCta
              onOpenMandate={handleOpenMandate}
              onNavigateSolutions={() => handleNavigate('solutions')}
            />
          </>
        ) : (
          <SolutionsPage
            onOpenMandate={handleOpenMandate}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Global Sovereign Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMandate={handleOpenMandate}
      />

      {/* Interactive Mandate Intake Modal */}
      <MandateModal
        isOpen={mandateModalOpen}
        onClose={() => setMandateModalOpen(false)}
        defaultPillar={defaultMandatePillar}
      />

      {/* Interactive In-Depth Case Study Modal */}
      <CaseStudyDrawer
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenMandate={handleOpenMandate}
      />

    </div>
  );
}

export default App;
