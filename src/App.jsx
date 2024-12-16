import React, { useState } from "react";
import { Box, MantineProvider, Container, Paper, Loader, LoadingOverlay, Title, Text } from '@mantine/core';
import SummaryInput from "./components/SummaryInput";
import TicketForm from "./components/TicketForm";
import FormattedOutput from "./components/FormattedOutput";

function App() {
    const [structuredTicket, setStructuredTicket] = useState({
        client: "",
        title: "",
        productOwner: "",
        goLiveDate: null,
        stakeholders: [],
        overview: "",
        usefulInformation: "",
        relatedTickets: "",
        devices: "DTM",
        pageType: [],
        targeting: [],
        exclusions: ["/seaons", "/laura-ashley/"],
        split: "",
        fcaRequired: false,
        businessJustification: "",
        monetateGoal: "",
        acceptanceCriteria: [],
        goLiveInformation: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Box style={{ backgroundColor: "var(--mantine-color-gray-1)", padding: "20px 0" }}>
                <Container>
                    <Title order={1}>Team UIO - Ticket Generator</Title>
                </Container>
            </Box>
            <Box pos="relative">

                {isLoading ? <Box style={{ margin: "40px 0", textAlign: "center" }}><Loader size={50} /></Box> :
                    <>

                        <SummaryInput setStructuredTicket={setStructuredTicket} setIsLoading={setIsLoading} />


                        <TicketForm structuredTicket={structuredTicket} setStructuredTicket={setStructuredTicket} />


                        <FormattedOutput structuredTicket={structuredTicket} />

                    </>}
            </Box>
        </>
    );
}

export default App;