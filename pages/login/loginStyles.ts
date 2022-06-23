import styled from "@emotion/styled";

export const Parent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  .child1 {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    align-items: center;
    background-color: var(--theme_bc);
    color: #ffffff;
    .dash-name {
      font-size: 24px;
      font-weight: 400;
      position: relative;
      top: -150px;
      left: 155px;
    }
  }
  .child2 {
    color: var(--text_color);
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-text {
      font-size: 24px;
      display: flex;
      margin-bottom: 50px;
    }
    .label-head {
      margin: 10px 0px;
      font-size: 16px;
    }
    .input-style {
      width: 410px;
      height: 45px;
      border: 1px solid var(--input_border);
      border-radius: 5px;
      ::placeholder {
        color: var(--input_border);
      }
    }
    .login-btn {
      background: var(--loginbtn_color);
      border: none;
      padding: 8px 24px;
      margin-top: 10px;
      margin-right: 20px;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
    .forgot {
      color: var(--login_text);
      font-weight: 600;
    }
    .error {
      color: var(--error_color);
      font-size: 12px;
      margin-top: 5px;
      margin-bottom: 8px;
    }
  }
  .line {
    width: 550px;
    height: 1px;
    margin-top: 50px;
    background: #e9eaec;
    opacity: 0.3;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  .sign-up {
    background: var(--theme_bc);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .child3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .forgot-text {
    font-size: 24px;
    margin-bottom:0px ;
  }
  .content1{
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    width:410px ;
    margin-bottom:20px ;
  }
  .btn-content{
    margin-top:20px ;
  }
`;
