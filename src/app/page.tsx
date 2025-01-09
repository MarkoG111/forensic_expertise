import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
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
        <div className="container flex">
          <div className="about-image content-end w-1/3">
            <Image
              src="/images/bratislav_igrutinovic_sudski_vestak.png"
              alt="Profilna slika Bratislava Igrutinovića, sudskog veštaka mašinske struke"
              width={750}
              height={450}
              title="Bratislav Igrutinović"
              layout="responsive"
            />
          </div>
          <div className="about-content ml-20 w-1/2">
            <h2 className="text-4xl">
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
        </div>
      </section>

      {/* Wrap Section */}
      <section className="wrap-section p-14 mt-[-40px]">
        <div className="container text-white flex justify-between">
          <h2 className="text-4xl">Spisak sudskih veštaka mašinske struke</h2>
          <button className="listButton">
            <a href="/licence.pdf" target="_blank">
              Vidi Spisak
            </a>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section mt-32">
        <div className="container">
          <h2 className="text-4xl mb-6 ml-2">Naše usluge</h2>

          <div className="services flex flex-row w-full flex-wrap">
            <div className="service w-[30%] border-2 p-8 m-4">
              <div className="flex items-center">
                <Image
                  src="/images/procena_štete.png"
                  alt="procena štete"
                  width={80}
                  height={50}
                  layout="responsive"
                />
                <h4 className="service-link mb-4">Procena nastale štete</h4>
              </div>
              <div>
                <p className="service-description">
                  Izrada stručnog nalaza i mišljenja - procene tržišne vrednosti
                  nastale štete na vozila, mašine, opreme i ostalih pokretnosti.
                </p>
              </div>
              <div>
                <button className="font-bold mt-8 hover:text-blue-500 flex items-center">
                  <Link href="/usluge/procena-stete">
                    Vidi više{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 hover:text-blue-500"
                    />
                  </Link>
                </button>
              </div>
            </div>

            <div className="service w-[30%] border-2 p-8 m-4">
              <div className="flex items-center">
                <div className="service-image">
                  <Image
                    src="/images/procena_vrednosti.png"
                    alt="procena vrednosti"
                    width={80}
                    height={20}
                    layout="responsive"
                  />
                </div>
                <h4 className="service-link">
                  Procena vrednosti industrijskih mašina i opreme
                </h4>
              </div>
              <div>
                <p className="service-description pt-5">
                  Izrada stručnog nalaza i mišljenja za pitanja iz oblasti
                  mašinske tehnike.
                </p>
              </div>
              <div>
                <button className="font-bold mt-8 hover:text-blue-500 flex items-center">
                  <Link href="/usluge/procena-vrednosti-industrijskih-masina">
                    Vidi više{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 hover:text-blue-500"
                    />
                  </Link>
                </button>
              </div>
            </div>

            <div className="service w-[30%] border-2 p-8 m-4">
              <div className="flex items-center">
                <div className="service-image">
                  <Image
                    src="/images/proizvodna_linija.png"
                    alt="proizvodna linija"
                    width={60}
                    height={50}
                    layout="responsive"
                  />
                </div>
                <h4 className="service-link">
                  Procena vrednosti alata i proizvodnih linija
                </h4>
              </div>
              <div>
                <p className="service-description pt-5">
                  Tačno utvrdjivanje vrednosti specijalizovanih alata i
                  kompletnih proizvodnih sistema.
                </p>
              </div>
              <div>
                <button className="font-bold mt-8 hover:text-blue-500 flex items-center">
                  <Link href="/usluge/procena-vrednosti-alata">
                    Vidi više{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 hover:text-blue-500"
                    />
                  </Link>
                </button>
              </div>
            </div>

            <div className="service w-[46%] border-2 p-8 m-4">
              <div className="flex items-center">
                <div className="service-image">
                  <Image
                    src="/images/stručno_mišljenje.png"
                    alt="stručno mišljenje"
                    width={60}
                    height={20}
                    layout="responsive"
                  />
                </div>
                <h4 className="service-link">
                  Izrada stručnih mišljenja za sudske procese
                </h4>
              </div>
              <div>
                <p className="service-description pt-5">
                  Priprema tehničkih izveštaja i mišljenja koji se koriste kao
                  dokazi u sudskim postupcima.
                </p>
              </div>
              <div>
                <button className="font-bold mt-8 hover:text-blue-500 flex items-center">
                  <Link href="/usluge/izrada-strucnih-misljenja">
                    Vidi više{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 hover:text-blue-500"
                    />
                  </Link>
                </button>
              </div>
            </div>

            <div className="service w-[47%] border-2 p-8 m-4">
              <div className="flex items-center">
                <div className="service-image">
                  <Image
                    src="/images/konsultacije_i_saveti.png"
                    alt="konsultacije i saveti"
                    width={60}
                    height={50}
                    layout="responsive"
                  />
                </div>
                <h4 className="service-link">
                  Konsultacije i saveti u vezi sa procenom mašinskih sredstava
                </h4>
              </div>
              <div>
                <p className="service-description pt-5">
                  Davanje profesionalnih preporuka i saveta vezanih za
                  vrednovanje i upravljanje mašinskom imovinom.
                </p>
              </div>
              <div>
                <button className="font-bold mt-8 hover:text-blue-500 flex items-center">
                  <Link href="/usluge/konsultacije-za-procenu-masinskih-sredstava">
                    Vidi više{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 hover:text-blue-500"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
