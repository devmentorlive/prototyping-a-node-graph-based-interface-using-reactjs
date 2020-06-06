import React from "react";

import HasTag from "./node/has-tag";
import WaitFor from "./node/wait-for";
import SendEmail from "./node/send-email";

function App() {
  return (
    <>
      <HasTag tag="Email Confirmed" completed={45} />
      <WaitFor days="2" completed={39} />
      <HasTag tag="Completed signup" completed={34} />
      <SendEmail
        title="Tell us why you didn't finish signing up"
        completed={12}
      />
    </>
  );
}

export default App;
