// const BASE_PATH = "/arc-website/"
const BASE_PATH = "/"

export enum URLS {
  INTERNAL_HOME = BASE_PATH,
  ARC_WEBSITE = "https://arc-rdm.org",
  KNOWLEDGEBASE = "https://nfdi4plants.org/nfdi4plants.knowledgebase/",
  GITLAB = "https://git.nfdi4plants.org/",
  GITLAB_BIODATEN = "https://gitlab.nfdi4plants.de/",
  GITLAB_PLANT_MICROBE = "https://gitlab.plantmicrobe.de/explore",
  HELPDESK = "https://helpdesk.nfdi4plants.org/",
  MAILING_LIST_SUBSCRIBE = "mailto:arc-user-support-join@lists.nfdi.de?subject=subscribe&body=Hit send on this email to join the ARC user support mailing list",
  ACCOUNT_MANAGEMENT = "https://auth.nfdi4plants.org/realms/dataplant/account",
  DATAPLAN = "https://dmpg.nfdi4plants.org",
  ARCHIVE = "https://archive.nfdi4plants.org/communities/dataplant",
  ARCSEARCH = "https://arcregistry.nfdi4plants.org/isasearch",

  SOCIAL_MATRIX = "https://matrix.to/#/#dataplant:matrix.uni-freiburg.de",
  SOCIAL_MASTODOON = "https://nfdi.social/@nfdi4plants",
  SOCIAL_BLUESKY = "https://bsky.app/profile/nfdi4plants.bsky.social",
  SOCIAL_TWITTER = "https://twitter.com/nfdi4plants",
  SOCIAL_GITHUB = "https://github.com/nfdi4plants",
  SOCIAL_YOUTUBE = "https://www.youtube.com/channel/UCrTBwQWOa0-aWYkwoY104Wg",
  SOCIAL_ZENODO = "https://zenodo.org/communities/nfdi4plants?page=1&amp;size=20",
  NFDI = "https://www.nfdi.de"
}

// tailwind wont generate these classes if they are not explicitly named somewhere, and i cannot be bothered to adapt every component right now so we do it like this sue me
export const bgColorMap = new Map<string,string> ([
    ['black', "bg-black"],
    ['lightgray', "bg-lightgray"],
    ['white', "bg-white"],

    ['mint' , "bg-mint"],
    ['mint-50' , "bg-mint-50"],
    ['mint-100', "bg-mint-100"],
    ['mint-200', "bg-mint-200"],
    ['mint-300', "bg-mint-300"],
    ['mint-400', "bg-mint-400"],
    ['mint-500', "bg-mint-500"],
    ['mint-600', "bg-mint-600"],
    ['mint-700', "bg-mint-700"],
    ['mint-800', "bg-mint-800"],
    ['mint-900', "bg-mint-900"],
    ['mint-950', "bg-mint-950"],

    ['lightblue' , "bg-lightblue"],
    ['lightblue-50' , "bg-lightblue-50"],
    ['lightblue-100', "bg-lightblue-100"],
    ['lightblue-200', "bg-lightblue-200"],
    ['lightblue-300', "bg-lightblue-300"],
    ['lightblue-400', "bg-lightblue-400"],
    ['lightblue-500', "bg-lightblue-500"],
    ['lightblue-600', "bg-lightblue-600"],
    ['lightblue-700', "bg-lightblue-700"],
    ['lightblue-800', "bg-lightblue-800"],
    ['lightblue-900', "bg-lightblue-900"],
    ['lightblue-950', "bg-lightblue-950"],

    ['darkblue' , "bg-darkblue"],
    ['darkblue-50' , "bg-darkblue-50"],
    ['darkblue-100', "bg-darkblue-100"],
    ['darkblue-200', "bg-darkblue-200"],
    ['darkblue-300', "bg-darkblue-300"],
    ['darkblue-400', "bg-darkblue-400"],
    ['darkblue-500', "bg-darkblue-500"],
    ['darkblue-600', "bg-darkblue-600"],
    ['darkblue-700', "bg-darkblue-700"],
    ['darkblue-800', "bg-darkblue-800"],
    ['darkblue-900', "bg-darkblue-900"],
    ['darkblue-950', "bg-darkblue-950"],

    ['yellow' , "bg-yellow"],
    ['yellow-50' , "bg-yellow-50"],
    ['yellow-100', "bg-yellow-100"],
    ['yellow-200', "bg-yellow-200"],
    ['yellow-300', "bg-yellow-300"],
    ['yellow-400', "bg-yellow-400"],
    ['yellow-500', "bg-yellow-500"],
    ['yellow-600', "bg-yellow-600"],
    ['yellow-700', "bg-yellow-700"],
    ['yellow-800', "bg-yellow-800"],
    ['yellow-900', "bg-yellow-900"],
    ['yellow-950', "bg-yellow-950"],

    ['olive' , "bg-olive"],
    ['olive-50' , "bg-olive-50"],
    ['olive-100', "bg-olive-100"],
    ['olive-200', "bg-olive-200"],
    ['olive-300', "bg-olive-300"],
    ['olive-400', "bg-olive-400"],
    ['olive-500', "bg-olive-500"],
    ['olive-600', "bg-olive-600"],
    ['olive-700', "bg-olive-700"],
    ['olive-800', "bg-olive-800"],
    ['olive-900', "bg-olive-900"],
    ['olive-950', "bg-olive-950"],

    ['red' , "bg-red"],
    ['red-50' , "bg-red-50"],
    ['red-100', "bg-red-100"],
    ['red-200', "bg-red-200"],
    ['red-300', "bg-red-300"],
    ['red-400', "bg-red-400"],
    ['red-500', "bg-red-500"],
    ['red-600', "bg-red-600"],
    ['red-700', "bg-red-700"],
    ['red-800', "bg-red-800"],
    ['red-900', "bg-red-900"],
    ['red-950', "bg-red-950"],
])

