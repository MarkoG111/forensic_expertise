"use client";

import Banner from "@/app/components/Banner";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    question:
      "Da li mogu, u parničnom postupku u kome učestvujem kao stranka, da angažujem određenog sudskog veštaka, radi veštačenja, odnosno izrade nalaza i mišljenja?",
    answer:
      "Da, možete angažovati sudskog veštaka koji će izraditi nalaz i mišljenje.",
  },
  {
    question:
      "Da li određeni može izvršiti procenu pokretne imovine kompanije radi uspostavljanja hipoteke na istu, u postupku odobravanja kredita od strane Fonda za razvoj R Srbije?",
    answer:
      "Da, sudski veštak može izvršiti procenu pokretne imovine za ovu svrhu.",
  },
  {
    question: "Na koji način se utvrđuje iznos materijalne štete?",
    answer:
      "Zavisno od prirode štetnog događaja, iznos materijalne štete utvrđuje sudski veštak odgovarajuće struke.",
  },
  {
    question: "Šta predstavlja materijalnu, a šta nematerijalnu štetu?",
    answer:
      "Materijalnu štetu predstavlja prosta šteta (npr. oštećenja na vozilu) i izgubljena zarada (npr. zarada taksiste koju nije ostvario zbog nevršenja delatnosti). Nematerijalna šteta predstavlja novčanu satisfakciju za pretrpljene fizičke bolove, strah i razne oblike duševnih bolova.",
  },
];

export default function CestaPitanja() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getHeight = (ref: React.RefObject<HTMLDivElement | null>) => {
    return ref.current ? ref.current.scrollHeight : 0;
  };

  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Banner title="Česta pitanja" height="h-[50vh]" />

      <section className="faq-section py-8 px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Česta pitanja</h2>
        <div className="container">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="border border-gray-300 shadow-sm p-4 transition duration-300 hover:shadow-lg mb-6"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-medium text-lg text-justify pr-10 text-blue-700">
                    {faq.question}
                  </h3>
                  <span className="text-blue-700 text-3xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  ref={answerRef}
                  style={{
                    height: openIndex === index ? getHeight(answerRef) : 0,
                    opacity: openIndex === index ? 1 : 0,
                    transform:
                      openIndex === index
                        ? "translateY(0)"
                        : "translateY(-10px)",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                  className="mt-2"
                >
                  <p className="text-gray-600 text-justify">{faq.answer}</p>
                </div>
              </div>
            );
          })}

          <div className="text-center my-20">
            <h2 className="font-medium text-3xl my-14">
              Imate dodatnih pitanja?
            </h2>
            <Link
              href="/kontakt"
              className="bg-primary-color text-white py-5 px-8 hover:bg-blue-700"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
