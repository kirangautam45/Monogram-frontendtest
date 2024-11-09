'use client'
import Api from '@/components/Api'
import Footer from '@/components/Footer'
import GlowingCanvas from '@/components/GlowingCanvas'
import IntroSection from '@/components/IntroSection'
import JavaScriptSection from '@/components/JavaScriptSection'
import MarkupSection from '@/components/Markup'
import VerticalDivider from '@/components/VerticalDivider'
import ScoreSummary from '../components/ScoreSummary'
import LogoSection from '@/components/Logo'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'




export default function Home() {
  useIntersectionObserver('scroll-hide', 'scroll-show')
  useIntersectionObserver('scroll-right-hide', 'scroll-right-show')
  useIntersectionObserver('typed-hide', 'typed-show')
  useIntersectionObserver('brick-hide', 'brick-show')
  useIntersectionObserver('brick-1st-hide', 'brick-1st-show')
  useIntersectionObserver('brick-2nd-hide', 'brick-2nd-show')
  useIntersectionObserver('brick-3rd-hide', 'brick-3rd-show')
  useIntersectionObserver('counter-hide', 'counter-show')

  return (
    <>
      <VerticalDivider />
      <IntroSection />
      <JavaScriptSection />
      <LogoSection />
      <Api />
      <GlowingCanvas />
      <MarkupSection />
      <ScoreSummary />
      <Footer />
    </>
  )
}
