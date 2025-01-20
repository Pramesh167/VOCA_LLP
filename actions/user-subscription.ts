// "use server";

// import { auth, currentUser } from "@clerk/nextjs";

// import { getUserSubscription } from "@/db/queries";
// import { stripe } from "@/lib/stripe";
// import { absoluteUrl } from "@/lib/utils";

// const returnUrl = absoluteUrl("/shop");

// export const createStripeUrl = async () => {
//   const { userId } = auth();
//   const user = await currentUser();

//   if (!userId || !user) throw new Error("Unauthorized.");

//   const userSubscription = await getUserSubscription();

//   // redirect user to customer portal who already have a subscription
//   if (userSubscription && userSubscription.stripeCustomerId) {
//     const stripeSession = await stripe.billingPortal.sessions.create({
//       customer: userSubscription.stripeCustomerId,
//       return_url: returnUrl,
//     });

//     return { data: stripeSession.url };
//   }

//   // checkout
//   const stripeSession = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     payment_method_types: ["card"],
//     customer_email: user.emailAddresses[0].emailAddress,
//     line_items: [
//       {
//         quantity: 1,
//         price_data: {
//           currency: "USD",
//           product_data: {
//             name: "Voca Pro",
//             description: "Unlimited hearts.",
//           },
//           unit_amount: 301, // Nrs 400
//           recurring: {
//             interval: "month",
//           },
//         },
//       },
//     ],
//     metadata: {
//       userId,
//     },
//     success_url: returnUrl,
//     cancel_url: returnUrl,
//   });

//   return { data: stripeSession.url };
// };



// "use server";

// import { auth, currentUser } from "@clerk/nextjs";
// import { getUserSubscription } from "@/db/queries";
// import { stripe } from "@/lib/stripe";
// import { absoluteUrl } from "@/lib/utils";

// const returnUrl = absoluteUrl("/shop");

// export const createStripeUrl = async () => {
//   const { userId } = auth();
//   const user = await currentUser();

//   if (!userId || !user) throw new Error("Unauthorized.");

//   // Fetch the user subscription
//   const userSubscription = await getUserSubscription();

//   // If the user already has a subscription, redirect them to the customer portal
//   if (userSubscription && userSubscription.stripeCustomerId) {
//     const stripeSession = await stripe.billingPortal.sessions.create({
//       customer: userSubscription.stripeCustomerId,
//       return_url: returnUrl,
//     });

//     return { data: stripeSession.url };
//   }

//   // If no subscription, create a new Stripe checkout session
//   const stripeSession = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     payment_method_types: ["card"],
//     customer_email: user.emailAddresses[0].emailAddress,
//     line_items: [
//       {
//         quantity: 1,
//         price_data: {
//           currency: "USD",
//           product_data: {
//             name: "Voca Pro",
//             description: "Unlimited hearts.",
//           },
//           unit_amount: 301, // Amount in cents (301 = 3.01 USD)
//           recurring: {
//             interval: "month", // Monthly recurring payment
//           },
//         },
//       },
//     ],
//     metadata: {
//       userId, // Store the userId in metadata
//     },
//     success_url: returnUrl,
//     cancel_url: returnUrl,
//   });
  

//   return { data: stripeSession.url };
// };



"use server";

import { auth, currentUser } from "@clerk/nextjs";

import { getUserSubscription } from "@/db/queries";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const returnUrl = absoluteUrl("/shop");

export const createStripeUrl = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) throw new Error("Unauthorized.");

  const userSubscription = await getUserSubscription();

  // redirect user to customer portal who already have a subscription
  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }

  // checkout
  const stripeSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.emailAddresses[0].emailAddress,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: "Voca Pro",
            description: "Unlimited hearts.",
          },
          unit_amount: 500, // $20.00 USD
          recurring: {
            interval: "month",
          },
        },
      },
    ],
    metadata: {
      userId,
    },
    success_url: returnUrl,
    cancel_url: returnUrl,
  });

  return { data: stripeSession.url };
};