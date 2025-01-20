import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";

import { Form } from "./form";
import { Table } from "./table";
import { Sidebar } from "@/components/sidebar";
import { Quests } from "@/components/quests";

const ConlangPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <div className="mt-6">
          <Quests points={userProgress.points} />
        </div>
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image
            src="/conlang.svg"
            alt="Conlang"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Conlang Manager
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Create and manage your custom languages.
          </p>

          {/* Form to create a new Conlang */}
          <Form />

          {/* Add gap between Form and Table */}
          <div className="mt-6">
            <Table />
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ConlangPage;
