"use client";
import { authClient } from "@/lib/auth-client";
import { Label } from "@heroui/react";
import { Button, Input, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";

const UpdateProfile = ({ data }) => {
    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const image = e.target.image.value;


        await authClient.updateUser({
            name: name,
            image: image,
        })

        route.refresh();

    }
    return (
        <Modal>
            <Button variant="primary" className="rounded-xl p-5"><BiEdit />Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <TextField className="w-full" name="name" type="text" defaultValue={data?.name}>
                                        <Label>Name</Label>
                                        <Input />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url" defaultValue={data?.image}>
                                        <Label>Image Url</Label>
                                        <Input placeholder="Enter image Url" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Book Appointment</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateProfile;