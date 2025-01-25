import { Metadata } from "next"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Kontakt | Mašinski veštak",
  description:
    "Kontaktirajte sudskog, mašinskog eksperta za mehaniku radi dodatnih informacija o proceni štete, proceni vrednosti industrijskih mašina, ili izradi stručnih mišljenja.",
  keywords: [
    "mašinski veštak kontakt",
    "sudski veštak kontakt",
    "procena štete konsultacije",
    "kontakt za procenu vrednosti",
    "stručna mišljenja kontakt",
  ].join(", "),
  openGraph: {
    title: "Kontakt | Mašinski veštak",
    description:
      "Kontaktirajte nas za profesionalne usluge sudskog veštaka za mehaniku.",
    url: "https://www.masinskivestak.rs/kontakt",
    images: ["https://www.masinskivestak.rs/images/baner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Mašinski veštak",
    description:
      "Kontaktirajte nas za profesionalne usluge sudskog veštaka za mehaniku.",
    images: ["https://www.masinskivestak.rs/images/baner.png"],
  },
}

export default function Page() {
  return <ContactForm />
}
