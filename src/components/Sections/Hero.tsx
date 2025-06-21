import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {Typewriter} from 'react-simple-typewriter';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              <span>
                <Typewriter
                  cursor
                  cursorStyle="|"
                  delaySpeed={4000}
                  deleteSpeed={50}
                  loop={0}
                  words={['Hello, I am Tran Anh Khoi.']}
                  typeSpeed={100}
                />
              </span>
            </h1>
            {description}
            <div className="flex flex-col items-center gap-y-2 w-full">
              <div className="flex gap-x-4 text-neutral-100">
                <Socials />
              </div>
              <a
                href="https://contact.khoi.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base underline hover:text-blue-300 transition-colors duration-200 mt-1"
              >
                Contact me anonymously
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
