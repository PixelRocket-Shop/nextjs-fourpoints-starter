import Image from 'next/image';

/**
 * TeamCard component for displaying team member information
 * @param {Object} props - Component props
 * @param {string} props.name - Team member's name
 * @param {string} props.position - Team member's position/title
 * @param {string} props.image - Path to team member's image
 * @param {string} [props.imageAlt] - Alt text for the image
 * @param {Array} [props.socialLinks] - Array of social media links
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.cardClassName=''] - Additional CSS classes for the card container
 * @param {string} [props.bgColor='bg-blue-500'] - Background color for the card
 * @returns {JSX.Element} TeamCard component
 */
const TeamCard = ({
  name,
  position,
  image,
  imageAlt,
  socialLinks = [],
  className = '',
  cardClassName = '',
  bgColor = 'bg-blue-500'
}) => {
  const defaultSocialIcons = {
    twitter: '/images/twitter-logo.svg',
    linkedin: '/images/linkedin-logo.svg',
    facebook: '/images/facebook-logo.svg',
    instagram: '/images/instagram-logo.svg'
  };

  const renderSocialLink = (link, index) => {
    const iconSrc = link.icon || defaultSocialIcons[link.platform?.toLowerCase()] || link.iconSrc;

    return (
      <a
        key={index}
        className="inline-block opacity-50 hover:opacity-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
        href={link.url || link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.ariaLabel || `${name} on ${link.platform || 'social media'}`}
      >
        <Image className="h-4" src={iconSrc} alt="" width={16} height={16} />
      </a>
    );
  };

  return (
    <div className={`w-full lg:w-1/3 p-4 ${className}`}>
      <div className={`relative ${bgColor} rounded-2xl pt-7 mb-12 lg:mb-0 ${cardClassName}`}>
        <Image
          className="mx-auto h-72 object-cover"
          src={image}
          alt={imageAlt || `${name}, ${position}`}
          width={288}
          height={288}
        />
        <div className="absolute -bottom-12 left-4 right-4">
          <div className="bg-blueSecondary-900 rounded-xl p-4">
            <p className="text-white text-lg font-semibold mb-1">{name}</p>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-white text-opacity-70 text-sm">{position}</p>
              {socialLinks.length > 0 && (
                <div className="flex gap-4">
                  {socialLinks.map(renderSocialLink)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;