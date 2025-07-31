import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import TelegramIcon from '../components/Icon/TelegramIcon';
import EmailIcon from '../components/Icon/EmailIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
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
        I see myself not as a fixed identity, but as a <strong className="text-stone-100">work in progress</strong>—an evolving <strong className="text-stone-100">journey</strong> of <strong className="text-stone-100">learning</strong>, <strong className="text-stone-100">reflection</strong>, and <strong className="text-stone-100">growth</strong>. I’m driven by the question <strong className="text-stone-100">“Who am I?”</strong> and approach life as an ongoing <strong className="text-stone-100">exploration</strong> to better understand myself, others, and the world around me.
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
    { label: 'Interests', text: 'Programming, Reading, Running, Swimming', Icon: SparklesIcon },
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
        name: 'Communication / Interpersonal skills',
        level: 7,
        color: 'bg-orange-400',
      },
      {
        name: 'Teamwork / Leadership',
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
      {
        name: 'Discipline',
        level: 8,
        color: 'bg-blue-400',
      },
      {
        name: 'Adaptability',
        level: 6,
        color: 'bg-orange-400',
      }
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
    title: 'AnonyConnect',
    description: 'A web application to connect with people anonymously',
    url: 'https://github.com/AKT311209/AnonyConnect',
    image: porfolioImage2,
  },
  {
    title: 'SudokuSolver',
    description: 'Python-based Sodoku Solver',
    url: 'https://github.com/AKT311209/SodokuSolver',
    image: porfolioImage3,
  },
  {
    title: 'Sheet2Mail',
    description: 'A MailMerge application to send emails from Google Sheets',
    url: 'https://github.com/AKT311209/Sheet2Mail',
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
      image: '/luongminhanh.jpg',
    },
    {
      name: 'Nguyen Minh Linh Dan - Friend at Secondary School and High School',
      text: 'Khoi is someone who is truly a pleasure to work with. He consistently demonstrates exceptional performance on tasks, accompanied with remarkable problem-solving skills, as well as an ability to collaborate effectively with others. Under significant responsibilities, whether working as a member of a team or as a leader, he brings a positive attitude and a high level of professionalism, ensuring compliance and constructiveness across all aspects of task delivery. His reliability and dedication make him a vital asset in any work environment.',
      image: '/nguyenminhlinhdan.jpg',
    },
    {
      name: 'Le Vu Dang Tien - Classmate at High School',
      text: 'Khoi is a composed and mature individual, yet approachable and friendly with his peers. As class monitor, he is patient, attentive, and always ready to assist others, earning their trust through his strong sense of responsibility. His passion for learning is evident in his diligence and curiosity. Khoi proactively seeks knowledge from books and online resources, gradually building an impressive depth of understanding that makes him a living encyclopedia. His self-directed approach and love for learning are the foundations of his academic success. Khoi’s leadership skills are equally remarkable. Decisive yet open to others\' opinions, he ensures effective decision-making while fostering collaboration. His creativity shines in organizing class activities, consistently surprising and engaging his peers. He empowers others to excel, believing that great leadership is about understanding and building strong, cohesive teams. In communication, Khoi is polite, respectful, and creates a positive environment through sincerity and cooperation. No matter the situation, he remains calm, optimistic, and ready to help. With these qualities, Khoi is a trusted friend and a responsible leader.',
      image: '/levudangtien.jpg',
    },
    {
      name: 'Le Diep Chi - Classmate at High School',
      text: 'Khoi is mature and composed beyond his years. From our first meeting, his polished attire-a suit and neatly pressed shirt-left a lasting impression of his discipline. Always punctual and meticulous, he exemplifies professionalism in even the smallest details. What stands out most is Khoi\'s disciplined and healthy lifestyle, a rarity among young people today. He maintains a routine of sleeping early, waking up early, and regularly running. His passion for running often leads him to participate in local marathons, showcasing his commitment to both fitness and personal growth. Academically, Khoi shines with his passion for computer science, dedicating himself to mastering programming. His enthusiasm drives him to improve daily, and his teamwork skills elevate any group he joins. With a strong sense of responsibility, Khoi consistently completes tasks with excellence, helping his team succeed. Khoi is someone I deeply admire for his perseverance, disciplined lifestyle, and unwavering commitment to self-improvement. He inspires me to strive for the same level of dedication and excellence in my own life.',
      image: '/lediepchi.jpg',
    },
    {
      name: 'Nguyen Chu Thanh - Classmate at Secondary School',
      text: 'Khoi is a friend I\'ve known since middle school, and he\'s one of the most disciplined people I know. His lifestyle is pretty impressive - he wakes up early, takes morning walks, stays away from junk food, and always keeps his mind clear. It\'s really inspiring because not everyone can stick to such habits. What I admire most about him is his sharp mind. He\'s super logical, great at math, and really good at thinking critically. He doesn\'t just argue to win - he digs into issues and looks at things from different angles. Every conversation with him feels like I\'m learning something new. On top of that, he\'s been a huge help with my exam prep. He\'s patient and knows how to explain things in a way that makes them easier to understand. Thanks to him, I\'ve definitely improved in my studies. To me, Khoi isn\'t only really smart but also dedicated, kind, and full of wisdom. I truly look up to him for that.',
      image: '/nguyenchuthanh.jpg',      
    },
    {
      name: 'Tran Minh Anh - Classmate at Secondary School',
      text: 'If I were to choose three adjectives to describe Khoi, they would be: curious, dedicated, and disciplined. To me, these three words almost entirely encapsulate who Khoi is as a person. Khoi has been, and continues to be, a source of inspiration through his intelligence, confidence, effort, and passion. His mindset has always left a strong impression on me; I\'ve learned from it, and the more I\'ve come to understand it, the more I\'ve been in awe. On that particular afternoon, when Khoi shared his perspective on life, it subtly but significantly shifted my own way of thinking. It opened up a new viewpoint on life for me, one that continues to serve as a motivation to this day. Khoi is someone you can always rely on and a friend worth keeping close. At first glance, people might find him a bit reserved, but in reality, he is deeply thoughtful. Without being overly sentimental, he exudes sincerity. For this reason, I, along with everyone who has had the chance to interact with him, continue to admire and cherish Khoi.',
      image: '/tranminhanh.jpg',
    }
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
  { label: 'Email', Icon: EmailIcon, href: 'mailto:akhoitran09@gmail.com' },
  { label: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/akhoitran09' },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/akhoitran09/' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/AKT311209' },
];
