// ===== UPRAVTE SVUJ OBSAH ZDE =====
const lines = [
	"> dotnet build … úspěšně",
	"> git commit -m 'Nová funkce'",
	"> učím se hledat hrozby ve Wiresharku"
];

const about = [
	{
		h: "Začátky a praxe",
		t: "O IT se aktivně zajímám od 13 let a mám přes 5 let praktických zkušeností. Začínal jsem weby v HTML, CSS a JavaScriptu a postupně přešel k robustnímu backendu v C# a databázím v SQL."
	},
	{
		h: "Vývoj + bezpečnost",
		t: "Kombinuji vývoj softwaru (C#, SQL, JS, PHP) s hlubokým přesahem do kybernetické bezpečnosti: zabezpečení webů, aplikací, systémů Windows a Linux, správa serverů a PC hardwaru."
	},
	{
		h: "Soutěžní mindset",
		t: "Účastním se hackathonů (2024, 2025) a technologických soutěží v týmech CloudCrew a Veritas, kde stavíme použitelné aplikace od nuly až po obhajobu před porotou."
	}
];

const bars = {
	"Programování a databáze": [
		["C# (.NET)", "Pokročilá", 85],
		["SQL a PostgreSQL 16", "Dobrá až pokročilá", 78],
		["Docker", "Základní", 30]
	]
};

const tagGroups = {
	"Programování a web": [
		"OOP",
		"LINQ",
		"XML / JSON",
		"HTML5",
		"CSS3",
		"JavaScript",
		"PHP",
		"Základy Javy",
		"Git"
	],
	Databáze: ["Návrh relačních DB", "pgAdmin 4", "Datové migrace", "UTF-8 / Windows-1250"],
	"Kybernetická bezpečnost": [
		"OWASP",
		"Hardening Windows a Linux",
		"Wireshark (.pcap)",
		"Nmap",
		"Volatility 3",
		"Splunk",
		"Elastic Stack",
		"Phishing"
	],
	"Systémy, DevOps a hardware": [
		"Linux (Ubuntu, Kali)",
		"Windows a Windows Server",
		"WSL 2",
		"Hyper-V",
		"Kontejnerizace",
		"Stavba a diagnostika PC"
	]
};

const projects = [
	{
		h: "Aplikace „Filora“",
		r: "Tým CloudCrew · od 2024 · Designér a frontend developer",
		t: "Chytrá aplikace pro automatizovanou správu účtenek a usnadnění osobní administrativy. Měl jsem na starosti vzhled aplikace a její frontend, tedy to, co uživatel vidí a na co klikne. Na backendu a databázi jsem nepracoval.",
		tags: ["Design", "HTML", "CSS", "JavaScript"],
		wins: ["TOP 10 Samsung Solve for Tomorrow", "2. místo Hackathon Junior 2024"]
	},
	{
		h: "Technologické hackathony a RoboCup",
		r: "Tým Veritas · 2025",
		t: "Hackathony jsou 24hodinové soutěže, ve kterých tým za jediný den vytvoří funkční prototyp (MVP), který řeší skutečný problém uživatelů. Na RoboCupu v roce 2025 jsem pracoval s robotem, ale jen v menší míře.",
		tags: ["C#", "C", "Java", "SQL", "Git"],
		wins: []
	},
	{
		h: "Vlastní vývoj",
		r: "2021 – současnost",
		t: "Webové projekty a desktopové i konzolové aplikace v C# (zpracování XML/JSON do SQL).",
		tags: ["C#", "XML / JSON", "SQL", "Webove projekty"],
		wins: []
	}
];

const jobs = [
	{
		t: "09/2026",
		h: "Odborná IT praxe – OKIN Process (Ostrava)",
		l: [
			"Nastavil jsem server pro výukový web Moodle spolu s databází, kde jsou uložená data. Vše běží v oddělených „krabicích“ (Docker), takže se prostředí dá snadno spustit, přenést a zálohovat.",
			"Napsal jsem program, který z evidence školení a certifikátů zaměstnanců sám připraví soubor pro mzdový systém. Nikdo tak nemusí údaje přepisovat ručně a je méně chyb.",
			"Export se spouští sám v nastavený čas a k celému řešení jsem napsal návod pro správce, aby ho zvládli udržovat i beze mě."
		],
		tags: ["Docker", "PostgreSQL", "PHP", "Windows"]
	}
];

