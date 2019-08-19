import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 100%;

  .site-header {
    grid-column-start: 2;
    grid-column-end: span 11;
    grid-row-start: 1;
  }

  .main-navigation {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 3;
  }

  .site-content {
    grid-column-start: 2;
    grid-column-end: span 11;
    grid-row-start: 2;
  }

  .site-footer {
    grid-column-start: 1;
    grid-column-end: span 12;
    grid-row-start: 3;
  }
`;

export default GridContainer;
