'use Client'
// components/ScoreSummary.tsx
import React, { CSSProperties, useEffect, useState } from 'react'
import Container from './Container'
import Score from './Score'

const ScoreSummary: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Example: Toggle visibility after a delay to demonstrate the animation
    const timer = setTimeout(() => setIsVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='bg-dark-grey'>
      <Container>
        <div className='audit-card'>
          <h3 className=' h2 text-center scroll-hide'>Top Audit Scores</h3>
          <div className='score-box'>
            {[...Array(4).keys()].map((index) => (
              <Score
                key={index}
                wrapperClass='scroll-hide delay-[200ms]'
                imgClass='animate-pulse'
              >
                <div
                  className={isVisible ? 'counter-show' : 'counter-hide'}
                  style={{ '--i': 1 } as CSSProperties}
                ></div>
              </Score>
            ))}
          </div>
          <div className='audit-content scroll-hide delay-[1s]'>
            <p className='text-primary'>
              Search engines, business stakeholders, and end-users gauge a
              website’s value using metric tools like Google Lighthouse, which
              measures site performance, SEO, and accessibility.
            </p>
            <p className='text-primary'>
              Performance is one of the most difficult scores to get to 100.
              This is especially true in a time when users demand
              JavaScript-heavy, highly-interactive web experiences.
            </p>
            <p className='text-primary'>
              A Jamstack website, delivering SEO-friendly, lean & clean HTML in
              milliseconds, promises higher search-engine ranking and a more
              positive, responsive end-user experience.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ScoreSummary
