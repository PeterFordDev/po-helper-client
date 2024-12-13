import React from "react";
import { generateHtml } from "../utils/formatTicket";

const FormattedOutput = ({ structuredTicket }) => {
    const htmlContent = generateHtml(structuredTicket);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(htmlContent).then(() => {
            alert("HTML copied to clipboard!");
        });
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
                    Copy HTML
                </button>

            </div>
        </div>
    );
};

export default FormattedOutput;
