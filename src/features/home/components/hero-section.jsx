import Image from 'next/image';
import { GradientButton } from '@/components/ui';

/**
 * HeroSection component for the homepage hero area
 * Features main heading, description, CTA button and dashboard image
 * @returns {JSX.Element} HeroSection component with hero content
 */
const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-14">
      <Image
        className="absolute left-1/2 top-0 transform -translate-x-1/2"
        src="/images/hero-lines.svg"
        alt=""
        width={800}
        height={600}
      />
      <Image
        className="hidden lg:block absolute left-4 xl:left-36 2xl:left-56 3xl:left-96 top-80 xl:top-64"
        src="/images/hero-cursor-1.png"
        alt=""
        width={60}
        height={60}
      />
      <Image
        className="hidden lg:block absolute right-4 xl:right-36 2xl:right-56 3xl:right-96 top-80"
        src="/images/hero-cursor-2.png"
        alt=""
        width={60}
        height={60}
      />
      <div className="relative z-50">
        <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-sm sm:max-w-xl md:max-w-3xl mx-auto mb-6">
          Bookkeeping tools tailored for business owners
        </h1>
        <p className="text-center text-white text-lg mb-12">
          Daily bookkeeping for the modern business owner.
        </p>
        <div className="mb-20 text-center">
          <GradientButton href="#" variant="white">
            <span className="mr-2">Get started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9.43032 8.28857L9.4303 8.28856L9.42602 8.29284L6.45312 11.2657V8.20662V4.7275L8.11268 6.38706L9.42602 7.70039C9.59121 7.86558 9.58501 8.13574 9.43032 8.28857Z" fill="black" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </GradientButton>
        </div>
        <Image
          className="w-full object-cover"
          src="/images/hero-dashboard.png"
          alt=""
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;