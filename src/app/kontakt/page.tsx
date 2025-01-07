"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarked,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Kontakt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted: ", data);
    alert("Hvala što ste nas kontaktirali.");
    reset();
  };

  return (
    <main className="contact-page">
      <Banner title="Kontakt" height="h-[50vh]" />

      <div className="container">
        <div className="flex justify-between my-24">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[100%] max-w-[600px]"
          >
            {errors.name && (
              <p className="text-red-500 mt-[-10px]">{errors.name.message}</p>
            )}
            <input
              type="text"
              placeholder="Vaše Ime"
              id="name"
              {...register("name", {
                required: "Ime je obavezno",
                pattern: {
                  value: /^[A-Za-zČĆĐŠŽčćđšž]{2,}(\s?[A-Za-zČĆĐŠŽčćđšž]*)*$/,
                  message: "Ime mora imati minimum 2 slova",
                },
              })}
              className={`border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } p-2`}
            />

            {errors.email && (
              <p className="text-red-500 mt-[-10px]">{errors.email.message}</p>
            )}

            <input
              type="email"
              placeholder="Email Adresa"
              id="email"
              {...register("email", {
                required: "Email je obavezan",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Unesite validan email",
                },
              })}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } p-2`}
            />

            {errors.message && (
              <p className="text-red-500 mt-[-10px]">
                {errors.message.message}
              </p>
            )}
            <textarea
              id="message"
              placeholder="Vaša Poruka"
              {...register("message", {
                required: "Poruka je obavezna",
                pattern: {
                  value: /^.{5,}$/,
                  message: "Poruka mora imati minimum 5 karaktera",
                },
              })}
              className={`border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } p-2`}
            />

            <button type="submit">Pošalji</button>
          </form>

          <div className="sidebar text-xl">
            <ul>
              <li className="flex items-center gap-4 py-6">
                <FontAwesomeIcon icon={faMapMarked} size="2xl" />
                <span>
                  Vuka Karadžića 115, <br /> 32300 Gornji Milanovac
                </span>
              </li>
              <li className="flex items-center gap-4 py-6">
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <span>064/44 22 212</span>
              </li>
              <li className="flex items-center gap-4 py-6">
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <span>066/99 30 186</span>
              </li>
              <li className="flex items-center py-6">
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                <span className="pl-4">bratislav.igrutinovic@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
