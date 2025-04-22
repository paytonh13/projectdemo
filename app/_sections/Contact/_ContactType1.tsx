/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ContactData } from "./types/ContactData";
import FormContact from "./elements/FormContact";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface ContactProps {
  data: ContactData;
}

// Pierson - Update Contact Types
const ContactType1: React.FC<ContactProps> = ({ data }) => {
  const {
    title,
    subtitle,
    phone,
    mail,
    address,
    imgUrl,
    contactPhone,
    contactEmail,
    contactAddress,
    nameField,
    emailField,
    phoneField,
    messageField,
    textColor
  } = data;

  // add requried fields to be passed through to FormContact
const requiredFields = {nameField, emailField, phoneField, messageField, mail }

// Pierson - show passed data from forms, with text coloring and checkbox options actualy changing things 
  return (
    <div className="relative isolate bg-gray-50">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 py-20 lg:static lg:p-20">
          <div className="mx-auto max-w-screen-xl lg:mx-0 lg:max-w-full">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={imgUrl}
                alt="Background image"
              />
              <div className="absolute inset-0 bg-gray-500 opacity-50"></div>{" "}

            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl" style={{ color: textColor }}>
              {title}
            </h2>
            <p className="mt-4 text-base text-gray-50" style={{ color: textColor }}>{subtitle}</p>
            <dl className="mt-10 space-y-4 text-base leading-7" style={{ color: textColor }}>
              {contactPhone && ( 
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <i className="pi pi-phone" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:opacity-80" href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </dd>
                </div>
              )}
              {contactEmail && ( 
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <i className="pi pi-envelope" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:opacity-80" href={`mailto:${mail}`}>
                      {mail}
                    </a>
                  </dd>
                </div>
              )}
              {contactAddress && ( 
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPinIcon className="w-5 h-5" />
                  </dt>
                  <dd>{address}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
        <div className="px-6 py-20 lg:p-20">
          <FormContact requiredFields={requiredFields} />
        </div>
      </div>
    </div>
  );
};

export default ContactType1;
