import { React } from 'react';

declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export = value;
}

declare module '*.png';
