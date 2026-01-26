export type Project = {
  id: string;
  name: string;
  company?: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "hubinesh",
    name: "Hubinesh",
    company: "Binesh",
    url: "https://panel.hubinesh.com/",
  },
  {
    id: "ai-run-sso",
    name: "AI-Run SSO",
    company: "AI-Run",
    url: "https://account.ai-run.net/",
  },
  {
    id: "mizfa-tools-panel",
    name: "Mizfa Tools Panel",
    company: "Binesh",
    url: "https://panel.mizfa.tools/",
  },
  {
    id: "binesh-sso",
    name: "Binesh SSO",
    company: "Binesh",
    url: "https://accounts.binesh-ec.com/",
  },
  {
    id: "mizfa-landing",
    name: "Mizfa Tools Landing",
    company: "Binesh",
    url: "https://mizfa.tools/",
  },
  {
    id: "binesh-search-console",
    name: "Binesh Search Console",
    company: "Binesh",
    url: "https://panel.binesh-search-console.com/",
  },
  {
    id: "mizfa-seo-extension",
    name: "Mizfa SEO Extension",
    company: "Binesh",
    url: "https://chromewebstore.google.com/detail/ajppjggkpcpiignpmdinfacapgffemhd?utm_source=item-share-cb",
  },
  {
    id: "alizadeh-watch-gallery",
    name: "Alizadeh Watch Gallery",
    company: "Mizfa",
    url: "https://alizade-watchgallery.com/",
  },
];
