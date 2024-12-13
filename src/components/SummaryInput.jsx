import React, { useState } from 'react';
import axios from "axios";

const SummaryInput = ({ setStructuredTicket, setIsLoading }) => {
    const [rawSummary, setRawSummary] = useState("");

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/process-ticket`,
                { rawSummary }
            );

            setStructuredTicket(JSON.parse(response.data.structuredTicket));
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to submit summary:", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="summary-input-container">
            <div className="container">
                <div className="field-group field-group-full-width">
                    <label htmlFor="summary" className="summary-input-label">Summary:</label>
                    <textarea
                        id="summary"
                        name="summary"
                        rows="8"
                        placeholder="Paste summary here..."
                        value={rawSummary}
                        onChange={(e) => setRawSummary(e.target.value)}></textarea>
                </div>
                <button onClick={handleSubmit} class="cta">Submit</button>
            </div>
        </div>
    );
};

export default SummaryInput;