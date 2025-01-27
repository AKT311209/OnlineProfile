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
  // ContactType,
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
    { label: 'Interests', text: 'Programming, Running, Swimming', Icon: SparklesIcon },
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
      name: 'Luong Minh Anh - Friend at Secondary School and High School',
      text: 'Anh Khoi is someone I admire for his unique character that is difficult to find in teenagers nowadays. He is an individual who embodies seriousness, discipline, and a strong commitment to collective well-being while always seeking opportunities to grow personally.\nAs Khoi’s schoolmate for almost 5 years, his approach to studying is truly inspiring. Whether it’s meeting deadlines, managing tasks or performing on papers, Khoi demonstrates dedication and consistency. Furthermore, his ability to prioritize collective responsibility is truly what sets him apart in this generation. He understands the importance of working collaboratively and always makes sure to contribute to the success of the whole team. Finally, Khoi never forgets his long-term goal, which is to push himself and become the better version everyday. His focus on self improvement is evident in his efforts to expand knowledge, maintaining healthy lifestyle, practicing mental wellness as well as stepping outside his comfort zone.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Nguyen Minh Linh Dan - Friend at Secondary School and High School',
      text: 'Khoi is someone who is truly a pleasure to work with. He consistently demonstrates exceptional performance on tasks, accompanied with remarkable problem-solving skills, as well as an ability to collaborate effectively with others. Under significant responsibilities, whether working as a member of a team or as a leader, he brings a positive attitude and a high level of professionalism, ensuring compliance and constructiveness across all aspects of task delivery. His reliability and dedication make him a vital asset in any work environment.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Le Vu Dang Tien - Classmate at High School',
      text: 'Khoi is a composed and mature individual, yet approachable and friendly with his peers. As class monitor, he is patient, attentive, and always ready to assist others, earning their trust through his strong sense of responsibility. His passion for learning is evident in his diligence and curiosity. Khoi proactively seeks knowledge from books and online resources, gradually building an impressive depth of understanding that makes him a living encyclopedia. His self-directed approach and love for learning are the foundations of his academic success. Khoi’s leadership skills are equally remarkable. Decisive yet open to others\', opinions, he ensures effective decision-making while fostering collaboration. His creativity shines in organizing class activities, consistently surprising and engaging his peers. He empowers others to excel, believing that great leadership is about understanding and building strong, cohesive teams. In communication, Khoi is polite, respectful, and creates a positive environment through sincerity and cooperation. No matter the situation, he remains calm, optimistic, and ready to help. With these qualities, Khoi is a trusted friend and a responsible leader.',
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
