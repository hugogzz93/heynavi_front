import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

// <div className={props.color}>{props.children}</div>
//
const Background = (props: IBackgroundProps) => (
  <div style={{background: props.color}}>{props.children}</div>
);

export { Background };
