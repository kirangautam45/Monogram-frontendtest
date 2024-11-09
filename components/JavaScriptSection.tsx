// components/JavaScriptSection.tsx
import Image from 'next/image'
import Container from './Container'

import arrow from '../assets/arrow-js.svg'
import computer from '../assets/bg-computer.png'

const JavaScriptSection: React.FC = () => {
  return (
    <section className='bg-square javascript'>
      <Container>
        <h1 className='javascript-heading scroll-hide'>JavaScript</h1>
        <p className='javascript-content text-white scroll-hide delay-[200ms]'>
          Statically generated pages are brought to life with client-side
          JavaScript libraries and frameworks, such as Algolia and Next.js.
        </p>

        <div className='computer-bg'>
          <div className='computer-screen'>
            <Image
              src={computer}
              width={804}
              height={808}
              quality={50}
              alt='Retro computer'
              className='computer-image'
            />
            <div className='computer-terminal'>
              <div className='computer-code'>
                <code className='typed-hide'>
                  <pre style={{ '--i': 0 } as React.CSSProperties}>
                    {`import Document, { Html, Head, Main, NextScript } from 'next/document'`}
                  </pre>
                  <pre style={{ '--i': 1 } as React.CSSProperties}>{``}</pre>
                  <pre
                    style={{ '--i': 2 } as React.CSSProperties}
                  >{`class MyDocument extends Document {`}</pre>
                  <pre
                    style={{ '--i': 3 } as React.CSSProperties}
                  >{`  render() {`}</pre>
                  <pre
                    style={{ '--i': 4 } as React.CSSProperties}
                  >{`    return (`}</pre>
                  <pre
                    style={{ '--i': 5 } as React.CSSProperties}
                  >{`      <Html lang="en">`}</pre>
                  <pre
                    style={{ '--i': 6 } as React.CSSProperties}
                  >{`        <Head>`}</pre>
                  <pre
                    style={{ '--i': 7 } as React.CSSProperties}
                  >{`          {/* Fonts */}`}</pre>
                  <pre style={{ '--i': 8 } as React.CSSProperties}>
                    {`          <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />`}
                  </pre>
                  <pre style={{ '--i': 9 } as React.CSSProperties}>
                    {`          <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />`}
                  </pre>
                  <pre style={{ '--i': 10 } as React.CSSProperties}>
                    {`          <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />`}
                  </pre>
                  <pre style={{ '--i': 11 } as React.CSSProperties}>
                    {`          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />`}
                  </pre>
                  <pre
                    style={{ '--i': 12 } as React.CSSProperties}
                  >{`          <noscript>`}</pre>
                  <pre style={{ '--i': 13 } as React.CSSProperties}>
                    {`            <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />`}
                  </pre>
                  <pre
                    style={{ '--i': 14 } as React.CSSProperties}
                  >{`          </noscript>`}</pre>
                  <pre
                    style={{ '--i': 15 } as React.CSSProperties}
                  >{`        </Head>`}</pre>
                  <pre
                    style={{ '--i': 16 } as React.CSSProperties}
                  >{`        <body>`}</pre>
                  <pre
                    style={{ '--i': 17 } as React.CSSProperties}
                  >{`          <Main />`}</pre>
                  <pre
                    style={{ '--i': 18 } as React.CSSProperties}
                  >{`          <NextScript />`}</pre>
                  <pre
                    style={{ '--i': 19 } as React.CSSProperties}
                  >{`        </body>`}</pre>
                  <pre
                    style={{ '--i': 20 } as React.CSSProperties}
                  >{`      </Html>`}</pre>
                  <pre
                    style={{ '--i': 21 } as React.CSSProperties}
                  >{`    )`}</pre>
                  <pre
                    style={{ '--i': 22 } as React.CSSProperties}
                  >{`  }`}</pre>
                  <pre style={{ '--i': 23 } as React.CSSProperties}>{`}`}</pre>
                  <pre style={{ '--i': 24 } as React.CSSProperties}>{``}</pre>
                  <pre
                    style={{ '--i': 25 } as React.CSSProperties}
                  >{`export default MyDocument`}</pre>
                </code>
              </div>
            </div>
          </div>
        </div>

        <Image src={arrow} alt='Arrow' className='computer-arrow' />
      </Container>
    </section>
  )
}

export default JavaScriptSection
