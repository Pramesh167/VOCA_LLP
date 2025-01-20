// import {
//   ClerkLoaded,
//   ClerkLoading,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
// } from "@clerk/nextjs";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";

// export default function MarketingPage() {
//   return (
//     <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
//       <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
//         <Image src="/hero.svg" alt="Hero" fill />
//       </div>

//       <div className="flex flex-col items-center gap-y-8">
//         <h1 className="max-w-[480px] text-center text-xl font-bold-italic text-neutral-600 lg:text-3xl">
//         "No language is justly studied merely as an aid to other purposes."
//         </h1>

//         <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
//           <ClerkLoading>
//             <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
//           </ClerkLoading>

//           <ClerkLoaded>
//             <SignedOut>
//               <SignUpButton
//                 mode="modal"
//                 afterSignInUrl="/learn"
//                 afterSignUpUrl="/learn"
//               >
//                 <Button size="lg" variant="secondary" className="w-full">
//                 Let's Start
//                 </Button>
//               </SignUpButton>

//               <SignInButton
//                 mode="modal"
//                 afterSignInUrl="/learn"
//                 afterSignUpUrl="/learn"
//               >
//                 <Button size="lg" variant="primaryOutline" className="w-full">
//                   I have a VOCA account
//                 </Button>
//               </SignInButton>
//             </SignedOut>

//             <SignedIn>
//               <Button size="lg" variant="secondary" className="w-full" asChild>
//                 <Link href="/learn">Continue Learning</Link>
//               </Button>
//             </SignedIn>
//           </ClerkLoaded>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    { image: "/hero.svg", text: "No language is justly studied merely as an aid." },
    { image: "/hero1.svg", text: "Best fantasy is created in language of dreams." },
    { image: "/hero2.svg", text: "Shre Nazg Golugranu Kilmin Hadu." }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src={content[currentIndex].image} alt="Hero" fill />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold italic text-neutral-600 lg:text-3xl">
          {content[currentIndex].text}
        </h1>

        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Let's Start
                </Button>
              </SignUpButton>

              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I have a VOCA account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
