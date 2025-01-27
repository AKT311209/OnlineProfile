// Modules

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module 'react-typical' {
  import { FC } from 'react';

  interface TypicalProps {
    steps: (string | number)[];
    loop?: number | boolean;
    wrapper?: string;
    className?: string;
  }

  const Typical: FC<TypicalProps>;

  export default Typical;
}