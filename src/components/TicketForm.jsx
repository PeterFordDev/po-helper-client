import React, { useState } from "react";
import { Container, Grid, Textarea, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';


function TicketForm(props) {
    const { structuredTicket, setStructuredTicket } = props;

    const formFields = [
        { name: "title", type: "text" },
        { name: "client", type: "text" },
        { name: "productOwner", type: "text" },
        { name: "goLiveDate", type: "date", placeholder: "Go Live Date" },
        { name: "stakeholders", type: "text", placeholder: "Comma separated list" },
        { name: "overview", type: "textarea", placeholder: "Short description of the request" },
        { name: "usefulInformation", type: "textarea", placeholder: "Useful information for the Dev picking up the ticket (experiences to duplicate etc)" },
        { name: "relatedTickets", type: "textarea", placeholder: "Any tickets from the same sprint that the developer should also work on to avoid duplication" },
        { name: "devices", type: "text", placeholder: "DTM / APP" },
        { name: "pageType", type: "text", placeholder: "Comma separated list" },
        { name: "targeting", type: "text", placeholder: "Comma separated list" },
        { name: "exclusions", type: "text", placeholder: "Comma separated list" },
        { name: "split", type: "text", placeholder: "Split %" },
        { name: "fcaRequired", type: "text", placeholder: "If FCA is required please add GAP PID" },
        { name: "businessJustification", type: "textarea", placeholder: "Why does the business want to conduct this test" },
        { name: "monetateGoal", type: "text", placeholder: "Monetate Goal" },
        { name: "acceptanceCriteria", type: "textarea", placeholder: "This should be a list of parameters the QAs can test against" },
        { name: "goLiveInformation", type: "textarea", placeholder: "Information for the developer on go live" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStructuredTicket((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDateChange = (name, value) => {
        setStructuredTicket((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toTitleCase = (str) => {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
    };

    return (
        <Container mt="lg">
            <form>
                <Grid>
                    {formFields.map((field) => (
                        <Grid.Col span={field.type === "textarea" || field.name === "title" ? 12 : 6} key={field.name}>
                            <div>
                                {field.type === "textarea" ? (
                                    <Textarea
                                        label={toTitleCase(field.name)}
                                        name={field.name}
                                        description={field.placeholder}
                                        value={structuredTicket[field.name]}
                                        onChange={handleChange}
                                    />
                                ) : field.type === "date" ? (
                                    <DatePickerInput
                                        label={toTitleCase(field.name)}
                                        name={field.name}
                                        description={field.placeholder}
                                        value={structuredTicket[field.name]}
                                        onChange={(value) => handleDateChange(field.name, value)}
                                    />
                                ) : (
                                    <TextInput
                                        label={toTitleCase(field.name)}
                                        type={field.type}
                                        name={field.name}
                                        description={field.placeholder}
                                        value={structuredTicket[field.name]}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </Grid.Col>
                    ))}
                </Grid>
            </form>
        </Container>
    );
}

export default TicketForm;