import React, { useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    console.log('accepring cookies');
  };
  const closeP = () => {
    setConsent(true);
    console.log('closing');
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    console.log('denying cookie');
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`absolute bottom-3 w-[90%] left-3 p-3 rounded-md bg-slate-200 ${
        consent ? 'hidden' : ''
      }`}
    >
      This Site use cookie, please accept them if you want
      <div className="flex align-middle justify-between">
        <button
          onClick={(e) => {
            closeP();
          }}
        >
          Close
        </button>
        <button
          onClick={(e) => denyCookie()}
          className="p-2 bg-red-400 rounded-md"
        >
          Deny All
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="p-2 bg-green-400 rounded-md"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

export default Consent;
