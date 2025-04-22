"use client";

import React from "react";
import ContactType1 from "./_ContactType1";
import ContactType2 from "./_ContactType2";
import ContactType3 from "./_ContactType3";
import ContactType4 from "./_ContactType4";
import ContactType5 from "./_ContactType5";
import { ContactData } from "./types/ContactData";

interface ContactProps {
  type: number;
  data: ContactData;
}

const Contact: React.FC<ContactProps> = ({ type, data }) => {
  const renderContactComponent = (type: number) => {
    switch (type) {
      case 1:
        return <ContactType1 data={data} />;
      case 2:
        return <ContactType2 data={data} />;
      case 3:
        return <ContactType3 data={data} />;
      case 4:
        return <ContactType4 data={data} />;
      case 5:
        return <ContactType5 data={data} />;
      default:
        throw new Error(`Contact type ${type} is not supported`);
    }
  };

  return <>{renderContactComponent(type)}</>;
};

export default Contact;
