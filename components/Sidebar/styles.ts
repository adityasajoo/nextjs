import styled from '@emotion/styled';

/*
* This page contains styles for the sidebar
*/

export const SidebarStyles = styled.div<{ open: boolean }>`
  color: white;
  background-color: #26303e;
  width: ${props => (props.open ? '300px' : '45px')};
  min-height: 100vh;
  transition-duration: 1000ms;
  transition-property: width;
  transition-timing-function: ease-in-out;
  overflow: hidden;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  height: 60px;


  .main-logo {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
  }

  .center-div {
    margin: auto;
  }

  .icon-background {
    padding: 5px;
    border-radius: 50%;
    &:hover {
      background-color: #2f3f48;
    }
  }
`;

export const SidebarBody = styled.div`
  margin-top: 5px;
`;

export const StyledItem = styled.div<{ active: boolean, open: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
  padding: 10px;
  padding-left: 15px;
  height: 60px;
  /* transition: 0.5s; */
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.15;

  transition-duration: 500ms;
  transition-timing-function: ease-in-out;



  .link-styles {
    margin-left: 10px;
    /* display: ${props => (props.open ? 'block' : 'none')}; */
    transition: margin 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);


  }

  ${({ active }) =>
    active &&
    `
  filter: grayscale(0%) opacity(1);
  background: #2f3f48;
  color: #ffca72;
`}


  &:hover {
    cursor: pointer;
    filter: grayscale(0%) opacity(1);
    background: #2f3f48;
    color: #ffca72;
  }
`;