const LI = "https://cz.linkedin.com/in/mykyta-nikolenko-623a5b396";

const icons = {
	shield:
		'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
	trophy:
		'<path d="M8 4h8v5a4 4 0 01-8 0z"/><path d="M8 6H5v1a3 3 0 003 3M16 6h3v1a3 3 0 01-3 3"/><path d="M12 13v4M9 20h6M10 17h4"/>',
	medal:
		'<circle cx="12" cy="15" r="5"/><path d="M9 3l3 6 3-6"/><path d="M12 12.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3z"/>'
};

const certs = [
	{
		a: "THM",
		big: "SOC L1",
		n: "TryHackMe – SOC Level 1",
		i: "TryHackMe · 2026",
		t: "Praktické dovednosti v oblasti Security Operations, detekce hrozeb, analýzy logů a obrany systémů."
	},
	{
		a: "SFT",
		big: "TOP 10",
		n: "Samsung Solve for Tomorrow",
		i: "Česko a Slovensko · projekt Filora",
		t: "Certifikát a umístění v TOP 10 v mezinárodní soutěži v rámci ČR a SR."
	},
	{
		a: "HJ",
		big: "2. místo",
		n: "Hackathon Junior",
		i: "2024 · tymovy vyvoj aplikaci",
		t: "Certifikát za 2. místo v týmovém vývoji aplikací."
	}
];

const langs = [
	["Ukrajinština", "C2 · rodilý mluvčí", 100],
	["Ruština", "C1 · pokročilá / plynulá", 85],
	["Čeština", "B1–B2 · komunikativní", 68],
	["Angličtina", "B1–B2 · technická", 68]
];

Object.assign(icons, {
	rocket:
		'<path d="M12 3c3 2 5 5 5 9l-2 3H9l-2-3c0-4 2-7 5-9z"/><circle cx="12" cy="10" r="1.5"/><path d="M9 15l-2 4 3-1M15 15l2 4-3-1"/>',
	code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>',
	db:
		'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
	globe:
		'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
	server:
		'<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7h.01M8 17h.01"/>',
	cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
	chat: '<path d="M4 5h16v10H9l-5 4z"/>',
	lab: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
	phone: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
	users:
		'<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.2"/><path d="M3 19c0-3.3 2.7-5 6-5s6 1.7 6 5M15 15c3-.3 6 .8 6 4"/>'
});

