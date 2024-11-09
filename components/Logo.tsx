// components/LogoSection.tsx
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

const LogoSection: React.FC = () => {
  return (
    <section className='logo'>
      <Container>
        <div className='logo-grid'>
          <div className='logo1'>
            <Image
              src={logo1}
              alt='Next.js logo'
              className='tablet:translate-y-[2rem] desktop:translate-x-[2rem] desktop:translate-y-0'
              width={307}
              height={360}
            />
          </div>
          <div className='logo2'>
            <Image
              src={logo2}
              alt='React logo'
              className='desktop:translate-y-[3.875rem]'
              width={383}
              height={341}
            />
          </div>
          <div className='logo3'>
            <Image
              src={logo3}
              alt='Next.js logo'
              className='desktop:translate-y-[-7.063rem]'
              width={307}
              height={360}
            />
          </div>
          <div className='logo4'>
            <Image
              src={logo4}
              alt='React logo'
              className='desktop:translate-y-[0.875rem]'
              width={383}
              height={341}
            />
          </div>
          <div className='logo5'>
            <Image
              src={logo5}
              alt='Svelte logo'
              className='desktop:translate-y-[2px]'
            />
          </div>
          <div className='logo6'>
            <Image
              src={logo6}
              alt='Vue.js logo'
              className='desktop:translate-y-[-1.25rem]'
            />
          </div>
          <div className='logo7'>
            <Image
              src={logo7}
              alt='React logo'
              className='desktop:translate-y-[-6.25rem]'
            />
          </div>
          <div className='logo8'>
            <Image src={logo8} alt='Svelte logo' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LogoSection
