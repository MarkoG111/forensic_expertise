import { Metadata } from "next"
import FAQ from "./FAQ"

export const metadata: Metadata = {
  title: "Česta pitanja | Mašinski veštak",
  description:
    "Odgovori na najčešće postavljana pitanja vezana za mašinskog veštaka.",
  keywords: [
    "mašinski veštak",
    "česta pitanja",
    "odgovori",
    "FAQ",
    "sudski veštak",
  ].join(", "),
  openGraph: {
    title: "Česta pitanja | Mašinski veštak",
    description:
      "Odgovori na najčešće postavljana pitanja vezana za sudkog mašinskog veštaka.",
    url: "https://www.masinskivestak.rs/cesta-pitanja",
    images: ["https://www.masinskivestak.rs/images/baner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Česta pitanja | Mašinski veštak",
    description:
      "Odgovori na najčešće postavljana pitanja vezana za sudkog mašinskog veštaka.",
    images: ["https://www.masinskivestak.rs/images/baner.png"],
  },
}

export default function Page() {
  return <FAQ />
}
