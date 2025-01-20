"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal"; // Assuming you have a modal component
import { StickyWrapper } from "@/components/sticky-wrapper"; // Assuming StickyWrapper is imported correctly
import { Promo } from "@/components/promo"; // Import Promo component
import { Quests } from "@/components/quests"; // Import Quests component

// Data for the conlang makers
const makersData = [

  {
    id: 1,
    name: "J.R.R. Tolkien",
    image: "/makers/tolkien.svg", // Ensure the image is in the public folder
    description: "Created the Elvish languages Quenya and Sindarin, spoken in Middle-earth.",
    fullDescription: "J.R.R. Tolkien is known for his complex Elvish languages like Quenya and Sindarin in *The Lord of the Rings*.",
    languages: "**Quenya** and **Sindarin**",
    url: "https://tolkiengateway.net/wiki/Languages"
  },
  {
    id: 10,
    name: "Pramesh Pathak",
    image: "/makers/pramesh.jpg", // Ensure the image is in the public folder
    description: "Creator of Sitarian, the script from Serpant of Amradum's works. Also devloper of voca",
    fullDescription: "Pramesh Pathak adapted **Astral language**, the language of Gunk and Nur from the evermost well beyond existance, for fan fiction and artistic expressions.",
    languages: "**Sitarian**",
    url: "https://ibb.co/8cQ1x8X"
  },
  {
    id: 2,
    name: "Marc Okrand",
    image: "/makers/mark.svg", // Ensure the image is in the public folder
    description: "Creator of the Klingon language from *Star Trek*.",
    fullDescription: "Marc Okrand developed Klingon, a language that became central to the *Star Trek* universe, with a guttural tone reflecting Klingon culture.",
    languages: "**Klingon**",
    url: "https://languagemuseum.org/interview-with-marc-okrand-inventor-of-klingon/"
  },
  {
    id: 3,
    name: "David J. Peterson",
    image: "/makers/davidj.svg", // Ensure the image is in the public folder
    description: "Creator of languages like Dothraki and Valyrian for *Game of Thrones*.",
    fullDescription: "David J. Peterson created **Dothraki** and **Valyrian** for the *Game of Thrones* series, working on their phonology and structure to match the show’s culture.",
    languages: "**Dothraki** and **Valyrian**",
    url: "https://www.latimes.com/entertainment/tv/la-et-ca-game-of-thrones-language-creator-david-peterson-dothraki-20190409-story.html"
  },
  {
    id: 4,
    name: "Sidney Lau",
    image: "/makers/nosourceimage.svg", // Ensure the image is in the public folder
    description: "Developed Huttese and Mandalorian for *Star Wars*.",
    fullDescription: "Sidney Lau contributed **Huttese** and **Mandalorian** to the *Star Wars* universe, enriching the world of the galaxy far, far away.",
    languages: "**Huttese** and **Mandalorian**",
    url: "https://en.wikipedia.org/wiki/Sidney_Lau"
  },
  {
    id: 5,
    name: "Paul Frommer",
    image: "/makers/paul.jpg", // Ensure the image is in the public folder
    description: "Created the Na'vi language for the movie *Avatar*.",
    fullDescription: "Paul Frommer designed **Na'vi** for the *Avatar* movie, making an alien language that felt both natural and foreign for the film’s alien culture.",
    languages: "**Na'vi**",
    url: "https://www.campfirewriting.com/learn/interview-paul-frommer"
  },
  {
    id: 6,
    name: "L. L. Zamenhof",
    image: "/makers/llz.jpg", // Ensure the image is in the public folder
    description: "Creator of Esperanto, a widely spoken international auxiliary language.",
    fullDescription: "L. L. Zamenhof created **Esperanto**, a language designed to foster communication between speakers of different languages worldwide.",
    languages: "**Esperanto**",
    url: "https://www.britannica.com/biography/L-L-Zamenhof"
  },
  {
    id: 7,
    name: "John Quijada",
    image: "/makers/quijd.svg", // Ensure the image is in the public folder
    description: "Creator of Ithkuil, a complex language designed for maximum expressiveness.",
    fullDescription: "Ithkuil, created by John Quijada, is an extraordinarily concise and complex language designed to express highly complex ideas in a minimal amount of space.",
    languages: "**Ithkuil**",
    url: "https://www.newyorker.com/magazine/2012/12/24/utopian-for-beginners"
  },
  {
    id: 8,
    name: "Mark Rosenfelder",
    image: "/makers/marko.jpg", // Ensure the image is in the public folder
    description: "Created languages like Zhyler and Klingonaase.",
    fullDescription: "Mark Rosenfelder has created multiple languages, including **Klingonaase** and **Zhyler**, contributing significantly to conlang development.",
    languages: "**Klingonaase** and **Zhyler**",
    url: "https://en.wikipedia.org/wiki/Mark_Rosenfelder"
  },
  {
    id: 9,
    name: "George Boeree",
    image: "/makers/bore.jpg", // Ensure the image is in the public folder
    description: "Creator of Lojban, a language designed to eliminate ambiguity.",
    fullDescription: "George Boeree created **Lojban**, a language based on logic, designed to eliminate ambiguity and enhance clarity in communication.",
    languages: "**Lojban**",
    url: "https://en.wikipedia.org/wiki/George_Boeree"
  },

];

export const MakersPage = () => {
  const [selectedMaker, setSelectedMaker] = useState<any>(null);

  const handleOpenModal = (maker: any) => {
    setSelectedMaker(maker);
  };

  const handleCloseModal = () => {
    setSelectedMaker(null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6 max-w-[1200px] mx-auto">
        
      {/* Main Content Area */}
      <div className="flex-1">
      <div className="flex flex-col items-center">
            {/* SVG Header */}
            <Image src="/maker.svg" alt="Makers" height={90} width={90} />
            <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
              Legitimate Conlang Makers
            </h1>
            <p className="mb-6 text-center text-lg text-muted-foreground">
              Explore the minds behind fantasy language makers.
            </p>
          </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {makersData.map((maker) => (
            <div
              key={maker.id}
              className="group rounded-lg border p-4 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out"
              onClick={() => handleOpenModal(maker)}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src={maker.image}
                  alt={maker.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-xl">{maker.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Sidebar Section */}
      <div className="w-full lg:w-[300px]">
        <StickyWrapper>
          <div className="space-y-6">
            <Promo />
            <div className="mt-6">
              <Quests points={300} />
            </div>
          </div>
        </StickyWrapper>
      </div>

      {/* Modal for displaying selected maker's info */}
      {selectedMaker && (
        <Modal isOpen={true} onClose={handleCloseModal}>
          <div className="flex flex-col items-center bg-white p-8 rounded-md w-[90%] max-w-3xl">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={selectedMaker.image}
                alt={selectedMaker.name}
                width={192}
                height={192}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h3 className="text-3xl font-bold">{selectedMaker.name}</h3>
            <p className="text-sm text-center mt-4">{selectedMaker.fullDescription}</p>
            <Button
              onClick={() => window.open(selectedMaker.url, "_blank")}
              className="mt-4"
              variant={"super"}
            >
              Know More
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MakersPage;
