import React from "react";

const GAds = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            gtag('event', 'conversion_event_submit_lead_form', {
            // <event_parameters>
            });
            `,
      }}
    />
  </>
);

export default GAds;
