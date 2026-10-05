const TOP_LEVEL = ['/business-tax-accounting/', '/corporate-services/', '/personal-tax-services/', '/tax-resources/', '/about/'];

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getChildIcon(path, title) {
  const slug = path.split('/').filter(Boolean).pop() || '';
  const s = (slug + ' ' + title).toLowerCase();
  const baseCls = "w-5 h-5 text-vahai-orange shrink-0 mt-0.5";
  
  if (s.includes('tax return') || s.includes('t2') || s.includes('t1')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  }
  if (s.includes('bookkeep') || s.includes('account') || s.includes('statement') || s.includes('finance')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`;
  }
  if (s.includes('payroll') || s.includes('t4') || s.includes('t5')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`;
  }
  if (s.includes('gst') || s.includes('hst') || s.includes('sales')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"></path></svg>`;
  }
  if (s.includes('plan') || s.includes('forecast') || s.includes('consult') || s.includes('advis')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`;
  }
  if (s.includes('audit') || s.includes('cra') || s.includes('review') || s.includes('appeal')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`;
  }
  if (s.includes('start') || s.includes('incorporat') || s.includes('registr')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`;
  }
  if (s.includes('name') || s.includes('director') || s.includes('address')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>`;
  }
  if (s.includes('shareholder') || s.includes('certificat') || s.includes('agreement')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`;
  }
  if (s.includes('estate') || s.includes('trust') || s.includes('family')) {
    return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`;
  }
  
  // Default Document/Tax icon
  return `<svg class="${baseCls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
}

function desktopNav(ctx, currentPath) {
  const items = TOP_LEVEL.map(p => {
    const d = ctx.data(p);
    const kids = ctx.children(p);
    const inSection = currentPath === p || currentPath.startsWith(p);
    
    // Add chevron if it has dropdown items
    const chev = kids.length ? `<svg class="ml-1.5 w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>` : '';
    
    const isActiveCls = inSection ? 'text-ink font-bold' : 'text-slate-600 hover:text-ink font-semibold';
    
    let dropdown = '';
    if (kids.length) {
      // The mega menu structure
      const listItems = kids.map(k => {
        const kd = ctx.data(k);
        return `
          <li>
            <a href="${ctx.href(k)}" class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
              <div class="mt-0.5 shrink-0">${getChildIcon(k, kd.nav)}</div>
              <div>
                <span class="block text-[15px] font-bold text-ink group-hover/link:text-vahai-orange transition-colors">${esc(kd.nav)}</span>
                <span class="block text-xs text-slate-500 mt-1 line-clamp-1">${esc(kd.title)}</span>
              </div>
            </a>
          </li>
        `;
      }).join('');

      dropdown = `
        <div class="dropdown-content absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[600px] z-50">
          <div class="relative bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-8">
            <!-- Arrow up -->
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45 rounded-sm"></div>
            
            <div class="relative z-10">
              <ul class="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                ${listItems}
              </ul>
              
              <!-- Dynamic Promo Slider -->
              <div class="mega-slider relative bg-alabaster rounded-2xl p-6 flex items-center justify-between gap-6 border border-slate-100 overflow-hidden" data-interval="3000">
                <div class="mega-slider-slides relative flex-1 h-32">
                  ${kids.map((k, i) => {
                    const kd = ctx.data(k);
                    // Cycle through images or use a consistent one based on index
                    const imgs = [
                      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=300",
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300",
                      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=400&h=300"
                    ];
                    const img = imgs[i % imgs.length];
                    return `
                    <div class="mega-slide absolute inset-0 flex items-center justify-between gap-6 transition-opacity duration-500 ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}">
                      <div class="flex-1">
                        <h4 class="text-base font-bold text-ink leading-snug line-clamp-1">${esc(kd.nav)} Tips</h4>
                        <p class="text-xs text-slate-500 mt-2 line-clamp-2">${esc(kd.desc || kd.title)}</p>
                        <a href="${ctx.href(k)}" class="inline-flex items-center gap-1 mt-3 text-xs font-bold text-white bg-vahai-orange px-4 py-2 rounded-full hover:bg-vahai-orange-dark transition-colors">Read More <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg></a>
                      </div>
                      <div class="w-32 h-24 shrink-0 overflow-hidden rounded-xl shadow-sm border border-slate-200">
                        <img src="${img}" alt="${esc(kd.nav)}" class="w-full h-full object-cover">
                      </div>
                    </div>`;
                  }).join('')}
                </div>
                <!-- Slider Nav Dots & Arrows -->
                <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20">
                  <div class="mega-slider-dots flex items-center gap-1.5">
                    ${kids.map((_, i) => `<button type="button" class="w-2 h-2 rounded-full transition-colors ${i === 0 ? 'bg-vahai-orange' : 'bg-slate-300'}" aria-label="Slide ${i+1}"></button>`).join('')}
                  </div>
                  <div class="flex items-center gap-2">
                    <button type="button" class="mega-slider-prev w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-vahai-orange hover:text-white transition-colors" aria-label="Previous">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button type="button" class="mega-slider-next w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-vahai-orange hover:text-white transition-colors" aria-label="Next">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <li class="relative dropdown-hover group">
        <a href="${ctx.href(p)}" class="flex items-center px-4 py-2 text-[14px] tracking-wide transition-colors ${isActiveCls}">
          ${esc(d.nav)}
          ${chev}
        </a>
        ${dropdown}
      </li>
    `;
  });

  return `<ul class="flex items-center justify-center gap-2">${items.join('')}</ul>`;
}

