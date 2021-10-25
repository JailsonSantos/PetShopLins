import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`

`;

const HeaderArea = styled.header`
  font-size: 28px;
  padding: 10px 0;
`;

const HeaderContainer = styled.div`  
  max-width: 1100px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: var(--main);
`;

const FormSearch = styled.form``;

const FormInput = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  width: 100%;
  max-width: 200px;
`;

const NavArea = styled.nav`
  background: var(--main);
  color: var(--darkbg);
  padding: 15px 0;
`;

const UL = styled.ul`
  list-style: none;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const LI = styled.li`
  color: var(--darkbg);
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 10px;
  
  &.active,
  &:hover {
    background: var(--bglink);
  }
`;

const LinkMenu = styled(Link)` 
  color: var(--darkbg);
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 10px;

  &:hover a {
      background: var(--bglink);
  }
`;

export {
  Container,
  HeaderArea,
  HeaderContainer,
  LogoLink,
  FormSearch,
  FormInput,
  NavArea,
  UL,
  LI,
  LinkMenu
}