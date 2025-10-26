/**
 * AnnouncementBar component displayed at the top of pages
 * Shows promotional messaging about template learning resources
 * @returns {JSX.Element} AnnouncementBar component
 */
const AnnouncementBar = () => {
  return (
    <div>
      <p className="mb-0 py-3 text-center bg-sweetBlue-50 text-sweetBlue-800">
        Want to learn how to build templates like this one? Visit{' '}
        <a href="https://www.pixelrocket.store">www.pixelrocket.store</a>
      </p>
    </div>
  );
};

export default AnnouncementBar;