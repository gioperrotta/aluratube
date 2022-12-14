import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 100%;
    padding: 16px;
    overflow: hidden;
    
  }
  .user-info {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    img {
      margin-right: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

export const StyledBanner = styled.div`
  background-color: blue;
  height: 230px;
  background-image: url(${({bgImg}) => bgImg})
`;