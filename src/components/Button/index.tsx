import { ButtonProps } from './types';

import './styles.scss';

export const Button = (props: ButtonProps) => {
  return <button className="button" {...props} />;
};
