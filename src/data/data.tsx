import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import TelegramIcon from '../components/Icon/TelegramIcon';
import PhoneIcon from '../components/Icon/PhoneIcon';
import EmailIcon from '../components/Icon/EmailIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import FacebookIcon from '../components/Icon/FacebookIcon';
import React from 'react';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tran Anh Khoi\'s Portfolio',
  description: "Tran Anh Khoi's personal portfolio website. ",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Gallery: 'gallery',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Tran Anh Khoi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a highly <strong className="text-stone-100">motivated</strong> and <strong className="text-stone-100">driven</strong> student, I am dedicated to leveraging <strong className="text-stone-100">technology</strong> to make a positive <strong className="text-stone-100">impact</strong> on the world. I am committed to <strong className="text-stone-100">continuous learning</strong> and actively pursue personal projects that align with my passions to further this objective.
      </p>
    </>
  ),
  actions: [],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  aboutItems: [
    { label: 'Location', text: 'Hanoi, Vietnam', Icon: MapIcon },
    { label: 'DOB', text: '31-12-2009', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Vietnam', Icon: FlagIcon },
    { label: 'Interests', text: 'Running, Swimming, Coding', Icon: SparklesIcon },
    { label: 'Study', text: 'Nguyen Hue High School', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Vietnamese',
        level: 10,
        color: 'bg-green-400',
      },
      {
        name: 'English',
        level: 8,
        color: 'bg-blue-400',
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 8,
        color: 'bg-blue-400',
      },
      {
        name: 'C++',
        level: 7,
        color: 'bg-orange-400',
      },
      {
        name: 'JavaScript / TypeScript',
        level: 5,
        color: 'bg-red-400',
      },

      {
        name: 'HTML / CSS',
        level: 5,
        color: 'bg-red-400',
      },
    ],
  },
  {
    name: 'Competitive programming',
    skills: [
      {
        name: 'Data structures',
        level: 5,
        color: 'bg-red-400',
      },
      {
        name: 'Algorithms',
        level: 6,
        color: 'bg-orange-400',
      },
      {
        name: 'Problem solving',
        level: 6,
        color: 'bg-orange-400',
      },
    ],
  },
  {
    name: 'Life skills',
    skills: [
      {
        name: 'Communication',
        level: 7,
        color: 'bg-orange-400',
      },
      {
        name: 'Teamwork',
        level: 9,
        color: 'bg-green-400',
      },
      {
        name: 'Self-learning',
        level: 8,
        color: 'bg-blue-400',
      },
      {
        name: 'Time management',
        level: 7,
        color: 'bg-orange-400',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Url2Md',
    description: 'Web application to convert URL and HTML to Markdown',
    url: 'https://github.com/AKT311209/url2md',
    image: porfolioImage1,
  },
  {
    title: 'GeminiAPI',
    description: 'A Nodejs application to use Gemini API',
    url: 'https://github.com/AKT311209/GeminiAPI',
    image: porfolioImage2,
  },
  {
    title: 'SudokuSolver',
    description: 'Python-based Sodoku Solver',
    url: 'https://github.com/AKT311209/SodokuSolver',
    image: porfolioImage3,
  },
  {
    title: 'Blackjackgame',
    description: 'A simple Blackjack game written in Python',
    url: 'https://github.com/AKT311209/Blackjackgame',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'Marie Curie Secondary School',
    title: 'Secondary School',
    content: <p>My time at Marie Curie School provided me with a strong foundation in academics and instilled in me a lifelong love of learning. The dedicated faculty fostered a supportive and challenging environment that encouraged intellectual curiosity and critical thinking. Through rigorous coursework and engaging extracurricular activities, I developed essential skills that have been instrumental in my continued academic and professional success.</p>,
  },
  {
    date: '2024 - 2027',
    location: 'Nguyen Hue High School',
    title: 'High School',
    content: <p>Nguyen Hue High School offers a nurturing environment that promotes intellectual growth and personal development. I highly appreciate the opportunity to engage with like-minded peers, which enables me to refine my skills and deepen my knowledge more effectively. This enriching experience provides me with the essential tools and inspiration to achieve my future career aspirations.</p>,
  },
];

export const experience: TimelineItem[] = [
  // {
  //   date: 'March 2010 - Present',
  //   location: 'Awesome Development Company',
  //   title: 'Senior UX Engineer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Phone', Icon: PhoneIcon, href: 'tel:+84822311209' },
  { label: 'Email', Icon: EmailIcon, href: 'mailto:akhoitran09@gmail.com' },
  { label: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/akhoitran09' },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/akhoitran09/' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/AKT311209' },
];
