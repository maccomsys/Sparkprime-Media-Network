export default function QuoteBanner() {
  return (
    <section className="bg-[#1A2B4C] py-16 mb-12 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-green text-sm font-bold uppercase tracking-widest mb-6">DAILY MOTIVATION</p>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold italic leading-snug mb-6">
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
        </h2>
        <p className="text-gray-300 mb-8">— Winston Churchill</p>
        <button className="bg-brand-green text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
          Get Inspired <span>→</span>
        </button>
      </div>
    </section>
  );
}
