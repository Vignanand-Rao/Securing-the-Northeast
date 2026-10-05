const armyComponents = {
    combat: {
        title: "Combat Arms",
        items: [
            {
                name: "Infantry",
                role: "Combat Arm",
                intro: "Infantry forms the core of close combat and ground operations, operating across diverse terrain and conditions.",
                importance: "Infantry provides the human presence and ground-holding capability required for land operations.",
                northeast: "Mountainous terrain, forests, border environments and difficult ground conditions make adaptable infantry capabilities especially important in the Northeast.",
                career: "Public entry routes include officer and other Army recruitment pathways announced through official recruitment channels.",
                source: "Publicly available Indian Army institutional and recruitment information."
            },
            {
                name: "Mechanised Infantry",
                role: "Combat Arm",
                intro: "Mechanised Infantry combines infantry capabilities with protected mobility and armoured platforms.",
                importance: "It allows infantry forces to move rapidly while operating alongside mechanised and armoured formations.",
                northeast: "Mobility and terrain-specific deployment are important considerations when operating across varied eastern terrain.",
                career: "Personnel enter through established Indian Army recruitment and commissioning pathways.",
                source: "Publicly available Indian Army information."
            },
            {
                name: "Armoured Corps",
                role: "Combat Arm",
                intro: "The Armoured Corps provides protected mobility, firepower and shock action through armoured fighting vehicles.",
                importance: "Armoured capability contributes mobility, protection and concentrated firepower to land operations.",
                northeast: "Terrain and infrastructure influence how armoured capabilities are employed in the eastern theatre.",
                career: "Officer and other Army entry routes provide pathways into Army arms and services according to organisational requirements.",
                source: "Public Indian Army and Ministry of Defence information."
            },
            {
                name: "Regiment of Artillery",
                role: "Combat Arm",
                intro: "Artillery provides fire support to ground forces through a range of weapon systems.",
                importance: "Fire support enables manoeuvre forces to operate effectively and respond to battlefield requirements.",
                northeast: "Mountainous and high-altitude environments create specialised requirements for artillery mobility and deployment.",
                career: "Entry is through standard Army commissioning and recruitment routes.",
                source: "Publicly documented Indian Army organisational information."
            }
        ]
    },

    support: {
        title: "Combat Support",
        items: [
            {
                name: "Corps of Engineers",
                role: "Combat Support",
                intro: "Army Engineers provide specialist engineering capabilities supporting mobility, counter-mobility and field operations.",
                importance: "Engineering support can determine whether forces, vehicles and supplies can move through difficult terrain.",
                northeast: "Mountain roads, rivers, bridges, landslides and difficult terrain make engineering capability highly relevant.",
                career: "Technical and officer entry routes are available through official Army recruitment mechanisms.",
                source: "Public Indian Army institutional information."
            },
            {
                name: "Corps of Signals",
                role: "Combat Support",
                intro: "The Corps of Signals provides communications and information connectivity for military formations.",
                importance: "Reliable communications allow commanders and units to coordinate operations.",
                northeast: "Remote terrain and difficult connectivity conditions make resilient military communications particularly important.",
                career: "Technical officer and other Army recruitment pathways can lead to technical arms and services.",
                source: "Public Indian Army information."
            },
            {
                name: "Army Air Defence",
                role: "Combat Support",
                intro: "Army Air Defence provides protection against aerial threats using dedicated air-defence capabilities.",
                importance: "Air defence protects troops, formations and important assets against aerial threats.",
                northeast: "Strategic terrain and infrastructure require layered defensive preparedness.",
                career: "Army recruitment and commissioning routes provide entry opportunities.",
                source: "Publicly available defence information."
            },
            {
                name: "Army Aviation Corps",
                role: "Combat Support",
                intro: "Army Aviation provides aviation capabilities supporting reconnaissance, mobility and operational missions.",
                importance: "Aviation can provide speed, reach and flexibility where ground movement is difficult.",
                northeast: "Mountainous and remote areas increase the value of aviation support.",
                career: "Army aviation roles are filled through applicable Army officer and specialist pathways.",
                source: "Public Indian Army information."
            }
        ]
    },

    specialist: {
        title: "Specialist Capabilities",
        items: [
            {
                name: "Military Intelligence",
                role: "Specialist Capability",
                intro: "Military intelligence supports commanders with information and assessments relevant to operations.",
                importance: "Timely information helps commanders understand threats and make informed operational decisions.",
                northeast: "Border environments and complex terrain make situational awareness particularly important.",
                career: "Military intelligence functions are staffed through Army personnel and applicable career pathways.",
                source: "Only publicly documented organisational information is used."
            },
            {
                name: "Army Education Corps",
                role: "Specialist Capability",
                intro: "The Army Education Corps supports educational and professional development functions within the Army.",
                importance: "Education and training contribute to professional competence and institutional effectiveness.",
                northeast: "Training and education support personnel operating in challenging environments.",
                career: "Relevant officer and specialist recruitment pathways are announced through official channels.",
                source: "Public Army recruitment and institutional information."
            },
            {
                name: "Corps of Military Police",
                role: "Specialist Capability",
                intro: "Military policing supports discipline, security and policing-related functions within the Army.",
                importance: "Discipline and internal security contribute to effective military functioning.",
                northeast: "Operational deployments require strong organisational discipline and security procedures.",
                career: "Entry depends on applicable Army recruitment and service requirements.",
                source: "Publicly available Army information."
            },
            {
                name: "Judge Advocate General's Department",
                role: "Specialist Capability",
                intro: "The JAG Department provides legal expertise and military legal services.",
                importance: "Legal advice supports lawful military decision-making and administration.",
                northeast: "Legal frameworks are relevant to military operations, personnel matters and coordination with civil authorities.",
                career: "Law graduates can pursue applicable legal officer entry routes announced by the Army.",
                source: "Public Indian Army recruitment information."
            }
        ]
    },

    services: {
        title: "Services & Sustainment",
        items: [
            {
                name: "Army Service Corps",
                role: "Service",
                intro: "The Army Service Corps supports supply, transport and logistics functions.",
                importance: "Operations cannot continue without reliable food, fuel, transport and other supplies.",
                northeast: "Long distances, difficult terrain and remote deployments make logistics especially important.",
                career: "Personnel enter the Army through established recruitment and commissioning pathways.",
                source: "Public Indian Army organisational information."
            },
            {
                name: "Army Ordnance Corps",
                role: "Service",
                intro: "The Army Ordnance Corps manages and supports the provision of military stores and equipment.",
                importance: "Equipment availability and management are fundamental to operational readiness.",
                northeast: "Remote deployments increase the importance of dependable supply chains.",
                career: "Army recruitment and technical/service pathways provide entry opportunities.",
                source: "Publicly available Indian Army information."
            },
            {
                name: "Corps of Electronics and Mechanical Engineers",
                role: "Service",
                intro: "EME provides technical maintenance and engineering support for military equipment.",
                importance: "Maintenance keeps vehicles, systems and equipment operational.",
                northeast: "Remote terrain and demanding operating conditions increase the importance of equipment reliability.",
                career: "Technical and officer entry pathways are available through official Army recruitment systems.",
                source: "Public Indian Army information."
            },
            {
                name: "Army Medical Corps",
                role: "Service",
                intro: "The Army Medical Corps provides medical care and healthcare support to military personnel.",
                importance: "Medical readiness protects personnel and supports operational effectiveness.",
                northeast: "Remote and difficult terrain creates specific medical-support challenges.",
                career: "Medical professionals can enter through applicable military medical recruitment routes.",
                source: "Public Army medical and recruitment information."
            },
            {
                name: "Army Dental Corps",
                role: "Service",
                intro: "The Army Dental Corps provides dental healthcare to military personnel.",
                importance: "Dental health contributes to overall military medical readiness.",
                northeast: "Healthcare support is important for personnel deployed in remote areas.",
                career: "Qualified dental professionals may apply through notified military recruitment pathways.",
                source: "Public Army recruitment information."
            },
            {
                name: "Remount & Veterinary Corps",
                role: "Service",
                intro: "The Remount Veterinary Corps provides veterinary support and animal-related services.",
                importance: "Veterinary capability supports military animals and related operational requirements.",
                northeast: "Animals can have specialised roles in challenging terrain and logistics environments.",
                career: "Veterinary professionals can enter through applicable notified military pathways.",
                source: "Publicly available defence information."
            },
            {
                name: "Army Postal Service",
                role: "Service",
                intro: "The Army Postal Service supports postal communication for military personnel.",
                importance: "Communication with families and reliable postal services contribute to personnel welfare.",
                northeast: "Remote deployments make dependable communication and support services valuable.",
                career: "Personnel serve through applicable Army postal and service arrangements.",
                source: "Publicly documented military postal information."
            },
            {
                name: "Military Nursing Service",
                role: "Service",
                intro: "The Military Nursing Service provides professional nursing care within military medical services.",
                importance: "Nursing is essential to patient care and military healthcare.",
                northeast: "Medical support is particularly important for personnel serving in remote locations.",
                career: "Qualified nursing candidates can pursue notified Military Nursing Service recruitment routes.",
                source: "Public military medical recruitment information."
            }
        ]
    }
};