function drawerNav(ctx, currentPath) {
  const items = TOP_LEVEL.map(p => {
    const d = ctx.data(p);
    const kids = ctx.children(p);
    const inSection = currentPath === p || currentPath.startsWith(p);
    const isActiveCls = inSection ? 'text-vahai-green font-bold' : 'text-ink font-semibold';
    
    if (!kids.length) {
      return `<li><a href="${ctx.href(p)}" class="block py-4 text-xl border-b border-slate-100 ${isActiveCls}">${esc(d.nav)}</a></li>`;
    }

    return `
      <li>
        <details class="group/mob">
          <summary class="flex items-center justify-between py-4 text-xl border-b border-slate-100 cursor-pointer ${isActiveCls}">
            ${esc(d.nav)}
            <svg class="w-5 h-5 text-slate-400 group-open/mob:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </summary>
          <ul class="pl-4 py-2 border-b border-slate-100 bg-slate-50">
            ${kids.map(k => {
              const kd = ctx.data(k);
              return `<li><a href="${ctx.href(k)}" class="flex items-center gap-3 py-3 text-base text-slate-600 hover:text-ink">
                ${getChildIcon(k, kd.nav)}
                ${esc(kd.nav)}
              </a></li>`;
            }).join('')}
          </ul>
        </details>
      </li>
    `;
  });
  return `<ul class="flex flex-col">${items.join('')}</ul>
  <div class="mt-8 flex justify-center">
    ${langToggle(ctx, {path: currentPath})}
  </div>`;
}

function langToggle(ctx, page) {
  const enUrl = ctx.urls.href(page.path, 'en');
  const frUrl = ctx.urls.href(page.path, 'fr');
  
  const linkBase = "inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold tracking-widest transition-all";
  
  if (ctx.lang === 'en') {
    return `<div class="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
      <span class="${linkBase} bg-white text-ink shadow-sm" aria-current="true" lang="en">EN</span>
      <a class="${linkBase} text-slate-500 hover:text-ink" href="${frUrl}" hreflang="fr-CA" lang="fr" aria-label="Français">FR</a>
    </div>`;
  }
  return `<div class="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
      <a class="${linkBase} text-slate-500 hover:text-ink" href="${enUrl}" hreflang="en-CA" lang="en" aria-label="English">EN</a>
      <span class="${linkBase} bg-white text-ink shadow-sm" aria-current="true" lang="fr">FR</span>
    </div>`;
}

