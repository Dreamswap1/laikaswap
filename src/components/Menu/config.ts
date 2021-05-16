import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
   {
     label: 'Home',
     icon: 'HomeIcon',
     href: 'https://www.laikacommunity.com/'
   },
   {
     label: 'Info',
     icon: 'InfoIcon',
     items: [
       {
         label: 'BSCSCAN',
         href: 'https://bscscan.com/token/0x270877fbdadd2e28c7eaf08e528691b95684207e',
       },
       {
         label: 'CoinGecko',
         href: 'https://www.coingecko.com/en/coins/laikacoin',
       },
       {
         label: 'CoinMarketCap',
         href: 'https://coinmarketcap.com/currencies/laikacoin/',
       },
       {
         label: 'LitePaper',
         href: 'https://github.com/kesaviweb/laikacoin/blob/main/litepaper-laika.pdf',
       },
     ]
   },
   {
     label: 'Socials',
     icon: 'MoreIcon',
     items: [
       {
         label: "Telegram",
         href: "https://t.me/LaikaCommunity",
       },
       {
        label: "Medium",
        href: "https://laikacommunity.medium.com/",
      },
      {
        label: "Reddit",
        href: "https://www.reddit.com/r/LAiKA_COiN/",
      },
       {
         label: "Twitter",
         href: "https://twitter.com/CommunityLaika",
       },
       {
         label: "Instagram",
         href: "https://www.instagram.com/laikacoin_official/",
       },
     ],
   },
   {
     label: 'Contract Audited by TechRate',
     icon: 'AuditIcon',
     href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/LaikaCoin%20Full%20Smart%20Contract%20Security%20Audit.pdf',
   },
]

export default config