const news = [
    {
        cat:"Security",
        label:"DEFENCE CAPABILITY",
        date:"07 SEP 2026",
        title:"Army Capability Procurements Cleared by Defence Acquisition Council",
        text:"The Defence Acquisition Council cleared a series of capability proposals for the Armed Forces, including several Army requirements such as CBRN reconnaissance vehicles, high-mobility vehicles and other operational systems.",
        source:"Press Information Bureau",
        why:"Selected because it demonstrates how capability development and modernisation contribute to operational preparedness.",
        url:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2307452&lang=2&reg=48"
    },
    {
        cat:"Security",
        label:"COUNTER-NARCOTICS",
        date:"16 SEP 2026",
        title:"231.8 kg of Suspected Methamphetamine Seized in Northeast Operation",
        text:"A DRI-led operation targeting drug trafficking in the Northeast received assistance from Assam Rifles personnel, resulting in the seizure of 231.8 kg of suspected methamphetamine.",
        source:"Press Information Bureau",
        why:"Selected because it illustrates coordinated security action against cross-border and organised trafficking threats.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310841&lang=1&reg=21"
    },
    {
        cat:"Society",
        label:"COMMUNITY ENGAGEMENT",
        date:"09 SEP 2026",
        title:"Assam Rifles Supports Women's Literacy & Empowerment Initiative",
        text:"An initiative in Manipur focused on literacy and empowerment, with 50 students participating.",
        source:"Press Information Bureau",
        why:"Selected because it demonstrates a community-oriented dimension of security institutions in the Northeast.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2308128&lang=2&reg=48"
    },
    {
        cat:"Development",
        label:"COMMUNITY OUTREACH",
        date:"02 OCT 2026",
        title:"Army Public School Agartala Joins Community Outreach Activities",
        text:"Spear Corps and Army Public School Agartala participated in community-oriented Swachhata Hi Seva activities.",
        source:"Press Information Bureau",
        why:"Selected to show how community participation and civic activities can complement broader stability efforts.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2318472&lang=2&reg=48"
    },
    {
        cat:"Development",
        label:"SWACHHATA",
        date:"29 SEP 2026",
        title:"Swachh Bharat Campaign at Agartala Military Station",
        text:"Community cleanliness activities were conducted at Agartala Military Station as part of the national cleanliness campaign.",
        source:"Press Information Bureau",
        why:"Selected as an example of institutional participation in community-oriented national initiatives.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2316589&lang=2&reg=48"
    },
    {
        cat:"Security",
        label:"JOINT EXERCISE",
        date:"28 SEP 2026",
        title:"KAZIND-2026 Focuses on Counter-Terrorism & Mountain Operations",
        text:"Indian and Kazakh forces trained in counter-terrorism, mountainous terrain operations, UAS and counter-UAS capabilities and intelligence-related activities.",
        source:"Press Information Bureau",
        why:"Selected because it demonstrates operational training and experience-sharing relevant to difficult terrain and contemporary threats.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2315856&lang=1&reg=3"
    },
    {
        cat:"Security",
        label:"JOINT EXERCISE",
        date:"21 SEP 2026",
        title:"NOMADIC ELEPHANT 2026 Strengthens India-Mongolia Cooperation",
        text:"The exercise focused on counter-insurgency operations in semi-urban and mountainous terrain, including drones, counter-drones and joint operations.",
        source:"Press Information Bureau",
        why:"Selected because it highlights training in terrain and threat environments that are relevant to India's broader security preparedness.",
        url:"https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2313046&lang=1&reg=3"
    },
    {
        cat:"Society",
        label:"EDUCATION",
        date:"08 SEP 2026",
        title:"INA Museum and Sainik School Imphal Highlight Northeast's Military Heritage",
        text:"An official visit connected students and institutions with the region's military history and heritage.",
        source:"Press Information Bureau",
        why:"Selected because historical awareness and youth engagement contribute to understanding national service and integration.",
        url:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2307855&lang=2&reg=48"
    },
    {
        cat:"Society",
        label:"YOUTH",
        date:"10 SEP 2026",
        title:"Nagaland Youth Encouraged to Participate in Young Leaders Dialogue",
        text:"Youth engagement was highlighted as part of wider efforts to encourage leadership and participation.",
        source:"Press Information Bureau",
        why:"Selected because youth participation is an important dimension of long-term social resilience.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2308876&lang=2&reg=48"
    },
    {
        cat:"Sports",
        label:"SPORTS",
        date:"15 SEP 2026",
        title:"Mizoram Sports Ecosystem Reviewed",
        text:"A regional review examined the sports ecosystem and opportunities for strengthening sports infrastructure and youth development.",
        source:"Press Information Bureau",
        why:"Selected because sports connect youth development, discipline, achievement and regional opportunity.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310515&lang=1&reg=48"
    },
    {
        cat:"Development",
        label:"REGIONAL DEVELOPMENT",
        date:"16 SEP 2026",
        title:"Mizoram Review Connects Connectivity, Livelihoods, Youth & Sports",
        text:"Regional development discussions connected infrastructure, livelihoods and opportunities for young people.",
        source:"Press Information Bureau",
        why:"Selected because it demonstrates the wider stability-development relationship within the region.",
        url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310792&lang=2&reg=48"
    },
    {
        cat:"Security",
        label:"SMUGGLING",
        date:"25 SEP 2026",
        title:"DRI Action Targets Cross-Border Smuggling in Assam & Mizoram",
        text:"An enforcement operation addressed cross-border smuggling activity in the Northeast.",
        source:"Press Information Bureau",
        why:"Selected because border-region enforcement is directly relevant to the broader security environment of the Northeast.",
        url:"https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2314894&lang=1&reg=3"
    }
];

