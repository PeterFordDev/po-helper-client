import React, { useState } from "react";


function TicketForm(props) {
    const { structuredTicket, setStructuredTicket } = props;

    const formFields = [
        { name: "title", type: "text" },
        { name: "client", type: "text" },
        { name: "productOwner", type: "text" },
        { name: "goLiveDate", type: "date" },
        { name: "stakeholders", type: "text" },
        { name: "overview", type: "textarea", placeholder: "Short description of the request" },
        { name: "usefulInformation", type: "textarea", placeholder: "Useful information for the Dev picking up the ticket (experiences to duplicate etc)" },
        { name: "relatedTickets", type: "textarea", placeholder: "Any tickets from the same sprint that the developer should also work on to avoid duplication" },
        { name: "devices", type: "text" },
        { name: "pageType", type: "text" },
        { name: "targeting", type: "text" },
        { name: "exclusions", type: "text" },
        { name: "split", type: "text" },
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

    const toTitleCase = (str) => {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
    };

    return (
        <form className="container form">
            {formFields.map((field) => (
                <div key={field.name} className={`field-group ${field.type === "textarea" ? "field-group-full-width" : ""}`}>
                    <label htmlFor={field.name}>{toTitleCase(field.name)}</label>
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            value={structuredTicket[field.name]}
                            onChange={handleChange}
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={structuredTicket[field.name]}
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}
        </form>
    );
}

export default TicketForm;