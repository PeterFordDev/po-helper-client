import React from "react";
import { generateHtml } from "../utils/formatTicket";
import { Container, Title, Button, TextInput, Paper, Box, Group, Space } from '@mantine/core';

const FormattedOutput = ({ structuredTicket }) => {
    const htmlContent = generateHtml(structuredTicket);

    const copyToClipboard = () => {
        const ticketPreview = document.querySelector('.ticket-preview');
        const range = document.createRange();
        range.selectNode(ticketPreview);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            alert("Rich text copied to clipboard!");
        } catch (err) {
            console.error('Failed to copy: ', err);
        }

        window.getSelection().removeAllRanges();
    };

    return (
        <Box style={{ backgroundColor: "var(--mantine-color-gray-2)", paddingBottom: "20px" }}>
            <Container className="formatted-output-container" mt="lg" style={{
                display: "flex",
                flexDirection: "column"
            }}>

                <Title order={3} mt="lg">Go Live Tracker Entry</Title>
                <TextInput
                    readOnly
                    value={`${structuredTicket.client} - ${structuredTicket.title} - ${structuredTicket.pageType} - ${structuredTicket.devices} - ${structuredTicket.split}`}
                    mt="md"
                />
                <Space h="xl" />
                <Group>
                    <Title order={3} mt="lg">Ticket Preview</Title>
                    <Button onClick={copyToClipboard} mt="md" variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                        Copy Ticket Summary
                    </Button>
                </Group>
                <Paper
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    style={{ display: "flex", backgroundColor: "#fff", padding: "0 15px", borderRadius: "5px" }}
                    className="ticket-preview"
                    mt="md"
                />
            </Container>
        </Box >
    );
};

export default FormattedOutput;
