import styled from '@emotion/styled';

export const NavbarStyles = styled.div`
  background: #fff;
  height: 67px;
  border-bottom: 7px solid #f6f5f5;
  display: flex;
  flex-wrap: nowrap;
  justify-content: end;
  align-items: center;
  padding: 2px 30px;

  .nav-items {
    margin: 0px 10px;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .notifications {
    position: relative;
    display: inline-block;
  }

  .notification {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 20px;
    right: 0;
    top: 50%;
    text-align: center;
    width: auto;
    color: white;
    background: var(--button-background);
    border-radius: 50%;
    font-size: 15px;

    &:hover {
    }
  }

  .user-icon {
    border-radius: 50%;
  }
`;
