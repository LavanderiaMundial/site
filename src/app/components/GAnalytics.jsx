import React from "react";

const GAnalytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-NNMC3R43D8`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NNMC3R43D8'); `,
      }}
    />
  </>
)

export default GAnalytics