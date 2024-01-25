import React from "react";

const GAds = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        // Helper function to delay opening a URL until a gtag event is sent.
        // Call it in response to an action that should navigate to a URL.
        function gtagSendEvent(url) {
            var callback = function () {
            if (typeof url === 'string') {
                window.location = url;
            }
            };
            gtag('event', 'conversion_event_submit_lead_form', {
            'event_callback': callback,
            'event_timeout': 2000,
            // <event_parameters>
            });
                return false;
            }`,
      }}
    />
  </>
);

export default GAds;
