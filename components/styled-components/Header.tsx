import styled from '@emotion/styled';


/**
 * @description : This component is used to display the header of the page. (e.g Platform Dashboard, User List etc..)
 * 
 */
export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid var(--border-color);
  padding:2px 20px;
`;

/**
 * @description : This component is used to display the title of the page. (e.g Platform Dashboard, User List etc..):
 * To be used in the PageHeader component.
 */
export const PageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600 !important;
  margin: 0px;
`;

/**
 * @description : This component is used to display components in the right side of the page header.
 * To be used in the PageHeader component.
 * Pass in the children as a component to be displayed in the right side of the page header.
 */
export const HeaderRight = styled.div`
display: flex;
align-items: center;
margin-left:auto;

*{
    margin-right: 20px;
}
`
