import { ButtonProps } from './types';

import './styles.scss';

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  );
};
