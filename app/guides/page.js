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