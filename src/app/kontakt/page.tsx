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
import Head from "next/head";

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
    alert("Hvala što ste nas kontaktirali. Odgovorićemo vam uskoro.");
    reset();
  };

  return (
    <main className="contact-page">
      <Head>
        <title>Kontakt | Forenzička ekspertiza</title>
        <meta
          name="description"
          content="Kontaktirajte forenzičkog eksperta za mehaniku radi dodatnih informacija o proceni štete, proceni vrednosti industrijskih mašina, ili izradi stručnih mišljenja."
        />
        <meta
          name="keywords"
          content="forenzička ekspertiza, kontakt, sudski veštak, procena štete, procena vrednosti, stručna mišljenja"
        />
        <meta property="og:title" content="Kontakt | Forenzička ekspertiza" />
        <meta
          property="og:description"
          content="Kontaktirajte nas za profesionalne usluge sudskog veštaka za mehaniku."
        />
        <meta property="og:url" content="https://www.example.com/kontakt" />
        <meta property="og:type" content="website" />
      </Head>

      <Banner title="Kontaktirajte nas" height="h-[50vh]" />

      <div className="container">
        <div className="flex justify-between my-24 flex-wrap gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[100%] max-w-[600px]"
          >
            {/* Name Input */}
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
              } p-2 mb-4`}
            />

            {/* Email Input */}
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
              } p-2 mb-4`}
            />

            {/* Message Input */}
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
              } p-2 mb-4`}
            />

            <button type="submit">
              Pošalji
            </button>
          </form>

          {/* Contact Information */}
          <div className="sidebar text-lg">
            <ul>
              <li className="flex items-center gap-4 py-4">
                <FontAwesomeIcon icon={faMapMarked} size="2xl" />
                <span>
                  Vuka Karadžića 115, <br /> 32300 Gornji Milanovac
                </span>
              </li>
              <li className="flex items-center gap-4 py-4">
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <span>064/44 22 212</span>
              </li>
              <li className="flex items-center gap-4 py-4">
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <span>066/99 30 186</span>
              </li>
              <li className="flex items-center py-4">
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
