export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Octopus = 'octopus',
  Diamond = 'diamond',
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
  Supporter = 'supporter',
  Multimedia = 'multimedia'
}

type SponsorGroups = Record<SponsorType, Sponsor[]>

const sponsors: SponsorGroups = {
  [SponsorType.Octopus]: [],
  [SponsorType.Diamond]: [
    {
      name: 'Nextail',
      logo: '/i/sps/nextail.svg',
      link: 'https://bit.ly/PulpoCon'
    },
    {
      name: 'Elastic',
      logo: '/i/sps/elastic.svg',
      link: 'https://newrelic.com/about/culture?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Marine Instruments',
      logo: '/i/sps/marine.png',
      link: 'https://www.marineinstruments.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Grafana',
      logo: '/i/sps/grafana.svg',
      link: 'https://grafana.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Cabify',
      logo: '/i/sps/cabify.png',
      link: 'https://cabify.tech/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Idealista',
      logo: '/i/sps/idealista.svg',
      link: 'https://www.idealista.com/labs/blog/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Gold]: [
    {
      name: 'Kairos DS',
      logo: '/i/sps/kairos.svg',
      link: 'https://www.kairosds.com/es/index.html?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Life5',
      logo: '/i/sps/life5.svg',
      link: 'https://life5.es/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Silver]: [
    {
      name: 'Gradiant',
      logo: '/i/sps/gradiant.png',
      link: 'https://www.gradiant.org/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Hackaboss',
      logo: '/i/sps/hackaboss.svg',
      link: 'https://www.hackaboss.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Siteground',
      logo: '/i/sps/siteground.svg',
      link: 'https://www.siteground.es/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Bronze]: [],
  [SponsorType.Supporter]: [],
  [SponsorType.Multimedia]: [
    {
      name: 'Teltek',
      logo: '/i/sps/teltek.png',
      link: 'https://teltek.es//?utm_origin=pulpocon&utm_medium=web'
    }
  ]
}

export default sponsors
