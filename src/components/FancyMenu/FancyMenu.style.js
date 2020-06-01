import styled from "styled-components";

import { GiSecretBook } from "react-icons/gi";

export const FancyMenuContainer = styled.div`
  border: 2px solid #6c346e;
  background: #6c346e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

export const FancyMenuButton = styled.button`
  border: 2px solid #fff;
  background: #382e2f;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const FancyMenuIcon = styled(GiSecretBook)`
  font-size: 50px;
  color: white;
`;
