"use client";
import { authClient } from "@/lib/auth-client";
import { Clock } from "@gravity-ui/icons";
import { Label, TimeField } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";
import { Calendar, DateField, DatePicker } from "@heroui/react";
import { Button, Input, Modal, Surface, TextField } from "@heroui/react";
import { LuCalendarClock } from "react-icons/lu";
import { toast } from "react-toastify";


const BookingModal = ({ data }) => {
    const { data: session } = authClient.useSession()
    const user = session?.user


    const handleBooking = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        const bookingData = {
            userId: user?.id,
            DoctorName: formValues.DoctorName,
            PatientName: formValues.PatientName,
            email: formValues.email,
            gender: formValues.gender,
            phone: formValues.phone,
            date: formValues.date,
            time: formValues.time,
        }

        console.log(bookingData);


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json()
        toast.success('Appointment booked successfully!')

    }


    return (
        <div>
            <Modal>
                <Button variant="secondary" className="bg-green-600 p-6 text-white text-lg rounded-xl">Book Appointment</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <LuCalendarClock />
                                </Modal.Icon>
                                <Modal.Heading>Get Appointment</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">Give the info for Booking</p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4" onSubmit={handleBooking}>
                                        <TextField className="w-full" name="DoctorName" type="text" value={data?.name}>
                                            <Label>Doctor Name</Label>
                                            <Input />
                                        </TextField>
                                        <TextField isRequired className="w-full" name="PatientName" type="text" defaultValue={user?.name}>
                                            <Label>Patient Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email" defaultValue={user?.email}>
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <div className="flex justify-between">
                                            <div className="w-40" name="gender">
                                                <Select fullWidth isRequired placeholder="Select one" name="gender">
                                                    <Label>Gender</Label>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Male" textValue="Male">Male<ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Female" textValue="Female">Female<ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Other" textValue="Other">Other<ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            <div>
                                                <TextField className="w-full" name="phone" type="tel" isRequired>
                                                    <Label>Phone</Label>
                                                    <Input placeholder="Enter your phone number" />
                                                </TextField>
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <div>
                                                <DatePicker className="" name="date" isRequired>
                                                    <Label>Date</Label>
                                                    <DateField.Group fullWidth>
                                                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                                        <DateField.Suffix>
                                                            <DatePicker.Trigger>
                                                                <DatePicker.TriggerIndicator />
                                                            </DatePicker.Trigger>
                                                        </DateField.Suffix>
                                                    </DateField.Group>
                                                    <DatePicker.Popover>
                                                        <Calendar aria-label="Event date">
                                                            <Calendar.Header>
                                                                <Calendar.YearPickerTrigger>
                                                                    <Calendar.YearPickerTriggerHeading />
                                                                    <Calendar.YearPickerTriggerIndicator />
                                                                </Calendar.YearPickerTrigger>
                                                                <Calendar.NavButton slot="previous" />
                                                                <Calendar.NavButton slot="next" />
                                                            </Calendar.Header>
                                                            <Calendar.Grid>
                                                                <Calendar.GridHeader>
                                                                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                                </Calendar.GridHeader>
                                                                <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                                            </Calendar.Grid>
                                                            <Calendar.YearPickerGrid>
                                                                <Calendar.YearPickerGridBody>
                                                                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                                </Calendar.YearPickerGridBody>
                                                            </Calendar.YearPickerGrid>
                                                        </Calendar>
                                                    </DatePicker.Popover>
                                                </DatePicker>
                                            </div>

                                            <div>
                                                <TimeField className="w-full" name="time" isRequired>
                                                    <Label>Time</Label>
                                                    <TimeField.Group>
                                                        <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                                        <TimeField.Suffix>
                                                            <Clock className="size-4 text-muted" />
                                                        </TimeField.Suffix>
                                                    </TimeField.Group>
                                                </TimeField>
                                            </div>
                                        </div>
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
        </div>
    );
};

export default BookingModal;