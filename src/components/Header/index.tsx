import React, { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #9262b3c7;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  margin-top: 78px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(131, 53, 177, 0.493);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  font-size: 25px;
`;

const Button = styled.button`
  background-color: transparent;
  color: aliceblue;
  border: none;
  font-size: 16px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Header: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrapper>
      <Title>Dara Soares</Title>
      <Nav>
        <NavItem href="/sobre">Sobre</NavItem>
        <NavItem href="/projetos">Projetos</NavItem>
        <NavItem href="/contato">Contato</NavItem>
      </Nav>
      <Button onClick={toggleModal}> {isModalOpen ? "Fechar" : "Menu"} </Button>
      <Modal isOpen={isModalOpen}>
        <ModalContent>
          <NavItem href="/sobre">Sobre</NavItem>
          <NavItem href="/projetos">Projetos</NavItem>
          <NavItem href="/contato">Contato</NavItem>
        </ModalContent>
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
