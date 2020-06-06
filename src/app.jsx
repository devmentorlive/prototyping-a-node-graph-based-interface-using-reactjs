import React from "react";

import HasTag from "./node/has-tag";
import WaitFor from "./node/wait-for";
import SendEmail from "./node/send-email";

function App() {
  return (
    <div>
      <HasTag tag="Email Confirmed" completed={4} />
      <WaitFor days="2" completed={10} />
      <HasTag tag="Completed signup" completed={4} />
      <SendEmail
        title="Tell us why you didn't finish signing up"
        completed={12}
      />
    </div>
  );
}

export default App;
