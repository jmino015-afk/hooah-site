/* HOOAH site v2 · build 2026-10-28 14:13 */
/* HOOAH v2: 상단 메뉴(GNB·CLUB HOOAH 패널·모바일 메뉴) + 공통 푸터 + 페이지별 본문. hooah.js가 imweb.me 접속일 때 불러옴 */
(function(){
  var d=document.documentElement;
  function reveal(){ requestAnimationFrame(function(){ d.classList.remove("hooah-wait"); }); }
  if(/[?&]mode=/.test(location.search) || window.self!==window.top){ reveal(); return; }   /* 아임웹 편집 화면에서는 아무것도 안 함 */
  var CFG={"img": "https://jmino015-afk.github.io/hooah-site/img/", "nav": [["BEERS", "/beers"], ["GOODS", "/goods"], ["CLUB HOOAH", ""], ["ABOUT US", "/about"]], "club": {"label": "CLUB HOOAH", "headline": "리셋을 나의 리추얼로.", "cards": [["Membership", "HOOAH RESETTER", "/membership", "hero-remarkables-desktop.jpg"], ["Affiliate", "Share the Reset", "/affiliate", "lineup.webp"]]}, "account_url": "/login?back_url=L3Nob3BfbXlwYWdl&type=mypage", "cart_url": "/shop_cart", "sns": {"tiktok": "", "instagram": "https://instagram.com/drinkhooah", "youtube": ""}, "support": [["자주 묻는 질문", "/faq"], ["고객 문의", "/contact"], ["배송 안내", "/shipping"], ["이용약관", "/terms"], ["개인정보처리방침", "/privacy"]], "support_ready": false, "newsletter": {"headline": "STAY IN THE RESET", "sub": "새로운 리셋 소식을 가장 먼저 받아보세요. 가입하면 첫 주문 [혜택]을 드려요.", "placeholder": "이메일 주소를 입력해 주세요", "ready": false}, "nonalc_badge": "알코올 1% 미만 함유", "analytics": {"ga4_id": "", "meta_pixel_id": "", "_note": "론칭 단계에서 ID를 넣으면 자동으로 켜짐. UTM 규칙은 docs/utm-rules.md"}}, IMG=CFG.img;
  d.classList.add("hooah-v2");
  if(!document.getElementById("hooah-v2-css")){
    var f=document.createElement("link"); f.rel="stylesheet"; f.href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"; document.head.appendChild(f);
    var st=document.createElement("style"); st.id="hooah-v2-css"; st.textContent="/* === HOOAH v2 · 디자인 기본값 (UI-01·02) === */\n  :root{\n    --hooah-red:#DD1815; --hooah-green:#0D4D32; --hooah-navy:#2F4577; --hooah-cream:#FEF9F9;   /* 확정 컬러 2026-10-26 (docs/brand-colors.md) */\n    --hv-ink:#111111; --hv-sub:#4a4542; --hv-muted:#8a8380; --hv-line:rgba(17,17,17,.12); --hv-tint:#F6EFEE;\n    --hv-font:\"Pretendard Variable\",Pretendard,-apple-system,BlinkMacSystemFont,\"Apple SD Gothic Neo\",\"Malgun Gothic\",sans-serif;\n    --hv-gnb-h:72px; --hv-wrap:min(1280px,calc(100vw - 48px));\n    /* 글자 크기 단계 */\n    --hv-fs-display:clamp(40px,6vw,76px); --hv-fs-h1:clamp(32px,4vw,48px); --hv-fs-h2:clamp(24px,2.6vw,32px); --hv-fs-h3:20px;\n    --hv-fs-body:16px; --hv-fs-small:14px; --hv-fs-caption:12px;\n  }\n  html.hooah-v2 body#doz_body{background:var(--hooah-cream)!important;padding-top:0!important}\n  html.hooah-v2 #doz_header_wrap,html.hooah-v2 #doz_footer_wrap,html.hooah-v2 .alpha_instagram_feed,\n  html.hooah-v2 #mobile_slide_menu_wrap,html.hooah-v2 #pc_slide_menu_wrap,html.hooah-v2 .slide_menu_backdrop{display:none!important}\n  .hv{font-family:var(--hv-font);color:var(--hv-ink);font-size:var(--hv-fs-body);line-height:1.6;word-break:keep-all;overflow-wrap:break-word;-webkit-font-smoothing:antialiased;letter-spacing:-.01em}\n  .hv *{box-sizing:border-box}\n  .hv a{color:inherit;text-decoration:none}\n  .hv .wrap{width:var(--hv-wrap);margin:0 auto}\n  .hv-bleed{width:100vw;position:relative;left:50%;margin-left:-50vw}\n  .hv .t-display{font-size:var(--hv-fs-display);font-weight:800;line-height:1.05;letter-spacing:-.02em;text-transform:uppercase;margin:0}\n  .hv .t-h1{font-size:var(--hv-fs-h1);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin:0}\n  .hv .t-h2{font-size:var(--hv-fs-h2);font-weight:700;line-height:1.25;margin:0}\n  .hv .t-label{font-size:var(--hv-fs-caption);font-weight:700;letter-spacing:.16em;text-transform:uppercase}\n  /* 버튼: 기본(검정 채움) · 외곽선 · 밝은 배경용 */\n  .hv .hv-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 24px;border:1.5px solid var(--hv-ink);background:var(--hv-ink);color:#fff;font:700 14px/1 var(--hv-font);letter-spacing:.02em;cursor:pointer;transition:background .2s,border-color .2s,color .2s;border-radius:0}\n  .hv .hv-btn:hover{background:var(--hooah-red);border-color:var(--hooah-red)}\n  .hv .hv-btn.line{background:transparent;color:var(--hv-ink)}\n  .hv .hv-btn.line:hover{background:var(--hv-ink);color:#fff;border-color:var(--hv-ink)}\n  .hv .hv-btn.light{background:#fff;border-color:#fff;color:var(--hv-ink)}\n  .hv .hv-btn.light:hover{background:var(--hooah-red);border-color:var(--hooah-red);color:#fff}\n  /* NON-ALC 라벨 */\n  .hv .hv-nonalc{display:inline-block;padding:4px 8px;border:1.5px solid currentColor;font:800 11px/1 var(--hv-font);letter-spacing:.08em}\n\n/* === 상단 메뉴 (GNB-01·02) === */\n  .hv-gnb-space{height:var(--hv-gnb-h)}\n  .hv-gnb{position:fixed;top:0;left:0;right:0;z-index:1000;background:var(--hooah-cream);border-bottom:1px solid var(--hv-line);transition:box-shadow .2s}\n  .hv-gnb.scrolled{box-shadow:0 2px 16px rgba(17,17,17,.06)}\n  .hv-gnb .bar{height:var(--hv-gnb-h);display:flex;align-items:center;gap:40px}\n  .hv-gnb .logo{display:block;flex:none}\n  .hv-gnb .logo img{display:block;height:30px;width:auto}\n  .hv-gnb .menu{display:flex;gap:32px;margin:0;padding:0;list-style:none;height:100%}\n  .hv-gnb .menu>li{display:flex;align-items:center;height:100%}\n  .hv-gnb .menu a,.hv-gnb .menu button{font:700 15px/1 var(--hv-font);letter-spacing:.04em;color:var(--hv-ink);background:none;border:0;padding:8px 0;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border-bottom:2px solid transparent}\n  .hv-gnb .menu a:hover,.hv-gnb .menu button:hover,.hv-gnb .menu .on>a,.hv-gnb .menu .open>button{color:var(--hooah-red)}\n  .hv-gnb .menu .on>a{border-bottom-color:var(--hooah-red)}\n  .hv-gnb .caret{width:10px;height:10px;transition:transform .2s}\n  .hv-gnb .open .caret{transform:rotate(180deg)}\n  .hv-gnb .util{margin-left:auto;display:flex;align-items:center;gap:20px}\n  .hv-gnb .lang{font:600 12px/1 var(--hv-font);color:var(--hv-muted);letter-spacing:.06em}\n  .hv-gnb .lang b{color:var(--hv-ink)}\n  .hv-gnb .ico{display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;color:var(--hv-ink);background:none;border:0;cursor:pointer;padding:0}\n  .hv-gnb .ico:hover{color:var(--hooah-red)}\n  .hv-gnb .ico svg{width:22px;height:22px}\n  .hv-gnb .burger{display:none}\n  /* CLUB HOOAH 펼침 패널 (CH-00) */\n  .hv-club{position:absolute;left:0;right:0;top:100%;background:var(--hooah-cream);border-bottom:1px solid var(--hv-line);box-shadow:0 18px 30px rgba(17,17,17,.06);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .2s,transform .2s,visibility 0s .2s}\n  .hv-gnb.club-open .hv-club{opacity:1;visibility:visible;transform:none;transition:opacity .2s,transform .2s}\n  .hv-club .in{display:grid;grid-template-columns:1fr 2fr;gap:48px;padding:40px 0 48px}\n  .hv-club .lead .t-label{color:var(--hooah-red)}\n  .hv-club .lead p{margin:14px 0 0;font-size:28px;font-weight:800;line-height:1.3}\n  .hv-club .cards{display:grid;grid-template-columns:1fr 1fr;gap:20px}\n  .hv-club .card{display:block;position:relative;overflow:hidden;aspect-ratio:16/9;background:#ddd}\n  .hv-club .card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}\n  .hv-club .card:hover img{transform:scale(1.04)}\n  .hv-club .card span{position:absolute;left:0;right:0;bottom:0;padding:40px 20px 18px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.55));font-weight:800;font-size:20px;display:flex;justify-content:space-between;align-items:flex-end}\n  .hv-club .card small{display:block;font-weight:500;font-size:13px;opacity:.9;margin-top:4px}\n\n/* === 모바일 메뉴 === */\n  @media (max-width:900px){\n    :root{--hv-gnb-h:60px;--hv-wrap:calc(100vw - 32px)}\n    .hv-gnb .bar{gap:12px}\n    .hv-gnb .logo img{height:24px}\n    .hv-gnb .menu,.hv-gnb .lang,.hv-club{display:none}\n    .hv-gnb .util{gap:4px}\n    .hv-gnb .burger{display:inline-flex}\n  }\n  .hv-mnav{position:fixed;inset:var(--hv-gnb-h) 0 0 0;z-index:999;background:var(--hooah-cream);overflow-y:auto;padding:8px 16px 40px;transform:translateX(100%);transition:transform .25s;visibility:hidden}\n  html.hv-mnav-on .hv-mnav{transform:none;visibility:visible}\n  html.hv-mnav-on body{overflow:hidden}\n  .hv-mnav ul{list-style:none;margin:0;padding:0}\n  .hv-mnav>ul>li{border-bottom:1px solid var(--hv-line)}\n  .hv-mnav>ul>li>a,.hv-mnav>ul>li>button{display:flex;width:100%;justify-content:space-between;align-items:center;padding:20px 0;font:800 22px/1.2 var(--hv-font);letter-spacing:.02em;color:var(--hv-ink);background:none;border:0;text-align:left;cursor:pointer}\n  .hv-mnav .sub{display:none;padding:0 0 16px}\n  .hv-mnav .open .sub{display:block}\n  .hv-mnav .open .caret{transform:rotate(180deg)}\n  .hv-mnav .caret{width:14px;height:14px;transition:transform .2s}\n  .hv-mnav .sub a{display:block;padding:10px 0;font-size:17px;font-weight:600}\n  .hv-mnav .sub a small{display:block;font-size:13px;font-weight:400;color:var(--hv-muted)}\n  .hv-mnav .foot{margin-top:28px;display:flex;gap:20px;font-size:14px;font-weight:600}\n\n/* === 공통 푸터 (FT-01~08) === */\n  .hv-foot{background:var(--hv-tint);margin-top:0;padding:72px 0 40px}\n  .hv-foot .top{display:grid;grid-template-columns:1.3fr 1fr;gap:48px}\n  .hv-foot h2{font-size:28px;font-weight:800;letter-spacing:.01em;margin:0}\n  .hv-foot .sub{margin:10px 0 24px;color:var(--hv-sub);font-size:15px}\n  .hv-foot label{display:block;font-size:13px;font-weight:700;margin-bottom:8px}\n  .hv-foot form{display:flex;gap:8px;max-width:460px}\n  .hv-foot input{flex:1;min-width:0;height:48px;border:1.5px solid var(--hv-ink);background:#fff;padding:0 14px;font:15px var(--hv-font);border-radius:0;color:var(--hv-ink)}\n  .hv-foot input:focus{outline:2px solid var(--hooah-red);outline-offset:1px}\n  .hv-foot .msg{min-height:22px;margin:8px 0 0;font-size:13px;color:var(--hv-sub)}\n  .hv-foot .cols{display:flex;gap:64px;justify-content:flex-end}\n  .hv-foot .cols h3{font:800 12px/1 var(--hv-font);letter-spacing:.14em;margin:0 0 16px}\n  .hv-foot .cols ul{list-style:none;margin:0;padding:0}\n  .hv-foot .cols li{font-size:14px;line-height:2.1}\n  .hv-foot .cols a:hover{color:var(--hooah-red)}\n  .hv-foot .cols .soon{color:var(--hv-muted)}\n  .hv-foot .cols .strong{font-weight:800}\n  .hv-foot .bottom{margin-top:72px;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}\n  .hv-foot .brand img{display:block;height:34px;width:auto}\n  .hv-foot .brand p{margin:10px 0 0;font-weight:700;font-size:15px}\n  .hv-foot .right{display:flex;align-items:center;gap:20px;flex-wrap:wrap}\n  .hv-foot .badge{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--hv-line);background:#fff;font-size:12px;font-weight:600;color:var(--hv-sub)}\n  .hv-foot .badge b{color:var(--hv-ink)}\n  .hv-foot .sns{display:flex;gap:8px}\n  .hv-foot .sns a{display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;border-radius:50%;border:1px solid var(--hv-line);background:#fff}\n  .hv-foot .sns a:hover{color:#fff;background:var(--hv-ink);border-color:var(--hv-ink)}\n  .hv-foot .sns svg{width:18px;height:18px}\n  .hv-foot .copy{margin-top:28px;padding-top:20px;border-top:1px solid var(--hv-line);font-size:12px;color:var(--hv-muted)}\n  @media (max-width:900px){\n    .hv-foot{padding:56px 0 32px}\n    .hv-foot .top{grid-template-columns:1fr;gap:40px}\n    .hv-foot .cols{justify-content:flex-start;gap:56px}\n    .hv-foot .bottom{margin-top:48px;flex-direction:column;align-items:flex-start}\n  }\n\n/* === 임시 HOME 첫 화면 (W2에 히어로 슬라이드로 교체) === */\n  .hv-hero{position:relative;min-height:calc(100vh - var(--hv-gnb-h));min-height:calc(100svh - var(--hv-gnb-h));display:flex;align-items:flex-end;color:#fff;background:#222 center/cover no-repeat}\n  .hv-hero::before{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05) 40%,rgba(0,0,0,.5))}\n  .hv-hero .wrap{position:relative;padding:0 0 72px}\n  .hv-hero p{margin:18px 0 28px;font-size:18px;line-height:1.6;max-width:560px}\n  .hv-page{padding:96px 0 120px;min-height:50vh}\n  .hv-page p{color:var(--hv-sub);margin:16px 0 0}\n  .hv-flag{position:fixed;left:12px;bottom:12px;z-index:1001;background:var(--hv-ink);color:#fff;font:600 11px/1 var(--hv-font);padding:7px 10px;letter-spacing:.04em;opacity:.85;pointer-events:none}\n"; document.head.appendChild(st);
  }
  var SVG={
    caret:'<svg class="caret" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    user:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4 21c1.2-4 4.4-6 8-6s6.8 2 8 6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    menu:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" stroke-width="1.8"/></svg>',
    close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" stroke="currentColor" stroke-width="1.8"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/></svg>'
  };
  var path=location.pathname.replace(/\/$/,"")||"/";
  if(/preview-v2\.html$/.test(path)) path=(location.hash.slice(1)||"/");   /* 로컬 미리보기: preview-v2.html#/beers */
  var esc=function(s){ return String(s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  var isClub=function(p){ return CFG.club.cards.some(function(c){ return c[2]===p; }); };

  function gnbHTML(){
    var items=CFG.nav.map(function(n){
      if(!n[1]) return '<li class="club'+(isClub(path)?' on':'')+'"><button type="button" aria-expanded="false" aria-controls="hv-club">'+n[0]+SVG.caret+'</button></li>';
      return '<li'+(path===n[1]?' class="on"':'')+'><a href="'+n[1]+'">'+n[0]+'</a></li>';
    }).join("");
    var cards=CFG.club.cards.map(function(c){ return '<a class="card" href="'+c[2]+'"><img src="'+IMG+c[3]+'" alt="" loading="lazy"><span><em style="font-style:normal">'+c[0]+'<small>'+esc(c[1])+'</small></em>→</span></a>'; }).join("");
    return '<header class="hv hv-gnb" id="hv-gnb"><div class="wrap bar">'+
      '<a class="logo" href="/" aria-label="HOOAH 홈"><img src="'+IMG+'logo-red.png" alt="HOOAH"></a>'+
      '<nav aria-label="주 메뉴"><ul class="menu">'+items+'</ul></nav>'+
      '<div class="util"><span class="lang" title="영문 사이트 준비 중"><b>KR</b> / EN</span>'+
      '<a class="ico" href="'+CFG.account_url+'" aria-label="로그인 또는 마이페이지">'+SVG.user+'</a>'+
      '<a class="ico" href="'+CFG.cart_url+'" aria-label="장바구니">'+SVG.bag+'</a>'+
      '<button class="ico burger" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="hv-mnav">'+SVG.menu+'</button></div></div>'+
      '<div class="hv-club" id="hv-club"><div class="wrap in"><div class="lead"><div class="t-label">'+CFG.club.label+'</div><p>'+esc(CFG.club.headline)+'</p></div><div class="cards">'+cards+'</div></div></div>'+
      '</header><div class="hv-gnb-space"></div>'+
      '<div class="hv hv-mnav" id="hv-mnav" aria-label="모바일 메뉴"><ul>'+CFG.nav.map(function(n){
        if(!n[1]) return '<li><button type="button" aria-expanded="false">'+n[0]+SVG.caret+'</button><div class="sub">'+CFG.club.cards.map(function(c){ return '<a href="'+c[2]+'">'+c[0]+'<small>'+esc(c[1])+'</small></a>'; }).join("")+'</div></li>';
        return '<li><a href="'+n[1]+'">'+n[0]+'</a></li>';
      }).join("")+'</ul><div class="foot"><a href="'+CFG.account_url+'">로그인</a><a href="'+CFG.cart_url+'">장바구니</a><span style="color:var(--hv-muted)">KR / EN</span></div></div>';
  }

  function footHTML(){
    var N=CFG.newsletter;
    var menu=CFG.nav.map(function(n){ return '<li><a href="'+(n[1]||CFG.club.cards[0][2])+'">'+n[0]+'</a></li>'; }).join("");
    var sup=CFG.support.map(function(s,i){ var cls=(i===CFG.support.length-1?"strong":""); return CFG.support_ready? '<li><a class="'+cls+'" href="'+s[1]+'">'+s[0]+'</a></li>' : '<li><span class="soon '+cls+'" title="준비 중">'+s[0]+'</span></li>'; }).join("");
    var sns=["tiktok","instagram","youtube"].filter(function(k){ return CFG.sns[k]; }).map(function(k){ return '<a href="'+CFG.sns[k]+'" target="_blank" rel="noopener" aria-label="'+({tiktok:"TikTok",instagram:"Instagram",youtube:"YouTube"})[k]+'">'+SVG[k]+'</a>'; }).join("");
    return '<footer class="hv hv-foot hv-bleed"><div class="wrap">'+
      '<div class="top"><div class="news"><h2>'+esc(N.headline)+'</h2><p class="sub">'+esc(N.sub)+'</p>'+
      '<label for="hv-email">이메일</label>'+
      '<form novalidate id="hv-news"><input id="hv-email" type="email" autocomplete="email" placeholder="'+esc(N.placeholder)+'"><button class="hv-btn" type="submit">Sign up</button></form><p class="msg" role="status" aria-live="polite"></p></div>'+
      '<div class="cols"><div><h3>SHOP</h3><ul>'+menu+'</ul></div><div><h3>SUPPORT</h3><ul>'+sup+'</ul></div></div></div>'+
      '<div class="bottom"><div class="brand"><img src="'+IMG+'logo-red.png" alt="HOOAH"><p>Drink for the Reset.</p></div>'+
      '<div class="right"><span class="badge"><b>논알콜</b>'+esc(CFG.nonalc_badge)+'</span><div class="sns">'+sns+'</div></div></div>'+
      '<div class="copy">© '+new Date().getFullYear()+' HOOAH. All rights reserved.</div></div></footer>';
  }

  /* 페이지 본문: W1은 HOME 임시 첫 화면 + 나머지 페이지 제목 자리. 주차마다 여기 채움 */
  var PAGES={
    "/beers":["Our Beers","XAGER, XHALE, XHOPE. 세 가지 맛의 논알콜 리셋 맥주예요. (W3에 목록이 들어가요)"],
    "/goods":["Our Goods","캔 오프너, 비어 글라스, 비어 코스터. (W6에 목록이 들어가요)"],
    "/membership":["HOOAH RESETTER","리셋을 나의 리추얼로. (W7에 멤버십 안내가 들어가요)"],
    "/affiliate":["Share the Reset","후아의 리셋을 함께 알릴 파트너를 찾아요. (W7에 신청 안내가 들어가요)"],
    "/about":["About Us","Not a substitute. A new reason to drink. (W6에 브랜드 이야기가 들어가요)"]
  };
  function bodyHTML(){
    if(path==="/"||path==="/main")
      return '<section class="hv hv-hero hv-bleed" style="background-image:url('+IMG+(innerWidth<700?'hero-remarkables-mobile.jpg':'hero-remarkables-desktop.jpg')+')"><div class="wrap">'+
        '<h1 class="t-display">Meet the<br>Reset Drink™</h1><p>처음 만나는 논알콜 리셋 드링크, 후아.<br>내쉬는 숨에 비우고, 한 모금으로 채우세요.</p><a class="hv-btn light" href="/beers">Shop now</a></div></section>';
    var p=PAGES[path]; if(!p) return "";
    return '<section class="hv hv-page"><div class="wrap"><h1 class="t-h1">'+esc(p[0])+'</h1><p>'+esc(p[1])+'</p></div></section>';
  }

  function analytics(){                                   /* 분석 태그 자리: config에 ID가 있을 때만 켜짐 (론칭 단계) */
    var A=CFG.analytics||{};
    if(A.ga4_id && !window.gtag){ var g=document.createElement("script"); g.async=true; g.src="https://www.googletagmanager.com/gtag/js?id="+A.ga4_id; document.head.appendChild(g);
      window.dataLayer=window.dataLayer||[]; window.gtag=function(){ dataLayer.push(arguments); }; gtag("js",new Date()); gtag("config",A.ga4_id); }
    if(A.meta_pixel_id && !window.fbq){ (function(f,b,e,v,n,t,s){ if(f.fbq)return; n=f.fbq=function(){ n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments); }; if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version="2.0"; n.queue=[]; t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s); })(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"); fbq("init",A.meta_pixel_id); fbq("track","PageView"); }
  }

  function bind(){
    var g=document.getElementById("hv-gnb"), club=g.querySelector(".club"), cb=club&&club.querySelector("button"), t;
    function setClub(on){ g.classList.toggle("club-open",on); if(club) club.classList.toggle("open",on); if(cb) cb.setAttribute("aria-expanded",on?"true":"false"); }
    if(club){
      var hoverable=matchMedia("(hover:hover)").matches;
      if(hoverable){ [club,g.querySelector(".hv-club")].forEach(function(el){ el.addEventListener("mouseenter",function(){ clearTimeout(t); setClub(true); }); el.addEventListener("mouseleave",function(){ t=setTimeout(function(){ setClub(false); },150); }); }); }
      cb.addEventListener("click",function(){ setClub(!g.classList.contains("club-open")); });
      document.addEventListener("keydown",function(e){ if(e.key==="Escape"){ setClub(false); setM(false); } });
      document.addEventListener("click",function(e){ if(!e.target.closest("#hv-gnb")) setClub(false); });
    }
    var bg=g.querySelector(".burger"), m=document.getElementById("hv-mnav");
    function setM(on){ d.classList.toggle("hv-mnav-on",on); bg.setAttribute("aria-expanded",on?"true":"false"); bg.setAttribute("aria-label",on?"메뉴 닫기":"메뉴 열기"); bg.innerHTML=on?SVG.close:SVG.menu; }
    bg.addEventListener("click",function(){ setM(!d.classList.contains("hv-mnav-on")); });
    m.querySelectorAll("li>button").forEach(function(b){ b.addEventListener("click",function(){ var li=b.parentNode, on=!li.classList.contains("open"); li.classList.toggle("open",on); b.setAttribute("aria-expanded",on?"true":"false"); }); });
    var onScroll=function(){ g.classList.toggle("scrolled",scrollY>4); }; addEventListener("scroll",onScroll,{passive:true}); onScroll();
    addEventListener("pageshow",function(e){ if(e.persisted){ setM(false); setClub(false); } });
    var nf=document.getElementById("hv-news");
    if(nf) nf.addEventListener("submit",function(e){ e.preventDefault(); var i=nf.querySelector("input"), msg=nf.parentNode.querySelector(".msg");
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value.trim())){ msg.textContent=i.value.trim()?"이메일 주소를 다시 확인해 주세요.":"이 칸을 채워 주세요."; i.focus(); return; }
      msg.textContent=CFG.newsletter.ready?"가입했어요. 새로운 리셋 소식을 가장 먼저 보내드릴게요.":"뉴스레터는 곧 열려요. 조금만 기다려 주세요."; });
  }

  function render(){
    if(document.getElementById("hv-gnb")) return;
    var wrap=document.createElement("div"); wrap.innerHTML=gnbHTML(); document.body.insertBefore(wrap,document.body.firstChild);
    var root=document.getElementById("hooah-app"), html=bodyHTML();
    if(html){ if(!root){ root=document.createElement("div"); root.id="hooah-app"; var main=document.querySelector("main")||document.body; main.appendChild(root); } root.innerHTML=html; root.dataset.rendered="v2"; }
    else if(root) root.innerHTML="";
    var fw=document.getElementById("doz_footer_wrap"), fd=document.createElement("div"); fd.innerHTML=footHTML();
    if(fw) fw.parentNode.insertBefore(fd.firstElementChild,fw); else document.body.appendChild(fd.firstElementChild);
    if(!document.querySelector(".hv-flag")){ var fl=document.createElement("div"); fl.className="hv-flag"; fl.textContent="v2 preview · "+window.HOOAH_V2_BUILD; document.body.appendChild(fl); }
    bind(); analytics(); reveal();
  }
  window.HOOAH_V2_BUILD="2026-10-28 14:13";
  if(document.readyState!=="loading") render(); else document.addEventListener("DOMContentLoaded",render);
})();
