declare const enum ENVIRONMENTS {
  OPERATIONS = 'operations',
  DEV = 'development',
  STAGE = 'stage',
  PROD = 'production'
}

declare const ENV: ENVIRONMENTS;

declare module '*.woff';
declare module '*.woff2';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.mp4';
declare module '*.css';
declare module '*.scss';

declare interface Window {}
