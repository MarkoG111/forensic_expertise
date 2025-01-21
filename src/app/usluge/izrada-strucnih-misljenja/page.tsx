import Banner from "@/app/components/Banner";
import Head from "next/head";

export default function IzradaStrucnihMisljenja() {
  return (
    <div>
      <Head>
        <title>Izrada stručnih mišljenja | Mašinski veštak</title>
        <meta
          name="description"
          content="Izrada stručnih mišljenja za procenu štete i vrednosti u različitim pravnim i poslovnim procesima. Kontaktirajte nas za profesionalnu uslugu."
        />
        <meta
          name="keywords"
          content="izrada stručnih mišljenja, mašinski veštak, procena štete, procena vrednosti, sudski veštak, stručna mišljenja"
        />
        <meta
          property="og:title"
          content="Izrada stručnih mišljenja | Mašinski veštak"
        />
        <meta
          property="og:description"
          content="Izrada stručnih mišljenja za procenu štete i vrednosti u pravnim i poslovnim procesima. Kontaktirajte nas za više informacija."
        />
        <meta
          property="og:url"
          content="https://www.masinskivestak.rs/usluge/izrada-strucnih-misljenja"
        />
        <meta
          property="og:image"
          content="https://www.masinskivestak.rs/images/banner-izrada-strucnih-misljenja.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Banner title="Izrada stručnih mišljenja" height="h-[50vh]" />

      <section className="py-8">
        <div className="container">
          <p>Izrada stručnih mišljenja</p>
        </div>
      </section>
    </div>
  );
}
