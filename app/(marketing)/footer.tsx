import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/hr.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/np.svg"
            alt="Nepali"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Nepali
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/it.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/tn.svg"
            alt="Tengwar"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Tengwar
        </Button>
      </div>
    </div>
  );
};
