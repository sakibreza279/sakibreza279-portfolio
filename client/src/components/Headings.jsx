import PropTypes from 'prop-types';

/* SectionHeading Component */
export const SectionHeading = ({ SectionTitle, SectionSubtitle, ExtraContent }) => {
  return (
    <div className="sm:flex justify-between items-end md:border-b-2 pt-8 pb-4 mb-6 md:mb-8 md:border-textColorLight">
      <div className="text-center sm:text-left">
        <div className="flex justify-center sm:justify-normal items-center gap-x-4">
          <span className="hidden sm:inline h-[2px] w-[60px] bg-secondaryColor"></span>
          <h2 className="font-medium text-primaryColor text-xl font-secondary">
            {SectionTitle}
          </h2>
        </div>
        <p className="font-bold text-4xl mt-1">{SectionSubtitle}</p>
      </div>
      <div className="text-center">{ExtraContent}</div>
    </div>
  );
};
SectionHeading.propTypes = {
    SectionTitle: PropTypes.string.isRequired, // Main heading of the section
    SectionSubtitle: PropTypes.string.isRequired, // Subtitle of the section
    ExtraContent: PropTypes.node, // Can be string, number, or a React component (optional)
}

/* ContentHeading Component */
export const ContentHeading = ({ heading, subheading }) => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl md:text-4xl text-titleColor mt-12 mb-1">
        {heading}
      </h2>
      <span className="block text-center font-medium text-primaryColor text-sm mb-6 md:mb-10">
        {subheading}
      </span>
    </>
  );
};
ContentHeading.propTypes = {
    heading: PropTypes.string.isRequired, // Heading text (Main title)
    subheading: PropTypes.string.isRequired, // Subheading text (Subtitle)
};
