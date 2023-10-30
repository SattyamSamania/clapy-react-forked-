import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './SignIn.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const SignIn: FC<Props> = memo(function SignIn(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