function footerNav(ctx) {
  const d = new Date();
  
  return `
    <footer class="bg-slate-50 text-slate-600 border-t border-slate-200 pt-20 pb-32 lg:pb-12 mt-20">
      <div class="max-w-page mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <!-- Brand Column -->
          <div class="space-y-6">
            <a href="${ctx.href('/')}" class="flex items-center gap-3">
              <img src="${ctx.urls.base}/assets/vahaiwebp.webp" alt="Vahai Tax Logo" class="h-10 w-auto">
              <span class="font-serif text-[18px] font-bold tracking-wide text-ink">VAHAI TAX</span>
            </a>
            <p class="text-slate-500 text-sm leading-relaxed">Expert tax and accounting counsel for businesses and families in Scarborough, Ontario.</p>
            <div class="pt-2">
              <p class="text-sm font-bold text-vahai-green">Call Us</p>
              <a href="tel:416-439-2688" class="text-xl font-serif text-ink hover:text-vahai-orange transition-colors">416-439-2688</a>
            </div>
          </div>
          
          <!-- Services -->
          <div>
            <h4 class="text-ink font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul class="space-y-4 text-sm text-slate-500">
              <li><a href="${ctx.href('/business-tax-accounting/')}" class="hover:text-vahai-orange transition-colors">Business Accounting</a></li>
              <li><a href="${ctx.href('/corporate-services/')}" class="hover:text-vahai-orange transition-colors">Corporate Filings</a></li>
              <li><a href="${ctx.href('/personal-tax-services/')}" class="hover:text-vahai-orange transition-colors">Personal Tax Returns</a></li>
              <li><a href="${ctx.href('/tax-resources/')}" class="hover:text-vahai-orange transition-colors">Tax Resources</a></li>
            </ul>
          </div>
          
          <!-- Company -->
          <div>
            <h4 class="text-ink font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul class="space-y-4 text-sm text-slate-500">
              <li><a href="${ctx.href('/about/')}" class="hover:text-vahai-orange transition-colors">About Us</a></li>
              <li><a href="${ctx.href('/about/vasugi-selvaelango/')}" class="hover:text-vahai-orange transition-colors">Vasugi Selvaelango</a></li>
              <li><a href="${ctx.href('/contact/')}" class="hover:text-vahai-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <!-- Location -->
          <div>
            <h4 class="text-ink font-bold mb-6 uppercase tracking-wider text-sm">Location</h4>
            <address class="text-sm text-slate-500 not-italic space-y-4">
              <p>885 Progress Ave., Unit 102<br>Scarborough, ON M1H 3G3</p>
              <p>
                <span class="block text-ink font-bold mt-4 mb-1">Hours</span>
                Mon-Fri: 9:00 AM - 5:00 PM<br>
                Sat-Sun: Closed
              </p>
            </address>
          </div>
          
        </div>
        
        <div class="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; ${d.getFullYear()} Vahai Tax - Accountants and Consultants. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <a href="${ctx.href('/')}" class="hover:text-ink transition-colors">Terms of Service</a>
            <a href="${ctx.href('/')}" class="hover:text-ink transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function appBottomBar(ctx) {
  // Only show on mobile, fixed to bottom. The large orange call button pops up out of it.
  return `
    <div class="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 px-6 py-2 pb-safe lg:hidden flex items-center justify-between shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
      <a href="${ctx.href('/')}" class="flex flex-col items-center gap-1 text-slate-500 hover:text-vahai-green transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        <span class="text-[10px] font-bold">Home</span>
      </a>
      <a href="${ctx.href('/corporate-services/')}" class="flex flex-col items-center gap-1 text-slate-500 hover:text-vahai-green transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <span class="text-[10px] font-bold">Services</span>
      </a>
      <a href="tel:416-439-2688" class="relative flex flex-col items-center gap-1 text-slate-500 hover:text-vahai-orange transition-colors">
        <div class="absolute -top-6 w-14 h-14 bg-vahai-orange rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white shadow-vahai-orange/40">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </div>
        <span class="text-[10px] font-bold mt-7">Call</span>
      </a>
      <a href="${ctx.href('/contact/')}" class="flex flex-col items-center gap-1 text-slate-500 hover:text-vahai-green transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <span class="text-[10px] font-bold">Contact</span>
      </a>
      <button type="button" class="flex flex-col items-center gap-1 text-slate-500 hover:text-vahai-green transition-colors" onclick="document.getElementById('menu-toggle').click()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <span class="text-[10px] font-bold">Menu</span>
      </button>
    </div>
  `;
}

module.exports = {
  desktopNav,
  drawerNav,
  langToggle,
  footerNav,
  appBottomBar
};
