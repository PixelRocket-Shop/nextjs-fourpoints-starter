import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section className="bg-darkBlue-900 py-32">
      <div className="container mx-auto px-4">
        <p className="uppercase text-center text-sweetBlue-300 text-xs mb-4 tracking-widest">
          HOW IT WORKS
        </p>
        <h1 className="font-heading text-white text-center mb-6 text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
          See how we simplifies your financial tasks
        </h1>
        <Image
          className="rounded-3xl mx-auto object-cover"
          style={{ height: '600px' }}
          src="/images/how-it-works-illustration.png"
          alt=""
          width={1200}
          height={600}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;