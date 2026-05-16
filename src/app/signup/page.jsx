"use client";

import { Card, Form, Separator } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUp = () => {

const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());


    const {data, error} = await authClient.signUp.email({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        image: userData.image
    })
    
    if(data){
        redirect("/login");
    }
    if(error){
        alert("Signup failed: " + error.message);   
    }
}

  return (
    <div className="max-w-7xl mx-auto m-10">
      <div className="text-center my-3">
        <h1 className="text-2xl font-bold"> Create Account</h1>
        <p>Start your adventure with Wanderlust</p>
      </div>
      <Card className="border rounded-none ">
        <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/image.jpg" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center">
            <Button className={"rounded-none"} type="submit">
              <Check />
              Register 
            </Button>
            <Button className={"rounded-none"} type="reset" variant="secondary">
              Clear
            </Button>
          </div>
        </Form>
          <div className="flex items-center  items-center">
            <Separator>
              <div className="whitespace-nowrap">Or SignUp with Google</div>
            </Separator>

          </div>
        <div>

          <Button className={"w-full rounded-none"}>
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
