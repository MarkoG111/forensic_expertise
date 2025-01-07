import Banner from "@/app/components/Banner";
import Head from "next/head";

export default function KonsultacijaZaProcenuMasinskihSredstava() {
  return (
    <main>
      <Head>
        <title>
          Konsultacija za procenu mašinskih sredstava | Forenzička ekspertiza
        </title>
        <meta
          name="description"
          content="Nudimo konsultacije za procenu mašinskih sredstava, uključujući analizu vrednosti i tehničkog stanja opreme."
        />
        <meta
          name="keywords"
          content="konsultacija, procena mašinskih sredstava, vrednost opreme, tehničko stanje"
        />
        <meta
          property="og:title"
          content="Konsultacija za procenu mašinskih sredstava | Forenzička ekspertiza"
        />
        <meta
          property="og:description"
          content="Saznajte više o našim konsultacijama za procenu mašinskih sredstava, vrednostima i stanju opreme."
        />
        <meta
          property="og:url"
          content="https://www.example.com/konsultacija-za-procenu-masinskih-sredstava"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Banner
        title="Konsultacija za procenu mašinskih sredstava"
        height="h-[50vh]"
      />

      <section className="py-8">
        <div className="container">
          <p className="text-lg text-gray-700">
            Pružamo profesionalne konsultacije za procenu mašinskih sredstava,
            uključujući analizu vrednosti, tehničkog stanja i mogućnosti daljeg
            korišćenja.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Naša stručnost u oblasti procene mašinskih sredstava obuhvata širok
            spektar industrijskih oprema, uključujući mašine za proizvodnju,
            poljoprivrednu opremu, i transportne sisteme.
          </p>
        </div>
      </section>
    </main>
  );
}
