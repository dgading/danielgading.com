import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 125px;
  width: 100%;
  perspective: 10em;
  overflow: hidden;
  /* background-color: hsl(var(--rich-black)); */
  background-color: ${(props) => props.theme.primary};

  &::after {
    z-index: 1;
    content: ' ';
    position: absolute;
    top: -74%;
    left: -50%;
    height: 200%;
    width: 200%;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      ${(props) => props.theme.highlight3} 50px,
      ${(props) => props.theme.highlight3} 51px),
      repeating-linear-gradient(
        -90deg,
        transparent,
        transparent 50px,
        ${(props) => props.theme.highlight3} 50px,
        ${(props) => props.theme.highlight3} 51px);
    background-size: 51px 51px;
    transform: rotateX(45deg);
  }

  .site-info {
    align-self: center;
    font-size: 2em;
    padding-right: 25px;
    color: ${(props) => props.theme.highlight2};
    /* font-family: var(--font-header); */
    z-index: 2;
    position: relative;
    display: inline-block;
    text-shadow: 1px 1px 1px ${(props) => props.theme.defaults.white};
  }

  .site-info .copyright-date {
    position: absolute;
    top: 13px;
    right: 0;
    transform: rotate(-15deg);
    color: ${(props) => props.theme.highlight3};
    /* font-family: var(--font-callout); */
    text-shadow: 1px 1px 2px ${(props) => props.theme.highlight2};
  }

`;

export default StyledFooter;
