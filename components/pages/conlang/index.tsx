import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Sidebar } from "@/components/sidebar";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const ConlangPage = () => {
  const [search, setSearch] = useState("");
  const conlangs = [
    "Silmaril",
    "Volsung",
    "Klingon",
    "Tenguwar",
    // Add more conlangs here
  ];

  const filteredConlangs = conlangs.filter((conlang) =>
    conlang.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar className="hidden lg:flex" />

      {/* Main Content */}
      <main className="h-full flex-1 px-6 lg:pl-[256px] lg:pt-6">
        <div className="flex flex-col mx-auto max-w-[900px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-neutral-800">Conlang</h1>
            <Input
              type="text"
              placeholder="Search conlangs..."
              className="w-[200px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="flex justify-center my-6">
            <Image
              src="/conlang.svg"
              alt="Conlang"
              height={120}
              width={120}
              className="rounded-lg"
            />
          </div>

          {/* Add Conlang Button */}
          <div className="flex justify-end mb-4">
            <Button variant="primary">
              <Link href="/conlang/add">+ Add Conlang</Link>
            </Button>
          </div>

          {/* Conlang List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Conlang Community</h2>
            <ul className="space-y-3">
              {filteredConlangs.map((conlang, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-100"
                >
                  <span className="text-lg">{`${index + 1}. ${conlang}`}</span>
                  <Button variant="secondaryOutline">Check</Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Sticky Sidebar */}
      <div className="hidden lg:block w-[368px] p-6">
        <Promo />
        <Quests points={120} /> {/* Replace with actual points */}
      </div>
    </div>
  );
};

export default ConlangPage;
