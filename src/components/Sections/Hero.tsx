import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Typical from 'react-typical';
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
              <Typical
                steps={[
                  '', 1000,
                  'H', 100, 'He', 100, 'Hel', 100, 'Hell', 100, 'Hello', 100,
                  'Hello,', 100, 'Hello, I', 100, 'Hello, I am', 100,
                  'Hello, I am T', 100, 'Hello, I am Tr', 100, 'Hello, I am Tra', 100,
                  'Hello, I am Tran', 100, 'Hello, I am Tran A', 100, 'Hello, I am Tran An', 100,
                  'Hello, I am Tran Anh', 100, 'Hello, I am Tran Anh K', 100,
                  'Hello, I am Tran Anh Kh', 100, 'Hello, I am Tran Anh Kho', 100,
                  'Hello, I am Tran Anh Khoi.', 3000,
                  // reverse
                  'Hello, I am Tran Anh Kho', 100, 'Hello, I am Tran Anh Kh', 100,
                  'Hello, I am Tran Anh K', 100, 'Hello, I am Tran Anh', 100,
                  'Hello, I am Tran An', 100, 'Hello, I am Tran A', 100,
                  'Hello, I am Tran', 100, 'Hello, I am Tra', 100,
                  'Hello, I am Tr', 100, 'Hello, I am T', 100,
                  'Hello, I am', 100, 'Hello, I', 100, 'Hello,', 100,
                  'Hello', 100, 'Hell', 100, 'Hel', 100, 'He', 100, 'H', 100, '', 1000
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
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
