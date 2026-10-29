/* =========================================================
   Sami Al-Najadat — Portfolio scripts
   ========================================================= */
(() => {
    "use strict";

    const $ = (s, el = document) => el.querySelector(s);
    const $$ = (s, el = document) => [...el.querySelectorAll(s)];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/";

    /* ---------------------------------------------------------
       Content
       --------------------------------------------------------- */
    const I18N = {
        en: {
            "meta.title": "Sami Al-Najadat | Full Stack Web Developer",
            "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.journey": "Journey",
            "nav.projects": "Projects", "nav.contact": "Contact", "nav.hire": "Hire me",
            "hero.hi": "Hi, I'm",
            "hero.name": "Sami <span class=\"nw\">Al-Najadat</span>",
            "hero.desc": "Full Stack Web Developer from Jordan. I turn real business problems into fast, secure and scalable web applications — PHP (Laravel, Yii2) and Node.js (NestJS) on the backend, React &amp; Next.js on the front, MySQL &amp; PostgreSQL underneath.",
            "hero.cta1": "View my work", "hero.cta2": "Let's talk",
            "stats.years": "Years building for the web", "stats.repos": "Public GitHub repositories",
            "stats.projects": "Projects shipped &amp; built", "stats.tech": "Technologies &amp; tools",
            "about.eyebrow": "About me",
            "about.title": "Code that solves real problems",
            "about.p1": "I'm <strong>Sami Ismaeel Al-Najadat</strong>, a passionate Full Stack Web Developer with a backend heart. I work across two ecosystems — <strong>PHP</strong> (Laravel, Yii2) and <strong>JavaScript / TypeScript</strong> (Node.js, NestJS, React, Next.js) — on <strong>MySQL</strong> and <strong>PostgreSQL</strong>, and I pick the right tool for each project instead of forcing one stack.",
            "about.p2": "My background in Accounting and Finance &amp; Banking gives me something rare among developers: I understand how a business actually works — payroll, attendance, invoices, permissions — and I build systems that fit it.",
            "about.l1": "HR systems: attendance, shifts, calendars &amp; payroll",
            "about.l2": "Multi-company platforms with role-based access &amp; custom permissions",
            "about.l3": "REST APIs with Laravel, Node.js &amp; NestJS — front ends with React &amp; Next.js",
            "about.l4": "Building and deploying full-stack projects in production (AWS, DigitalOcean, Vercel)",
            "srv.1t": "Backend Engineering", "srv.1d": "Clean, secure APIs with Laravel, Yii2, Node.js &amp; NestJS — authentication and solid database design on MySQL &amp; PostgreSQL.",
            "srv.2t": "Frontend with React &amp; Next.js", "srv.2d": "Fast, SEO-friendly interfaces and dashboards with React.js, Next.js, Tailwind and Bootstrap.",
            "srv.3t": "Business Systems", "srv.3d": "HR, inventory and e-commerce systems — with roles, permissions and multi-company support.",
            "srv.4t": "Deployment", "srv.4d": "Shipping to production on DigitalOcean &amp; Vercel, with Git-based team workflows.",
            "skills.eyebrow": "Tech stack", "skills.title": "Tools I use every day",
            "grp.backend": "Backend", "grp.frontend": "Frontend", "grp.db": "Database", "grp.devops": "DevOps &amp; Tools",
            "journey.eyebrow": "Journey", "journey.title": "Experience &amp; Education",
            "journey.now": "Now", "journey.prev": "Previously",
            "journey.free.t": "Freelance Full Stack Developer", "journey.free.o": "Self-employed",
            "journey.free.d": "Building web applications for clients end-to-end — backend APIs, front ends and deployment — with PHP (Laravel, Yii2), Node.js (NestJS), React &amp; Next.js.",
            "journey.ems.t": "Full Stack Web Developer", "journey.ems.o": "EMS",
            "journey.ems.d": "Worked on HR systems with attendance, shifts and calendar features, and multi-company platforms with role-based access and custom permissions.",
            "journey.rel.t": "Web Developer", "journey.rel.o": "Releans",
            "journey.rel.d": "Built web application features with Laravel and JavaScript as part of the development team.",
            "journey.bootcamp": "Bootcamp", "journey.oca.t": "Full Stack Web Development", "journey.oca.o": "Orange Coding Academy",
            "journey.oca.d": "Intensive full-stack program: HTML, CSS, JavaScript, React, PHP, Laravel and MySQL — delivered through real team projects using Agile, Trello and Miro.",
            "journey.degree": "Bachelor's degree", "journey.fin.t": "B.Sc. Finance &amp; Banking Science",
            "journey.acc.t": "B.Sc. Accounting", "journey.yu": "Yarmouk University",
            "projects.eyebrow": "Portfolio", "projects.title": "Things I've built", "projects.all": "All",
            "projects.more": "See all repositories on GitHub", "projects.code": "View source", "projects.featured": "Featured",
            "contact.eyebrow": "Contact", "contact.title": "Let's build something great",
            "contact.sub": "Have a project, a job opportunity or just want to say hi? My inbox is always open.",
            "contact.email": "Email", "contact.phone": "Phone", "contact.wa": "Chat with me directly",
            "form.title": "Send me a message", "form.name": "Your name", "form.yourEmail": "Your email",
            "form.subject": "Subject", "form.message": "Message",
            "form.send": "Send message", "form.sending": "Sending…", "form.wa": "Send via WhatsApp",
            "form.ok": "Thank you! Your message has been sent — I'll get back to you soon.",
            "form.err": "Something went wrong. Please try again, or reach me on WhatsApp.",
            "form.note": "Your message goes straight to my inbox. Prefer to chat? Use WhatsApp.",
            "footer.made": "Designed &amp; built with",
            "toast.copied": "Copied to clipboard", "toast.fill": "Please fill in all fields correctly",
            "msg.from": "From",
            roles: ["Full Stack Web Developer", "Laravel & NestJS Developer", "React & Next.js Developer", "PHP & Node.js Engineer", "Real-world Problem Solver"]
        },
        ar: {
            "meta.title": "سامي النجادات | مطوّر ويب Full Stack",
            "nav.home": "الرئيسية", "nav.about": "نبذة عني", "nav.skills": "المهارات", "nav.journey": "المسيرة",
            "nav.projects": "المشاريع", "nav.contact": "تواصل", "nav.hire": "وظّفني",
            "hero.hi": "مرحباً، أنا",
            "hero.name": "سامي النجادات",
            "hero.desc": "مطوّر ويب Full Stack من الأردن. أحوّل مشاكل الأعمال الحقيقية إلى تطبيقات ويب سريعة وآمنة وقابلة للتوسع — PHP (Laravel و Yii2) و Node.js (NestJS) في الخلفية، و React و Next.js في الواجهة، وقواعد بيانات MySQL و PostgreSQL.",
            "hero.cta1": "شاهد أعمالي", "hero.cta2": "لنتحدث",
            "stats.years": "سنوات في تطوير الويب", "stats.repos": "مستودع عام على GitHub",
            "stats.projects": "مشروع منجز", "stats.tech": "تقنية وأداة",
            "about.eyebrow": "من أنا",
            "about.title": "كود يحل مشاكل حقيقية",
            "about.p1": "أنا <strong>سامي إسماعيل النجادات</strong>، مطوّر ويب Full Stack شغوف، وقلبي في الـ Backend. أعمل في بيئتين — <strong>PHP</strong> (Laravel و Yii2) و <strong>JavaScript / TypeScript</strong> (Node.js و NestJS و React و Next.js) — مع <strong>MySQL</strong> و <strong>PostgreSQL</strong>، وأختار الأداة المناسبة لكل مشروع بدل حصره في تقنية واحدة.",
            "about.p2": "خلفيتي في المحاسبة والعلوم المالية والمصرفية تمنحني ميزة نادرة بين المطورين: أفهم كيف تعمل الشركات فعلاً — الرواتب، الحضور، الفواتير، الصلاحيات — وأبني أنظمة تناسبها.",
            "about.l1": "أنظمة موارد بشرية: الحضور، الورديات، التقويم والرواتب",
            "about.l2": "منصات متعددة الشركات مع صلاحيات حسب الأدوار وأذونات مخصصة",
            "about.l3": "واجهات REST API بـ Laravel و Node.js و NestJS — وواجهات أمامية بـ React و Next.js",
            "about.l4": "بناء ونشر مشاريع Full Stack على بيئة الإنتاج (AWS، DigitalOcean، Vercel)",
            "srv.1t": "هندسة الـ Backend", "srv.1d": "واجهات API نظيفة وآمنة بـ Laravel و Yii2 و Node.js و NestJS — مع المصادقة وتصميم قواعد بيانات متين على MySQL و PostgreSQL.",
            "srv.2t": "واجهات بـ React و Next.js", "srv.2d": "واجهات ولوحات تحكم سريعة وصديقة لمحركات البحث باستخدام React.js و Next.js و Tailwind و Bootstrap.",
            "srv.3t": "أنظمة الأعمال", "srv.3d": "أنظمة موارد بشرية ومخزون ومتاجر إلكترونية — مع أدوار وصلاحيات ودعم تعدد الشركات.",
            "srv.4t": "النشر والإطلاق", "srv.4d": "إطلاق المشاريع على DigitalOcean و Vercel، مع سير عمل جماعي عبر Git.",
            "skills.eyebrow": "التقنيات", "skills.title": "أدوات أستخدمها كل يوم",
            "grp.backend": "الخلفية (Backend)", "grp.frontend": "الواجهة (Frontend)", "grp.db": "قواعد البيانات", "grp.devops": "النشر والأدوات",
            "journey.eyebrow": "المسيرة", "journey.title": "الخبرة والتعليم",
            "journey.now": "حالياً", "journey.prev": "سابقاً",
            "journey.free.t": "مطوّر Full Stack مستقل (Freelancer)", "journey.free.o": "عمل حر",
            "journey.free.d": "أبني تطبيقات ويب للعملاء من البداية حتى الإطلاق — واجهات API، الواجهات الأمامية والنشر — باستخدام PHP (Laravel و Yii2) و Node.js (NestJS) و React و Next.js.",
            "journey.ems.t": "مطوّر ويب Full Stack", "journey.ems.o": "EMS",
            "journey.ems.d": "العمل على أنظمة موارد بشرية بميزات الحضور والورديات والتقويم، ومنصات متعددة الشركات بصلاحيات حسب الأدوار وأذونات مخصصة.",
            "journey.rel.t": "مطوّر ويب", "journey.rel.o": "Releans",
            "journey.rel.d": "تطوير ميزات لتطبيقات الويب باستخدام Laravel و JavaScript ضمن فريق التطوير.",
            "journey.bootcamp": "معسكر تدريبي", "journey.oca.t": "تطوير الويب Full Stack", "journey.oca.o": "أكاديمية البرمجة – أورنج",
            "journey.oca.d": "برنامج مكثف في تطوير الويب المتكامل: HTML و CSS و JavaScript و React و PHP و Laravel و MySQL — من خلال مشاريع جماعية حقيقية بمنهجية Agile وأدوات Trello و Miro.",
            "journey.degree": "بكالوريوس", "journey.fin.t": "بكالوريوس العلوم المالية والمصرفية",
            "journey.acc.t": "بكالوريوس المحاسبة", "journey.yu": "جامعة اليرموك",
            "projects.eyebrow": "الأعمال", "projects.title": "مشاريع قمت ببنائها", "projects.all": "الكل",
            "projects.more": "شاهد جميع المستودعات على GitHub", "projects.code": "عرض الكود", "projects.featured": "مميز",
            "contact.eyebrow": "تواصل", "contact.title": "لنبنِ شيئاً رائعاً معاً",
            "contact.sub": "لديك مشروع، فرصة عمل، أو تريد فقط إلقاء التحية؟ أنا متاح دائماً.",
            "contact.email": "البريد الإلكتروني", "contact.phone": "الهاتف", "contact.wa": "تحدث معي مباشرة",
            "form.title": "أرسل لي رسالة", "form.name": "اسمك", "form.yourEmail": "بريدك الإلكتروني",
            "form.subject": "الموضوع", "form.message": "الرسالة",
            "form.send": "إرسال الرسالة", "form.sending": "جارٍ الإرسال…", "form.wa": "إرسال عبر واتساب",
            "form.ok": "شكراً لك! تم إرسال رسالتك وسأرد عليك قريباً.",
            "form.err": "حدث خطأ. حاول مرة أخرى، أو تواصل معي عبر واتساب.",
            "form.note": "تصل رسالتك مباشرة إلى بريدي. تفضّل المحادثة؟ استخدم واتساب.",
            "footer.made": "صُمّم وبُني بكل",
            "toast.copied": "تم النسخ", "toast.fill": "يرجى تعبئة جميع الحقول بشكل صحيح",
            "msg.from": "من",
            roles: ["مطوّر ويب Full Stack", "مطوّر Laravel و NestJS", "مطوّر React و Next.js", "مهندس PHP و Node.js", "أحب حل المشاكل الحقيقية"]
        }
    };

    const SKILLS = [
        {
            key: "grp.backend", icon: "fa-solid fa-server", items: [
                { n: "PHP", i: "php/php-original.svg" },
                { n: "Laravel", i: "laravel/laravel-original.svg" },
                { n: "Yii2", i: "yii/yii-original.svg" },
                { n: "Node.js", i: "nodejs/nodejs-original.svg" },
                { n: "NestJS", i: "nestjs/nestjs-original.svg" },
                { n: "REST APIs", fa: "fa-solid fa-plug", c: "#22d3ee" },
                { n: "Passport / Auth", fa: "fa-solid fa-shield-halved", c: "#a78bfa" },
                { n: "Postman", i: "postman/postman-original.svg" }
            ]
        },
        {
            key: "grp.frontend", icon: "fa-solid fa-display", items: [
                { n: "HTML5", i: "html5/html5-original.svg" },
                { n: "CSS3", i: "css3/css3-original.svg" },
                { n: "JavaScript", i: "javascript/javascript-original.svg" },
                { n: "TypeScript", i: "typescript/typescript-original.svg" },
                { n: "React.js", i: "react/react-original.svg" },
                { n: "Next.js", i: "nextjs/nextjs-original.svg", inv: true },
                { n: "Tailwind CSS", i: "tailwindcss/tailwindcss-original.svg" },
                { n: "Bootstrap", i: "bootstrap/bootstrap-original.svg" }
            ]
        },
        {
            key: "grp.db", icon: "fa-solid fa-database", items: [
                { n: "MySQL", i: "mysql/mysql-original.svg" },
                { n: "PostgreSQL", i: "postgresql/postgresql-original.svg" },
                { n: "SQL", fa: "fa-solid fa-database", c: "#34d399" },
                { n: "Eloquent ORM", fa: "fa-solid fa-layer-group", c: "#ff5d73" },
                { n: "MongoDB", i: "mongodb/mongodb-original.svg" },
                { n: "DB Design / ERD", fa: "fa-solid fa-diagram-project", c: "#fbbf24" }
            ]
        },
        {
            key: "grp.devops", icon: "fa-solid fa-cloud", items: [
                { n: "Git", i: "git/git-original.svg" },
                { n: "GitHub", i: "github/github-original.svg", inv: true },
                { n: "DigitalOcean", i: "digitalocean/digitalocean-original.svg" },
                { n: "Vercel", i: "vercel/vercel-original.svg", inv: true },
                { n: "AWS", fa: "fa-brands fa-aws", c: "#ff9900" },
                { n: "Vite", i: "vitejs/vitejs-original.svg" }
            ]
        }
    ];

    // c = cover colours [base, glow 1, glow 2]
    const PROJECTS = [
        {
            repo: "HR-SYS", title: "HR-SYS", icon: "fa-users-gear", year: 2024, featured: true,
            cats: ["php"], tags: ["PHP", "MySQL", "JavaScript", "CSS"], c: ["#1e1550", "#7c3aed", "#22d3ee"],
            en: "A complete human-resources system: employees, departments, designations, leaves, holidays, overtime, timesheets, payroll items, projects, clients and goal tracking — with user roles.",
            ar: "نظام موارد بشرية متكامل: الموظفون، الأقسام، المسميات الوظيفية، الإجازات، العطل، العمل الإضافي، سجلات الدوام، بنود الرواتب، المشاريع، العملاء وتتبع الأهداف — مع صلاحيات المستخدمين."
        },
        {
            repo: "Bassmaa", title: "Bassmaa API", icon: "fa-fingerprint", year: 2025, featured: true,
            cats: ["laravel", "php"], tags: ["Laravel 10", "Passport", "REST API", "MySQL"], c: ["#3b0a1a", "#ff3d5e", "#8b5cf6"],
            en: "Laravel 10 REST API secured with Laravel Passport (OAuth2 personal access tokens), with migrations, seeders and a team Git workflow — a branch per task and merge requests.",
            ar: "واجهة REST API مبنية بـ Laravel 10 ومحمية بـ Laravel Passport (OAuth2)، مع Migrations و Seeders وسير عمل جماعي على Git — فرع لكل مهمة وطلبات دمج."
        },
        {
            repo: "Sonic-towing-Recovery", title: "Sonic Towing & Recovery", icon: "fa-truck-pickup", year: 2025, featured: true,
            cats: ["laravel", "php"], tags: ["Laravel", "Blade", "Vite", "JavaScript"], c: ["#0b2a3b", "#0ea5e9", "#f59e0b"],
            en: "Website for a towing & roadside recovery business, built with Laravel, Blade templates and Vite.",
            ar: "موقع لشركة سحب وإنقاذ مركبات على الطرق، مبني بـ Laravel وقوالب Blade و Vite."
        },
        {
            repo: "samIceCream", title: "SamIceCream", icon: "fa-ice-cream", year: 2026, featured: true,
            cats: ["laravel", "php"], tags: ["Laravel", "Blade", "Tailwind CSS", "Vite"], c: ["#3a0d2e", "#ec4899", "#fbbf24"],
            en: "Ice-cream brand web app built with Laravel and Blade, styled with Tailwind CSS and bundled with Vite.",
            ar: "تطبيق ويب لعلامة آيس كريم مبني بـ Laravel و Blade، بتصميم Tailwind CSS وتجميع عبر Vite."
        },
        {
            repo: "Full_ecommerce_php_mysql", title: "Full E-Commerce", icon: "fa-cart-shopping", year: 2023, featured: true,
            cats: ["php"], tags: ["PHP", "MySQL", "JavaScript", "CSS"], c: ["#062b24", "#10b981", "#22d3ee"],
            en: "Full e-commerce website: authentication, product catalog, shopping cart, checkout, order processing, reviews & ratings and a responsive design. Planned as a team with Miro, Trello & DrawSQL.",
            ar: "متجر إلكتروني متكامل: تسجيل ودخول، كتالوج منتجات، سلة شراء، إتمام الطلب، معالجة الطلبات، تقييمات ومراجعات وتصميم متجاوب. خُطّط له كفريق باستخدام Miro و Trello و DrawSQL."
        },
        {
            repo: "Course-", title: "React Dashboard", icon: "fa-chart-line", year: 2026,
            cats: ["react", "js"], tags: ["React.js", "JavaScript", "CSS"], c: ["#0a1a3a", "#3b82f6", "#22d3ee"],
            en: "Front-end admin dashboard template built with React.js.",
            ar: "قالب لوحة تحكم (Dashboard) للواجهة الأمامية مبني بـ React.js."
        },
        {
            repo: "IMS-Remake-with-react", title: "Inventory Management", icon: "fa-boxes-stacked", year: 2024,
            cats: ["react"], tags: ["React.js", "REST API"], c: ["#14123a", "#6366f1", "#14b8a6"],
            en: "Inventory management system remade with React.js.",
            ar: "نظام إدارة مخزون أُعيد بناؤه باستخدام React.js."
        },
        {
            repo: "CAMPE", title: "CAMPE", icon: "fa-campground", year: 2023,
            cats: ["react", "laravel"], tags: ["React.js", "Laravel", "SCSS"], c: ["#0d2414", "#22c55e", "#84cc16"],
            en: "Full-stack project with a React.js front end and a Laravel back end.",
            ar: "مشروع Full Stack بواجهة React.js وخلفية Laravel."
        },
        {
            repo: "Green_hands", title: "EcoGreen", icon: "fa-leaf", year: 2023,
            cats: ["laravel", "php"], tags: ["Laravel", "Blade", "JavaScript", "SCSS"], c: ["#05261c", "#34d399", "#a3e635"],
            en: "EcoGreen — an eco-themed web platform built with Laravel and Blade.",
            ar: "EcoGreen — منصة ويب بطابع بيئي مبنية بـ Laravel و Blade."
        },
        {
            repo: "master_piece", title: "Master Piece", icon: "fa-crown", year: 2023,
            cats: ["laravel", "php", "js"], tags: ["Laravel", "Blade", "JavaScript"], c: ["#2b1a05", "#eab308", "#ff3d5e"],
            en: "My \"master piece\" capstone project, built with Laravel, Blade and JavaScript.",
            ar: "مشروع التخرج (Master Piece) مبني بـ Laravel و Blade و JavaScript."
        },
        {
            repo: "quiz-website-project", title: "Quiz Website", icon: "fa-circle-question", year: 2023,
            cats: ["js"], tags: ["JavaScript", "HTML", "CSS"], c: ["#2a0b33", "#d946ef", "#6366f1"],
            en: "Interactive quiz website that makes learning and testing knowledge accessible and fun.",
            ar: "موقع اختبارات تفاعلي يجعل التعلّم واختبار المعرفة أسهل وأكثر متعة."
        },
        {
            repo: "weather_app", title: "Weather App", icon: "fa-cloud-sun", year: 2024,
            cats: ["js"], tags: ["JavaScript", "HTML", "CSS"], c: ["#08223a", "#38bdf8", "#facc15"],
            en: "Weather app built with vanilla JavaScript.",
            ar: "تطبيق طقس مبني بـ JavaScript."
        }
    ];

    const MARQUEE = [
        ["Laravel", "laravel/laravel-original.svg"], ["Node.js", "nodejs/nodejs-original.svg"],
        ["NestJS", "nestjs/nestjs-original.svg"], ["PHP", "php/php-original.svg"], ["React", "react/react-original.svg"],
        ["Next.js", "nextjs/nextjs-original.svg", true], ["Yii2", "yii/yii-original.svg"],
        ["JavaScript", "javascript/javascript-original.svg"], ["TypeScript", "typescript/typescript-original.svg"],
        ["PostgreSQL", "postgresql/postgresql-original.svg"], ["MySQL", "mysql/mysql-original.svg"],
        ["Tailwind", "tailwindcss/tailwindcss-original.svg"], ["Bootstrap", "bootstrap/bootstrap-original.svg"],
        ["Git", "git/git-original.svg"], ["GitHub", "github/github-original.svg", true],
        ["DigitalOcean", "digitalocean/digitalocean-original.svg"], ["Vercel", "vercel/vercel-original.svg", true],
        ["Postman", "postman/postman-original.svg"], ["MongoDB", "mongodb/mongodb-original.svg"]
    ];

    /* ---------------------------------------------------------
       Language
       --------------------------------------------------------- */
    let lang = "en";
    try { lang = localStorage.getItem("lang") === "ar" ? "ar" : "en"; } catch (e) { /* storage blocked */ }

    const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;

    function applyLang() {
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === "ar" ? "rtl" : "ltr";
        document.title = t("meta.title");
        $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
        $("#langLabel").textContent = lang === "ar" ? "EN" : "عربي";
        renderSkills();
        renderProjects();
        restartTyping();
    }

    $("#langBtn").addEventListener("click", () => {
        lang = lang === "ar" ? "en" : "ar";
        try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ }
        applyLang();
        observeReveals();
    });

    /* ---------------------------------------------------------
       Renderers
       --------------------------------------------------------- */
    const skillIcon = (s) => s.i
        ? `<img src="${DEVICON}${s.i}" alt="" loading="lazy"${s.inv ? ' class="invert"' : ""}>`
        : `<i class="${s.fa}" style="color:${s.c};font-size:20px;width:24px;text-align:center"></i>`;

    function renderSkills() {
        $("#skillsGrid").innerHTML = SKILLS.map((g, gi) => `
            <div class="skill-group reveal tilt" style="--d:${gi * 0.08}s">
                <div class="skill-group__head"><i class="${g.icon}"></i><h3>${t(g.key)}</h3></div>
                <div class="skill-list">
                    ${g.items.map((s) => `<div class="skill">${skillIcon(s)}<span>${s.n}</span></div>`).join("")}
                </div>
            </div>`).join("");
    }

    function renderMarquee() {
        const items = MARQUEE.map(([n, i, inv]) =>
            `<span class="marquee__item"><img src="${DEVICON}${i}" alt="" loading="lazy"${inv ? ' class="invert"' : ""}>${n}</span>`).join("");
        $("#marquee").innerHTML = items + items;
    }

    let currentFilter = "all";

    function renderProjects() {
        $("#projectsGrid").innerHTML = PROJECTS.map((p) => `
            <article class="project reveal tilt" data-cats="${p.cats.join(" ")}"
                style="--c1:${p.c[0]};--c2:${p.c[1]};--c3:${p.c[2]}">
                <div class="project__cover">
                    ${p.featured ? `<span class="project__badge"><i class="fa-solid fa-star"></i> ${t("projects.featured")}</span>` : ""}
                    <span class="project__year">${p.year}</span>
                    <i class="fa-solid ${p.icon} project__icon"></i>
                </div>
                <div class="project__body">
                    <h3 class="project__title">${p.title}</h3>
                    <p class="project__desc">${p[lang]}</p>
                    <div class="tags">${p.tags.map((tg) => `<span class="tag">${tg}</span>`).join("")}</div>
                    <a class="project__link" href="https://github.com/Sami-AL-njadat/${p.repo}" target="_blank" rel="noopener">
                        <i class="fa-brands fa-github"></i>${t("projects.code")}<i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </article>`).join("");
        applyFilter(currentFilter, false);
        bindTilt();
    }

    function applyFilter(filter, animate = true) {
        currentFilter = filter;
        $$(".filter").forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));
        $$(".project").forEach((card) => {
            const show = filter === "all" || card.dataset.cats.split(" ").includes(filter);
            card.classList.toggle("hide", !show);
            if (show && animate) {
                card.classList.add("in");
                card.classList.remove("pop");
                void card.offsetWidth;
                card.classList.add("pop");
            }
        });
    }

    $("#filters").addEventListener("click", (e) => {
        const btn = e.target.closest(".filter");
        if (btn) applyFilter(btn.dataset.filter);
    });

    /* ---------------------------------------------------------
       Typing effect
       --------------------------------------------------------- */
    let typeTimer;

    function restartTyping() {
        clearTimeout(typeTimer);
        const el = $("#typed");
        const roles = t("roles");
        if (reduceMotion) { el.textContent = roles[0]; return; }
        let r = 0, c = 0, deleting = false;
        const tick = () => {
            const word = roles[r];
            c += deleting ? -1 : 1;
            el.textContent = word.slice(0, c);
            let delay = deleting ? 35 : 70;
            if (!deleting && c === word.length) { delay = 1800; deleting = true; }
            else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
            typeTimer = setTimeout(tick, delay);
        };
        tick();
    }

    /* ---------------------------------------------------------
       Reveal on scroll + counters
       --------------------------------------------------------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    function observeReveals() {
        $$(".reveal:not(.in)").forEach((el) => {
            // stagger siblings that enter together
            if (!el.style.getPropertyValue("--d")) {
                const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
                const idx = siblings.indexOf(el);
                if (idx > 0) el.style.setProperty("--d", `${Math.min(idx, 6) * 0.07}s`);
            }
            revealObserver.observe(el);
        });
    }

    function animateCounter(el) {
        const target = +el.dataset.target;
        if (reduceMotion) { el.textContent = target; return; }
        const start = performance.now(), dur = 1600;
        const step = (now) => {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
            else el.dataset.done = "1";
        };
        requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.6 });
    $$(".counter").forEach((el) => counterObserver.observe(el));

    // live public repo count from GitHub
    fetch("https://api.github.com/users/Sami-AL-njadat")
        .then((r) => (r.ok ? r.json() : null))
        .then((u) => {
            if (!u || !u.public_repos) return;
            const el = $("#repoCount");
            el.dataset.target = u.public_repos;
            if (el.dataset.done) el.textContent = u.public_repos;
        })
        .catch(() => { /* offline — keep the static number */ });

    /* ---------------------------------------------------------
       Nav: scroll state, active link, mobile menu, progress
       --------------------------------------------------------- */
    const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
    const progress = $("#scrollProgress"), toTop = $("#toTop");

    function onScroll() {
        const y = window.scrollY;
        nav.classList.toggle("scrolled", y > 20);
        toTop.classList.toggle("show", y > 600);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const setMenu = (open) => {
        burger.classList.toggle("open", open);
        links.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open);
    };
    burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#navLinks") && !e.target.closest("#burger")) setMenu(false);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            $$(".nav__link").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => sectionObserver.observe(s));

    /* ---------------------------------------------------------
       Pointer effects: glow, card spotlight, avatar parallax
       --------------------------------------------------------- */
    function bindTilt() {
        if (isTouch) return;
        $$(".tilt:not([data-bound])").forEach((el) => {
            el.dataset.bound = "1";
            el.addEventListener("pointermove", (e) => {
                const r = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                el.style.setProperty("--my", `${e.clientY - r.top}px`);
            });
        });
    }

    if (!isTouch && !reduceMotion) {
        const glow = $("#cursorGlow");
        const avatar = $("#avatar");
        const hero = $("#home");
        window.addEventListener("pointermove", (e) => {
            glow.style.opacity = "1";
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        }, { passive: true });
        hero.addEventListener("pointermove", (e) => {
            const r = hero.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            avatar.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        });
        hero.addEventListener("pointerleave", () => { avatar.style.transform = ""; });
    }

    /* ---------------------------------------------------------
       Background particle network
       --------------------------------------------------------- */
    function particles() {
        const canvas = $("#bgCanvas");
        const ctx = canvas.getContext("2d");
        let w, h, dots = [], raf;
        const colors = ["139,92,246", "34,211,238", "255,61,94"];

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = canvas.width = innerWidth * dpr;
            h = canvas.height = innerHeight * dpr;
            canvas.style.width = `${innerWidth}px`;
            canvas.style.height = `${innerHeight}px`;
            const count = Math.round(Math.min(70, (innerWidth * innerHeight) / 22000));
            dots = Array.from({ length: count }, () => ({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr,
                r: (Math.random() * 1.6 + 0.6) * dpr, c: colors[Math.floor(Math.random() * colors.length)]
            }));
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const link = 130 * (w / innerWidth);
            for (let i = 0; i < dots.length; i++) {
                const a = dots[i];
                a.x += a.vx; a.y += a.vy;
                if (a.x < 0 || a.x > w) a.vx *= -1;
                if (a.y < 0 || a.y > h) a.vy *= -1;
                ctx.beginPath();
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${a.c},.7)`;
                ctx.fill();
                for (let j = i + 1; j < dots.length; j++) {
                    const b = dots[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < link) {
                        ctx.strokeStyle = `rgba(${a.c},${0.16 * (1 - d / link)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", () => {
            cancelAnimationFrame(raf);
            if (!document.hidden) draw();
        });
        draw();
    }
    if (!reduceMotion) particles();

    /* ---------------------------------------------------------
       Copy buttons, toast & contact form
       --------------------------------------------------------- */
    const toast = $("#toast");
    let toastTimer;
    function showToast(msg, icon = "fa-circle-check") {
        toast.innerHTML = `<i class="fa-solid ${icon}"></i>${msg}`;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    $$("[data-copy]").forEach((btn) => btn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(btn.dataset.copy);
        } catch (e) {
            const ta = Object.assign(document.createElement("textarea"), { value: btn.dataset.copy });
            document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
        }
        showToast(t("toast.copied"));
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i>'; }, 1600);
    }));

    // Web3Forms public access key — messages are delivered to sami.alnajadat@gmail.com
    const WEB3FORMS_KEY = "bd03de7b-a47f-4cb9-b173-f6047ae4fb8e";
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const form = $("#contactForm");
    const formStatus = $("#formStatus");
    const submitBtn = $("#formSubmit");

    function readForm(fields) {
        let ok = true;
        const data = {};
        fields.forEach((n) => {
            const input = form.elements[n];
            const v = input.value.trim();
            const valid = n === "email" ? EMAIL_RE.test(v) : Boolean(v);
            input.closest(".field").classList.toggle("invalid", !valid);
            if (!valid) ok = false;
            data[n] = v;
        });
        if (!ok) showToast(t("toast.fill"), "fa-circle-exclamation");
        return ok ? data : null;
    }

    function setStatus(kind, msg = "") {
        formStatus.hidden = !kind;
        formStatus.className = `form__status${kind ? ` form__status--${kind}` : ""}`;
        formStatus.innerHTML = kind
            ? `<i class="fa-solid ${kind === "ok" ? "fa-circle-check" : "fa-circle-exclamation"}"></i><span>${msg}</span>`
            : "";
    }

    function setSending(sending) {
        submitBtn.disabled = sending;
        submitBtn.innerHTML = sending
            ? `<i class="fa-solid fa-spinner fa-spin"></i><span>${t("form.sending")}</span>`
            : `<i class="fa-regular fa-paper-plane"></i><span data-i18n="form.send">${t("form.send")}</span>`;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        setStatus(null);
        const d = readForm(["name", "email", "subject", "message"]);
        if (!d) return;
        // bots that tick the hidden box get a fake success and nothing is sent
        if (form.elements.botcheck.checked) { form.reset(); setStatus("ok", t("form.ok")); return; }

        setSending(true);
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `Portfolio message: ${d.subject}`,
                    from_name: "Sami Al-Najadat Portfolio",
                    name: d.name,
                    email: d.email,
                    message: d.message
                })
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message);
            form.reset();
            setStatus("ok", t("form.ok"));
        } catch (err) {
            setStatus("err", t("form.err"));
        } finally {
            setSending(false);
        }
    });

    $("#waSend").addEventListener("click", () => {
        setStatus(null);
        const d = readForm(["name", "subject", "message"]);
        if (!d) return;
        const text = `*${d.subject}*\n\n${d.message}\n\n— ${d.name}`;
        window.open(`https://wa.me/962777415591?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });

    form.addEventListener("input", (e) => {
        const field = e.target.closest(".field");
        if (field && e.target.value.trim()) field.classList.remove("invalid");
    });

    /* ---------------------------------------------------------
       Boot
       --------------------------------------------------------- */
    $("#year").textContent = new Date().getFullYear();
    renderMarquee();
    applyLang();
    bindTilt();
    document.body.classList.add("is-loading");

    const finishLoading = () => {
        $("#loader").classList.add("done");
        document.body.classList.remove("is-loading");
        observeReveals();
    };
    if (document.readyState === "complete") setTimeout(finishLoading, 300);
    else window.addEventListener("load", () => setTimeout(finishLoading, 300));
    setTimeout(finishLoading, 2500); // never block on slow third-party assets
})();
