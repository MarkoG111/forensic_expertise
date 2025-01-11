import Banner from "@/app/components/Banner";
import Head from "next/head";

export default function ProcenaVrednostiIndustrijskihMasina() {
  return (
    <main>
      <Head>
        <title>Procena vrednosti industrijskih mašina | Forenzička ekspertiza</title>
        <meta
          name="description"
          content="Procena vrednosti industrijskih mašina i opreme od strane sudskog veštaka za mehaniku. Stručno i profesionalno procenjujemo vrednost industrijskih mašina za potrebe osiguranja, prodaje, ili sudskih postupaka."
        />
        <meta
          name="keywords"
          content="procena vrednosti, industrijske mašine, sudski veštak, forenzička ekspertiza, procena opreme, industrijska oprema, procena štete"
        />
        <meta
          property="og:title"
          content="Procena vrednosti industrijskih mašina | Forenzička ekspertiza"
        />
        <meta
          property="og:description"
          content="Profesionalna procena vrednosti industrijskih mašina i opreme za različite namene, uključujući osiguranje, prodaju, i sudske procese."
        />
        <meta
          property="og:url"
          content="https://www.example.com/procena-vrednosti-industrijskih-masina"
        />
        <meta
          property="og:type"
          content="website"
        />
      </Head>

      <Banner
        title="Procena vrednosti industrijskih mašina"
        height="h-[50vh]"
      />

      <section className="py-8">
        <div className="container">
          <h2 className="font-bold mb-4">Procena vrednosti industrijskih mašina</h2>
          <p className="mb-4">
            Procena vrednosti industrijskih mašina i opreme je ključni korak za određivanje njihove stvarne tržišne vrednosti. Ova usluga je neophodna za različite situacije, kao što su osiguranje, prodaja, kupovina, ili sudski postupci.
          </p>
          <p className="mb-4">
            Kao sudski veštak za mehaniku, pružam profesionalne usluge procene vrednosti industrijskih mašina i opreme, koristeći iskustvo i najviše standarde stručnosti. Uzimam u obzir sve relevantne faktore, uključujući starost, stanje, i aktuelne tržišne uslove.
          </p>
          <p>
            Bez obzira na potrebu – bilo da se radi o pripremi za osiguranje, proceni u slučaju štete, ili pravnim procesima – pružam tačne i pouzdane procene koje su u skladu sa važećim zakonskim i stručnim standardima.
          </p>
        </div>
      </section>
    </main>
  );
}
