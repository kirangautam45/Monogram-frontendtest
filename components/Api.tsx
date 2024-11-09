import Container from './Container'

const Api = () => {
  return (
    <>
      <section className='bg-dark-grey pb-[50%] '>
        <Container>
          <h1 className=' h1 text-white text-center relative z-50 scroll-hide '>
            API
          </h1>
          <p className='api-content scroll-hide delay-200'>
            At build time, a Jamstack website uses data from one or more APIs to
            generate markup. These APIs can be a headless CMS like Prismic, a
            database like Supabase, or even a local JSON file!
          </p>
        </Container>
      </section>
      <div className='w-screen h-[214px] overflow-hidden'>
        <svg
          className='w-full h-full'
          viewBox='0 0 1512 214'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <path
            d='M0 107.634C251.056 7.84729 507.944 72.3863 756 101.197C1004.06 130.008 1261.94 26.7112 1512 107.634V214H0V107.634Z'
            fill='#151515'
            width={'100%'}
            transform='scale(1, -1) translate(0, -214)' // Flip vertically
          />
        </svg>
      </div>
    </>
  )
}

export default Api
