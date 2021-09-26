import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo />
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;
