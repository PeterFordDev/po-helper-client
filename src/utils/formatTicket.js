// File: src/utils/ticketUtils.js
export const generateHtml = (structuredTicket) => {
  const formatArray = (arr) => {
    if (!Array.isArray(arr)) {
      return "N/A";
    }
    return arr.length ? `<ul>${arr.map(item => `<li>${item}</li>`).join('')}</ul>` : "N/A";
  };

  return `
    <div>
      <h2>Project Title</h2>
      <p>${structuredTicket.title || "N/A"}</p>
      <h2>Product Owner</h2>
      <p>${structuredTicket.productOwner || "N/A"}</p>
      <h2>Go Live Date</h2>
      <p>${structuredTicket.goLiveDate || "N/A"}</p>
      <h2>Stakeholders</h2>
      <p>${formatArray(structuredTicket.stakeholders)}</p>
      <h2>Overview</h2>
      <p>${structuredTicket.overview || "N/A"}</p>
      <h2>Useful Information</h2>
      <p>${structuredTicket.usefulInformation || "N/A"}</p>
      <h2>Related Tickets</h2>
      <p>${structuredTicket.relatedTickets || "N/A"}</p>
      <h2>Devices</h2>
      <p>${structuredTicket.devices || "N/A"}</p>
      <h2>Page Type</h2>
      <p>${formatArray(structuredTicket.pageType)}</p>
      <h2>Targeting</h2>
      <p>${formatArray(structuredTicket.targeting)}</p>
      <h2>Exclusions</h2>
      <p>${formatArray(structuredTicket.exclusions)}</p>
      <h2>Split</h2>
      <p>${structuredTicket.split || "N/A"}</p>
      <h2>FCA Required</h2>
      <p>${structuredTicket.fcaRequired || "N/A"}</p>
      <h2>Business Justification</h2>
      <p>${structuredTicket.businessJustification || "N/A"}</p>
      <h2>Monetate Goal</h2>
      <p>${structuredTicket.monetateGoal || "N/A"}</p>
      <h2>Acceptance Criteria</h2>
      <p>${structuredTicket.acceptanceCriteria || "N/A"}</p>
      <h2>Go Live Information</h2>
      <p>${structuredTicket.goLiveInformation || "N/A"}</p>
    </div>
  `;
};
