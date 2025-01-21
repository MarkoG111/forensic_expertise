import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "./components/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <title>Kontakt | Mašinski veštak</title>
        <meta
          name="description"
          content="Portfolio i prezentacija sudskog veštaka za mehaniku. Saznajte više o uslugama procene štete, procene vrednosti, i stručnih mišljenja."
        />
        <meta
          name="keywords"
          content="mašinski veštak, sudski veštak, procena štete, procena vrednosti, stručna mišljenja, portfolio sudskog veštaka"
        />
        <meta property="og:title" content="Kontakt | Mašinski veštak" />
        <meta
          property="og:description"
          content="Prezentacija sudskog veštaka za mehaniku, sa uslugama procene štete, procene vrednosti, i izrade stručnih mišljenja."
        />
        <meta property="og:url" content="https://www.masinskivestak.rs" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Banner Section */}
      <Banner
        title="Sudski veštak mašinske struke"
        subtitle="Bratislav Igrutinović"
        description="Dobrodošli na sajt profesionalnog sudskog procenitelja mašinske
              struke. Sa višegodišnjim iskustvom i dubinskim znanjem iz oblasti
              mašinstva, pružam stručne i pouzdane procene koje su ključne za
              donošenje ispravnih odluka u različitim pravnim i poslovnim
              situacijama."
        buttonLink="/kontakt"
        buttonText="Kontakt"
      />

      {/* About Section */}
      <section className="about-section">
        <div className="container lg:flex">
          {/* Text Content */}
          <div className="about-content text-center md:text-left w-full lg:w-1/2">
            <h2 className="font-bold mb-4">
              Sudski veštak mašinske struke, <br />
              Bratislav Igrutinović
            </h2>
            <p>
              Kao stalni sudski veštak mašinske struke vršim usluge procene
              vrednosti pokretnosti odnosno mašina, mašinske opreme, motornih
              vozila, vrednosti preduzeća i drugog, pri dobijanju kredita, kao i
              u sudskim sporovima.
            </p>
            <p>
              Ukoliko vam je potrebna stručna procena vrednosti pokretne imovine
              ili ekspertsko mišljenje u sudskim postupcima, slobodno se
              obratite meni kao pouzdanom sudskom veštaku mašinske struke. Vaši
              interesi će biti zaštićeni uz moju temeljitu analizu,
              profesionalizam i nepristrasnost.
            </p>
            <p>
              Kao angažovani i iskusni stalni sudski veštak mašinske struke,
              pružam širok spektar profesionalnih usluga u vezi s procenom
              vrednosti pokretnih dobara, uključujući mašine, mašinsku opremu,
              motorna vozila, vrednost preduzeća i drugih imovinskih elemenata.
              Ova značajna uloga obuhvata različite situacije, od ocenjivanja
              vrednosti radi dobijanja kredita, do pružanja stručnog mišljenja u
              složenim sudskim sporovima.
            </p>
            <p className="mb-6">
              Moja stručnost i profesionalizam omogućavaju mi da pravilno i
              objektivno procenim vrednost pokretne imovine, oslanjajući se na
              bogato znanje iz oblasti mašinskog inženjerstva i relevantnih
              zakonskih propisa. Klijenti koji traže kredite mogu se osloniti na
              moje ekspertno mišljenje kako bi osigurali pravičnu i tačnu
              procenu vrednosti pokretnih dobara koje koriste kao kolateral.
            </p>
          </div>

          {/* Image */}
          <div className="about-image w-full lg:w-1/3 mt-10 md:mt-60 lg:mt-0 lg:ml-14">
            <picture>
              {/* Default image for screens larger than 1024px */}
              <source
                srcSet="/images/bratislav_igrutinovic_sudski_vestak_krug.png"
                media="(min-width: 1024px)"
              />
              {/* Image for screens smaller than 1024px */}
              <source
                srcSet="/images/bratislav_igrutinovic_sudski_vestak.png"
                media="(max-width: 1023px)"
              />
              {/* Fallback image for unsupported browsers */}
              <Image
                src="/images/bratislav_igrutinovic_sudski_vestak_krug.png" // Default image for browsers that don't support `picture`
                alt="Profilna slika Bratislava Igrutinovića, sudskog veštaka mašinske struke"
                width={750}
                height={450}
                title="Bratislav Igrutinović"
                layout="intrinsic"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Wrap Section */}
      <section className="wrap-section p-6 md:p-14 mt-[-40px] bg-gray-800">
        <div className="container text-white flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <h2 className="text-lg md:text-2xl font-bold text-center md:text-left">
            Spisak sudskih veštaka mašinske struke
          </h2>
          <a
            href="/licence.pdf"
            target="_blank"
            className="no-underline list-button bg-primary hover:primary text-white px-4 py-2 text-sm md:text-base transition-all duration-200"
          >
            Vidi Spisak
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section mt-32">
        <div className="container">
          <h2 className="font-bold mb-6 ml-2 text-center md:text-left">
            Naše usluge
          </h2>

          <div className="services flex flex-row w-full flex-wrap justify-center md:justify-start gap-6">
            <div className="service w-full sm:w-[47%] md:w-[30%] border-2 p-6 md:p-8 bg-white shadow-md hover:shadow-lg transition-shadow m-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/procena_štete.png"
                  alt="procena štete"
                  width={60}
                  height={60}
                />
                <h3 className="service-link font-semibold">
                  Procena nastale štete
                </h3>
              </div>
              <p className="service-description mt-4 text-gray-600">
                Izrada stručnog nalaza i mišljenja - procene tržišne vrednosti
                nastale štete na vozila, mašine, opreme i ostalih pokretnosti.
              </p>
              <div>
                <Link
                  href="/usluge/procena-stete"
                  className="font-bold mt-4 text-primary hover:text-blue-500 flex items-center"
                >
                  Vidi više{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary hover:text-blue-500"
                  />
                </Link>
              </div>
            </div>

            <div className="service w-full sm:w-[47%] md:w-[30%] border-2 p-6 md:p-8 bg-white shadow-md hover:shadow-lg transition-shadow m-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/procena_vrednosti.png"
                  alt="procena vrednosti"
                  width={60}
                  height={60}
                />
                <h3 className="service-link font-semibold">
                  Procena vrednosti industrijskih mašina i opreme
                </h3>
              </div>
              <p className="service-description mt-4 text-gray-600">
                Izrada stručnog nalaza i mišljenja za pitanja iz oblasti
                mašinske tehnike.
              </p>
              <div>
                <Link
                  href="/usluge/procena-vrednosti-industrijskih-masina"
                  className="font-bold mt-4 text-primary hover:text-blue-500 flex items-center"
                >
                  Vidi više{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary hover:text-blue-500"
                  />
                </Link>
              </div>
            </div>

            <div className="service w-full sm:w-[47%] md:w-[30%] border-2 p-6 md:p-8 bg-white shadow-md hover:shadow-lg transition-shadow m-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/proizvodna_linija.png"
                  alt="proizvodna linija"
                  width={60}
                  height={60}
                />
                <h3 className="service-link font-semibold">
                  Procena vrednosti alata i proizvodnih linija
                </h3>
              </div>
              <p className="service-description mt-4 text-gray-600">
                Tačno utvrdjivanje vrednosti specijalizovanih alata i kompletnih
                proizvodnih sistema.
              </p>
              <div>
                <Link
                  href="/usluge/procena-vrednosti-alata"
                  className="font-bold mt-4 text-primary hover:text-blue-500 flex items-center"
                >
                  Vidi više{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary hover:text-blue-500"
                  />
                </Link>
              </div>
            </div>

            <div className="service w-full sm:w-[47%] md:w-[30%] border-2 p-6 md:p-8 bg-white shadow-md hover:shadow-lg transition-shadow m-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/stručno_mišljenje.png"
                  alt="stručno mišljenje"
                  width={60}
                  height={60}
                />
                <h3 className="service-link font-semibold">
                  Izrada stručnih mišljenja za sudske procese
                </h3>
              </div>
              <p className="service-description mt-4 text-gray-600">
                Priprema tehničkih izveštaja i mišljenja koji se koriste kao
                dokazi u sudskim postupcima.
              </p>
              <div>
                <Link
                  href="/usluge/izrada-strucnih-misljenja"
                  className="font-bold mt-4 text-primary hover:text-blue-500 flex items-center"
                >
                  Vidi više{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary hover:text-blue-500"
                  />
                </Link>
              </div>
            </div>

            <div className="service w-full sm:w-[47%] md:w-[30%] border-2 p-6 md:p-8 bg-white shadow-md hover:shadow-lg transition-shadow m-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/konsultacije_i_saveti.png"
                  alt="konsultacije i saveti"
                  width={60}
                  height={60}
                />
                <h3 className="service-link font-semibold">
                  Konsultacije i saveti u vezi sa procenom mašinskih sredstava
                </h3>
              </div>
              <p className="service-description mt-4 text-gray-600">
                Davanje profesionalnih preporuka i saveta vezanih za vrednovanje
                i upravljanje mašinskom imovinom.
              </p>
              <div>
                <Link
                  href="/usluge/konsultacije-za-procenu-masinskih-sredstava"
                  className="font-bold mt-4 text-primary hover:text-blue-500 flex items-center"
                >
                  Vidi više{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary hover:text-blue-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
