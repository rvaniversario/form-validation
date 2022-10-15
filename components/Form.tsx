import type { NextComponentType, NextPageContext } from "next";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@mui/material";
import styled from "styled-components";

const FormContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.25rem;
  max-width: 500px;
  margin: 4rem auto 6rem;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

interface Props {
  formik: any;
}

const Form: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <>
      <FormContainer>
        {/* Input */}
        <Title>Registration Form</Title>
        <FormEl onSubmit={props.formik.handleSubmit}>
          <FormControl margin={"normal"} hiddenLabel={true}>
            <InputLabel focused={false} htmlFor="username">
              Username
            </InputLabel>
            <Input
              id="username"
              type="text"
              name="username"
              value={props.formik.values.username}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.username && props.formik.errors.username
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.username && props.formik.errors.username}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="password">
              Password
            </InputLabel>
            <Input
              id="password"
              type="password"
              name="password"
              value={props.formik.values.password}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.password && props.formik.errors.password
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.password && props.formik.errors.password}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="confirmPass">
              Confirm Password
            </InputLabel>
            <Input
              id="confirmPass"
              type="password"
              name="confirmPassword"
              value={props.formik.values.confirmPassword}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.confirmPassword &&
                props.formik.errors.confirmPassword
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.confirmPassword &&
                props.formik.errors.confirmPassword}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="firstname">
              First Name
            </InputLabel>
            <Input
              id="firstname"
              type="text"
              name="firstName"
              value={props.formik.values.firstName}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.firstName && props.formik.errors.firstName
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.firstName && props.formik.errors.firstName}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="middleName">
              Middle Name
            </InputLabel>
            <Input
              id="middleName"
              type="text"
              name="middleName"
              value={props.formik.values.middleName}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.middleName &&
                props.formik.errors.middleName
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.middleName &&
                props.formik.errors.middleName}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="lastName">
              Last Name
            </InputLabel>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              value={props.formik.values.lastName}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.lastName && props.formik.errors.lastName
              }
            />
            <FormHelperText error={true}>
              {props.formik.touched.lastName && props.formik.errors.lastName}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="email">
              Email
            </InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={props.formik.values.email}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={props.formik.touched.email && props.formik.errors.email}
            />
            <FormHelperText error={true}>
              {props.formik.touched.email && props.formik.errors.email}
            </FormHelperText>
          </FormControl>
          {/* Input */}
          <FormControl margin={"normal"}>
            <InputLabel focused={false} htmlFor="phone">
              Phone
            </InputLabel>
            <Input
              id="phone"
              type="tel"
              name="phone"
              value={props.formik.values.phone}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={props.formik.touched.phone && props.formik.errors.phone}
            />
            <FormHelperText error={true}>
              {props.formik.touched.phone && props.formik.errors.phone}
            </FormHelperText>
          </FormControl>

          <Button variant="contained" sx={{ marginTop: 3 }} type="submit">
            Submit
          </Button>
        </FormEl>
      </FormContainer>
    </>
  );
};

export default Form;
