import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer component with newsletter subscription and navigation links
 * Features a gradient background design with social media links
 * @returns {JSX.Element} Footer component with newsletter form and navigation
 */
const Footer = () => {
  return (
    <section className="bg-gradient-to-t from-darkBlue-900 via-blue-700 to-blue-400 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <div className="lg:pl-4 py-20 md:pr-8 md:border-r border-white/30 h-full">
              <p className="font-heading text-white text-xl font-semibold mb-4">Subscribe to our newsletter</p>
              <form action="">
                <div className="rounded-full bg-white/5 border border-white/10 p-1 flex items-center max-w-sm">
                  <input
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-300 pl-4"
                    type="email"
                    placeholder="Email address*"
                  />
                  <button
                    className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
                    type="submit"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
                    <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-white/80 group-focus:bg-white/80 rounded-full transition duration-200">
                      <p className="text-darkBlue-900">Subscribe</p>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="pl-8 xl:pl-24 py-20 pr-8 h-full">
              <div className="flex flex-wrap justify-between gap-6">
                <ul className="flex flex-col gap-6">
                  <li>
                    <p className="font-heading text-white font-semibold">Product</p>
                  </li>
                  <li><a className="text-white hover:text-opacity-70 text-lg transition duration-200" href="#">Features</a></li>
                  <li><a className="text-white hover:text-opacity-70 text-lg transition duration-200" href="#">How it works</a></li>
                  <li><Link className="text-white hover:text-opacity-70 text-lg transition duration-200" href="/pricing">Pricing</Link></li>
                  <li><a className="text-white hover:text-opacity-70 text-lg transition duration-200" href="#">FAQs</a></li>
                </ul>
                <ul className="flex flex-col gap-6">
                  <li>
                    <p className="font-heading text-white font-semibold">Company</p>
                  </li>
                  <li><Link className="text-white hover:text-opacity-70 text-lg transition duration-200" href="/about">About</Link></li>
                  <li><Link className="text-white hover:text-opacity-70 text-lg transition duration-200" href="/blog">Blog</Link></li>
                  <li><Link className="text-white hover:text-opacity-70 text-lg transition duration-200" href="/contact">Contact</Link></li>
                  <li><a className="text-white hover:text-opacity-70 text-lg transition duration-200" href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/30 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <div className="pl-4 py-11 pr-8 sm:border-r border-white/30 h-full">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <Link className="inline-block" href="/">
                    <Image className="h-8" src="/images/logo-white-2.svg" alt="" width={120} height={32} />
                  </Link>
                  <p className="text-white">© Four Points. All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="pl-8 xl:pl-28 pr-8 py-11">
                <div className="flex flex-wrap gap-6">
                  <a className="inline-block" href="#">
                    <Image src="/images/twitter-logo.svg" alt="" width={24} height={24} />
                  </a>
                  <a className="inline-block" href="#">
                    <Image src="/images/linkedin-logo.svg" alt="" width={24} height={24} />
                  </a>
                  <a className="inline-block" href="#">
                    <Image src="/images/instagram-logo.svg" alt="" width={24} height={24} />
                  </a>
                  <a className="inline-block" href="#">
                    <Image src="/images/facebook-logo.svg" alt="" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;