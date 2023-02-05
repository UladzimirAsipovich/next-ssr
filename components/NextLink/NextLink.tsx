import Link from 'next/link';
import type { I_NextLink } from './NextLink.interface';

const NextLink: I_NextLink = ({ children, ...props }) => {
  return (
    <Link {...props}>{children}</Link>
  );
};

export default NextLink;