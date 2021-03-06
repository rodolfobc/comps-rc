import React , { FC } from 'react';
import styled from 'styled-components';

import { LinkTypeProps } from './index';
import { colors, fonts } from '../theme';

const LinkElement = styled.a`
  color: ${(): string => colors.primaryFontColor};
  text-decoration: none;

  &:hover {
    color: ${(): string => colors.primaryFontColor};
    text-decoration: none;
  }

  &:active {
    color: ${(): string => colors.primaryFontColor};
  }
`;

const Link: FC<LinkTypeProps> = React.forwardRef<HTMLAnchorElement & HTMLDivElement, LinkTypeProps>(function Link(props, ref) {
  const {
    className,
    onClick,
    target,
    text,
    to,
  } = props;

  const clickEvent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <LinkElement
      className={className}
      dangerouslySetInnerHTML={{ __html: text || ''}}
      href={to}
      onClick={(event) => clickEvent(event)}
      ref={ref}
      target={target}
    />
  )
});

export default Link;
