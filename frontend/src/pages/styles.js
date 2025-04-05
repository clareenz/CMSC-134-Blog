export const styles = {
    /* Top Menu */
    menuContainer: "fixed top-0 left-0 bg-transparent py-10 px-5 z-20",
    menuItem: "transition-all",
    menuLink: "flex items-center m-2",
    menuLinkSpan: "w-full text-left transition-all p-3 rounded-r-xl",
    activeLink: "bg-black text-white",
    defaultLink: "bg-transparent text-black",

    /* Submenu */
    subMenu:"overflow-hidden transition-all duration-300 ease-out p-0 ml-4",
    subMenuItem: " transition-all",
    subMenuLink: "m-2 flex items-center",
    subMenuLinkSpan: "w-full text-left transition-all p-3 rounded-r-xl",
    activeSubLink: "bg-black text-white",
    defaultSubLink: "hover:bg-black hover:text-white bg-transparent text-black",

    /* Section */
    sSection: "relative py-25 px-4 md:px-20",
    homeBackground: "absolute inset-0 bg-gradient-to-b from-[#F4F4F4] to-[#E2E2E2] -z-10",
    cContent: "relative max-w-5xl mx-auto",
    homeText: "text-gray-700 text-base md:text-xl font-light leading-relaxed text-justify",
    homeHeading: "text-2xl md:text-3xl font-mono text-[#000000] mb-4",
    gGrid0: "grid grid-cols-1 md:grid-cols-2 items-center gap-10",
    gGrid1: "grid grid-cols-1 md:grid-cols-2 gap-10",
    homeFooter: "text-sm text-justify text-[#000000]",
    imageWrapper: "flex justify-center gap-4 md:gap-8",
    origamiImageContainer: "relative w-full max-w-[500px] aspect-square mx-auto",
    origamiImage: "absolute inset-0 w-full h-full object-cover drop-shadow-md z-10",
    origamiBgImage1: "absolute top-4 right-4 w-1/2 h-full object-cover drop-shadow-md opacity-10",
    origamiBgImage2: "absolute bottom-6 left-20 w-[50%] h-[70%] object-cover rotate-90 drop-shadow-md opacity-100 z-0",

    /* Writeups */
    writeupBackground: "absolute inset-0 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] -z-10",
    writeupImageContainer: "relative w-full max-w-[500px] aspect-square mx-auto",
    writeupImage: "absolute inset-0 w-full h-full object-cover drop-shadow-md z-10",
    writeupBgImage1: "absolute top-4 left-[-10%] w-[40%] h-[50%] object-cover drop-shadow-md opacity-100 z-0",
    writeupBgImage2: "absolute top-6 left-10 w-[50%] h-full object-cover rotate-90 drop-shadow-md opacity-10 z-0",
    writeupTitle: "text-3xl font-semibold text-[#000000] mb-4 text-justify",
    writeupContent: "text-gray-700 text-md font-light leading-relaxed text-justify",
    navArrowsContainer: "flex justify-between mt-[100px]",

    /* Authors Section */
    authorsSection: "py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] pb-70 pt-30",
    authorsContainer: "container mx-auto px-6 lg:px-20",
    authorsHeading: "text-3xl font-semibold text-[#000000] mb-8 text-center animate__animated animate__fadeInUp",
    authorsGrid: "flex flex-wrap justify-center",
    teamMemberCard: "max-w-sm w-full lg:w-1/4 p-4 animate__animated animate__fadeInUp",
    teamMemberCardContainer: "relative group",
    teamMemberFront: "bg-gradient-to-t from-gray-200 via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center transition-transform duration-300 ease-in-out transform hover:shadow-xl",
    teamMemberImage: "w-32 h-32 rounded-full mx-auto object-cover shadow-md",
    teamMemberName: "text-xl font-mono text-black mt-4",
    teamMemberBack: "absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center",
    teamMemberBackName: "text-xl font-semibold text-black",
    teamMemberBackMotto: "text-gray-700 italic mt-2",
};