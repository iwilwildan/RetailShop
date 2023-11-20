import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.container-login100 {
    max-width: 600px;
    width: 100%;
    margin: auto;
    align-items: center;
  }
`;

export const StyledFlexContainer = styled.span`
  &.login100-form-title {
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 600;

    @media ${(props) => props.theme.breakpoints.sm} {
      align-items: center;
      grid-area: 1 / 4 / 2 / 6;
    }
  }
`;

export const StyledFormControl = styled.input`
  &.input100 {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const StyledFormLabel = styled.span`
  &.focus-input100 {
    position: absolute;
    top: 0;
    left: 0.75rem;
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    color: #999;
    pointer-events: none;
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out;
  }
`;

export const StyledRow = styled.div`
  &.flex-sb-m {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 24px;
  }
`;

export const StyledCol = styled.div`
  &.contact100-form-checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;
  }
`;

export const StyledCheckInput = styled.input`
  &.input-checkbox100 {
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
`;

export const StyledPrimaryButton = styled.button`
  &.login100-form-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const StyledLink = styled.a`
  &.txt1 {
    font-weight: 400;
    color: #007bff;
    text-decoration: none;
  }
`;

export const StyledFloatingButton = styled.button`
  &.login100-form-btn {
    display: inline-block;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: 0.15s ease-in-out;
  }
`;

export const StyledMarginX1 = styled.div`
  &.m-t-17 {
    margin-top: 17px;
  }
`;
