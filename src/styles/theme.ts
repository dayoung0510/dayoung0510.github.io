import First from 'assets/images/first.jpg';
import Seoul1991 from 'assets/images/second.jpg';
import Hongkong from 'assets/images/hongkong.jpg';
import TreeVideo from 'assets/images/tree_video2.mp4';

export const seoul1991 = {
  bgColor: 'skyblue',
  text: '#363537',
  primary: '#e6328d',
  secondary: '#fcfcfc',
  tertiary: 'red',
};

export const tree = {
  bgColor: 'green',
  text: '#fcfcfc',
  primary: '#fcfcfc',
  secondary: '#303030',
  tertiary: 'blue',
};

export const vintageUSA = {
  bgColor: 'pink',
  text: 'black',
  primary: 'beige',
  secondary: 'pink',
  tertiary: 'green',
};

export type Theme = {
  bgColor: string;
  text: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export const defaultValue = {
  bgColor: '',
  text: '',
  primary: '',
  secondary: '',
  tertiary: '',
};
export const BackgroundImgs = [
  { type: 'pic', src: Seoul1991, title: 'seoul1991', theme: seoul1991 },
  { type: 'video', src: TreeVideo, title: 'tree ', theme: tree },
  { type: 'pic', src: First, title: 'vintageUSA', theme: vintageUSA },
  { type: 'pic', src: Hongkong, title: 'tree', theme: tree },
];
