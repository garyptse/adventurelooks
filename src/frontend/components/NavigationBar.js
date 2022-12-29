import React from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const NavigationContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #32292f;

  display: flex;
  justify-content: space-between;
`;
const NavigationRedirect = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;
const NavigationItem = styled.li`
  float: left;

  &:hover {
    background-color: #221c20;
  }
`;

const Button = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  background-color: #32292f;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #221c20;
  }
`;
function NavigationBar(navigationBarProps) {
  const {} = navigationBarProps;
  const navigate = useNavigate();

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  async function goto(location) {
    navigate(location, { replace: true });
  }
  return (
    <NavigationContainer>
      <div>
        <NavigationItem>
          <Button onClick={() => navigate("/")}>Home</Button>
        </NavigationItem>
        <NavigationItem>
          <Button onClick={() => navigate("photos")}>Label Photos</Button>
        </NavigationItem>
        <NavigationItem>
          <Button onClick={() => navigate("story")}>Story Album</Button>
        </NavigationItem>
      </div>
      <div>
        <NavigationItem>
          <Button onClick={signOut}>Logout</Button>
        </NavigationItem>
      </div>
    </NavigationContainer>
  );
}

export default NavigationBar;
