import React, { useState } from 'react';
import axios from "axios";
import { Textarea, Button, Container, Grid, Box } from '@mantine/core';

const SummaryInput = ({ setStructuredTicket, setIsLoading }) => {
    const [rawSummary, setRawSummary] = useState("");

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/process-ticket`,
                { rawSummary }
            );
            const structuredTicket = JSON.parse(response.data.structuredTicket);
            // Convert goLiveDate to a Date object
            structuredTicket.goLiveDate = structuredTicket.goLiveDate ? new Date(structuredTicket.goLiveDate) : null;
            console.log(structuredTicket);
            setStructuredTicket(structuredTicket);
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to submit summary:", error);
            setIsLoading(false);
        }
    };

    return (
        <Box style={{ backgroundColor: "var(--mantine-color-gray-1)", paddingBottom: "20px" }}>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Textarea
                            label="Summary"
                            description="Paste summary here..."
                            value={rawSummary}
                            onChange={(e) => setRawSummary(e.target.value)}
                            autosize
                            minRows={8}
                        />
                        <Button onClick={handleSubmit} mt="md" fullWidth variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        >Submit</Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default SummaryInput;