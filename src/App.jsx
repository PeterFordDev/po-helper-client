import React, { useState } from "react";
import SummaryInput from "./components/SummaryInput";
import TicketForm from "./components/ticketForm";
import FormattedOutput from "./components/FormattedOutput";

function App() {
    const [structuredTicket, setStructuredTicket] = useState({
        client: "",
        title: "",
        productOwner: "",
        goLiveDate: "",
        stakeholders: [],
        overview: "",
        usefulInformation: "",
        relatedTickets: "",
        devices: "DTM",
        pageType: [],
        targeting: [],
        exclusions: ["/seaons", "/laura-ashley/"],
        split: "",
        fcaRequired: "",
        businessJustification: "",
        monetateGoal: "",
        acceptanceCriteria: [],
        goLiveInformation: "",
    });
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
            <SummaryInput setStructuredTicket={setStructuredTicket} setIsLoading={setIsLoading} />
            {isLoading ? <div className="container">Loading...</div> :
                <>
                    <TicketForm structuredTicket={structuredTicket} setStructuredTicket={setStructuredTicket} />
                    <FormattedOutput structuredTicket={structuredTicket} />
                </>
            }
        </>
    );
}

export default App;