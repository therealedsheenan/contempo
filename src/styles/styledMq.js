import { css } from 'styled-components';
import { mobile, tablet, desktop } from '../styles/mq';

export const styledMobile = {
  handheld: (...args) => css`
    @media ${mobile} {
      ${css(...args)}
    }
  `
};

export const styledTablet = {
  handheld: (...args) => css`
    @media ${tablet} {
      ${css(...args)}
    }
  `
};

export const styledDesktop = {
  handheld: (...args) => css`
    @media ${desktop} {
      ${css(...args)}
    }
  `
};
