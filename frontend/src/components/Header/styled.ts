import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const HeaderArea = styled.header`
  font-size: 18px;
  padding: 10px 0;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const HeaderContainer = styled.div`  
  padding: 0 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 1100px;
    padding: 0 20px;
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: var(--main);
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg{
    width: 35px;
    height: 35px;
    color: var(--verde);
    margin-right: 5px;
    border: 2px solid var(--verde);
    border-radius: 50px;
  }
`;

const FormSearch = styled.form``;

const FormInput = styled.input`
  padding: 5px 10px;
  font-size: 10px;
  width: 100%;
  max-width: 150px;
  border-radius: 50px;
  border: 2px solid var(--verde);
  outline: var(--verde);

  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 200px;
  }
`;

const NavArea = styled.nav`
  background: var(--main);
  color: var(--darkbg);
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 15px 0;
  }
`;

const UL = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    max-width: 1100px;
  }
`;

const LI = styled.li`
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
  padding: 5px;
  border-radius: 50px;
  
  &.active,
  &:hover {
    background: var(--bglink);
  }

  @media (min-width: 768px) {
    padding: 5px 15px;
  }
`;

const LinkMenu = styled(Link)` 
  color: var(--darkbg);
  text-decoration: none;
  padding: 5px;
  border-radius: 50px;
  font-size: 12px;

  &:hover a {
      background: var(--bglink);
  }

  @media (min-width: 768px) {
    padding: 5px 15px;
    font-size: 18px;
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