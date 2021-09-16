import First from 'assets/images/first.jpg';
import Seoul1991 from 'assets/images/second.jpg';
import Hongkong from 'assets/images/hongkong.jpg';
import TreeVideo from 'assets/images/tree_video2.mp4';

export const cartoonNight = {
  title: 'cartoonNight',
  bgColor:
    'linear-gradient(0deg, rgba(17,22,50,1) 0%, rgba(44,44,96,1) 40%, rgba(77,48,98,1) 100%);',
  text: '#363537',
  primary: '#4d3062',
  secondary: '#DFAC3D',
  tertiary: '#5B875D',
};

export const tree = {
  title: 'tree',
  bgColor: 'green',
  text: '#fcfcfc',
  primary: '#fcfcfc',
  secondary: '#303030',
  tertiary: 'blue',
};

export const vintageUSA = {
  title: 'vintageUSA',
  bgColor: 'pink',
  text: 'black',
  primary: 'beige',
  secondary: 'pink',
  tertiary: 'green',
};

export type Theme = {
  title: string;
  bgColor: string;
  text: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export const defaultValue = {
  title: '',
  bgColor: '',
  text: '',
  primary: '',
  secondary: '',
  tertiary: '',
};
export const BackgroundImgs = [
  { type: 'pic', src: Seoul1991, title: 'cartoonNight', theme: cartoonNight },
  { type: 'video', src: TreeVideo, title: 'tree ', theme: tree },
  { type: 'pic', src: First, title: 'vintageUSA', theme: vintageUSA },
  { type: 'pic', src: Hongkong, title: 'tree', theme: tree },
];
