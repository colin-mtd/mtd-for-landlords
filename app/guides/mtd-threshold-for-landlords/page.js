import { MTD_THRESHOLDS } from "../../data/mtdThresholds";
export default function GuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

     <div className="mb-6">
  <a
    href="/guides/mtd-faq-for-landlords"
    className="text-green-600 font-semibold"
  >
    ← Back To MTD FAQ
  </a>

  <span className="mx-3 text-slate-400">|</span>

  <a
    href="/guides"
    className="text-green-600 font-semibold"
  >
    ← Back To Landlord Guides
  </a>
</div>

      <h1 className="text-5xl font-bold text-slate-900 mb-8">
        MTD Threshold For Landlords
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        One of the most common questions landlords ask is whether
Making Tax Digital (MTD) actually applies to them. The answer
depends on the amount of qualifying income you receive, which
may include rental income and certain other sources of income.
Understanding how the rules apply to your circumstances is an
important first step.
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Why Does The Threshold Matter?
      </h2>

      <p className="text-slate-600 mb-6">
        HMRC uses income thresholds to determine which taxpayers must
        comply with Making Tax Digital requirements. Understanding
        whether you fall above or below the relevant threshold is one
        of the first steps in preparing for MTD.
      </p>
<h2 className="text-3xl font-bold text-slate-900 mb-4">
  Current Thresholds
</h2>

<div className="grid md:grid-cols-3 gap-6 mb-8">
  {MTD_THRESHOLDS.map((item) => (
    <div
      key={item.year}
      className="border rounded-xl p-6 text-center"
    >
      <h3 className="text-xl font-bold text-blue-900 mb-2">
        {item.year}
      </h3>

      <p className="text-slate-600">
        {item.description}
      </p>
    </div>
  ))}
</div>



      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        What Income Is Relevant?
      </h2>

      <p className="text-slate-600 mb-6">
        Rental income is included when determining whether a landlord
        falls within the scope of Making Tax Digital. Landlords should
        review their income carefully and consider how future changes
        may affect their obligations.
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        What Should Landlords Do Now?
      </h2>

      <p className="text-slate-600 mb-6">
        Even if you are not immediately affected, it is sensible to
        begin understanding the requirements, reviewing your record
        keeping processes and considering how you may manage future
        compliance obligations.
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Keep An Eye On Future Changes
      </h2>

      <p className="text-slate-600 mb-6">
        Tax legislation and thresholds can change over time. Landlords
        should regularly review HMRC guidance and seek professional
        advice where appropriate.
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        How Can We Help?
      </h2>

      <p className="text-slate-600 mb-6">
        MTD For Landlords helps landlords understand their obligations,
        prepare for Making Tax Digital and remain compliant with HMRC
        requirements.
      </p>

      <a
        href="/#packages"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        View Our Packages
      </a>

    </main>
  );
}