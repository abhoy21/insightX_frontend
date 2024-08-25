import Image from "next/image";

export default function FeaturesSection(): JSX.Element {
  return (
    <section className='w-full py-12 md:py-32 bg-[#ddeffc]'>
      <div className='ml-20 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-gradient-to-tl from-sky-500 to-sky-500/25 px-4 py-2 text-sm text-white'>
              Product Capabilities
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Discover the Power of Our SaaS Platform
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Explore the key features and capabilities of our SaaS platform
              that can help transform your business.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <Image
            src='/productFeature.png'
            alt='Product Capabilities'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
            width={550}
            height={310}
          />
          <div className='flex flex-col justify-center space-y-4'>
            <ul className='grid gap-6'>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>Intuitive Dashboard</h3>
                  <p className='text-muted-foreground'>
                    Get a comprehensive overview of your business performance
                    with our intuitive dashboard.
                  </p>
                </div>
              </li>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>Customizable Reports</h3>
                  <p className='text-muted-foreground'>
                    Create custom reports to track key metrics and insights
                    tailored to your business needs.
                  </p>
                </div>
              </li>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>Integrations</h3>
                  <p className='text-muted-foreground'>
                    Seamlessly integrate our SaaS platform with your existing
                    tools and systems.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
