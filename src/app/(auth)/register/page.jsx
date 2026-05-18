"use client";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <Form className="w-full max-w-100 border-2 border-gray-500/40 rounded-2xl mx-auto m-20 p-7 shadow-2xl shadow-blue-300" >
            <Fieldset>
                <div className="flex items-center">
                    <Image className="w-14" src="/assets/54-545682_doctor-logo-doctor-logo-png.png" alt="DocAppointment Logo" width={50} height={50} loading="eager"></Image>
                    <h2 className="text-2xl lg:text-3xl font-semibold"><span className="text-green-600">Doc</span>Appointment</h2>
                </div>
                <Fieldset className="text-2xl">Register</Fieldset>
                <FieldGroup>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField>
                        <Label>Photo Url</Label>
                        <Input placeholder="Enter Photo Url" />
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
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                </FieldGroup>
                <Fieldset.Actions>
                    <Button className="w-full" type="submit" variant="primary">
                        Registe
                    </Button>
                </Fieldset.Actions>
                <div className="divider">OR</div>
                <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Continue with Google
                </button>
                <div>Already have an account? <Link href="/login" className="text-green-500 border-b-2 font-semibold">Login</Link></div>
            </Fieldset>
        </Form>
    );
};

export default RegisterPage;