// // components/LogoSection.tsx

import Image from 'next/image'
import Container from './Container'

import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import logo6 from '../assets/logo6.svg'
import logo7 from '../assets/logo7.svg'
import logo8 from '../assets/logo8.svg'

const logos = [
  {
    src: logo1,
    alt: 'Next.js logo',
    width: 307,
    height: 360,
    className:
      'tablet:translate-y-[2rem] desktop:translate-x-[2rem] desktop:translate-y-0',
  },
  {
    src: logo2,
    alt: 'React logo',
    width: 383,
    height: 341,
    className: 'desktop:translate-y-[3.875rem]',
  },
  {
    src: logo3,
    alt: 'Next.js logo',
    width: 307,
    height: 360,
    className: 'desktop:translate-y-[-7.063rem]',
  },
  {
    src: logo4,
    alt: 'React logo',
    width: 383,
    height: 341,
    className: 'desktop:translate-y-[0.875rem]',
  },
  { src: logo5, alt: 'Svelte logo', className: 'desktop:translate-y-[2px]' },
  {
    src: logo6,
    alt: 'Vue.js logo',
    className: 'desktop:translate-y-[-1.25rem]',
  },
  {
    src: logo7,
    alt: 'React logo',
    className: 'desktop:translate-y-[-4.25rem]',
  },
  { src: logo8, alt: 'Svelte logo' },
]

const LogoSection: React.FC = () => {
  return (
    <section className='logo'>
      <Container>
        <div className='logo-grid'>
          {logos.map((logo, index) => (
            <div key={index} className={`logo${index + 1}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100} // Fallback if width is not provided
                height={logo.height || 100} // Fallback if height is not provided
                className={logo.className}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LogoSection