const sv = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[k]}</svg>`;

const hd = (k, t, n) =>
	`<span class="ix">${String(n).padStart(2, "0")}</span><div class="ch"><span class="ic">${sv(k)}</span><h3>${t}</h3></div>`;

const $ = id => document.getElementById(id);
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

$("about-g").innerHTML = about
	.map((a, i) => `<div class="card about"><div class="num">0${i + 1}</div><h3>${a.h}</h3><p>${a.t}</p></div>`)
	.join("");

const bar = l =>
	l
		.map(
			([n, lv, v]) =>
				`<div class="skill"><div><span>${n}</span><em>${lv}</em></div><div class="meter"><i data-w="${v}"></i></div></div>`
		)
		.join("");

const sk = {
	"Programování a databáze": "code",
	"Programování a web": "globe",
	Databáze: "db",
	"Kybernetická bezpečnost": "shield",
	"Systémy, DevOps a hardware": "server"
};

let sn = 0;

$("skillGrid").innerHTML =
	Object.entries(bars)
		.map(([g, l]) => `<div class="card">${hd(sk[g], g, ++sn)}${bar(l)}</div>`)
		.join("") +
	Object.entries(tagGroups)
		.map(([g, l]) => `<div class="card">${hd(sk[g], g, ++sn)}<div class="chips">${l.map(c => `<span>${c}</span>`).join("")}</div></div>`)
		.join("");

$("projGrid").innerHTML = projects
	.map(
		(p, i) =>
			`<div class="card proj">${hd(["phone", "users", "code"][i], p.h, i + 1)}<div class="rl">${p.r}</div><p>${p.t}</p><div class="chips">${p.tags
				.map(c => `<span>${c}</span>`)
				.join("")}</div>${p.wins.map(w => `<span class="win">${w}</span>`).join("")}</div>`
	)
	.join("");

$("tl").innerHTML = jobs
	.map(
		x =>
			`<li><time>${x.t}</time><h3>${x.h}</h3><ul>${x.l.map(s => `<li>${s}</li>`).join("")}</ul><div class="chips">${x.tags
				.map(c => `<span>${c}</span>`)
				.join("")}</div></li>`
	)
	.join("");

$("csum").innerHTML = `<span><b>${certs.length}</b>certifikace a ocenění</span><span><b>2026</b>nejnovější: SOC Level 1</span>`;

$("certGrid").innerHTML = certs
	.map(
		(c, i) =>
			`<article class="cert" style="--d:${i * 140}ms"><div class="ctop"><div class="seal"><div class="hex"><b>${c.a}</b></div></div><span class="pill">Získáno</span></div><div class="big">${c.big}</div><h3>${c.n}</h3><div class="iss">${c.i}</div><p>${c.t}</p><a href="${LI}" target="_blank" rel="noopener">Zobrazit na LinkedIn ↗</a></article>`
	)
	.join("");

$("eduGrid").innerHTML = `<div class="card">${hd("cap", "Gymnázium a Obchodní akademie Orlová", 1)}<p>Obor Informační technologie, aktuálně 4. ročník (2023 – 2027).</p></div><div class="card lang">${hd("chat", "Jazyky", 2)}${langs
	.map(
		([n, l, v]) =>
			`<div class="row"><span>${n}</span><em>${l}</em></div><div class="meter"><i data-w="${v}"></i></div>`
	)
	.join("")}</div>`;

document.querySelectorAll(".card").forEach(c => {
	c.onpointermove = e => {
		const r = c.getBoundingClientRect();
		c.style.setProperty("--mx", `${e.clientX - r.left}px`);
		c.style.setProperty("--my", `${e.clientY - r.top}px`);
	};
});

document.querySelectorAll(".cert").forEach(c => {
	c.onpointermove = e => {
		if (reduce) {
			return;
		}

		const r = c.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width;
		const y = (e.clientY - r.top) / r.height;

		c.style.setProperty("--mx", `${x * 100}%`);
		c.style.setProperty("--my", `${y * 100}%`);
		c.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
		c.style.setProperty("--rx", `${(0.5 - y) * 12}deg`);
	};

	c.onpointerleave = () => {
		c.style.setProperty("--rx", "0deg");
		c.style.setProperty("--ry", "0deg");
	};
});

const io = new IntersectionObserver(
	es =>
		es.forEach(e => {
			if (!e.isIntersecting) {
				return;
			}

			const t = e.target;
			io.unobserve(t);

			if (t.classList.contains("cert")) {
				t.classList.add("in");
			}

			if (t.dataset.w) {
				t.style.width = `${t.dataset.w}%`;
			}

			if (t.dataset.n) {
				const n = +t.dataset.n;
				const s = t.dataset.s || "";
				const p = t.dataset.p || "";
				const st = performance.now();

				(function f(now) {
					const k = Math.min((now - st) / 1400, 1);
					t.textContent = `${p}${Math.round(n * (1 - Math.pow(1 - k, 3)))}${k === 1 ? s : ""}`;
					if (k < 1) {
						requestAnimationFrame(f);
					}
				})(st);
			}
		}),
	{ threshold: 0.25 }
);

document.querySelectorAll(".cert,.meter i,[data-n]").forEach(el => io.observe(el));

(function () {
	const el = $("nm");
	const t = el.textContent;
	const ch = "01#$%&@ABCDEFXYZ";

	if (reduce) {
		return;
	}

	let k = 0;
	const id = setInterval(() => {
		el.textContent = t
			.split("")
			.map((c, i) => (c === " " ? " " : i < k ? c : ch[(Math.random() * ch.length) | 0]))
			.join("");

		k += 0.6;

		if (k > t.length + 1) {
			el.textContent = t;
			clearInterval(id);
		}
	}, 40);
})();

(function () {
	const el = $("term");
	if (reduce) {
		el.textContent = lines[0];
		return;
	}

	let l = 0;
	let c = 0;
	let del = false;

	(function tick() {
		const s = lines[l];
		c += del ? -1 : 1;
		el.textContent = s.slice(0, c);

		let d = del ? 18 : 45;
		if (!del && c === s.length) {
			del = true;
			d = 1600;
		} else if (del && c === 0) {
			del = false;
			l = (l + 1) % lines.length;
			d = 300;
		}

		setTimeout(tick, d);
	})();
})();
