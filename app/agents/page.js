export default function Agents() {
  return (
    <main className="min-h-screen bg-white">
<section className="max-w-5xl mx-auto px-6 py-16 text-center">
  <h1 className="text-5xl font-bold text-slate-900 mb-6">
    Partnering With Letting & Estate Agents
  </h1>

  <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
    Helping landlords navigate Making Tax Digital whilst creating
    new opportunities for agency partners.
  </p>

  <a
    href="#agent-interest"
    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold"
  >
    Register Agency Interest
  </a>
</section>

<section className="max-w-4xl mx-auto px-6 py-8">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    The Opportunity
  </h2>

  <p className="text-slate-600 leading-relaxed mb-4">
    From April 2026, landlords with qualifying income above HMRC
    thresholds will begin transitioning to Making Tax Digital (MTD)
    requirements, including digital record keeping, quarterly
    submissions and ongoing compliance obligations.
  </p>

  <p className="text-slate-600 leading-relaxed">
    We believe this presents a valuable opportunity for letting and
    estate agents to strengthen landlord relationships whilst
    introducing an additional value-added service.
  </p>
</section>

<section className="max-w-4xl mx-auto px-6 py-8">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    Our Service
  </h2>

  <p className="text-slate-600 leading-relaxed mb-6">
    We are developing a subscription-based MTD support service for
    landlords, with plans expected to start from approximately
    £20 per month.
  </p>

  <ul className="space-y-3 text-slate-600">
    <li>✓ MTD registration with HMRC</li>
    <li>✓ Acting as authorised agent on behalf of landlords</li>
    <li>✓ Quarterly HMRC submissions</li>
    <li>✓ Ongoing support and reminders</li>
    <li>✓ Simple processes designed for non-accountants</li>
  </ul>
</section>

<section className="max-w-4xl mx-auto px-6 py-8">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    Why Partner With Us?
  </h2>

  <ul className="space-y-3 text-slate-600">
    <li>✓ Additional value-added support for landlords</li>
    <li>✓ New recurring commission opportunities</li>
    <li>✓ Increased landlord engagement and retention</li>
    <li>✓ Branded or co-branded customer experiences</li>
    <li>✓ Minimal operational involvement required from agency staff</li>
  </ul>
<div className="mt-10">
  <h3 className="text-2xl font-bold text-slate-900 mb-4">
    Our Approach
  </h3>

  <p className="text-slate-600 leading-relaxed mb-4">
    MTD For Landlords has been created specifically to help landlords
    navigate Making Tax Digital in a straightforward and affordable way.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    By combining HMRC-compliant software with practical support and
    guidance, we aim to provide a simple solution that benefits both
    landlords and their agents, without creating additional
    administrative burdens for agency staff.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Our objective is straightforward: to help landlords remain
    compliant whilst allowing agents to continue focusing on what
    they do best — managing properties and supporting their clients.
  </p>
</div>
<section
  id="agent-interest"
  className="bg-slate-50 py-16 mt-16"
>
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-4">
      Register Agency Interest
    </h2>

    <p className="text-center text-slate-600 mb-10">
      Interested in exploring partnership opportunities? Complete the
      form below and we'll be pleased to arrange an informal discussion.
    </p>

    <form
  action="https://formspree.io/f/xojzdwyb"
  method="POST"
  className="space-y-4"
    >

      <input
        type="text"
        name="agency"
        placeholder="Agency Name"
        className="w-full border rounded-lg p-4"
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact Name"
        className="w-full border rounded-lg p-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full border rounded-lg p-4"
      />

      <input
        type="tel"
        name="telephone"
        placeholder="Telephone Number"
        className="w-full border rounded-lg p-4"
      />

      <input
        type="text"
        name="properties"
        placeholder="Approximate Number of Managed Properties (Optional)"
        className="w-full border rounded-lg p-4"
      />

      <textarea
        name="comments"
        placeholder="Comments"
        rows="5"
        className="w-full border rounded-lg p-4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold"
      >
        Register Agency Interest
      </button>

    </form>

  </div>

  <div className="text-center py-10">
  <h3 className="text-2xl font-bold text-slate-900 mb-4">
    Questions?
  </h3>

  <p className="text-slate-600">
    We'd be pleased to discuss potential partnership opportunities.
  </p>

  <p className="mt-4 font-semibold text-slate-900">
    agents@mtd-for-landlords.co.uk
  </p>
</div>
</section>
<div className="text-center py-1">
  <a
    href="/"
    className="text-green-700 font-semibold hover:underline"
  >
    ← Return to Home Page
  </a>
</div>



</section>

    </main>
  );
}