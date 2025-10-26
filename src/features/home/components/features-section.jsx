import Image from 'next/image';
import features from '@/data/features.json';

const FeaturesSection = () => {
  if (!features) return null;
  return (
    <section className="bg-darkBlue-900 py-28">
      <div className="container max-w-8xl mx-auto px-4">
        <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Easy bookkeeping for your business
        </h1>
        <p className="text-white text-opacity-70 text-lg max-w-xl text-center mx-auto mb-20">
          Our software provides intuitive bookkeeping solutions, allowing you to focus on growing your business rather than crunching numbers.
        </p>

        {features.map((feature, index) => (
          <div key={feature.id} className={`rounded-xl px-8 md:px-12 ${feature.features.length > 0 ? 'pt-14 pb-8' : 'py-20'} ${feature.gradient} ${index < features.length - 1 ? 'mb-10' : ''}`}>
            <div className={`flex flex-wrap items-center -m-4 ${feature.features.length > 0 ? 'mb-6' : ''}`}>
              {feature.layout === 'imageRight' ? (
                <>
                  <div className="w-full lg:w-1/3 p-4">
                    <h2 className={`font-heading ${feature.textColor || 'text-white'} text-4xl md:text-5xl font-bold max-w-xs mb-6`}>
                      {feature.title}
                    </h2>
                    <p className={`${feature.textColor || 'text-white'} text-opacity-70 max-w-xs`}>
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-2/3 p-4">
                    <Image
                      className="rounded-xl object-cover w-full"
                      style={{ height: '450px' }}
                      src={feature.image}
                      alt=""
                      width={800}
                      height={450}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full lg:w-2/3 p-4">
                    <Image
                      className="rounded-xl object-cover w-full"
                      style={{ height: '450px' }}
                      src={feature.image}
                      alt=""
                      width={800}
                      height={450}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 p-4">
                    <h2 className={`font-heading ${feature.textColor || 'text-white'} text-4xl md:text-5xl font-bold max-w-xs mb-6`}>
                      {feature.title}
                    </h2>
                    <p className={`${feature.textColor || 'text-white'} text-opacity-70 max-w-xs`}>
                      {feature.description}
                    </p>
                  </div>
                </>
              )}
            </div>
            {feature.features.length > 0 && (
              <div className="flex flex-wrap justify-between gap-6">
                {feature.features.map((featureItem, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16666 10.8333L5.73222 12.3988C6.70853 13.3752 8.29145 13.3752 9.26774 12.3988L15.8333 5.83325" stroke="white" style={{ stroke: 'white', strokeOpacity: 1 }} strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                    <p className="text-white text-sm">{featureItem}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;