let activeGroup = "combat";
let activeFilter = "all";

/* =========================
   ARMY COMPONENTS
========================= */

function renderComponents(group){

    activeGroup = group;

    const data = armyComponents[group];

    const grid = document.getElementById("componentGrid");
    const title = document.getElementById("componentGroupTitle");
    const count = document.getElementById("componentCount");

    if(!data || !grid || !title || !count){
        return;
    }

    title.textContent = data.title;

    count.textContent =
        `${data.items.length} capabilities`;

    grid.innerHTML = data.items.map((item,index) => {

        return `
            <button
                class="component-card"
                data-component="${group}"
                data-index="${index}"
                type="button"
            >
                <div class="component-number">
                    ${String(index + 1).padStart(2,"0")}
                </div>

                <h3>${escapeHTML(item.name)}</h3>

                <p>
                    ${escapeHTML(item.intro)}
                </p>

                <small>
                    ${escapeHTML(item.role)}
                </small>
            </button>
        `;

    }).join("");

    document.querySelectorAll(".component-card").forEach(card => {

        card.addEventListener("click", () => {

            const groupName = card.dataset.component;
            const index = Number(card.dataset.index);

            openComponent(groupName,index);

        });

    });
}

/* =========================
   COMPONENT MODAL
========================= */

function openComponent(group,index){

    const item =
        armyComponents[group].items[index];

    if(!item){
        return;
    }

    const modal =
        document.getElementById("componentModal");

    document.getElementById("modalCategory").textContent =
        `${armyComponents[group].title} • ${item.role}`;

    document.getElementById("modalTitle").textContent =
        item.name;

    document.getElementById("modalIntro").textContent =
        item.intro;

    document.getElementById("modalRole").textContent =
        item.role + " — " + item.intro;

    document.getElementById("modalImportance").textContent =
        item.importance;

    document.getElementById("modalNortheast").textContent =
        item.northeast;

    document.getElementById("modalCareer").textContent =
        item.career;

    document.getElementById("modalSource").textContent =
        item.source;

    modal.classList.add("open");

    document.body.classList.add("modal-open");
}

