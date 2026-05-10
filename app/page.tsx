import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">Unlock Your Career</h1>
        <p className="text-2xl text-zinc-400 mb-10">Discover what sets high-achieving peers apart and get a personalized roadmap to bridge the gap</p>
        
        <form id="cta-form" className="max-w-md mx-auto space-y-4" action="https://xfkziloyyotnnxkypgmb.supabase.co/functions/v1/capture-signal" method="POST">
          <input type="hidden" name="experiment_id" value="5352faca" />
          <input type="email" name="email" placeholder="your@email.com" required 
                 className="w-full px-8 py-5 bg-zinc-900 border border-zinc-700 rounded-3xl text-xl focus:outline-none focus:border-white" />
          <button type="submit" 
                  className="w-full bg-white hover:bg-zinc-100 text-black py-5 px-8 rounded-3xl font-semibold text-2xl transition">
            Take the First Step
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-6">$49 one-time — Limited Time Offer</p>
      </div>

      {/* PROBLEM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Are You Feeling Stuck in Your Career?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Not seeing the career advancement you deserve?</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Feeling like you're missing a key skill or knowledge to succeed?</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Wondering what sets high-achieving peers apart?</div>
          
        </div>
      </div>

      {/* SOLUTION + BENEFITS (simplified for speed) */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Introducing CareerBoost</h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-12">A personalized development plan to bridge the gap between you and your high-achieving peers.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 p-8 rounded-3xl">10-minute assessment to get benchmarked against your peers</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Tailored development plan to address your unique gaps</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Proven strategies to accelerate your career growth</div>
            
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500 text-sm">
        Powered by PMF Autopilot • Experiment #5352faca
      </div>
    </main>
  );
}