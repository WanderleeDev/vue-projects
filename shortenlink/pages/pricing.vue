<template>
  <section class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Plans and Prices
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Choose the perfect plan for your needs
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <PricingCard v-for="plan in plans" :key="plan.name" v-bind="plan" />
    </div>

    <PricingFaqs class="mt-16" :faqs />
  </section>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Pricing" });

const plans = [
  {
    name: "Basic",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Up to 1000 links per month",
      "Basic statistics",
      "Custom links",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "9.99",
    description: "For professionals",
    features: [
      "Unlimited links",
      "Advanced statistics",
      "QR codes",
      "Protected links",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "29.99",
    description: "For large teams",
    features: [
      "Everything in Pro",
      "Multiple users",
      "Admin panel",
      "Advanced customization",
      "Guaranteed SLA",
      "24/7 support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    label: "Can I change my plan at any time?",
    content:
      "Yes, you can upgrade or change your plan at any time. Changes will be applied immediately.",
    icon: "heroicons:question-mark-circle",
  },
  {
    label: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
    icon: "heroicons:question-mark-circle",
  },
  {
    label: "Do you offer discounts for non-profit organizations?",
    content:
      "Yes, we offer special discounts for non-profit organizations and educational institutions.",
    icon: "heroicons:question-mark-circle",
  },
  {
    label: "Can I try all the features before paying?",
    content:
      "Yes, we offer a 14-day free trial of our Pro plan with all features included.",
    icon: "heroicons:question-mark-circle",
  },
];
</script>
