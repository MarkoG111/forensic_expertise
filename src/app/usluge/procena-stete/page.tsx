import Banner from "@/app/components/Banner";
import Image from "next/image";
import Head from "next/head";

export default function ProcenaStete() {
  return (
    <div className="damage-page">
      <Head>
        <title>Procena nastale štete | Mašinski veštak</title>
        <meta
          name="description"
          content="Pružamo usluge procene nastale štete na vozilima, uključujući izradu nalaza, obračun visine štete, i vrednost vozila u sudskim postupcima."
        />
        <meta
          name="keywords"
          content="procena štete, vozila, saobraćajna nezgoda, sudski veštak, obračun štete, izrada nalaza, vozilo, totalna šteta"
        />
        <meta
          property="og:title"
          content="Procena nastale štete | Mašinski veštak"
        />
        <meta
          property="og:description"
          content="Pružamo usluge procene štete na vozilima, uključujući sve aspekte saobraćajnih nezgoda i tehničke ispravnosti."
        />
        <meta
          property="og:url"
          content="https://www.masinskivestak.rs/procena-stete"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Banner title="Procena nastale štete" height="h-[50vh]" />

      <section className="py-8 text-justify">
        <div className="container px-4 py-6">
          <h2 className="font-semibold text-gray-800 mb-6">Pregled vozila</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Izrada zapisnika o oštećenju vozila nakon saobraćajnih nezgoda
            </li>
            <li>
              Izrada nalaza i obračuna visine štete na vozilima u sudskim i
              vansudskim postupcima
            </li>
            <li>
              Izrada kompletne dokumentacije, nalaza, zapisnika u saobraćajnim
              nezgodama gde su vozila oštećena u inostranstvu (sa elementima
              inostranosti)
            </li>
            <li>
              Izrada nalaza na okolnost tehničke ispravnosti (neispravnosti)
              pojedinih elemenata vozila
            </li>
            <li>Određivanje vrednosti vozila (uređaja) - i bez štete</li>
          </ul>

          <div className="mt-6">
            <p className="text-gray-700 mb-4">
              Prvi korak u utvrđivanju nastale štete na motornom vozilu
              predstavlja utvrđivanje vrednosti motornog vozila na dan nastanka
              štete.
            </p>
            <p className="text-gray-700 mb-4">
              U drugoj fazi utvrđuje se vrednost spašenih delova (ostataka)
              vozila.
            </p>
            <p className="text-gray-700 mb-4">
              Utvrđivanje stepena i vrednosti oštećenja na vozilu.
            </p>
          </div>

          <div className="my-6">
            <Image
              src="/images/nastala_šteta.jpg"
              alt="nastala šteta"
              title="nastala šteta"
              width={800}
              height={100}
              layout="responsive"
            />
          </div>

          <h2 className="font-semibold text-gray-800 mt-12 mb-6">
            Obračun ukupne štete na vozilu
          </h2>
          <p className="text-gray-700 mb-4">
            Ukoliko su troškovi opravke i eventualno umanjena vrednost vozila
            jednaki ili veći od vrednosti motornog vozila na dan nastanka štete
            umanjenoj za procenjenu vrednost ostatka, radi se o totalnoj šteti.
            U ovom slučaju se vrši likvidacija štete u visini vrednosti vozila,
            obično umanjena za vrednost ostatka.
          </p>
          <p className="text-gray-700 mb-4">
            U suprotnom vrši se popravka vozila u ovlašćenom servisu po
            specifikaciji navedenoj u proračunu.
          </p>
          <p className="text-gray-700 mb-4">
            Takođe, po navedenoj metodologiji vrši se procena vrednosti vozila
            na dan krađe, u slučaju procene vrednosti imovine lica ili sličnim
            slučajevima. Procenu vrši sudski veštak, po posebnim zahtevima
            zainteresovanih stranaka.
          </p>
          <p className="text-gray-700 mb-4">
            Proces procene se sastoji u prikupljanju dokumentacije, pregleda
            vozila, slanja vozila na defektažu kada je to potrebno i analize
            prikupljenih podataka gde koristim kataloge AMSS i kalkulacije iz
            Audatex-system-a.
          </p>
        </div>
      </section>
    </div>
  );
}
