import Banner from "@/app/components/Banner";
import Head from "next/head";

export default function ProcenaVrednostiAlata() {
  return (
    <main>
      <Head>
        <title>Procena vrednosti alata | Forenzička ekspertiza</title>
        <meta
          name="description"
          content="Pružamo usluge procene vrednosti alata za različite industrije i namene, uključujući analizu stanja i tržišne vrednosti."
        />
        <meta
          name="keywords"
          content="procena vrednosti alata, vrednost alata, industrijski alati, analiza stanja"
        />
        <meta
          property="og:title"
          content="Procena vrednosti alata | Forenzička ekspertiza"
        />
        <meta
          property="og:description"
          content="Saznajte više o našim uslugama procene vrednosti alata, uključujući analize tržišne vrednosti i tehničkog stanja."
        />
        <meta
          property="og:url"
          content="https://www.example.com/procena-vrednosti-alata"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Banner title="Procena vrednosti alata" height="h-[50vh]" />

      <section className="py-8">
        <div className="container">
          <p className="text-lg text-gray-700">
            Naša usluga procene vrednosti alata obuhvata sve vrste industrijskih
            i profesionalnih alata. Pomažemo u analizi tržišne vrednosti i
            tehničkog stanja alata.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Bilo da se radi o proceni starijih alata ili novijih modela, naši
            stručnjaci koriste specijalizovane metode kako bi osigurali tačnu
            vrednost, uzimajući u obzir sve faktore koji utiču na tržište.
          </p>
        </div>
      </section>
    </main>
  );
}
