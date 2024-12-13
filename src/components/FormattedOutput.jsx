import React from "react";
import { generateHtml } from "../utils/formatTicket";

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
        <div className="formatted-output-container">
            <div className="container">

                <h2>Go Live Tracker Entry</h2>
                <input type="text" name="" id="" readOnly value={`${structuredTicket.client} - ${structuredTicket.title} - ${structuredTicket.pageType} - ${structuredTicket.devices} - ${structuredTicket.split}`} />
                <h2>Ticket Preview</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    style={{ backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px" }}
                    className="ticket-preview"
                ></div>
                <button onClick={copyToClipboard} className="cta">
                    Copy Ticket Summary
                </button>

            </div>
        </div>
    );
};

export default FormattedOutput;
