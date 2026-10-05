function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderPage(page, ctx) {
  const d = ctx.data(page.path);
  
  if (page.type === 'home') {
    return `
      <div class="relative w-full bg-appbg flex flex-col items-center overflow-hidden">
        
        <!-- Top Half: Typography & Floating Icons -->
        <div class="relative w-full max-w-page mx-auto pt-20 pb-16 px-6 lg:px-12 flex flex-col items-center text-center">
          
          <!-- Floating Abstract Icons (Replacing the food) -->
          <div class="absolute top-12 left-4 md:left-12 text-vahai-green/10">
             <svg class="w-24 h-24 transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div class="absolute bottom-8 left-1/4 text-vahai-orange/10">
             <svg class="w-20 h-20 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div class="absolute top-16 right-12 md:right-32 text-vahai-green/10">
             <svg class="w-32 h-32 transform rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>

          <!-- Main Typography -->
          <h1 class="relative z-10 max-w-5xl font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.05] text-ink font-bold tracking-tight">
            Tax & Accounting <br>
            <span class="italic text-vahai-green font-light tracking-wide font-serif relative inline-block mt-2">
              Counsel
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-vahai-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 8 Q 25 2, 50 8 T 100 8" stroke="currentColor" stroke-width="4" fill="none"/></svg>
            </span>
          </h1>
          <p class="relative z-10 mt-8 max-w-2xl text-lg md:text-xl text-slate-600 font-medium font-sans">
            ${esc(d.kicker)}. ${esc(d.lead)}
          </p>

          <!-- Stacked Text (like Gastro Bar / Delicatessen) -->
          <div class="hidden lg:flex absolute top-1/2 right-8 -translate-y-1/2 flex-col items-end gap-5 text-right">
            <span class="text-[13px] font-bold tracking-[0.2em] text-ink uppercase border-b-2 border-vahai-orange pb-1.5 inline-block">Tax Specialists</span>
            <span class="text-[13px] font-bold tracking-[0.2em] text-ink uppercase border-b-2 border-vahai-green pb-1.5 inline-block">Corporate Filings</span>
            <span class="text-[13px] font-bold tracking-[0.2em] text-ink uppercase border-b-2 border-slate-300 pb-1.5 inline-block">Scarborough, ON</span>
          </div>

        </div>

        <!-- Bottom Half: Immersive Cinematic Image -->
        <div class="w-full h-[550px] md:h-[700px] relative mt-4">
          <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2400&h=1200" alt="Accounting Professionals" class="w-full h-full object-cover object-center border-t-8 border-vahai-green">
          
          <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent flex items-end justify-center pb-16">
            <a href="${ctx.href('/contact/')}" class="inline-flex items-center gap-3 bg-vahai-orange text-white px-10 py-5 rounded-full text-[15px] font-bold tracking-wide hover:bg-vahai-orange-dark transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.8)] hover:-translate-y-1 duration-300">
              Work With Us
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>

      </div>

      </div>

      <!-- Practice Areas (New Beautiful Section) -->
      <div class="w-full bg-white py-24 lg:py-32 border-b border-slate-100">
        <div class="max-w-page mx-auto px-6 lg:px-12">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-vahai-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 class="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">Comprehensive Tax & Accounting</h2>
            <p class="text-lg text-slate-600">We offer specialized financial services tailored to individuals, growing startups, and established corporations in Scarborough.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Business Tax -->
            <a href="${ctx.href('/business-tax-accounting/')}" class="group block relative overflow-hidden rounded-[32px] bg-slate-50 p-10 hover:bg-vahai-green transition-colors duration-500">
              <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:text-vahai-green transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="font-serif text-2xl font-bold text-ink mb-4 group-hover:text-white transition-colors">Business Tax</h3>
              <p class="text-slate-600 group-hover:text-white/90 transition-colors">Bookkeeping, payroll, HST filing, and T2 corporate returns for small businesses.</p>
              <div class="mt-8 flex items-center text-sm font-bold text-ink group-hover:text-white uppercase tracking-wider">
                Explore Services <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </a>
            
            <!-- Corporate Services -->
            <a href="${ctx.href('/corporate-services/')}" class="group block relative overflow-hidden rounded-[32px] bg-slate-50 p-10 hover:bg-vahai-orange transition-colors duration-500">
              <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:text-vahai-orange transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 class="font-serif text-2xl font-bold text-ink mb-4 group-hover:text-white transition-colors">Corporate Filings</h3>
              <p class="text-slate-600 group-hover:text-white/90 transition-colors">Incorporations, name changes, and shareholder agreements structured properly.</p>
              <div class="mt-8 flex items-center text-sm font-bold text-ink group-hover:text-white uppercase tracking-wider">
                Explore Services <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </a>
            
            <!-- Personal Tax -->
            <a href="${ctx.href('/personal-tax-services/')}" class="group block relative overflow-hidden rounded-[32px] bg-slate-50 p-10 hover:bg-ink transition-colors duration-500">
              <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:text-ink transition-colors">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-serif text-2xl font-bold text-ink mb-4 group-hover:text-white transition-colors">Personal Tax</h3>
              <p class="text-slate-600 group-hover:text-white/90 transition-colors">T1 returns, capital gains, rental property income, and personal financial planning.</p>
              <div class="mt-8 flex items-center text-sm font-bold text-ink group-hover:text-white uppercase tracking-wider">
                Explore Services <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Why Choose Us / Value Proposition (Split Layout) -->
      <div class="w-full bg-slate-50 py-24 lg:py-32 border-b border-slate-100">
        <div class="max-w-page mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div class="relative">
              <div class="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000&h=1200" alt="Consultation" class="w-full h-full object-cover">
              </div>
              <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-vahai-green/10 rounded-full blur-3xl z-0"></div>
              
              <!-- Floating Badge -->
              <div class="absolute top-12 -right-6 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border border-slate-100">
                <div class="text-vahai-orange font-bold text-4xl mb-2 font-serif">20+</div>
                <div class="text-xs font-bold text-ink uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            
            <div>
              <span class="text-vahai-orange font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Vahai Tax Difference</span>
              <h2 class="font-serif text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">Precision, Clarity, and Peace of Mind.</h2>
              <p class="text-lg text-slate-600 mb-12">We don't just file your taxes; we provide strategic counsel to protect your assets and grow your business. Our proactive approach ensures nothing falls through the cracks.</p>
              
              ${d.cards && d.cards.length ? `
                <div class="space-y-8">
                  ${d.cards.map(c => `
                    <div class="flex gap-6">
                      <div class="w-12 h-12 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center text-vahai-green shadow-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <div>
                        <h3 class="font-serif text-xl font-bold text-ink mb-2">${esc(c.h)}</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">${esc(c.p)}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Home Snippets / FAQs -->
      <div class="w-full bg-white py-24 lg:py-32">
        <div class="max-w-page mx-auto px-6 lg:px-12">
          ${d.snippets && d.snippets.length ? `
            <div class="max-w-4xl mx-auto">
              <div class="text-center mb-16">
                <span class="text-vahai-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Knowledge Base</span>
                <h2 class="font-serif text-4xl font-bold text-ink">Frequently Asked Questions</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                ${d.snippets.map(snip => `
                  <article class="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-vahai-green/30 transition-colors">
                    <h3 class="text-lg font-bold text-ink mb-4 leading-snug">${esc(snip[0])}</h3>
                    <p class="text-slate-600 leading-relaxed text-sm">${esc(snip[1])}</p>
                  </article>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      <!-- SEO Vector Cosine / Complete Service Directory -->
      <div class="w-full bg-slate-50 py-24 lg:py-32">
        <div class="max-w-page mx-auto px-6 lg:px-12">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Complete Index</span>
            <h2 class="font-serif text-3xl font-bold text-ink">Scarborough Accounting Services Directory</h2>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            ${['/business-tax-accounting/', '/corporate-services/', '/personal-tax-services/', '/tax-resources/'].map(hub => {
              const hd = ctx.data(hub);
              if (!hd) return '';
              const kids = ctx.children(hub);
              return `
                <div>
                  <a href="${ctx.href(hub)}" class="font-serif text-xl font-bold text-ink hover:text-vahai-green transition-colors mb-4 block">${esc(hd.nav)}</a>
                  <ul class="space-y-3">
                    ${kids.map(k => {
                      const kd = ctx.data(k);
                      return `<li><a href="${ctx.href(k)}" class="text-slate-500 hover:text-vahai-orange transition-colors flex items-start gap-2"><svg class="w-4 h-4 shrink-0 text-slate-300 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> <span class="text-sm">${esc(kd.nav)}</span></a></li>`;
                    }).join('')}
                  </ul>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Final Call to Action -->
      <div class="w-full bg-ink py-24 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/></svg>
        </div>
        <div class="max-w-page mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to organize your finances?</h2>
          <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Let our experts handle the complexity of the CRA so you can focus on what matters most.</p>
          <a href="${ctx.href('/contact/')}" class="inline-flex items-center gap-3 bg-vahai-green text-white px-10 py-5 rounded-full text-[15px] font-bold tracking-wide hover:bg-vahai-green-dark transition-all shadow-xl hover:-translate-y-1 duration-300">
            Schedule a Consultation
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    `;
  }

  // Inner pages
  let breadcrumbsHtml = '';
  if (page.type !== 'home') {
    const parts = page.path.split('/').filter(Boolean);
    const crumbs = [{ url: '/', name: ctx.lang === 'en' ? 'Home' : 'Accueil' }];
    for (let i = 0; i < parts.length; i++) {
      const current = '/' + parts.slice(0, i + 1).join('/') + '/';
      const pd = ctx.data(current);
      if (pd) crumbs.push({ url: current, name: pd.nav });
    }
    
    breadcrumbsHtml = `<nav aria-label="Breadcrumb" class="mb-6"><ol class="flex flex-wrap items-center gap-2 text-sm text-slate-500">`;
    crumbs.forEach((c, idx) => {
      if (idx === crumbs.length - 1) {
        breadcrumbsHtml += `<li><span class="text-ink font-bold" aria-current="page">${esc(c.name)}</span></li>`;
      } else {
        breadcrumbsHtml += `<li><a href="${ctx.href(c.url)}" class="hover:text-vahai-green transition-colors">${esc(c.name)}</a></li>`;
        breadcrumbsHtml += `<li><svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></li>`;
      }
    });
    breadcrumbsHtml += `</ol></nav>`;
  }

  let out = `
    <div class="max-w-page mx-auto px-6 py-12 lg:py-20 lg:px-12">
      <!-- Page Header -->
      <header class="max-w-4xl mb-16">
        ${breadcrumbsHtml}
        ${d.kicker ? `<span class="inline-block py-1 px-3 rounded-full bg-vahai-green/10 text-vahai-green text-sm font-bold tracking-wide mb-6 uppercase">${esc(d.kicker)}</span>` : ''}
        <h1 class="font-serif text-4xl lg:text-[52px] leading-tight font-bold text-ink mb-6 tracking-tight">${esc(d.h1)}</h1>
        <p class="text-xl text-slate-600 max-w-3xl leading-relaxed">${esc(d.lead)}</p>
      </header>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Main Content Area -->
        <div class="lg:col-span-8 space-y-16">
  `;
  
  if (d.cards && d.cards.length > 0) {
    out += `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    `;
    d.cards.forEach(c => {
      out += `
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-vahai-green transition-colors">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-vahai-green shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-ink mb-3">${esc(c.h)}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">${esc(c.p)}</p>
        </div>
      `;
    });
    out += `</div>`;
  }

  if (d.sections && d.sections.length > 0) {
    d.sections.forEach(s => {
      out += `<section class="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-a:text-vahai-orange hover:prose-a:text-vahai-orange-dark">`;
      if (s.h) out += `<h2 class="text-3xl font-bold text-ink mb-6">${esc(s.h)}</h2>`;
      if (s.p && s.p.length > 0) {
        s.p.forEach(para => {
          out += `<p class="text-slate-600 leading-relaxed mb-4">${esc(para)}</p>`;
        });
      }
      if (s.ul && s.ul.length > 0) {
        out += `<ul class="mt-6 space-y-3">`;
        s.ul.forEach(li => {
          out += `<li class="flex items-start gap-3 text-slate-600"><svg class="w-6 h-6 text-vahai-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>${esc(li)}</span></li>`;
        });
        out += `</ul>`;
      }
      out += `</section>`;
    });
  }
  
  // If it's a Hub page, render all child services!
  if (page.type === 'hub') {
    const kids = ctx.children(page.path);
    if (kids && kids.length > 0) {
      out += `
        <div class="mt-16 pt-16 border-t border-slate-100">
          <h2 class="font-serif text-3xl font-bold text-ink mb-8">Detailed Services</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      `;
      kids.forEach(k => {
        const kd = ctx.data(k);
        out += `
          <a href="${ctx.href(k)}" class="group block p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-vahai-green hover:shadow-lg transition-all duration-300">
            <h3 class="font-serif text-xl font-bold text-ink mb-3 group-hover:text-vahai-green transition-colors">${esc(kd.nav)}</h3>
            <p class="text-slate-600 text-sm leading-relaxed line-clamp-3">${esc(kd.desc || kd.lead || '')}</p>
            <div class="mt-6 flex items-center text-sm font-bold text-vahai-orange uppercase tracking-wider">
              Learn More <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </a>
        `;
      });
      out += `</div></div>`;
    }
  } else if (page.type !== 'home') {
    // For inner child pages, generate "Related Pages" using Vector Cosine Similarity (Siblings within the same semantic hub)
    const parts = page.path.split('/').filter(Boolean);
    if (parts.length > 1) {
      const parentHub = '/' + parts[0] + '/';
      const siblings = ctx.children(parentHub).filter(k => k !== page.path);
      
      if (siblings && siblings.length > 0) {
        // "Cosine Similarity" -> Just grab the top 2 related siblings for UI purposes
        const related = siblings.slice(0, 2);
        out += `
          <div class="mt-16 pt-16 border-t border-slate-100">
            <h3 class="font-serif text-2xl font-bold text-ink mb-8">Related Services</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        `;
        related.forEach(r => {
          const rd = ctx.data(r);
          out += `
            <a href="${ctx.href(r)}" class="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-vahai-green hover:shadow-md transition-all duration-300">
              <h4 class="font-serif text-lg font-bold text-ink mb-2 group-hover:text-vahai-green transition-colors">${esc(rd.nav)}</h4>
              <p class="text-slate-500 text-sm leading-relaxed line-clamp-2">${esc(rd.desc || '')}</p>
            </a>
          `;
        });
        out += `</div></div>`;
      }
    }
  }
  
  out += `</div>`; // End Main Content Area
  
  // Sidebar (Snippets / FAQs)
  if (d.snippets && d.snippets.length > 0) {
    out += `
      <aside class="lg:col-span-4">
        <div class="sticky top-32 bg-slate-50 rounded-3xl p-8 border border-slate-100">
          <h3 class="font-serif text-2xl font-bold text-ink mb-8">Common Questions</h3>
          <div class="space-y-8">
    `;
    d.snippets.forEach(snip => {
      out += `
        <article>
          <h2 class="text-[17px] font-bold text-ink leading-snug mb-3">${esc(snip[0])}</h2>
          <p class="text-sm text-slate-600 leading-relaxed">${esc(snip[1])}</p>
        </article>
      `;
    });
    out += `
          </div>
          
          <div class="mt-10 pt-8 border-t border-slate-200">
            <p class="text-sm font-bold text-ink mb-4">Need help with this?</p>
            <a href="${ctx.href('/contact/')}" class="inline-flex w-full items-center justify-center gap-2 bg-vahai-orange text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-vahai-orange-dark transition-colors shadow-md">
              Contact Us Today
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </aside>
    `;
  }
  
  out += `</div></div>`; // End Grid & Max-W container
  return out;
}

module.exports = { renderPage, ctaBand: () => '' };
