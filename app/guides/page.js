import Link from "next/link";

export default function Guides() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">
        Landlord Guides
      </h1>

      <p className="text-xl text-slate-600 mb-12">
        Helpful guides designed to make Making Tax Digital easier for landlords.
      </p>

      <div className="border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">
          What Is Making Tax Digital For Landlords?
        </h2>

        <p className="text-slate-600 mb-4">
          A simple explanation of Making Tax Digital, who it applies to and what
          landlords need to know.
        </p>

        <Link
          href="/guides/what-is-making-tax-digital-for-landlords"
          className="text-green-600 font-semibold"
        >
          Read Guide →
        </Link>
      </div>
<div className="border rounded-xl p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-3">
    MTD Threshold For Landlords
  </h2>

  <p className="text-slate-600 mb-4">
    Learn how the Making Tax Digital income thresholds work,
    what qualifying income means and whether MTD is likely
    to apply to you.
  </p>

  <a
    href="/guides/mtd-threshold-for-landlords"
    className="text-green-600 font-semibold"
  >
    Read Guide →
  </a>
</div>
<div className="border rounded-xl p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-3">
    Jointly Owned Property & MTD
  </h2>

  <p className="text-slate-600 mb-4">
    Learn how Making Tax Digital may apply to jointly owned rental
    properties, including common husband and wife ownership arrangements.
  </p>

  <a
    href="/guides/jointly-owned-property-and-mtd"
    className="text-green-600 font-semibold"
  >
    Read Guide →
  </a>
</div>
<div className="border rounded-xl p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-3">
    MTD FAQ For Landlords
  </h2>

  <p className="text-slate-600 mb-4">
    Answers to some of the most common questions landlords ask about
    Making Tax Digital, software, quarterly updates and compliance.
  </p>

  <a
    href="/guides/mtd-faq-for-landlords"
    className="text-green-600 font-semibold"
  >
    Read Guide →
  </a>
</div>
      <div className="mt-12 text-center">
  <a
    href="/"
    className="text-green-600 font-semibold"
  >
    ← Back To Homepage
  </a>
</div>
    </main>
    
  );
}