export const textColorMap = new Map<string,string> ([
    ['black', "text-black"],
    ['lightgray', "text-lightgray"],
    ['white', "text-white"],
    ['mint' , "text-mint"],
    ['mint-50' , "text-mint-50"],
    ['mint-100', "text-mint-100"],
    ['mint-200', "text-mint-200"],
    ['mint-300', "text-mint-300"],
    ['mint-400', "text-mint-400"],
    ['mint-500', "text-mint-500"],
    ['mint-600', "text-mint-600"],
    ['mint-700', "text-mint-700"],
    ['mint-800', "text-mint-800"],
    ['mint-900', "text-mint-900"],
    ['mint-950', "text-mint-950"],

    ['lightblue' , "text-lightblue"],
    ['lightblue-50' , "text-lightblue-50"],
    ['lightblue-100', "text-lightblue-100"],
    ['lightblue-200', "text-lightblue-200"],
    ['lightblue-300', "text-lightblue-300"],
    ['lightblue-400', "text-lightblue-400"],
    ['lightblue-500', "text-lightblue-500"],
    ['lightblue-600', "text-lightblue-600"],
    ['lightblue-700', "text-lightblue-700"],
    ['lightblue-800', "text-lightblue-800"],
    ['lightblue-900', "text-lightblue-900"],
    ['lightblue-950', "text-lightblue-950"],

    ['darkblue' , "text-darkblue"],
    ['darkblue-50' , "text-darkblue-50"],
    ['darkblue-100', "text-darkblue-100"],
    ['darkblue-200', "text-darkblue-200"],
    ['darkblue-300', "text-darkblue-300"],
    ['darkblue-400', "text-darkblue-400"],
    ['darkblue-500', "text-darkblue-500"],
    ['darkblue-600', "text-darkblue-600"],
    ['darkblue-700', "text-darkblue-700"],
    ['darkblue-800', "text-darkblue-800"],
    ['darkblue-900', "text-darkblue-900"],
    ['darkblue-950', "text-darkblue-950"],

    ['yellow' , "text-yellow"],
    ['yellow-50' , "text-yellow-50"],
    ['yellow-100', "text-yellow-100"],
    ['yellow-200', "text-yellow-200"],
    ['yellow-300', "text-yellow-300"],
    ['yellow-400', "text-yellow-400"],
    ['yellow-500', "text-yellow-500"],
    ['yellow-600', "text-yellow-600"],
    ['yellow-700', "text-yellow-700"],
    ['yellow-800', "text-yellow-800"],
    ['yellow-900', "text-yellow-900"],
    ['yellow-950', "text-yellow-950"],

    ['olive' , "text-olive"],
    ['olive-50' , "text-olive-50"],
    ['olive-100', "text-olive-100"],
    ['olive-200', "text-olive-200"],
    ['olive-300', "text-olive-300"],
    ['olive-400', "text-olive-400"],
    ['olive-500', "text-olive-500"],
    ['olive-600', "text-olive-600"],
    ['olive-700', "text-olive-700"],
    ['olive-800', "text-olive-800"],
    ['olive-900', "text-olive-900"],
    ['olive-950', "text-olive-950"],

    ['red' , "text-red"],
    ['red-50' , "text-red-50"],
    ['red-100', "text-red-100"],
    ['red-200', "text-red-200"],
    ['red-300', "text-red-300"],
    ['red-400', "text-red-400"],
    ['red-500', "text-red-500"],
    ['red-600', "text-red-600"],
    ['red-700', "text-red-700"],
    ['red-800', "text-red-800"],
    ['red-900', "text-red-900"],
    ['red-950', "text-red-950"],
])

