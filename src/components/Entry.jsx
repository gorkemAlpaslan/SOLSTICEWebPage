import React from "react";
import { useEffect, useState } from "react";
import EntryAnim from "../Animation.mp4";

const Entry = () => {
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(false);
    setTimeout(() => {
      SetLoading(true);
    }, 7900);
  }, []);

  return (
    <div className="testperent">
      <video src={EntryAnim} autoPlay muted className="Opening-scane"></video>
      {Loading && <h2 className="test">Coming Soon</h2>}
      {Loading && <p className="test2">By Devrim Coşkun</p>}
    </div>
  );
};

export default Entry;
