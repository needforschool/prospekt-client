import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";
import icn1 from "/public/static/images/icon/icn-1.svg";
import icn2 from "/public/static/images/icon/icn-2.svg";
import icn3 from "/public/static/images/icon/icn-3.svg";
import icn4 from "/public/static/images/icon/icn-4.svg";
import icn5 from "/public/static/images/icon/icn-5.svg";
import icn6 from "/public/static/images/icon/icn-6.svg";
import icn7 from "/public/static/images/icon/icn-7.svg";
import logout from "/public/static/images/icon/logout.svg";
import Image from "next/image";
import Link from "@components/Layout/Link";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const [userRole, setUserRole] = React.useState("");

  function getCookie() {
    const name = "role";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        setUserRole(c.split("=")[1]);
        return true;
      }
    }
    return false;
  }
  const mount = true;
  useEffect(() => {
    getCookie();
  }, [mount]);

  return (
    <Container>
      <Content>
        <ImageContainer>
          <LogoImage src={Logo} alt="Logo" width={150} />
        </ImageContainer>
        {(() => {
          if (userRole === "Sales") {
            return (
              <LinkContainer>
                <NavLink href="/dashboard" active={pathname === "/dashboard"}>
                  <LinkIcon src={icn1} alt="icn-1" width={24} />
                  <LinkText>Dashboard</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/add-user" active={pathname === "/add-user"}>
                  <LinkIcon src={icn2} alt="icn-2" width={24} />
                  <LinkText>Add user</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/users" active={pathname === "/users"}>
                  <LinkIcon src={icn3} alt="icn-3" width={24} />
                  <LinkText>Users</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/history" active={pathname === "/history"}>
                  <LinkIcon src={icn4} alt="icn-4" width={24} />
                  <LinkText>History</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/quotes" active={pathname === "/quotes"}>
                  <LinkIcon src={icn5} alt="icn-5" width={24} />
                  <LinkText>Quotes</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/invoices" active={pathname === "/invoices"}>
                  <LinkIcon src={icn6} alt="icn-6" width={24} />
                  <LinkText>Invoices</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/notes" active={pathname === "/notes"}>
                  <LinkIcon src={icn7} alt="icn-7" width={24} />
                  <LinkText>Notes</LinkText>
                </NavLink>
              </LinkContainer>
            );
          } else {
            return (
              <LinkContainer>
                <NavLink href="/dashboard" active={pathname === "/dashboard"}>
                  <LinkIcon src={icn1} alt="icn-1" width={24} />
                  <LinkText>Dashboard</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/history" active={pathname === "/history"}>
                  <LinkIcon src={icn4} alt="icn-4" width={24} />
                  <LinkText>History</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/invoices" active={pathname === "/invoices"}>
                  <LinkIcon src={icn6} alt="icn-6" width={24} />
                  <LinkText>Invoices</LinkText>
                </NavLink>
                <Sep></Sep>
                <NavLink href="/notes" active={pathname === "/notes"}>
                  <LinkIcon src={icn7} alt="icn-7" width={24} />
                  <LinkText>Notes</LinkText>
                </NavLink>
              </LinkContainer>
            );
          }
        })()}
        <LogContainer>
          <LogName>
            <Circle></Circle>
            {/* <Profile src="" alt=""></Profile> */}
            <Name>User</Name> {/*  +Roles if !== client || prospect  */}
          </LogName>
          <LogoutContainer href="/signin">
            <LogoutIcon src={logout} alt="logout" width={24} />
            <LogoutText>Logout</LogoutText>
          </LogoutContainer>
        </LogContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 245px;
  height: 100vh;
  padding: 32px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary1};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  height: unset;
`;

const LogoImage = styled(Image)`
  object-fit: contain;
  height: unset;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  :not(:first-child) {
    padding-top: 20px;
  }
`;

const Sep = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyscale2};
  opacity: 0.1;
`;
const LinkIcon = styled(Image)``;

const LinkText = styled.span`
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const LogName = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greyscale2};
`;

// const Profile = styled(Image)``;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const LogoutContainer = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const LogoutIcon = styled(Image)``;

const LogoutText = styled.span`
  color: ${({ theme }) => theme.colors.greyscale1};
`;

export default Sidebar;
