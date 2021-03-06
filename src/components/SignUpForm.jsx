import React, { Component } from "react";
import { navigate } from "@reach/router";
import Page from "../styles/Page.js";

import {
  OuterFormContainer,
  FormContainer,
  FormInput,
  FormTitle,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  // FormFont,
  LogoType,
} from "../styles/SignUpFormStyles.js";

class SignUpForm extends Component {
  handleSubmit = () => {
    navigate("/signupsuccess");
  };
  render() {
    return (
      <Page>
        <LogoType>travel buddy</LogoType>
        <OuterFormContainer>
          <FormContainer>
            {/* div */}


            <FormInnnerContainer>
              {/* div */}
              <CloseButton to="/">x</CloseButton>
              <FormTitle>Sign Up</FormTitle>
              <p>it's quick and easy</p>
              {/* <FormFont> */}

              {/* form */}
              <FormInput type="text" placeholder="First name"></FormInput>
              <FormInput type="text" placeholder="Surname"></FormInput>
              <FormInput
                type="text"
                placeholder="Mobile number or email address"
              ></FormInput>
              <FormLabel htmlFor="password">
                create Password (must be at least 8 characters)
              </FormLabel>
              <FormInput type="password" placeholder="password" />

              <ButtonContainer>
                <Button type="submit" value="login" />
              </ButtonContainer>
              {/* </FormFont> */}
            </FormInnnerContainer>
          </FormContainer>
        </OuterFormContainer>
      </Page>
    );
  }
}

export default SignUpForm;
