import Image from 'next/image';
import { GradientButton } from '@/components/ui';

/**
 * CTASection component with call-to-action content
 * Features gradient background and link to external resource
 * @returns {JSX.Element} CTASection component with promotional content
 */
const CTASection = () => {
  return (
    <section className="bg-darkBlue-900 py-28">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl w-full px-7 md:px-14 py-20 bg-gradient-to-b from-darkBlue-900 via-blue-700 to-blue-400 relative h-96">
          <div className="relative z-50 flex flex-col justify-center items-start h-full">
            <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-10 max-w-md md:max-w-xl">
              Want to learn how to make templates like this one?
            </h1>
            <GradientButton
              variant="white"
              href="https://www.pixelrocket.store"
            >
              Visit Pixel Rocket
            </GradientButton>
          </div>
          <Image
            className="absolute right-0 top-0 object-cover h-full rounded-3xl"
            src="/images/cta-illustration.svg"
            alt=""
            width={400}
            height={384}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;