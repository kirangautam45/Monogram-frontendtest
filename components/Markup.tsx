import React from 'react'
import Container from './Container'
import Brick from './Brick'
import VisualContainer from './VisualContainer'

const MarkupSection = () => {
  return (
    <section className=' relative overflow-hidden z-50 tablet:min-h-[78rem] desktop:min-h-[80rem]'>
      <Container>
        <div className='flex flex-col desktop:flex-row desktop:gap-12 '>
          <div className='flex flex-col desktop:basis-1/2 '>
            <h1 className='h1  text-black tablet:text-left  scroll-hide '>
              Markup
            </h1>
            <p className='text-secondary mt-8 tablet:mt-12 desktop:mt-16 max-w-[30rem] mx-auto tablet:mx-0 scroll-hide delay-200'>
              When ready for deployment, a static-site generator such as Astro
              or Next.js is used to compile the website. The end result is a
              collection of pre-rendered HTML pages that can be delivered
              lightning-fast over a CDN like Vercel’s Edge Network.
            </p>
            <section className=' relative mt-40'>
              {/* for three bricks  with different direction*/}

              <Brick
                svgClass='fill-endeavour'
                wrapperClass='absolute bottom-0 brick-1st-hide delay-[1300ms] rotate-[-16deg] translate-x-[50px] translate-y-[20px] my-16'
              />

              <Brick
                svgClass='fill-thunderbird'
                wrapperClass='absolute bottom-0 brick-2nd-hide delay-[1250ms] rotate-[14deg] translate-x-[-240px] translate-y-[180px]  ' // Increased translate-y to create gap
              />

              <Brick
                svgClass='fill-koromiko'
                wrapperClass='absolute bottom-0 brick-3rd-hide delay-[1200ms] rotate-[-58deg] translate-x-[300px] translate-y-[180px]' // Further increased translate-y
              />
            </section>
          </div>

          <VisualContainer className='desktop:basis-1/2' />
        </div>
      </Container>

      <div className='wall'>
        <div className='wall-row'>
          <Brick
            svgClass='fill-transparent'
            wrapperClass='brick-hide delay-[850ms]'
          />
          <Brick
            svgClass='fill-endeavour'
            wrapperClass='brick-hide delay-[800ms]'
          />
          <Brick
            svgClass='fill-koromiko'
            wrapperClass='brick-hide delay-[750ms]'
          />
        </div>
        <div className='wall-row'>
          <Brick
            svgClass='fill-thunderbird opacity-60'
            wrapperClass='brick-hide delay-[700ms]'
          />
          <Brick
            svgClass='fill-koromiko opacity-60'
            wrapperClass='brick-hide delay-[650ms]'
          />
          <Brick
            svgClass='fill-black opacity-60'
            wrapperClass='brick-hide delay-[600ms]'
          />
          <Brick
            svgClass='fill-thunderbird opacity-60'
            wrapperClass='brick-hide delay-[550ms]'
          />
        </div>
        <div className='wall-row'>
          <Brick
            svgClass='fill-black opacity-30'
            wrapperClass='brick-hide delay-[500ms]'
          />
          <Brick
            svgClass='fill-endeavour opacity-30'
            wrapperClass='brick-hide delay-[450ms]'
          />
          <Brick
            svgClass='fill-gull-gray opacity-30'
            wrapperClass='brick-hide delay-[400ms]'
          />
          <Brick
            svgClass='fill-endeavour opacity-30'
            wrapperClass='brick-hide delay-[350ms]'
          />
          <Brick
            svgClass='fill-koromiko opacity-30'
            wrapperClass='brick-hide delay-[300ms]'
          />
        </div>
        <div className='wall-row'>
          <Brick
            svgClass='fill-thunderbird opacity-20'
            wrapperClass='brick-hide delay-[250ms]'
          />
          <Brick
            svgClass='fill-koromiko opacity-20'
            wrapperClass='brick-hide delay-[200ms]'
          />
          <Brick
            svgClass='fill-black opacity-20'
            wrapperClass='brick-hide delay-[150ms]'
          />
          <Brick
            svgClass='fill-endeavour opacity-20'
            wrapperClass='brick-hide delay-[100ms]'
          />
          <Brick
            svgClass='fill-koromiko opacity-20'
            wrapperClass='brick-hide delay-[50ms]'
          />
          <Brick
            svgClass='fill-thunderbird opacity-20'
            wrapperClass='brick-hide'
          />
        </div>
      </div>
    </section>
  )
}

export default MarkupSection