function closeComponent(){

    const modal =
        document.getElementById("componentModal");

    if(!modal){
        return;
    }

    modal.classList.remove("open");

    document.body.classList.remove("modal-open");
}

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

if(modalClose){
    modalClose.addEventListener("click",closeComponent);
}

if(modalOverlay){
    modalOverlay.addEventListener("click",closeComponent);
}

document.addEventListener("keydown",event => {

    if(event.key === "Escape"){
        closeComponent();
    }

});

/* =========================
   GROUP BUTTONS
========================= */

document
    .querySelectorAll(".group-card")
    .forEach(button => {

        button.addEventListener("click",() => {

            document
                .querySelectorAll(".group-card")
                .forEach(item =>
                    item.classList.remove("active")
                );

            button.classList.add("active");

            renderComponents(
                button.dataset.group
            );

        });

    });

/* =========================
   NEWSROOM
========================= */

function renderNews(){

    const grid =
        document.getElementById("newsGrid");

    const searchInput =
        document.getElementById("searchInput");

    if(!grid || !searchInput){
        return;
    }

    const query =
        searchInput.value
            .toLowerCase()
            .trim();

    const filtered =
        news.filter(item => {

            const categoryMatch =
                activeFilter === "all" ||
                item.cat === activeFilter;

            const searchable = `
                ${item.title}
                ${item.text}
                ${item.label}
                ${item.source}
                ${item.date}
            `.toLowerCase();

            const searchMatch =
                !query ||
                searchable.includes(query);

            return categoryMatch && searchMatch;

        });

    if(filtered.length === 0){

        grid.innerHTML = `
            <div class="no-results">
                No articles match your search.
            </div>
        `;

        return;
    }

    grid.innerHTML =
        filtered.map(item => {

            return `
                <article class="news-card">

                    <div class="news-meta">
                        <span class="news-tag">
                            ${escapeHTML(item.label)}
                        </span>

                        <span>
                            ${escapeHTML(item.date)}
                        </span>
                    </div>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.text)}
                    </p>

                    <div class="news-bottom">

                        <span class="news-source">
                            ${escapeHTML(item.source)}
                        </span>

                        <div class="news-links">

                            <a
                                class="news-link"
                                href="${item.url}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source ↗
                            </a>

                            <button
                                type="button"
                                class="news-link why-btn"
                                data-title="${escapeAttribute(item.title)}"
                                data-why="${escapeAttribute(item.why)}"
                            >
                                Why selected
                            </button>

                        </div>

                    </div>

                </article>
            `;

        }).join("");

    document
        .querySelectorAll(".why-btn")
        .forEach(button => {

            button.addEventListener("click",() => {

                showSelectionReason(
                    button.dataset.title,
                    button.dataset.why
                );

            });

        });

}

