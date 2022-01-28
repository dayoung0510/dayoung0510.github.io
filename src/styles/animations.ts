import { keyframes } from 'styled-components';

export const Bounce = keyframes`
from {transform: translateY(0px);}
to{transform: translateY(-15px);}
`;
export const LittleBounce = keyframes`
from {transform: translateY(0px);}
to{transform: translateY(-4px);}
`;

export const Opacity = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const FromLeft = keyframes`
from {transform: translateX(-200%);}
to{transform: translateX(0%);}
`;

export const FromRight = keyframes`
from {transform: translateX(80%); opacity: 0}
to{transform: translateX(0%); opacity: 1}
`;

export const FromTop = keyframes`
from {transform: translateY(-200%);}
to{transform: translateY(0%);}
`;

export const FromBottom = keyframes`
from {transform: translateY(200%);}
to{transform: translateY(0%);}
`;

export const scaleUp = keyframes` 
  from { -webkit-transform: scale(0.95); }
  `;

export const Shake = keyframes`
  0% { transform: translate(2px, 2px) rotate(0deg); }
  1.78571% { transform: translate(-2px, -3px) rotate(-1deg); }
  3.57143% { transform: translate(-4px, 0px) rotate(1deg); }
  4.35714% { transform: translate(4px, 3px) rotate(0deg); }
  6.14286% { transform: translate(2px, -2px) rotate(1deg); }
  7.92857% { transform: translate(-1px, 2px) rotate(-1deg); }
  9.71429% { transform: translate(-3px, 1px) rotate(0deg); }
  10.8224% { transform: translate(-2px, -2px) rotate(1deg); }
  11.2354% { transform: translate(0px, 0px) rotate(-2deg); }
  100% { transform: translate(2px, 2px) rotate(0deg); }
`;

export const SlideItems = keyframes`
    0% { left: 100%; opacity: 1; }
   36% { left:  50%; opacity: 1; }
   72% { left: -50%; opacity: 1; }
  100% { left: -50%; }
`;

export const Conveyer = keyframes`
0% {transform: translateX(-100%);}
50%{transform: translateX(0);}
`;

export const Gradient = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
`;
