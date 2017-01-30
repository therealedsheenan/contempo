import mq from 'styles/mq'
import { css } from 'styled-components'

export const styledMobile = {
  handheld: (...args) => css`
    @media ${mq.mobile} {
      ${ css(...args) }
    }
  `
}

export const styledTablet = {
  handheld: (...args) => css`
    @media ${mq.tablet} {
      ${ css(...args) }
    }
  `
}

export const styledDesktop = {
  handheld: (...args) => css`
    @media ${mq.desktop} {
      ${ css(...args) }
    }
  `
}

