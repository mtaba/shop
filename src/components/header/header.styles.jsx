import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`