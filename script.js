document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      id: "project1",
      title: "IR35 Contract Review Tool",
      icon: "fas fa-file-contract",
      pitchShort:
        "Instantly assesses IR35 status for contractors, mitigating tax risks and penalties from complex UK off-payroll working rules.",
      pitchFull:
        "A web-based questionnaire that determines whether a contractor’s engagement falls “inside” or “outside” IR35 (UK off-payroll working rules). This tool helps contractors and businesses gauge IR35 status, a complex area where errors incur heavy taxes. It provides an independent risk assessment, especially valuable as HMRC’s own CEST tool often fails to give a clear answer.",
      inputOutput:
        "Users complete a ~10-20 question multi-step Q&A form on contract details, working practices, control, substitution rights, etc. The tool outputs a color-coded risk assessment report (e.g., 'Likely Outside IR35') with a breakdown of influencing factors and recommendations, available as a PDF.",
      complexity:
        "A decision-tree expert system. Relies on form input and conditional logic. No heavy data integrations needed for MVP.",
      aiEnhancement:
        "Optional AI can generate plain-language explanations of results (e.g., 'Your contract is high-risk because...') or personalize suggestions. Future AI could track evolving case law.",
      monetization: [
        "White-label License (Accountancy Firms): £50–£100/month for unlimited use & lead gen.",
        "Per-Report Sales (Contractors): £30–£50 for a detailed assessment.",
        "Partnerships: Licensing to recruitment agencies or contract platforms.",
        "Premium Version: Bundled with expert human review for a higher fee.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project2",
      title: "Director’s Salary vs Dividend Optimizer",
      icon: "fas fa-calculator-alt",
      pitchShort:
        "Calculates the most tax-efficient salary/dividend mix for SME directors, maximizing post-tax income amidst changing tax rules.",
      pitchFull:
        "A tax planning calculator helping owner-managed company directors find the optimal mix of salary and dividends. Solves the problem of minimizing National Insurance and income tax, especially crucial with recent changes to dividend allowances. Helps accountants demonstrate tangible savings scenarios to SME clients.",
      inputOutput:
        "User inputs anticipated profit, other income, tax year, and optionally desired take-home or pension contributions. Outputs a comparison of scenarios (all salary, min salary + dividends, custom) showing net take-home pay, tax breakdowns (income, corp, NI, dividend), and the optimal strategy. Results in table/chart format with PDF download.",
      complexity:
        "Computation-heavy but conceptually simple, based on defined UK tax rules. Main challenge is keeping tax rates updated (hard-code for MVP).",
      aiEnhancement:
        "AI can generate client-friendly summaries of results or personalized advice (e.g., 'Given your profit and recent dividend cuts, this split maximizes take-home...').",
      monetization: [
        "Subscription for Accounting Firms: £20–£50/month for an always-updated version.",
        "White-Label Web Widget: Annual license ~£200 for firms to embed on their site.",
        "SaaS for Business Owners: Freemium (1 free calc) or one-time £20 upgrade / £30/year subscription.",
        "Indirect: Improves accountant advisory efficiency, justifying service fees.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project3",
      title: "Sole Trader vs Limited Company Analyzer",
      icon: "fas fa-balance-scale-right",
      pitchShort:
        "Compares tax implications and take-home pay for entrepreneurs deciding between sole trader and limited company structures.",
      pitchFull:
        "A comparison tool that helps entrepreneurs decide whether to incorporate or remain a sole trader by analyzing tax and take-home pay differences. Addresses the common question: 'At what profit level does incorporation become beneficial?' Provides concrete numbers for accountants to advise clients.",
      inputOutput:
        "User inputs annual profit, amount drawn for personal use, other income. Tool runs parallel calculations for Sole Trader (income tax + NICs) vs. Limited Company (corp tax, salary/dividends). Outputs side-by-side comparison of total taxes, take-home pay, and net income difference. Includes qualitative pros/cons (liability, admin).",
      complexity:
        "Arithmetic based on tax rules, similar to Salary/Dividend Optimizer but with an added sole trader scenario. Assumptions can be baked in.",
      aiEnhancement:
        "AI can generate tailored explanatory output (e.g., 'With £50k profit, incorporation might save ~£Z, but weigh admin costs...') or answer 'what-if' follow-ups.",
      monetization: [
        "White-Label License (Firms): £100–£200 per year for use on site or in consultations (lead-gen).",
        "Bundle Offering: Part of a suite of financial tools for firms.",
        "Direct Sale (Small Businesses): One-time £20 purchase for a polished, updated app (less likely primary).",
        "Indirect: Helps accountants sell incorporation services.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project4",
      title: "Compliance Deadline Calendar Generator",
      icon: "fas fa-calendar-alt",
      pitchShort:
        "Generates a personalized tax compliance calendar for UK small businesses, preventing missed deadlines and penalties.",
      pitchFull:
        "An online wizard creating a tailored calendar of all filing and payment deadlines (tax, VAT, payroll, Companies House). Solves deadline management and client education, reducing last-minute scrambles and automating manual reminders from accountants.",
      inputOutput:
        "User answers a questionnaire (business type, year-end, VAT registration, payroll scheme). Outputs a chronological list of key deadlines with descriptions, viewable as a calendar/timeline and downloadable as iCal or PDF, brandable for accounting firms.",
      complexity:
        "Largely date calculations and static, well-defined rules. UI is a simple form. iCal/PDF generation uses standard libraries.",
      aiEnhancement:
        "AI could add friendly advice/explanations to deadlines (e.g., 'Self-assessment is busy, prepare early...') or power a chatbot for input queries (advanced).",
      monetization: [
        "White-Label Subscription (Firms): £20–£50/month to embed on website with branding.",
        "Bundle with other tools for firms.",
        "Partnerships: Licensing to Chambers of Commerce, professional bodies.",
        "Premium Upsell: Automated email/SMS deadline reminders for a higher fee.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project5",
      title: "Cash Flow Forecast & Runway Planner",
      icon: "fas fa-chart-line",
      pitchShort:
        "Lightweight tool for small businesses to map cash inflows/outflows, visualize trends, and predict cash runway.",
      pitchFull:
        "A simple cash flow forecasting tool helping small business owners (or their accountants) project cash over several months and identify potential shortfalls. Addresses critical cash flow visibility, a top reason for business failure, without the complexity of traditional software.",
      inputOutput:
        "User inputs starting cash, lists recurring/one-off cash inflows and outflows month-by-month. Outputs a line chart of projected cash balance, highlights low points/deficits, and calculates cash burn rate/runway. Interactive on-screen with PDF report download.",
      complexity:
        "Front-end heavy for data input and chart display (using libraries like Chart.js). Calculations are aggregations and running balances, can be browser-side.",
      aiEnhancement:
        "AI can provide analysis/recommendations (e.g., 'Cash drops in Q3 due to X; consider Y...') or perform conversational 'what-if' scenario analysis.",
      monetization: [
        "White-Label Subscription (Firms): £50–£100/month (if bundled) to enhance advisory.",
        "Direct SaaS (Small Biz): Freemium (3-month forecast) or £10–£20/month for extended features.",
        "One-Off Report: £15 for a quick PDF forecast (less common).",
        "Indirect: Aids accountants in upselling cash management advisory.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project6",
      title: "Company Car Tax Benefit Calculator",
      icon: "fas fa-car",
      pitchShort:
        "Compares tax implications of a company car vs. personal car, helping decide the most cost-effective option, especially for EVs.",
      pitchFull:
        "A focused calculator evaluating Benefit-in-Kind (BiK) taxes vs. personal car costs for business owners/employees. Addresses the common question: 'Should I put my new car through the company?' especially relevant with low BiK rates for electric vehicles.",
      inputOutput:
        "User inputs car type/value (or CO2/fuel type), mileage, personal tax bracket, company tax rate. Outputs a side-by-side annual cost comparison: Company Car (BiK tax for individual, company costs net of tax relief) vs. Personal Car (personal costs offset by mileage claims). Highlights net savings.",
      complexity:
        "Multiple tax rules (BiK, personal/corp tax, NI, mileage rates) but well-documented. Calculations are formula-based.",
      aiEnhancement:
        "AI can generate natural language explanations of the outcome (e.g., 'For your EV, company car is cost-effective because...') or handle follow-up 'what-if' questions.",
      monetization: [
        "White-Label (Accountants/Advisors/Leasing Co.): £10–£20/month per firm (if standalone) or bundled.",
        "Content Marketing Lead-Gen: Free calculator to gather leads for referrals (accounting/leasing).",
        "One-Time Fee (End-Users): ~£5 for a detailed PDF (less likely to be primary).",
        "Subscription Model: Justified by annual updates to BiK rates and tax rules.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project7",
      title: "Financial Statement AI Report Generator",
      icon: "fas fa-robot",
      pitchShort:
        "AI-powered tool that takes financial data and auto-generates plain-English narrative reports, saving accountants time.",
      pitchFull:
        "An AI tool that produces written commentary on a company's financial figures (e.g., management accounts, year-end statements). Saves accountants significant time in report writing and helps clients understand their numbers better. Acts as a virtual financial analyst.",
      inputOutput:
        "Accountant inputs key financial metrics (revenue, profit, key balance sheet items for current/prior periods) or uploads summarized P&L/trial balance (advanced). User can specify comparative period, analysis focus, tone. Outputs a written report of several paragraphs analyzing trends, significant changes, and potential reasons. Editable and exportable.",
      complexity:
        "Relies on Natural Language Generation AI (e.g., GPT API). Developer crafts prompts to feed data to the AI and request analysis. UI is a form. Core AI heavy lifting is via API.",
      aiEnhancement:
        "AI is the core feature for report generation. Further AI could refine tone, incorporate specific client context, or suggest follow-up actions.",
      monetization: [
        "B2B Subscription (Accounting Firms): £50–£100/month for unlimited use (significant time-saver).",
        "Per-Report Pricing: e.g., £5 per generated report (less preferable for adoption).",
        "Integration/Licensing: With existing accounting software or reporting platforms.",
        "Tiered Usage: Based on number of reports, factoring in AI API costs.",
      ],
      timeframe: "2-4 Weeks",
    },
    {
      id: "project8",
      title: "MTD ITSA Readiness Assessment Tool",
      icon: "fas fa-tasks",
      pitchShort:
        "A readiness quiz helping accountants and clients prepare for Making Tax Digital for Income Tax Self Assessment (MTD ITSA).",
      pitchFull:
        "An interactive questionnaire to assess preparedness for the UK's upcoming MTD ITSA digital filing regime. Addresses the knowledge and preparedness gap for many sole traders and landlords. Helps accountants triage clients needing support and generates a to-do list.",
      inputOutput:
        "User answers ~8-12 yes/no/multiple-choice questions (digital bookkeeping, income level, MTD familiarity, compliance habits). Outputs a Readiness Score (e.g., percentage or traffic light) with specific, actionable recommendations based on answers. Report can be emailed/downloaded as PDF (brandable).",
      complexity:
        "Technically simple: standard form mapping answers to outcomes via basic scoring/logic. Content (questions, advice) is key.",
      aiEnhancement:
        "AI can personalize the advice summary or power a chatbot for follow-up MTD questions (e.g., 'What does digital records mean?').",
      monetization: [
        "White-Label Licensing (Firms): £50–£100/month during MTD ramp-up (2025-2026) for lead-gen.",
        "One-Time Fee (Firms): For a version they can host.",
        "Partnerships: Licensing to landlord associations, freelancer networks.",
        "Indirect: Positions firm as MTD expert, leads to new service engagements.",
      ],
      timeframe: "2-4 Weeks",
    },
  ];

  const projectGrid = document.getElementById("projectGrid");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalIcon = document.getElementById("modal-icon");
  const modalPitchFull = document.getElementById("modal-pitch-full");
  const modalInputOutput = document.getElementById("modal-input-output");
  const modalTimeframe = document.getElementById("modal-timeframe");
  const modalComplexity = document.getElementById("modal-complexity");
  const modalAI = document.getElementById("modal-ai");
  const modalMonetization = document.getElementById("modal-monetization");
  const closeModalButton = document.querySelector(".close-button");

  // Populate project cards
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card", "reveal-on-scroll");
    card.innerHTML = `
            <div class="card-header">
                <div class="icon"><i class="${project.icon}"></i></div>
                <h3>${project.title}</h3>
            </div>
            <div class="card-body">
                <p class="pitch">${project.pitchShort}</p>
                <div class="details">
                    <p><strong><i class="fas fa-clock"></i> Development:</strong> ${project.timeframe}</p>
                    <p><strong><i class="fas fa-dollar-sign"></i> Monetization Snapshot:</strong></p>
                    <ul>
                        ${project.monetization
                          .slice(0, 2)
                          .map((item) => `<li>${item.split(":")[0]}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
            <button class="details-button" data-project-id="${project.id}">View Full Details</button>
        `;
    projectGrid.appendChild(card);

    card.querySelector(".details-button").addEventListener("click", () => {
      modalTitle.textContent = project.title;
      modalIcon.className = project.icon + " fa-fw"; // Ensure consistent sizing if needed
      modalPitchFull.textContent = project.pitchFull;
      modalInputOutput.textContent = project.inputOutput;
      modalTimeframe.textContent = project.timeframe;
      modalComplexity.textContent = project.complexity;
      modalAI.textContent = project.aiEnhancement;

      modalMonetization.innerHTML = ""; // Clear previous
      project.monetization.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        modalMonetization.appendChild(li);
      });

      modal.style.display = "block";
    });
  });

  // Modal close functionality
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: unobserve after revealed to save resources
          // revealObserver.unobserve(entry.target);
        } else {
          // Optional: remove class if you want elements to hide again when scrolled out of view
          // entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 10% of the element is visible

  revealElements.forEach((el) => revealObserver.observe(el));

  // Twinkling stars (simple example - for more advanced, use a library or canvas)
  const starsBg = document.querySelector(".stars-bg");
  function createStars() {
    if (!starsBg) return;
    const numStars = 100; // Adjust for density
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.style.position = "absolute";
      star.style.width = Math.random() * 2 + "px"; // Star size
      star.style.height = star.style.width;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.opacity = Math.random();
      star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite alternate`;
      starsBg.appendChild(star);
    }
  }
  createStars(); // Call this to generate CSS stars

  // Keyframes for CSS generated stars (add to CSS or style tag)
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
        @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1.2); }
        }
    `;
  document.head.appendChild(styleSheet);
});
