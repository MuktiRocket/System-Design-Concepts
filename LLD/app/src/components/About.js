import React from "react";
import { LANG } from "../utils/languageConstants";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div>
      <h1 className="font-bold text-2xl">{data.title}</h1>
      <p>{data.desc}</p>
      <h1 className="font-bold text-2xl">{data.title2}</h1>
      <p>{data.desc2}</p>
      <h1 className="font-bold text-2xl">{data.title3}</h1>
      <p>{data.desc3}</p>
      <h1 className="font-bold text-2xl">{data.title4}</h1>
      <p>{data.desc4}</p>
    </div>
  );
};

export default About;
