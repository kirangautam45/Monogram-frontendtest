import Image from 'next/image'
import VisualContainer from './VisualContainer'
import Container from './Container'

import pattern from '@/assets/bg-pattern.png'
import arrow from '@/assets/arrow-hero.svg'
import mouse from '@/assets/mouse.svg'

const IntroSection = () => {
  return (
    <section className='relative overflow-hidden z-50 tablet:mx-8 desktop:mx-16 pt-10 tablet:pt-20 desktop:pt-40 pb-56 '>
      <Container>
        <>
          <div className='flex flex-col desktop:flex-row desktop:gap-8  w-full'>
            <div className='flex flex-col desktop:basis-1/2'>
              <h1 className='hero-heading scroll-hide'>
                Jamstack{' '}
                <span
                  className='hero-pattern'
                  style={{
                    backgroundImage: `url(${pattern.src})`, // Using the static image directly
                  }}
                >
                  101
                </span>
              </h1>
              <p className='hero-content scroll-hide delay-200'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                augue massa, tincidunt proin nunc viverra tristique tempor,
                ipsum. At lectus vel pretium tempor ut dui vivamus sit.
              </p>
            </div>

            <VisualContainer
              isIntro={true}
              className='desktop:basis-1/2 flex justify-end  '
            />
          </div>

          <Image
            src={arrow}
            alt='Arrow'
            width={80} // You can adjust these sizes as necessary
            height={37}
            className='hero-arrow'
            loading='lazy'
          />
          <div className='mouse-wrapper'>
            <Image
              src={mouse}
              width={36}
              height={37}
              alt='Mouse'
              loading='lazy'
              className='animate-bounce-rotate-smooth'
            />
          </div>
        </>
      </Container>
    </section>
  )
}

export default IntroSection
