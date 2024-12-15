// File: src/utils/ticketUtils.js
export const generateHtml = (structuredTicket) => {
  const formatArray = (arr) => {
    if (!Array.isArray(arr)) {
      return "N/A";
    }
    return arr.length ? `<ul>${arr.map(item => `<li>${item}</li>`).join('')}</ul>` : "N/A";
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  return `
    <div>
      <h2>Project Title</h2>
      <p>${structuredTicket.title || "N/A"}</p>
      <h2>Product Owner</h2>
      <p>${structuredTicket.productOwner || "N/A"}</p>
      <h2>Go Live Date</h2>
      <p>${formatDate(structuredTicket.goLiveDate)}</p>
      <h2>Stakeholders</h2>
      ${formatArray(structuredTicket.stakeholders)}
      <h2>Overview</h2>
      <p>${structuredTicket.overview || "N/A"}</p>
      <h2>Useful Information</h2>
      <p>${structuredTicket.usefulInformation || "N/A"}</p>
      <h2>Related Tickets</h2>
      <p>${structuredTicket.relatedTickets || "N/A"}</p>
      <h2>Devices</h2>
      <p>${structuredTicket.devices || "N/A"}</p>
      <h2>Page Type</h2>
      ${formatArray(structuredTicket.pageType)}
      <h2>Targeting</h2>
      ${formatArray(structuredTicket.targeting)}
      <h2>Exclusions</h2>
      ${formatArray(structuredTicket.exclusions)}
      <h2>Split</h2>
      <p>${structuredTicket.split || "N/A"}</p>
      <h2>FCA Required</h2>
      <p>${structuredTicket.fcaRequired || "N/A"}</p>
      <h2>Business Justification</h2>
      <p>${structuredTicket.businessJustification || "N/A"}</p>
      <h2>Monetate Goal</h2>
      <p>${structuredTicket.monetateGoal || "N/A"}</p>
      <h2>Acceptance Criteria</h2>
      ${formatArray(structuredTicket.acceptanceCriteria)}
      <h2>Go Live Information</h2>
      <p>${structuredTicket.goLiveInformation || "N/A"}</p>
    </div>
  `;
};