export const textHoverColorMap = new Map<string,string> ([
  ['black', "hover:text-black"],
  ['lightgray', "hover:text-lightgray"],
  ['white', "hover:text-white"],

  ['mint' , "hover:text-mint"],
  ['mint-50' , "hover:text-mint-50"],
  ['mint-100', "hover:text-mint-100"],
  ['mint-200', "hover:text-mint-200"],
  ['mint-300', "hover:text-mint-300"],
  ['mint-400', "hover:text-mint-400"],
  ['mint-500', "hover:text-mint-500"],
  ['mint-600', "hover:text-mint-600"],
  ['mint-700', "hover:text-mint-700"],
  ['mint-800', "hover:text-mint-800"],
  ['mint-900', "hover:text-mint-900"],
  ['mint-950', "hover:text-mint-950"],

  ['lightblue' , "hover:text-lightblue"],
  ['lightblue-50' , "hover:text-lightblue-50"],
  ['lightblue-100', "hover:text-lightblue-100"],
  ['lightblue-200', "hover:text-lightblue-200"],
  ['lightblue-300', "hover:text-lightblue-300"],
  ['lightblue-400', "hover:text-lightblue-400"],
  ['lightblue-500', "hover:text-lightblue-500"],
  ['lightblue-600', "hover:text-lightblue-600"],
  ['lightblue-700', "hover:text-lightblue-700"],
  ['lightblue-800', "hover:text-lightblue-800"],
  ['lightblue-900', "hover:text-lightblue-900"],
  ['lightblue-950', "hover:text-lightblue-950"],

  ['darkblue' , "hover:text-darkblue"],
  ['darkblue-50' , "hover:text-darkblue-50"],
  ['darkblue-100', "hover:text-darkblue-100"],
  ['darkblue-200', "hover:text-darkblue-200"],
  ['darkblue-300', "hover:text-darkblue-300"],
  ['darkblue-400', "hover:text-darkblue-400"],
  ['darkblue-500', "hover:text-darkblue-500"],
  ['darkblue-600', "hover:text-darkblue-600"],
  ['darkblue-700', "hover:text-darkblue-700"],
  ['darkblue-800', "hover:text-darkblue-800"],
  ['darkblue-900', "hover:text-darkblue-900"],
  ['darkblue-950', "hover:text-darkblue-950"],

  ['yellow' , "hover:text-yellow"],
  ['yellow-50' , "hover:text-yellow-50"],
  ['yellow-100', "hover:text-yellow-100"],
  ['yellow-200', "hover:text-yellow-200"],
  ['yellow-300', "hover:text-yellow-300"],
  ['yellow-400', "hover:text-yellow-400"],
  ['yellow-500', "hover:text-yellow-500"],
  ['yellow-600', "hover:text-yellow-600"],
  ['yellow-700', "hover:text-yellow-700"],
  ['yellow-800', "hover:text-yellow-800"],
  ['yellow-900', "hover:text-yellow-900"],
  ['yellow-950', "hover:text-yellow-950"],

  ['olive' , "hover:text-olive"],
  ['olive-50' , "hover:text-olive-50"],
  ['olive-100', "hover:text-olive-100"],
  ['olive-200', "hover:text-olive-200"],
  ['olive-300', "hover:text-olive-300"],
  ['olive-400', "hover:text-olive-400"],
  ['olive-500', "hover:text-olive-500"],
  ['olive-600', "hover:text-olive-600"],
  ['olive-700', "hover:text-olive-700"],
  ['olive-800', "hover:text-olive-800"],
  ['olive-900', "hover:text-olive-900"],
  ['olive-950', "hover:text-olive-950"],

  ['red' , "hover:text-red"],
  ['red-50' , "hover:text-red-50"],
  ['red-100', "hover:text-red-100"],
  ['red-200', "hover:text-red-200"],
  ['red-300', "hover:text-red-300"],
  ['red-400', "hover:text-red-400"],
  ['red-500', "hover:text-red-500"],
  ['red-600', "hover:text-red-600"],
  ['red-700', "hover:text-red-700"],
  ['red-800', "hover:text-red-800"],
  ['red-900', "hover:text-red-900"],
  ['red-950', "hover:text-red-950"],
])


