"use client";

import { parseDate, parseTime } from "@internationalized/date";
import { Clock } from "@gravity-ui/icons";
import { Label, TimeField } from "@heroui/react";
import { Calendar, DateField, DatePicker } from "@heroui/react";
import { Button, Input, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditBooking = ({ data }) => {
    const handleBooking = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        const updateData = {
            PatientName: formValues.PatientName,
            date: formValues.date,
            time: formValues.time,
        }


        const res = await fetch(`http://localhost:5000/booking/${data.userId}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateData)
        })

        // const data = await res.json()
        toast.success('Appointment Update successfully!')
        window.location.reload();

    }

    return (
        <Modal>
            <Button variant="primary"><BiEdit />Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={handleBooking}>
                                    <TextField className="w-full" name="DoctorName" type="text" value={data?.DoctorName}>
                                        <Label>Doctor Name</Label>
                                        <Input />
                                    </TextField>
                                    <TextField className="w-full" name="PatientName" type="text" defaultValue={data?.PatientName}>
                                        <Label>Patient Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <div className="flex justify-between">
                                        <div>
                                            <DatePicker className="" name="date" defaultValue={data?.date ? parseDate(data?.date.split("T")[0]) : undefined}>
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
                                            <TimeField className="w-full" name="time" defaultValue={data?.time ? parseTime(data.time) : undefined}>
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
    );
};

export default EditBooking;