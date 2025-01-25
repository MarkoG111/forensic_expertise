"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import Banner from "../components/Banner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faMapMarked,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Kontakt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        alert("Hvala što ste nas kontaktirali. Odgovorićemo vam uskoro.")
      } else {
        alert(`Greška: ${result.message}`)
      }
    } catch (error) {
      console.error("Greška pri slanju poruke:", error)
      alert("Došlo je do greške prilikom slanja poruke. Pokušajte ponovo.")
    }

    reset()
  }

  return (
    <div className="contact-page">
      <Banner title="Kontakt" height="h-[50vh]" />

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

            <button type="submit">Pošalji</button>
          </form>

          {/* Contact Information */}
          <div className="sidebar">
            <ul>
              <li className="flex items-center gap-4 py-4">
                <FontAwesomeIcon icon={faMapMarked} size="2xl" />
                <span>
                  Vuka Karadžića 94, <br /> 32300 Gornji Milanovac
                </span>
              </li>
              <li className="flex items-center gap-4 py-4">
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <span>064/15 69 293</span>
              </li>
              <li className="flex items-center py-4">
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                <span className="pl-4">milenijum.gm@mts.rs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
