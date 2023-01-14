function gebi(a) {
  return document.getElementById(a);
}

function time() {
  let now = new Date();
  let options = { hour: "numeric", minute: "numeric" };
  gebi("time").innerHTML = now.toLocaleTimeString("en-US", options);
  setTimeout(time, 5000);
}

function date() {
  let options = { day: "numeric", month: "long", year: "numeric" };
  let now = new Date();
  gebi("date").innerHTML = now.toLocaleDateString("en-US", options);
}

function weather(town) {
  fetch("https://wttr.in/" + town + "?format=%c+%t")
    .then((response) => response.text())
    .then((text) => {
      document.getElementById("weather").innerHTML = text;
    });
}

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function libre() {
  let invidious = [
    "https://yewtu.be",
    "https://vid.puffyan.us",
    "https://invidious.snopyta.org",
    "https://invidious.kavin.rocks",
    "https://inv.riverside.rocks",
    "https://invidio.xamh.de",
    "https://y.com.sb",
    "https://invidious.sethforprivacy.com",
    "https://yt.artemislena.eu",
    "https://invidious.tiekoetter.com",
    "https://inv.bp.projectsegfau.lt",
    "https://invidious.nerdvpn.de",
    "https://inv.vern.cc",
    "https://invidious.projectsegfau.lt",
    "https://invidious.rhyshl.live",
    "https://inv.odyssey346.dev",
    "https://invidious.slipfox.xyz",
    "https://invidious.baczek.me",
    "https://invidious.esmailelbob.xyz",
    "https://youtube.076.ne.jp",
    "https://invidious.dhusch.de",
    "https://invidious.weblibre.org",
    "https://invidious.flokinet.to",
    "https://inv.privacy.com.de",
    "https://invidious.namazso.eu",
  ];
  let nitter = [
    "https://nitter.net",
    "https://nitter.lacontrevoie.fr",
    "https://nitter.pussthecat.org",
    "https://nitter:nitter@nitter.nixnet.services",
    "https://nitter.fdn.fr",
    "https://nitter.1d4.us",
    "https://nitter.kavin.rocks",
    "https://nitter.unixfox.eu",
    "https://nitter.domain.glass",
    "https://nitter.namazso.eu",
    "https://birdsite.xanny.family",
    "https://nitter.hu",
    "https://nitter.moomoo.me",
    "https://bird.trom.tf",
    "https://nitter.it",
    "https://twitter.censors.us",
    "https://nitter.grimneko.de",
    "https://nitter.ca",
    "https://twitter.076.ne.jp",
    "https://nitter.fly.dev",
    "https://notabird.site",
    "https://nitter.weiler.rocks",
    "https://nitter.sethforprivacy.com",
    "https://nttr.stream",
    "https://nitter.cutelab.space",
    "https://nitter.nl",
    "https://nitter.mint.lgbt",
    "https://nitter.bus-hit.me",
    "https://fuckthesacklers.network",
    "https://nitter.esmailelbob.xyz",
    "https://tw.artemislena.eu",
    "https://nitter.winscloud.net",
    "https://nitter.tiekoetter.com",
    "https://nitter.spaceint.fr",
    "https://twtr.bch.bar",
    "https://nitter.privacy.com.de",
    "https://nitter.poast.org",
    "https://nitter.bird.froth.zone",
    "https://nitter.dcs0.hu",
    "https://twitter.dr460nf1r3.org",
    "https://nitter.garudalinux.org",
    "https://twitter.beparanoid.de",
    "https://n.ramle.be",
    "https://nitter.cz",
    "https://nitter.privacydev.net",
    "https://nitter.evil.site",
    "https://tweet.lambda.dance",
    "https://nitter.kylrth.com",
    "https://nitter.foss.wtf",
    "https://nitter.priv.pw",
    "https://nitter.tokhmi.xyz",
    "https://nitter.catalyst.sx",
    "https://unofficialbird.com",
    "https://nitter.projectsegfau.lt",
    "https://singapore.unofficialbird.com",
    "https://twt.funami.tech",
    "https://nitter.fprivacy.com",
    "https://canada.unofficialbird.com",
    "https://india.unofficialbird.com",
    "https://nederland.unofficialbird.com",
    "https://uk.unofficialbird.com",
    "https://n.l5.ca",
    "https://nitter.slipfox.xyz",
    "https://nitter.soopy.moe",
    "https://nitter.qwik.space",
    "https://read.whatever.social",
    "https://nitter.rawbit.ninja",
    "https://nt.vern.cc",
    "https://ntr.odyssey346.dev",
    "https://nitter.ir",
    "https://nitter.privacytools.io",
    "https://nitter.sneed.network",
    "https://n.sneed.network",
    "https://nitter.manasiwibi.com",
    "https://nitter.smnz.de",
    "https://nitter.twei.space",
    "https://nitter.inpt.fr",
    "https://nitter.d420.de",
    "https://nitter.caioalonso.com",
    "https://nitter.at",
    "https://nitter.drivet.xyz",
    "https://nitter.pw",
    "https://nitter.nicfab.eu",
    "https://bird.habedieeh.re",
  ];
  let libreddit = [
    "https://libreddit.spike.codes",
    "https://libreddit.kavin.rocks",
    "https://reddit.invak.id",
    "https://lr.riverside.rocks",
    "https://libreddit.strongthany.cc",
    "https://libreddit.privacy.com.de",
    "https://libreddit.domain.glass",
    "https://r.nf",
    "https://reddit.stuehieyr.com",
    "https://lr.mint.lgbt",
    "https://libreddit.drivet.xyz",
    "https://libreddit.de",
    "https://libreddit.pussthecat.org",
    "https://libreddit.northboot.xyz",
    "https://leddit.xyz",
    "https://libreddit.hu",
    "https://libreddit.totaldarkness.net",
    "https://libreddit.esmailelbob.xyz",
    "https://lr.vern.cc",
    "https://libreddit.nl",
    "https://reddi.tk",
    "https://r.walkx.org",
    "https://libreddit.kylrth.com",
    "https://libreddit.tiekoetter.com",
    "https://reddit.rtrace.io",
    "https://libreddit.privacydev.net",
    "https://r.ahwx.org",
    "https://bob.fr.to",
    "https://libreddit.dcs0.hu",
    "https://reddit.dr460nf1r3.org",
    "https://rd.jae.su",
    "https://libreddit.foss.wtf",
    "https://libreddit.encrypted-data.xyz",
    "https://libreddit.eu.org",
    "https://l.opnxng.com",
    "https://libreddit.cachyos.org",
    "https://rd.funami.tech",
    "https://libreddit.projectsegfau.lt",
    "https://www.futureddit.gq",
    "https://lr.slipfox.xyz",
    "https://libreddit.oxymagnesium.com",
    "https://reddit.utsav2.dev",
    "https://libreddit.freedit.eu",
    "https://libreddit.mha.fi",
  ];
  let simplyTranslate = [
    "https://simplytranslate.org",
    "https://st.tokhmi.xyz",
    "https://translate.josias.dev",
    "https://translate.namazso.eu",
    "https://translate.riverside.rocks",
    "https://simplytranslate.manerakai.com",
    "https://translate.bus-hit.me",
    "https://simplytranslate.pussthecat.org",
    "https://translate.northboot.xyz",
    "https://translate.tiekoetter.com",
    "https://simplytranslate.esmailelbob.xyz",
    "https://tl.vern.cc",
    "https://translate.slipfox.xyz",
    "https://st.privacydev.net",
    "https://translate.beparanoid.de",
    "https://translate.priv.pw",
    "https://st.odyssey346.dev",
  ];

  gebi("yt").setAttribute("href", randChoice(invidious));
  gebi("ni").setAttribute("href", randChoice(nitter));
  gebi("re").setAttribute("href", randChoice(libreddit));
  gebi("st").setAttribute("href", randChoice(simplyTranslate));
}

function main() {
  time();
  date();
  weather("Novosibirsk");
  libre();
}
