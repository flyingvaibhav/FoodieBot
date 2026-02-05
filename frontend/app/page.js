import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChefHat, Scan, Sparkles, Wand2 } from "lucide-react";

const features = [
  {
    title: "AI Pantry Scan",
    description: "Snap your pantry and let Serve detect ingredients automatically.",
    icon: Scan,
  },
  {
    title: "Chef-grade Recipes",
    description: "Step-by-step guidance, substitutions, and chef tips tailored to you.",
    icon: ChefHat,
  },
  {
    title: "Exports & Collections",
    description: "Save favorites, build collections, and export beautiful PDFs.",
    icon: Sparkles,
  },
];

const moods = [
  { name: "Comfort", recipes: "854" },
  { name: "High-protein", recipes: "612" },
  { name: "15-min", recipes: "431" },
  { name: "Vegan", recipes: "502" },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    detail: "10 scans, 5 AI recs, save 1 collection.",
  },
  {
    name: "Pro",
    price: "$14/mo",
    detail: "Unlimited AI, nutrition, exports, and chef tips.",
    highlight: true,
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-white">
      <section className="relative overflow-hidden">
        <div className="absolute -left-24 -top-32 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-amber-100/80 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-28 md:flex-row md:items-center md:pt-32">
          <div className="flex-1 space-y-6">
            <Badge className="bg-stone-900 text-white">Serve • AI Chef</Badge>
            <h1 className="text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              Turn pantry chaos into chef-crafted recipes in seconds.
            </h1>
            <p className="max-w-2xl text-lg text-stone-600">
              Scan your pantry, let AI build recipes with nutrition, tips, and substitutions.
              Save to collections, export to PDF, and cook with confidence.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button className="w-full rounded-full px-6" variant="primary">
                  Start for free
                </Button>
              </Link>
              <Link href="/recipes" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-full px-6">
                  Browse recipes
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-stone-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                <Check className="h-4 w-4 text-orange-500" /> Google sign-in
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                <Check className="h-4 w-4 text-orange-500" /> Pro & Free plans
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                <Check className="h-4 w-4 text-orange-500" /> Arcjet protected
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white/80 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-transparent to-white" />
              <div className="relative grid gap-4 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-4 py-3 shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-stone-500">Detected Pantry</p>
                    <p className="font-semibold text-stone-900">Tomatoes, Pasta, Basil, Garlic</p>
                  </div>
                  <Button size="sm" variant="primary" className="rounded-full">
                    <Scan className="mr-2 h-4 w-4" /> Rescan
                  </Button>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/90 p-4 shadow-inner">
                  <div className="flex items-center gap-2 text-sm font-semibold text-stone-600">
                    <Wand2 className="h-4 w-4 text-orange-500" /> AI Chef Suggestions
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-stone-700">
                    <div className="flex justify-between">
                      <span>Sun-Dried Tomato Rigatoni</span>
                      <Badge variant="secondary">Ready in 20m</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Roasted Garlic Bruschetta</span>
                      <Badge variant="secondary">Serves 2</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Basil Pesto Pasta Bake</span>
                      <Badge variant="secondary">High protein</Badge>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-stone-700">Collections</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-stone-600">
                    {moods.map((mood) => (
                      <span
                        key={mood.name}
                        className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 font-medium text-orange-700"
                      >
                        {mood.name}
                        <span className="text-[11px] text-orange-500">{mood.recipes} recipes</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20">
        <div className="flex flex-col gap-3 text-center">
          <Badge variant="secondary" className="mx-auto w-fit">
            Built with Next.js, Clerk, Arcjet, Strapi, Neon
          </Badge>
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Everything you need to cook</h2>
          <p className="text-stone-600">
            Secure auth, rate-limited APIs, and a Strapi-powered recipe library with Neon Postgres.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                  <Icon className="h-5 w-5 text-orange-500" />
                </span>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-stone-600">{description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-sm">
          <Tabs defaultValue="scan">
            <TabsList>
              <TabsTrigger value="scan">Pantry scan</TabsTrigger>
              <TabsTrigger value="library">Recipe library</TabsTrigger>
              <TabsTrigger value="pro">Pro exports</TabsTrigger>
            </TabsList>
            <TabsContent value="scan" className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-stone-900">Scan, detect, cook.</h3>
                <p className="text-stone-600">
                  Upload pantry photos, let Arcjet-protected APIs process them, and instantly generate recipes matched to your mood and diet.
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Vision-powered ingredient detection</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Free vs Pro limits with rate limiting</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Save to pantry and collections</li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-orange-50/60 p-6">
                <p className="text-sm font-semibold text-orange-700">Arcjet guardrail</p>
                <p className="mt-2 text-lg font-bold text-stone-900">Free users: 10 scans / month</p>
                <p className="text-sm text-stone-600">Pro users: Unlimited scans with bot protection.</p>
              </div>
            </TabsContent>
            <TabsContent value="library" className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-stone-900">Curated by Strapi.</h3>
                <p className="text-stone-600">
                  Manage recipes, cuisines, and pantry items in Strapi, stored in Neon Postgres, and streamed into the app via typed fetchers.
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Browse by mood or cuisine</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Save and rehydrate collections</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Detailed recipe pages</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between text-sm font-semibold text-stone-700">
                  <span>Mood collections</span>
                  <span className="text-orange-500">Live</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-stone-700">
                  {moods.map((mood) => (
                    <div key={mood.name} className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2">
                      <p className="font-semibold">{mood.name}</p>
                      <p className="text-xs text-stone-500">{mood.recipes} recipes</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pro" className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-stone-900">Pro exports and nutrition.</h3>
                <p className="text-stone-600">
                  Unlock nutrition panels, substitutions, chef tips, and one-click PDF exports for offline cooking.
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> PDF exports</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Nutrition & macros</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-orange-500" /> Chef tips and swaps</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-orange-700">Pro unlocks</p>
                <p className="mt-2 text-lg font-bold text-stone-900">Unlimited AI + exports</p>
                <p className="text-sm text-stone-700">Billing handled via Clerk, content via Strapi, secured by Arcjet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-stone-900 px-8 py-10 text-white shadow-xl">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Ready to cook smarter?</h3>
              <p className="text-stone-200">
                Sign in with Google, pick a plan, and start generating recipes from your pantry in under a minute.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button className="w-full rounded-full px-6" variant="primary">
                  Create account
                </Button>
              </Link>
              <Link href="/sign-in" className="w-full sm:w-auto">
                <Button className="w-full rounded-full px-6" variant="outline">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  plan.highlight
                    ? "border-orange-300 bg-orange-100/10 text-white"
                    : "border-white/20 bg-white/5 text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{plan.name}</p>
                  {plan.highlight && <Badge className="bg-orange-500 text-white">Popular</Badge>}
                </div>
                <p className="text-xl font-bold">{plan.price}</p>
                <p className="text-stone-200">{plan.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
