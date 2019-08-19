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
`;

export default StyledFooter;
