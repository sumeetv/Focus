export const SITE_SECTIONS = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  BLOG: "BLOG",
  PROJECTS: "PROJECTS",
  SCOTCH: "SCOTCH",
  GAMES: "GAMES"
};

export function GetSiteSections() {
  return ([
    SITE_SECTIONS.HOME,
    SITE_SECTIONS.ABOUT,
    SITE_SECTIONS.BLOG,
    SITE_SECTIONS.PROJECTS,
    SITE_SECTIONS.SCOTCH,
    SITE_SECTIONS.GAMES
  ]);
}

export function GetURLForSection(section) {
  switch (section) {
    case SITE_SECTIONS.ABOUT:
      return "/about";
    case SITE_SECTIONS.BLOG:
      return "/blog";
    case SITE_SECTIONS.GAMES:
      return "/games";
    case SITE_SECTIONS.HOME:
      return "/home";
    case SITE_SECTIONS.PROJECTS:
      return "/projects";
    case SITE_SECTIONS.SCOTCH:
      return "/scotch";
    default:
      console.error("Fetching url for undefined section: " + section);
      return "/";
  }
}

export function GetTitleForSection(section) {
  switch (section) {
    case SITE_SECTIONS.ABOUT:
      return 'About';
    case SITE_SECTIONS.BLOG:
      return 'Blog';
    case SITE_SECTIONS.PROJECTS:
      return 'Projects';
    case SITE_SECTIONS.SCOTCH:
      return 'Scotch';
    case SITE_SECTIONS.GAMES:
      return 'Games';
    case SITE_SECTIONS.HOME:
      return 'Home';
    default:
      console.error("Fetching title for undefined section: " + section);
      return '';
  }
}