/* =========================
   WHY SELECTED
========================= */

function showSelectionReason(title,why){

    const existing =
        document.getElementById("reasonModal");

    if(existing){
        existing.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "reasonModal";
    modal.className = "modal open";

    modal.innerHTML = `
        <div class="modal-overlay reason-overlay"></div>

        <article class="modal-content">

            <button
                class="modal-close reason-close"
                type="button"
                aria-label="Close"
            >
                ×
            </button>

            <p class="eyebrow">
                EDITORIAL NOTE
            </p>

            <h2>
                Why this article was selected
            </h2>

            <p class="modal-intro">
                ${escapeHTML(title)}
            </p>

            <div class="modal-source">
                <span>REASON</span>
                <p>
                    ${escapeHTML(why)}
                </p>
            </div>

        </article>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    const close = () => {

        modal.remove();
        document.body.classList.remove("modal-open");

    };

    modal
        .querySelector(".reason-close")
        .addEventListener("click",close);

    modal
        .querySelector(".reason-overlay")
        .addEventListener("click",close);

}

/* =========================
   SAFE HTML HELPERS
========================= */

function escapeHTML(text){

    return String(text)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}

function escapeAttribute(text){

    return escapeHTML(text);

}

/* =========================
   NEWS FILTERS
========================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click",() => {

            document
                .querySelectorAll(".filter")
                .forEach(item =>
                    item.classList.remove("active")
                );

            button.classList.add("active");

            activeFilter =
                button.dataset.filter;

            renderNews();

        });

    });

const searchInput =
    document.getElementById("searchInput");

if(searchInput){
    searchInput.addEventListener("input",renderNews);
}

/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const mainNav =
    document.getElementById("mainNav");

if(menuBtn && mainNav){

    menuBtn.addEventListener("click",() => {

        const isOpen =
            mainNav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    document
        .querySelectorAll("#mainNav a")
        .forEach(link => {

            link.addEventListener("click",() => {

                mainNav.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}

/* =========================
   IMAGE FALLBACKS
========================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener("error",() => {

            image.classList.add("image-failed");

        });

    });

/* =========================
   INITIAL LOAD
========================= */

renderComponents("combat");
renderNews();