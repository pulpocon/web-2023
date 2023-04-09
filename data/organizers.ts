export interface Organizer {
  name: string
  position: string
  bio: string
  image: URL
  social?: {
    linkedin?: string
    twitter?: string
  }

}

const organizers: Organizer[] = [
  {
    name: 'Patri Malvido',
    position: 'Jr. Front-End Developer @nextail',
    bio: '',
    image: new URL('../assets/i/organizers/patri-malvido.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/patri-malvido/'
    }
  },
  {
    name: 'Rolando Caldas',
    position: 'Head of Engineering @borneo',
    bio: '',
    image: new URL('../assets/i/organizers/rolando-caldas.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/rolandocaldas/'
    }
  },
  {
    name: 'Sergio Carracedo',
    position: 'Principal Front-End Engineer @nextail',
    bio: '',
    image: new URL('../assets/i/organizers/sergio-carracedo.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/sergiocarracedo/'
    }
  }
]

export default organizers