export const borderColorMap = new Map<string,string> ([
  ['black', "border-black"],
  ['lightgray', "border-lightgray"],
  ['white', "border-white"],
  ['mint' , "border-mint"],
  ['mint-50' , "border-mint-50"],
  ['mint-100', "border-mint-100"],
  ['mint-200', "border-mint-200"],
  ['mint-300', "border-mint-300"],
  ['mint-400', "border-mint-400"],
  ['mint-500', "border-mint-500"],
  ['mint-600', "border-mint-600"],
  ['mint-700', "border-mint-700"],
  ['mint-800', "border-mint-800"],
  ['mint-900', "border-mint-900"],
  ['mint-950', "border-mint-950"],

  ['lightblue' , "border-lightblue"],
  ['lightblue-50' , "border-lightblue-50"],
  ['lightblue-100', "border-lightblue-100"],
  ['lightblue-200', "border-lightblue-200"],
  ['lightblue-300', "border-lightblue-300"],
  ['lightblue-400', "border-lightblue-400"],
  ['lightblue-500', "border-lightblue-500"],
  ['lightblue-600', "border-lightblue-600"],
  ['lightblue-700', "border-lightblue-700"],
  ['lightblue-800', "border-lightblue-800"],
  ['lightblue-900', "border-lightblue-900"],
  ['lightblue-950', "border-lightblue-950"],

  ['darkblue' , "border-darkblue"],
  ['darkblue-50' , "border-darkblue-50"],
  ['darkblue-100', "border-darkblue-100"],
  ['darkblue-200', "border-darkblue-200"],
  ['darkblue-300', "border-darkblue-300"],
  ['darkblue-400', "border-darkblue-400"],
  ['darkblue-500', "border-darkblue-500"],
  ['darkblue-600', "border-darkblue-600"],
  ['darkblue-700', "border-darkblue-700"],
  ['darkblue-800', "border-darkblue-800"],
  ['darkblue-900', "border-darkblue-900"],
  ['darkblue-950', "border-darkblue-950"],

  ['yellow' , "border-yellow"],
  ['yellow-50' , "border-yellow-50"],
  ['yellow-100', "border-yellow-100"],
  ['yellow-200', "border-yellow-200"],
  ['yellow-300', "border-yellow-300"],
  ['yellow-400', "border-yellow-400"],
  ['yellow-500', "border-yellow-500"],
  ['yellow-600', "border-yellow-600"],
  ['yellow-700', "border-yellow-700"],
  ['yellow-800', "border-yellow-800"],
  ['yellow-900', "border-yellow-900"],
  ['yellow-950', "border-yellow-950"],

  ['olive' , "border-olive"],
  ['olive-50' , "border-olive-50"],
  ['olive-100', "border-olive-100"],
  ['olive-200', "border-olive-200"],
  ['olive-300', "border-olive-300"],
  ['olive-400', "border-olive-400"],
  ['olive-500', "border-olive-500"],
  ['olive-600', "border-olive-600"],
  ['olive-700', "border-olive-700"],
  ['olive-800', "border-olive-800"],
  ['olive-900', "border-olive-900"],
  ['olive-950', "border-olive-950"],

  ['red' , "border-red"],
  ['red-50' , "border-red-50"],
  ['red-100', "border-red-100"],
  ['red-200', "border-red-200"],
  ['red-300', "border-red-300"],
  ['red-400', "border-red-400"],
  ['red-500', "border-red-500"],
  ['red-600', "border-red-600"],
  ['red-700', "border-red-700"],
  ['red-800', "border-red-800"],
  ['red-900', "border-red-900"],
  ['red-950', "border-red-950"],
])

export function groupBy<T>(iterable: Iterable<T>, fn: (item: T) => string | number) {
  return [...iterable].reduce<Record<string, T[]>>((groups, curr) => {
    const key = fn(curr);
    const group = groups[key] ?? [];
    group.push(curr);
    return { ...groups, [key]: group };
  }, {});
}
