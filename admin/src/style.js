import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 48px
  align-self: stretch;
  background: ${props => props.theme.text.default};
  padding: 16px 32px;
`;

export const Logo = styled.h1`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
`;
