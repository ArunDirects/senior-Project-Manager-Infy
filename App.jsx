import { useState } from "react";

const quickRef = {
  intro: [
    { label: 'Key PM Skill', value: 'Delivery Ownership' },
    { label: 'Stakeholder Management', value: 'RACI Matrix' },
    { label: 'Communication Style', value: 'Tailored per audience' },
    { label: 'PM Analogy', value: 'Captain of a Ship' },
    { label: 'Core Frameworks', value: 'Agile + Six Sigma' },
    { label: 'Infosys Focus', value: 'Process Discipline' },
  ],
  sdlc: [
    { label: 'Project Phases', value: '5 (Init → Close)' },
    { label: 'Scope Control', value: 'Change Request (CR)' },
    { label: 'Task Breakdown', value: 'WBS' },
    { label: 'Risk Tool', value: 'Risk Register' },
    { label: 'Client Handoff', value: 'UAT Sign-off' },
    { label: 'Team Assignments', value: 'RACI Matrix' },
  ],
  metrics: [
    { label: 'Defect Leakage Goal', value: '< 2%' },
    { label: 'Healthy Utilization', value: '75–85%' },
    { label: 'First Pass Yield', value: 'Higher = better' },
    { label: 'P1 Bug Fix SLA', value: '< 4 hours' },
    { label: 'OTD Target', value: '≥ 90%' },
    { label: 'Cycle Time Goal', value: 'As low as possible' },
  ],
  agile: [
    { label: 'Sprint Duration', value: '2 weeks' },
    { label: 'Daily Standup', value: '15 minutes' },
    { label: 'Ideal Team Size', value: '5–9 people' },
    { label: 'Sprint Planning', value: '4–8 hours' },
    { label: 'Retrospective', value: '1–3 hours' },
    { label: 'Sprint Review', value: '2–4 hours' },
  ],
  sixsigma: [
    { label: 'DMAIC Steps', value: 'D-M-A-I-C' },
    { label: 'Six Sigma Target', value: '3.4 defects/M' },
    { label: 'Green Belt Role', value: 'Lead small projects' },
    { label: 'Root Cause Tool', value: '5 Whys / Fishbone' },
    { label: '80/20 Rule', value: 'Pareto Analysis' },
    { label: 'Sustain Gains', value: 'Control Charts + SOP' },
  ],
  people: [
    { label: 'Shrinkage Formula', value: 'Non-prod ÷ Total × 100' },
    { label: 'Healthy Shrinkage', value: '< 25–30%' },
    { label: 'Attrition Formula', value: 'Left ÷ Avg HC × 12/M' },
    { label: 'Target Attrition', value: '< 15% annually' },
    { label: 'KRA Review Cycle', value: 'Quarterly' },
    { label: 'KPI Setting', value: 'SMART Goals' },
  ],
  maps: [
    { label: 'ETA Error Target', value: 'MAPE < 10%' },
    { label: 'Route API SLA', value: '< 200ms (99.9%)' },
    { label: 'P1 Resolution', value: '< 15 minutes' },
    { label: 'Data Freshness', value: 'POI < 90 days old' },
    { label: 'Canary Release', value: '5–10% traffic first' },
    { label: 'Release Monitor', value: '48 hrs post-launch' },
  ],
  interview: [
    { label: 'Answer Framework', value: 'STAR Method' },
    { label: 'Top Certification', value: 'PMP / CSM' },
    { label: 'EVM: On Schedule', value: 'SPI > 1' },
    { label: 'EVM: Under Budget', value: 'CPI > 1' },
    { label: 'Estimation Method', value: 'PERT 3-point' },
    { label: 'Stakeholder Map', value: 'Power × Interest' },
  ],
  jd: [
    { label: 'RAID', value: 'Risks·Assumptions·Issues·Deps' },
    { label: 'SAFe PI Duration', value: '8–12 weeks' },
    { label: 'PI Sprints', value: '4 delivery + 1 IP sprint' },
    { label: 'Governance Cadence', value: 'Weekly / Monthly / Quarterly' },
    { label: 'Predictability Target', value: '≥ 80% PI objectives' },
    { label: 'Throughput Metric', value: 'Stories completed per week' },
  ],
};

const sections = [
  {
    id: "intro",
    icon: "🎯",
    title: "Interview Overview",
    color: "#1a73e8",
    subsections: [
      {
        title: "What Infosys Looks For in a PM",
        content: `Infosys is one of the world's largest IT services companies. When interviewing for a Project Manager role — especially in a Web Design & Development Operations team — they look for:

• **Delivery Ownership**: Can you take a project from requirement to release without losing track?
• **Stakeholder Communication**: Can you manage clients, designers, developers, and QA at the same time?
• **Process Discipline**: Do you follow structured processes like Agile/Scrum religiously?
• **Metrics & Reporting**: Can you measure team health, quality, and delivery speed?
• **People Management**: Can you handle a diverse team, resolve conflicts, and reduce attrition?
• **Continuous Improvement**: Do you know Six Sigma, Kaizen, or process optimization frameworks?

Think of a PM as the **captain of a ship** — you don't row every oar, but you make sure the ship reaches its destination on time, within budget, at the right quality.`
      }
    ]
  },
  {
    id: "sdlc",
    icon: "🌐",
    title: "Project Management in Web Dev",
    color: "#0f9d58",
    subsections: [
      {
        title: "The Full Flow: How a Website Project Works",
        content: `Imagine a client comes to Infosys saying: "Build us a new e-commerce website." Here's how the PM manages this end-to-end:

**PHASE 1 — Initiation**
• Meet with the client to understand their business goals
• Create a **Project Charter** (document that officially starts the project)
• Define scope: what is included and what is NOT included
• Identify stakeholders: Who cares about this project? (Client, Dev team, Design team, QA, Business Analysts)

**PHASE 2 — Planning**
• Create a **Work Breakdown Structure (WBS)**: Break the project into small tasks
  → E.g., Homepage → Header → Navigation Menu → Logo placement
• Estimate time for each task (in Story Points or hours)
• Create a **Project Timeline / Gantt Chart**
• Assign resources (who does what)
• Identify risks: "What could go wrong?" — Server downtime, scope creep, team leaves
• Create a **Risk Register** with mitigation plans

**PHASE 3 — Execution**
• Developers build features in **Sprints** (2-week cycles in Agile)
• Designers create UI/UX wireframes → mockups → prototypes
• PM holds **Daily Standups**: 15-min meetings — What did you do? What will you do? Any blockers?
• PM tracks progress on tools like Jira, Azure DevOps, or MS Project
• PM communicates weekly status reports to client

**PHASE 4 — Monitoring & Controlling**
• Compare actual progress vs planned (Earned Value Management)
• Track bugs and defects from QA
• Manage **Change Requests**: client wants to add a new feature mid-project
• Ensure budget is not overrun

**PHASE 5 — Closure**
• UAT (User Acceptance Testing) with client
• Final deployment to production
• **Lessons Learned** documentation
• Project handover to operations/support team
• Client sign-off`
      },
      {
        title: "Website-Specific PM Challenges",
        content: `**Cross-functional Team Coordination** — Designers, developers, content writers, SEO experts all work in parallel.
→ PM creates a **RACI Matrix**: Responsible, Accountable, Consulted, Informed.

**Browser Compatibility & Performance** — Website must work on Chrome, Safari, Firefox, on mobile and desktop.
→ PM includes this in the **Definition of Done** (DoD) for every sprint.

**Content Dependency** — Developers can't build the blog page if content team hasn't written articles.
→ PM manages these **dependencies** in the project plan and sets deadlines for content team.`
      },
      {
        title: "Scope Creep — What It Is & How to Control It",
        content: `**What is Scope Creep?**
Scope Creep is when the project gradually grows BEYOND what was originally agreed — usually because the client keeps adding new requirements after the project has already started, without adjusting the timeline or budget.

The word "creep" is perfect — it doesn't happen all at once. It sneaks in slowly, one small request at a time, until suddenly your 3-month project becomes a 6-month project.

**Simple Example:**
You agreed to build a 5-page company website. Halfway through:
→ "Can we add a blog section?" (Week 3)
→ "Actually, add a live chat widget too." (Week 5)
→ "Oh, and we need the site in 3 languages." (Week 7)
Each request sounds small. Together they've doubled the work — but the deadline hasn't moved.

**Why is Scope Creep Dangerous?**
• Timeline blows out — your 10-week project becomes 20 weeks
• Budget overruns — you're paying developers for extra weeks
• Team gets burned out — they keep working on a "nearly done" project
• Quality drops — rushed additions have more bugs
• Client relationship suffers — they blame YOU for delays, even though they caused them

**The 5 Root Causes of Scope Creep:**
1️⃣ **Vague requirements at the start** — "Make it look modern" is not a requirement
2️⃣ **No formal change process** — Client calls developer directly and asks for changes
3️⃣ **Fear of saying no** — PM or team agrees to every request to keep client happy
4️⃣ **Poor stakeholder alignment** — Different people in the client company want different things
5️⃣ **Gold plating** — YOUR OWN team adds features the client didn't ask for (trying to impress)

**How a PM Controls Scope Creep — Step by Step:**

📌 **Step 1: Lock the Scope at the Start**
Create a detailed **Scope Document / Statement of Work (SOW)**
List exactly what IS included: "5 pages — Home, About, Services, Blog, Contact"
List what is NOT included: "No e-commerce, no user login, no multilingual support"
Get the client to sign this document. This is your reference point for every future discussion.

📌 **Step 2: Set Up a Change Request (CR) Process**
Any new requirement — no matter how small — must go through a formal CR.
A Change Request document includes:
• Description of the change
• Why it is needed
• Impact on timeline (how many extra days?)
• Impact on cost (how much extra budget?)
• Impact on other features (does this delay something else?)
The client must APPROVE the CR in writing before any work begins.

📌 **Step 3: Educate the Client Early**
On Day 1 of the project, explain: "Our agreement covers X. Any additions will need a Change Request. This isn't to be difficult — it's to protect your budget and timeline."
Most clients respect this when explained upfront. They only take advantage when no boundary is set.

📌 **Step 4: Protect the Sprint**
In Agile, once a sprint starts, NO new work enters that sprint.
If the client raises something urgent mid-sprint, it goes into the NEXT sprint's backlog.
Exception: genuine P1 (system is broken) — that can interrupt a sprint.

📌 **Step 5: Track and Communicate Scope Changes**
Maintain a **Change Log** — a running list of all approved changes with their cost and time impact.
Share this in your weekly status report so the client always knows the cumulative impact.
"We have approved 3 change requests so far, adding 2 weeks and $5,000 to the project."

**Interview Answer for "How do you handle scope creep?"**
"I prevent scope creep before it starts by locking scope in a signed SOW on Day 1, including an explicit list of what is out of scope. I establish a formal Change Request process so any new requirement is evaluated for time and cost impact before being accepted. I protect sprint scope in Agile — nothing enters a running sprint without a P1 justification. And I educate clients from the start that changes are welcome, but they come with a cost and timeline impact. This way, the client feels heard, but the project stays on track."`
      }
    ]
  },
  {
    id: "metrics",
    icon: "📊",
    title: "Metrics & KPIs",
    color: "#e37400",
    subsections: [
      {
        title: "How We Calculate Project Metrics",
        content: `Metrics are numbers that tell you if your project is healthy or sick. A PM must know these cold.

**DELIVERY METRICS**

📌 **Velocity**
Definition: How many Story Points does your team complete per sprint?
Formula: Total Story Points Completed ÷ Number of Sprints
Example: Team completes 40, 38, 42 points in 3 sprints → Velocity = 40 avg
Use: Helps predict when future work will be done.

📌 **Sprint Burndown**
Definition: A graph showing remaining work vs time in a sprint.
If the line burns down smoothly → team is on track.
If the line is flat → team is blocked or not working.

📌 **On-Time Delivery Rate**
Formula: (Milestones delivered on time ÷ Total milestones) × 100
Example: 8 out of 10 releases on time → 80% OTD Rate

📌 **Cycle Time**
Definition: Time from when a task is started to when it's completed.
Lower cycle time = more efficient team.

**QUALITY METRICS**

📌 **Defect Density**
Formula: Number of bugs found ÷ Size of module (in function points or story points)
Example: 5 bugs in a 50-SP module → Defect Density = 0.1
Lower is better.

📌 **Defect Leakage Rate**
Formula: (Bugs found in Production ÷ Total bugs found) × 100
If this is high, your QA process is weak — bugs are escaping to the client.

📌 **First Pass Yield (FPY)**
Formula: (Tasks completed without rework ÷ Total tasks) × 100
Higher % = better quality first time.

**TEAM HEALTH METRICS**

📌 **Utilization Rate**
Formula: (Actual hours worked on project ÷ Available hours) × 100
Healthy range: 75–85%. Above 90% = team is burning out.

📌 **Shrinkage** (explained more below)
Formula: (Hours lost to non-productive activities ÷ Total scheduled hours) × 100`
      },
      {
        title: "PERT Formula — How to Estimate Time Accurately",
        content: `**What is PERT?**
PERT stands for **Program Evaluation and Review Technique**. It is a formula used to estimate how long a task will take — more accurately than just guessing one number.

The problem with single-point estimates: If you ask a developer "How long will this take?" they'll say "3 days." But what if something goes wrong? What if it's harder than expected? PERT solves this by asking for THREE estimates instead of one.

**The Three Estimates:**

📌 **O — Optimistic Estimate**
Best case scenario. Everything goes perfectly. No bugs, no blockers, no surprises.
Example: "If everything goes smoothly, I can build this login module in 2 days."

📌 **M — Most Likely Estimate**
Realistic scenario. Normal working conditions, minor issues expected.
Example: "Realistically, with the usual back-and-forth, it'll take 4 days."

📌 **P — Pessimistic Estimate**
Worst case scenario. Things go wrong — dependencies are delayed, bugs are complex.
Example: "If the API isn't ready or I hit major bugs, it could take 9 days."

**The PERT Formula:**
Expected Duration (E) = (O + 4M + P) ÷ 6

Why 4M? Because the Most Likely scenario is weighted 4x — it's the most probable outcome, so it pulls the estimate toward reality rather than extremes.

**Worked Example — Login Module:**
O = 2 days, M = 4 days, P = 9 days
E = (2 + 4×4 + 9) ÷ 6
E = (2 + 16 + 9) ÷ 6
E = 27 ÷ 6
E = **4.5 days**

So instead of guessing "3 days" or committing to "2 days," you plan for 4.5 days. This is honest and defensible.

**Standard Deviation (How Risky is the Estimate?):**
Formula: SD = (P - O) ÷ 6
In our example: SD = (9 - 2) ÷ 6 = 1.17 days
A high SD means HIGH UNCERTAINTY — the task could vary a lot. A low SD means the estimate is reliable.

**Real Project Example (Web Development):**
Your project has 4 tasks:

| Task | O | M | P | PERT Estimate |
|------|---|---|---|---------------|
| Homepage UI | 3 | 5 | 10 | 5.5 days |
| Login Module | 2 | 4 | 9 | 4.5 days |
| Payment Page | 4 | 7 | 14 | 7.3 days |
| QA & Testing | 2 | 3 | 6 | 3.3 days |
| **Total** | | | | **20.6 days** |

Without PERT you might have estimated 19 days and been caught off guard. With PERT you plan for 20.6 — more realistic.

**When to Use PERT in PM Interview:**
If asked "How do you estimate timelines?" — say:
"I use three-point PERT estimation. I ask each team member for their Optimistic, Most Likely, and Pessimistic estimates. I apply the formula (O + 4M + P) ÷ 6 to get a weighted expected duration. I also check the Standard Deviation — if it's high, I add a risk buffer. This gives me a defensible, data-backed timeline I can commit to with confidence."

**PERT vs Story Points:**
PERT = time-based estimation (days/hours) — used in traditional PM
Story Points = relative effort — used in Agile/Scrum
In practice, many teams use Story Points for sprint planning and PERT for milestone-level project estimates presented to clients.`
      },
      {
        title: "Quality Checking in Web Projects",
        content: `Quality Assurance (QA) is a structured process, not just "testing before release."

**LEVELS OF TESTING:**

1️⃣ **Unit Testing** — Developer tests their own code function by function.
2️⃣ **Integration Testing** — Test if different modules work together (e.g., login page + database).
3️⃣ **System Testing** — Test the entire website as a whole.
4️⃣ **UAT (User Acceptance Testing)** — Client tests the product to confirm it meets requirements.
5️⃣ **Regression Testing** — After fixing a bug, retest to ensure you didn't break anything else.
6️⃣ **Performance Testing** — Load test the website (can it handle 10,000 users at once?).
7️⃣ **Accessibility Testing** — Can people with disabilities use it? (WCAG standards)

**QA GATES (Quality Checkpoints):**
PM sets up **entry and exit criteria** for each phase.
Example for QA Entry: "Dev team must deliver code with zero critical bugs before QA starts."
Example for QA Exit: "Zero P1 bugs, less than 3 P2 bugs before UAT begins."

**BUG SEVERITY LEVELS:**
• P1 — Critical: Website is down, data loss, security breach → Fix within 4 hours
• P2 — Major: Feature broken but workaround exists → Fix within 24 hours
• P3 — Minor: UI alignment issue → Fix in next sprint
• P4 — Cosmetic: Typo, color mismatch → Fix when time allows`
      }
    ]
  },
  {
    id: "agile",
    icon: "🔄",
    title: "Agile & Scrum",
    color: "#9c27b0",
    subsections: [
      {
        title: "What is Agile? (Explained Simply)",
        content: `**Old way (Waterfall):** Plan everything → Build everything → Test everything → Release. 
Problem: Client sees the product only at the end. If they hate it, you've wasted months.

**Agile way:** Build a little → Show client → Get feedback → Improve → Repeat.
The client is involved every 2 weeks. Surprises are minimized.

**The 4 Agile Values (from the Agile Manifesto):**
1. Individuals and interactions OVER processes and tools
2. Working software OVER comprehensive documentation
3. Customer collaboration OVER contract negotiation
4. Responding to change OVER following a plan

This doesn't mean no documentation — it means PEOPLE and WORKING PRODUCT matter most.`
      },
      {
        title: "Scrum Framework — Step by Step",
        content: `Scrum is the most popular Agile framework. Think of it as the "rules of the game."

**THE THREE ROLES:**

👤 **Product Owner (PO)**
• Represents the client/business
• Owns the **Product Backlog** (the master list of all features)
• Prioritizes what gets built first
• Decides if a feature is "Done" or not
• In web projects: Usually the client's representative or internal business analyst

👤 **Scrum Master (SM)**
• Facilitates the Scrum process
• Removes blockers for the team ("I can't build the payment page because the API keys aren't shared")
• Does NOT manage people — they serve the team
• In Infosys context: PM often plays this role

👤 **Development Team**
• Self-organizing: they decide HOW to build, PM doesn't micromanage
• Cross-functional: includes developers, designers, QA
• Ideal size: 5–9 people

**THE ARTIFACTS:**

📋 **Product Backlog**
Master list of everything the website needs.
Each item is a **User Story**: "As a user, I want to filter products by price so that I can find affordable items."
Written in: As a [who] I want [what] so that [why]

📋 **Sprint Backlog**
The subset of Product Backlog the team commits to in ONE sprint (2 weeks).
Team pulls items in, not the PM pushing items in — key Agile principle!

📋 **Increment**
The working, potentially shippable product at the end of each sprint.
Every sprint should produce SOMETHING the client can see and touch.

**THE CEREMONIES (Meetings):**

🕐 **Sprint Planning** (Start of sprint, 4–8 hours for 2-week sprint)
Team selects stories from backlog, breaks them into tasks, estimates effort.
PM/Scrum Master facilitates, PO clarifies requirements.

🕐 **Daily Standup** (Every day, exactly 15 minutes)
Each person answers three questions:
1. What did I complete yesterday?
2. What will I complete today?
3. Do I have any blockers?
PM tracks blockers and resolves them same day.

🕐 **Sprint Review** (End of sprint, 2–4 hours)
Team demos the working features to the client/stakeholders.
PO accepts or rejects stories based on criteria.
This is NOT a PowerPoint — it's a live demo.

🕐 **Sprint Retrospective** (After Review, 1–3 hours)
Team discusses: What went well? What went poorly? What to improve?
Example output: "We waste 30 mins every day in stand-up because people are late → Start sending pre-standup updates on Slack."

**PM BEST PRACTICES IN SCRUM:**

✅ Protect the team from scope changes mid-sprint
✅ Never add work to a sprint that's already started
✅ Maintain a healthy backlog (at least 2 sprints worth of groomed stories ready)
✅ Track sprint velocity over time to improve estimation
✅ Hold **Backlog Grooming** every week — review and refine upcoming stories
✅ Use a **Definition of Done (DoD)** — agree upfront what "complete" means
✅ Escalate blockers same day — don't let a blocker sit for 3 days`
      }
    ]
  },
  {
    id: "sixsigma",
    icon: "⚙️",
    title: "Six Sigma Green Belt",
    color: "#00897b",
    subsections: [
      {
        title: "What is Six Sigma? (Simple Explanation)",
        content: `Six Sigma is a **data-driven methodology to reduce defects and improve processes**.

The name comes from statistics: **6 sigma = 99.99966% defect-free** (only 3.4 defects per million opportunities). That's near perfection.

**Green Belt** means you can lead small improvement projects within your team while being guided by a Black Belt expert.

**The DMAIC Framework** (pronounce: Duh-MAY-ick)
This is the 5-step Six Sigma problem-solving method:

**D — Define**
What is the problem? Who is affected?
Tool: **Project Charter, SIPOC Diagram**
Web Dev Example: "Our website QA team takes 5 days to test each sprint, causing release delays."

**M — Measure**
Collect data. How bad is the problem really?
Tool: **Process maps, Data collection plans, Baseline metrics**
Example: Measure: Average QA time per sprint = 5.2 days. Defect rate = 8%.

**A — Analyze**
Find the ROOT CAUSE of the problem. Don't guess — use data!
Tool: **Fishbone Diagram (Ishikawa), 5 Whys, Pareto Chart**
Example 5 Whys:
→ Why is QA slow? Test cases are outdated.
→ Why are test cases outdated? No one updates them after requirements change.
→ Why does no one update them? No process exists for it.
→ Why no process? PM never defined ownership.
→ Root Cause: Lack of defined ownership for test case maintenance.

**I — Improve**
Design and implement the solution.
Tools: **Pilot testing, A/B testing, Process redesign**
Solution: Assign each developer to update test cases for their own stories before QA.

**C — Control**
Make sure the improvement sticks. Prevent regression.
Tools: **Control charts, SOPs (Standard Operating Procedures), dashboards**
Result: QA time reduced from 5.2 days to 3.1 days. Defect rate dropped to 3%.`
      },
      {
        title: "Where to Use Six Sigma in Web Dev PM",
        content: `**SCENARIO 1 — High Defect Rate in Production**
Use DMAIC to find why bugs are escaping QA. 
Likely root cause: Incomplete requirements at sprint start.
Six Sigma Fix: Add a **Definition of Ready (DoR)** — a checklist before any story enters sprint.

**SCENARIO 2 — Slow Release Cycles**
Your team takes 3 weeks per sprint but should take 2.
Use DMAIC + **Value Stream Mapping** to identify waste steps.
Six Sigma Fix: Automate regression testing (remove 1 full day of manual testing).

**SCENARIO 3 — Client Complaints About UI Inconsistencies**
Use **Pareto Analysis (80/20 Rule)**: 80% of complaints come from 20% of components.
Focus fix on those 20% components first. Maximum impact, minimum effort.

**SCENARIO 4 — Poor Sprint Velocity**
Velocity varies wildly: 25 pts → 45 pts → 30 pts.
Use **Control Charts** to identify if variation is random (common cause) or due to a specific event (special cause).
If a developer's absence caused the dip, that's a special cause — build a backup plan.

**KEY SIX SIGMA TOOLS TO MENTION IN INTERVIEW:**
• SIPOC (Suppliers, Inputs, Process, Outputs, Customers)
• Fishbone / Ishikawa Diagram
• 5 Whys
• Pareto Chart (80/20)
• Control Charts
• FMEA (Failure Mode and Effects Analysis)
• Value Stream Mapping`
      }
    ]
  },
  {
    id: "people",
    icon: "👥",
    title: "Team Management Tools",
    color: "#c62828",
    subsections: [
      {
        title: "Shrinkage — What It Is & How to Manage It",
        content: `**Shrinkage** is the percentage of time your team is scheduled to work but is NOT actually productive on project tasks.

**Formula:**
Shrinkage % = (Non-productive hours ÷ Total scheduled hours) × 100

**What causes Shrinkage?**
• Leaves (planned vacation, sick leaves)
• Training sessions
• Team meetings not related to project
• Breaks, lunch
• HR/admin activities
• System downtime
• Transport/buffer time in offshore teams

**Example Calculation:**
Team of 10 developers. Each works 8 hours/day = 80 hours/day total.
Shrinkage causes: 2 hours in meetings, 1 hour breaks, 0.5 hours admin = 3.5 hours per person.
Shrinkage per person = 3.5/8 = 43.75%

Effective productive hours = 80 × (1 - 0.4375) = 45 hours

**Why This Matters for PM:**
When planning a sprint, you CANNOT count 8 hours per developer.
If shrinkage is 30%, plan for 5.6 hours of productive work per person per day.
This is called **Net Staffing** or **Effective Capacity Planning**.

**Best Practices:**
• Track monthly shrinkage trend
• Keep planned shrinkage under 25–30% for development teams
• Separate unavoidable shrinkage (breaks) from avoidable (too many meetings)`
      },
      {
        title: "Attrition — Managing Team Turnover",
        content: `**Attrition** is the rate at which people leave your team.

**Formula:**
Attrition Rate % = (Number of people who left ÷ Average headcount) × 100 × (12 ÷ months in period)

**Example:**
Team of 20. 3 left in 6 months.
Attrition = (3 ÷ 20) × 100 × (12 ÷ 6) = 30% annualized

Industry benchmark: IT services average is 15–20%. If your team is at 30%, it's a red flag.

**Why PM Should Care:**
• Losing a developer mid-sprint = 2 weeks to onboard replacement
• Knowledge loss: the person who knew the entire payment module just left
• Client confidence drops if team keeps changing
• Recruitment costs = 6–9 months of that person's salary

**How to Reduce Attrition:**
✅ Recognize and reward good work publicly
✅ Create Individual Development Plans (IDPs) — show people a growth path
✅ Hold 1-on-1 meetings monthly — catch dissatisfaction early
✅ Rotate team members across features — avoid boredom
✅ Protect team from unreasonable client demands
✅ Celebrate sprint completions and project milestones
✅ Flag burnout risk: watch for consistent overtime`
      },
      {
        title: "KRA — Key Result Areas",
        content: `**KRA (Key Result Area)** defines WHAT an employee is responsible for delivering. It's the foundation of performance management.

Think of it as the "job description in measurable terms."

**KRA vs KPI:**
• KRA = The area of responsibility ("Delivery Quality")
• KPI = How you measure success in that area ("Defect Leakage < 2%")

**Sample KRAs for a PM in Web Dev:**

| KRA | KPI | Target |
|-----|-----|--------|
| Project Delivery | % milestones on time | ≥ 90% |
| Quality Management | Defect leakage to production | < 2% |
| Client Satisfaction | CSAT score | ≥ 4.2/5 |
| Team Utilization | Productive hours | 75–85% |
| Attrition Control | Annual attrition rate | < 15% |
| Budget Management | Cost variance | ±5% of baseline |
| Process Compliance | Sprint ceremony adherence | 100% |

**How to Use KRAs in Interview:**
When asked "How do you measure your own success as a PM?" → Answer using KRAs.
"I measure myself across 5 KRAs: Delivery, Quality, Client Satisfaction, Team Health, and Budget. For each, I set a specific KPI target at the start of the quarter and track weekly."

**KRA Setting Best Practices:**
• SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound
• Review KRAs quarterly, not just annually
• Cascade: Team's KRAs should align with organization's goals
• Hold monthly check-ins against KPIs — don't wait for annual review`
      }
    ]
  },
  {
    id: "maps",
    icon: "🗺️",
    title: "Maps Development PM",
    color: "#1565c0",
    subsections: [
      {
        title: "Project Management for Google Maps, Uber Maps & Apple Maps",
        content: `Maps development is a highly specialized, data-intensive domain. As PM, you're managing teams that work on **geospatial data, rendering engines, real-time data pipelines, and consumer-facing products** simultaneously.

**THE UNIQUE CHALLENGES IN MAPS PM:**

🌍 **Data at Massive Scale**
Maps data = billions of roads, POIs (Points of Interest), addresses, satellite imagery tiles.
You manage vendors, data collection teams, and automated pipelines that process this data.
PM tracks: Data coverage %, accuracy %, freshness (how old is the data?).

🔄 **Real-Time Systems**
Traffic data, Uber driver locations, ETA calculations — these update every few seconds.
A PM in maps must understand **SLAs (Service Level Agreements)**:
→ "The system must return route results in < 200ms for 99.9% of requests."
→ If SLA is breached, it's a P1 incident requiring immediate PM involvement.

**GOOGLE MAPS PM CONTEXT:**

Projects you may have managed:
• **POI Data Quality**: Ensuring restaurant names, hours, phone numbers are accurate.
• **Map Rendering**: How the map looks — color schemes, icon sizes, label placement.
• **Local Guides Program**: Crowdsourced data review process.
• **Navigation Features**: Turn-by-turn, lane guidance, speed limits.

PM Process in Google Maps:
1. Product team defines OKRs (Objectives & Key Results): "Improve POI accuracy by 15% in Q3"
2. PM breaks this into projects → data collection, ML model improvement, manual review process
3. Work managed in 2-week sprints
4. Quality measured via ground truth audits (field teams verify data against reality)
5. A/B testing for any UI change: Show new feature to 5% of users, measure engagement

**UBER MAPS PM CONTEXT:**

Uber Maps is about **real-time precision for driver-passenger matching**.

Key projects a PM owns:
• **ETA Accuracy**: How close is "5 minutes away" to reality? Track MAE (Mean Absolute Error).
• **Route Optimization**: Constantly improving algorithms for driver routing.
• **Map Updates**: Road closures, construction — Uber needs maps updated hourly, not monthly.
• **Driver Experience**: Map UI that works at 60 mph on a phone mount.

PM Metrics in Uber Maps:
• ETA MAPE (Mean Absolute Percentage Error): Target < 10%
• Route acceptance rate: % of times driver follows suggested route
• Map update latency: How fast does a new road closure reflect on maps?
• Incident SLA: P1 (navigation broken) resolved in < 15 minutes

PM Process:
1. Data team identifies accuracy issues via automated anomaly detection
2. PM triages: Is this impacting users now? → P1. Is this a systemic trend? → Improvement project.
3. Fix goes through Dev → QA → Canary release (5% traffic) → Full rollout
4. PM monitors dashboards for 48 hours post-launch

**APPLE MAPS PM CONTEXT:**

Apple Maps differentiates on **privacy and deep iOS integration**.

Key PM areas:
• **Look Around Feature**: 360° street-level imagery (like Google Street View)
• **Indoor Maps**: Airport & mall navigation — requires partnerships with venues
• **Flyover**: 3D city models — managed through photogrammetry vendors
• **Transit Directions**: Integration with local public transit APIs

PM Challenges unique to Apple Maps:
• Hardware dependency: Must test on every iPhone model and iOS version.
• Privacy-first architecture: No persistent user tracking — affects feature design.
• First-party data: Maps team works closely with Siri, Wallet (Apple Pay locations), Calendar integration.`
      },
      {
        title: "Common PM Scenarios in Maps — Interview Stories",
        content: `Use these as **STAR stories** in your interview (Situation, Task, Action, Result):

**STORY 1 — Handling a Data Quality Crisis**
S: We discovered that 15% of restaurant hours in Southeast Asia were incorrect.
T: My task was to fix the data, prevent future occurrences, and communicate to stakeholders.
A: 
• Immediately flagged to data ops team — stopped the automated publish pipeline
• Set up a war room with data team, product, and engineering
• Created a triage process: AI flags suspect hours → human reviewer confirms
• Implemented a "data freshness" SLA: no POI data older than 90 days published
R: Accuracy improved from 85% to 97% in 6 weeks. Process became the global standard.

**STORY 2 — Managing Cross-Timezone Dependencies**
S: Maps rendering team was in India, data pipeline team in US, QA in Philippines.
T: Needed to coordinate a major release with all three teams.
A:
• Created a **Follow-the-Sun** release schedule — each team owned an 8-hour window
• Set up a shared Confluence page with handoff notes updated every shift
• Used Jira for task tracking with timezone labels
• Held overlap standup: India 6 PM = US 8 AM = Philippines 8 PM
R: Release delivered 3 days ahead of schedule with zero P1 bugs.

**STORY 3 — Reducing ETA Error (Uber Context)**
S: User complaints about inaccurate ETAs increased by 22% in a quarter.
T: Lead a cross-functional project to improve ETA accuracy by 15%.
A:
• Ran Six Sigma DMAIC: Measured baseline MAPE = 18%
• Root cause: Historical traffic patterns not accounting for recent road construction
• Solution: Integrated real-time construction API + retrained ML model
• A/B tested new model with 10% of traffic
R: MAPE reduced to 11.2%. User complaints dropped 30%.`
      }
    ]
  },
  {
    id: "interview",
    icon: "💼",
    title: "Interview Tips & Questions",
    color: "#6a1b9a",
    subsections: [
      {
        title: "The STAR Method — How to Answer Behavioural Questions",
        content: `**What is the STAR Method?**
STAR is a structured way to answer behavioural interview questions — questions that start with "Tell me about a time when..." or "Describe a situation where..."

Interviewers ask these to understand HOW you actually behaved in real situations, not just what you know in theory. Without a structure, most people ramble, miss the point, or give a vague answer. STAR keeps your answer focused, complete, and impressive.

**STAR stands for:**

📌 **S — Situation**
Set the context. Where were you? What was the background?
Keep it brief — 2 to 3 sentences. The interviewer needs just enough context to understand the story.
❌ Bad: "So there was this project I worked on..."
✅ Good: "I was leading a 12-person web development team at my previous company, delivering a customer portal for a banking client with a fixed deadline of 10 weeks."

📌 **T — Task**
What was YOUR specific responsibility in that situation?
This is not what the team did — it's what YOU were responsible for. This is where you show ownership.
❌ Bad: "We had to fix the project."
✅ Good: "My responsibility was to recover the project timeline after we lost 2 developers mid-sprint, while ensuring the client commitment of going live on March 15th was not missed."

📌 **A — Action**
What steps did YOU personally take? This is the most important part — spend 60% of your answer here.
Be specific. Use "I" not "we." Show your thinking, your decisions, your leadership.
❌ Bad: "We worked harder and fixed things."
✅ Good:
"I immediately ran a re-estimation session with the remaining team using PERT to understand the true impact. I identified 3 non-critical features and raised a Change Request with the client to defer them to Phase 2. I brought in 2 contractors for 4 weeks to fill the resource gap. I moved to daily check-ins instead of weekly to catch blockers same day. I personally managed the client communication, giving them a revised plan with confidence intervals so there were no surprises."

📌 **R — Result**
What was the outcome? Quantify wherever possible.
Numbers make results credible. "It went well" is weak. "We delivered on time with zero P1 bugs and the client renewed the contract" is strong.
❌ Bad: "We managed to deliver."
✅ Good: "We delivered on March 15th as committed. Post-launch defect rate was 1.2%, below our 2% target. The client was satisfied enough to sign a 6-month support extension worth $200,000."

**The Golden Rules of STAR:**
✅ Always talk about what YOU did, not what the team did
✅ Always end with a measurable result — numbers, percentages, time saved, money saved
✅ Keep each answer to 2–3 minutes when spoken out loud
✅ Prepare 6–8 STAR stories before the interview — most PM questions can be answered with the same stories
✅ If the result wasn't perfect, that's okay — show what you LEARNED

**The 8 STAR Stories Every PM Must Prepare:**

1️⃣ **A time you delivered a project under pressure / tight deadline**
2️⃣ **A time you handled scope creep or a difficult client request**
3️⃣ **A time you resolved a conflict within your team**
4️⃣ **A time a project was failing and how you recovered it**
5️⃣ **A time you improved a process (great for Six Sigma)**
6️⃣ **A time you had to say no to a stakeholder**
7️⃣ **A time you managed a team member who was underperforming**
8️⃣ **A time you had to make a decision with incomplete information**

**Full STAR Example for PM Interview:**

Question: "Tell me about a time you managed a difficult stakeholder."

S: "I was managing a website redesign project for a retail client at my previous company. The client's Marketing Director and IT Director had completely opposing visions for the product — one wanted a bold visual redesign, the other wanted minimal changes to avoid disrupting their legacy integrations."

T: "My task was to align both stakeholders on a single direction within 2 weeks, or the project would stall. Missing the launch window would mean the client missing their peak holiday sales season."

A: "I first met each stakeholder separately to understand their underlying concerns — not just their stated positions. The Marketing Director's real concern was brand perception. The IT Director's real concern was system stability risk. I then ran a joint workshop where I presented 3 design options with a risk/benefit analysis for each. I showed them data: Option B gave 70% of the visual uplift the Marketing Director wanted, with only 15% of the integration risk the IT Director feared. I facilitated the conversation so both felt heard, and positioned Option B as a shared win rather than a compromise."

R: "Both stakeholders agreed on Option B within 1 meeting. The project resumed on schedule. We launched 2 days before the holiday season. The redesign increased the client's online conversion rate by 18% in the first month."`
      },
      {
        title: "Top 20 PM Interview Questions with Answers",
        content: `**Q1: Tell me about yourself.**
Structure: Present role → Key experience → Why this role.
"I'm a Project Manager with X years of experience in web development and maps technology. I've managed cross-functional teams of 10–15 people delivering web products and geospatial applications for major clients. I've worked on projects for Google Maps, Uber Maps, and Apple Maps, managing full delivery cycles from requirements to release. I'm looking to bring my Agile, Six Sigma, and delivery management skills to Infosys's operations team."

**Q2: How do you handle scope creep?**
"I manage scope creep through three mechanisms: First, a clearly defined project charter and scope document signed by the client. Second, a Change Request process — any new requirement gets a formal CR with impact analysis on cost and timeline. Third, I protect sprint scope — once a sprint starts, no new work enters unless it's a P1 issue. I educate clients that adding scope doesn't mean we work faster — it means the timeline extends."

**Q3: What is your approach to managing a failing project?**
"First, I diagnose — is it scope, resources, quality, or communication failing? Then I call a project health meeting with all stakeholders. I present the actual vs planned data without sugar-coating. I create a recovery plan with revised milestones. I increase check-in frequency — daily instead of weekly. And I escalate early — the worst thing a PM can do is hide bad news."

**Q4: How do you estimate project timelines?**
"I use three-point estimation: Optimistic, Most Likely, and Pessimistic. PERT formula: (O + 4M + P) / 6. Then I factor in team velocity from past sprints, shrinkage, and buffer for risk. I never commit to dates without the team's input — they estimate their own tasks."

**Q5: Describe a time you managed a conflict in your team.**
Use a STAR story. Example: Developer and QA lead disagreed on severity of a bug. PM brought both together, reviewed the user impact data together, and let data drive the decision. Both agreed P2 was the right call.

**Q6: What tools have you used for project management?**
"Jira for sprint tracking and backlog management, Confluence for documentation, MS Project for Gantt charts, Power BI for metrics dashboards, Slack for team communication, Zoom for client calls, and Git/Jenkins for understanding the CI/CD pipeline."

**Q7: How do you ensure quality in deliverables?**
"Quality starts at requirements — I make sure acceptance criteria are written before development begins. I set up QA gates with entry and exit criteria. I track defect density and leakage metrics weekly. I do not allow releases if defect leakage exceeds our threshold. Post-release, I monitor production metrics for 48 hours."

**Q8: What is your experience with Six Sigma?**
Explain Green Belt, DMAIC, and give a real example from maps or web project. Mention specific tools: Fishbone, 5 Whys, Pareto.

**Q9: How do you handle attrition in your team?**
"I do monthly 1-on-1s to understand each team member's concerns early. I build development plans — people leave when they don't see growth. I recognize achievements publicly. I monitor overtime — if someone consistently works 10+ hours, that's a burnout risk. I also cross-train team members so no one is a single point of failure."

**Q10: What is your approach to stakeholder management?**
"I map stakeholders by power and interest. High power, high interest (client exec) = manage closely, weekly updates. High power, low interest (senior management) = keep informed monthly. Low power, high interest (end users) = consult during UAT. I tailor communication style for each — executives get dashboards, technical teams get Jira tickets."

**Q11: How do you prioritize the product backlog?**
"I work with the Product Owner using a combination of Business Value, User Impact, Technical Risk, and Dependencies. I use MoSCoW: Must Have, Should Have, Could Have, Won't Have. For maps specifically, I also factor in data freshness and regulatory compliance requirements."

**Q12: What is Earned Value Management?**
"EVM is a way to measure project performance in financial terms. Three key values:
• PV (Planned Value): Budget planned for completed work
• EV (Earned Value): Budget for work actually completed
• AC (Actual Cost): Real money spent
SPI = EV/PV (> 1 means ahead of schedule)
CPI = EV/AC (> 1 means under budget)"

**Q13: How do you measure team productivity?**
"I use velocity trend, cycle time, and utilization rate. But I'm careful — I don't measure productivity just by lines of code or points. I measure the OUTCOME: working features delivered, defect rates, client satisfaction. A team that delivers 30 points of working, stable code is more productive than one that delivers 50 points with 20 bugs."

**Q14: What is the difference between Agile and Waterfall? When would you use each?**
"Agile: Iterative, flexible, client involved throughout. Best for projects where requirements evolve — web products, mobile apps.
Waterfall: Sequential, documentation-heavy, client involved at start and end. Best for fixed-scope projects — government contracts, construction, hardware.
In maps development, I've used Agile for product features but Waterfall for infrastructure projects like data center migrations."

**Q15: How do you handle a difficult client?**
"I establish clear communication protocols upfront: weekly status calls, written meeting minutes, formal CR process. When a client becomes difficult, I try to understand their underlying concern — usually it's fear: fear of delay, fear of failure. I address the root concern with data. I never argue — I present options with trade-offs and let them decide. I document everything in writing."

**Q16: Explain your experience with Maps development.**
Use your Google Maps, Uber Maps, Apple Maps experience. Discuss POI data quality, real-time systems, ETA accuracy, data pipelines, cross-platform testing.

**Q17: What is shrinkage and how do you account for it in planning?**
Explain formula, common causes, and how you use it in capacity planning.

**Q18: How do you handle a team member who is underperforming?**
"First I have a private 1-on-1 to understand root cause — personal issue, skill gap, unclear expectations, or wrong role? I create a Performance Improvement Plan (PIP) only as a last resort. Usually, the issue is lack of clarity or support, not lack of ability. I pair underperformers with senior team members and give them structured tasks with clear acceptance criteria."

**Q19: What is your experience with risk management?**
"I maintain a Risk Register with: Risk description, Probability (1–5), Impact (1–5), Risk Score = P × I, Mitigation plan, Owner, Status. I review risks weekly. For maps projects, key risks include: data vendor delays, API rate limit changes, satellite imagery licensing, OS updates breaking the app."

**Q20: Where do you see yourself in 5 years?**
"I want to grow into a Senior Program Manager role, managing a portfolio of digital transformation projects. At Infosys, I see the opportunity to work on large-scale enterprise projects and develop expertise in their delivery frameworks. I also want to complete my PMP certification and deepen my Six Sigma knowledge to Black Belt level."`
      },
      {
        title: "Key PM Certifications to Mention",
        content: `**PMP (Project Management Professional)** — PMI
Gold standard in project management. If you have it, lead with it. If not, say "I'm preparing for PMP."

**CSM (Certified Scrum Master)** — Scrum Alliance
Shows Agile competency. Highly valued in IT services companies like Infosys.

**Six Sigma Green Belt** — ASQ or IASSC
You have this! Use it. Mention DMAIC, tools, and a real project improvement story.

**PRINCE2** — AXELOS
Popular in UK and EU clients. If Infosys works with European clients, mentioning PRINCE2 awareness is a bonus.

**PMI-ACP (Agile Certified Practitioner)** — PMI
Shows deep Agile knowledge beyond just Scrum.

**How to present if you don't have certifications:**
"While I don't hold a formal certification yet, I have applied Scrum principles and Six Sigma DMAIC methodology throughout my career. I am currently preparing for [PMP / CSM] and plan to certify within the next 6 months."`
      }
    ]
  },
  {
    id: "jd",
    icon: "📋",
    title: "JD-Specific Topics",
    color: "#e65100",
    subsections: [
      {
        title: "RAID Log — Risks, Assumptions, Issues, Dependencies",
        content: `**What is a RAID Log?**
A RAID Log is one of the most important tools a Senior PM uses to keep a complex project under control. The JD specifically mentions it — so you must know this cold.

RAID stands for:
• **R — Risks**: Things that MIGHT go wrong in the future
• **A — Assumptions**: Things you are treating as true, even though not confirmed
• **I — Issues**: Problems that have ALREADY happened and need resolution
• **D — Dependencies**: Tasks or deliverables that rely on another team, system, or event

Think of RAID as your project's early warning system. A PM who maintains a RAID log catches problems before they become disasters.

**R — RISKS (What might go wrong?)**
A Risk has not happened yet. It is a future possibility.
Every risk needs:
• Description: What could go wrong?
• Probability: How likely? (1=Low, 5=High)
• Impact: How bad if it happens? (1=Low, 5=High)
• Risk Score = Probability × Impact
• Response Strategy:
  → Avoid: Change the plan to eliminate the risk
  → Mitigate: Take action to reduce probability or impact
  → Transfer: Shift risk to someone else (e.g., insurance, vendor SLA)
  → Accept: Do nothing — risk is too small to act on

Web Dev Risk Example:
Risk: "The third-party payment gateway API may change their authentication method."
Probability: 2, Impact: 5, Score: 10
Mitigation: Build an abstraction layer so switching providers takes 2 days not 2 weeks.

**A — ASSUMPTIONS (What are we treating as true?)**
Assumptions are facts you haven't verified but are planning around.
If an assumption turns out to be wrong, your plan could break.

Example Assumptions:
• "The client will provide all content by Week 3." → If they don't, your content pages are delayed.
• "The dev team has experience with React." → If not, training time needs to be added.
• "The testing environment will be ready by Sprint 2." → If not, QA is blocked.

PM Action: Log every assumption. Review them weekly. When confirmed → move to fact. When disproved → treat as an Issue and create a mitigation plan.

**I — ISSUES (What has already gone wrong?)**
An Issue is a Risk that has materialized — it's happening right now.
Every issue needs:
• Description of the problem
• Date raised
• Owner (who is responsible for resolving it?)
• Priority (P1/P2/P3)
• Resolution plan and target date
• Status (Open / In Progress / Closed)

Example Issue:
Issue: "Lead developer is on medical leave for 2 weeks starting Monday."
Owner: PM
Resolution: Bring in a contractor for 2 weeks. Redistribute critical tasks. Flag timeline risk to client.
Target Resolution: Within 3 days.

**D — DEPENDENCIES (What relies on what?)**
A dependency means Task B cannot start until Task A is complete — or until another team/system delivers something.

Types of Dependencies:
• Internal: "QA cannot test the payment page until the dev team completes it."
• External: "We cannot launch until the client's legal team approves the T&C copy."
• Cross-team: "The mobile app team needs the API to be ready before they can integrate."

PM Action: Map all dependencies at the start of the project. Build buffers around high-risk external dependencies. Escalate blocked dependencies immediately — they are the #1 cause of timeline slippage.

**Sample RAID Log Format:**

| Type | ID | Description | Owner | Priority | Status |
|------|----|-------------|-------|----------|--------|
| Risk | R01 | API vendor may deprecate v2 endpoint | Tech Lead | High | Monitoring |
| Assumption | A01 | Client content ready by Week 3 | PM | Medium | Unconfirmed |
| Issue | I01 | Dev lead on leave 2 weeks | PM | High | In Progress |
| Dependency | D01 | Legal approval needed before launch | Client PM | High | Pending |

**Interview Answer for "How do you manage risks on a project?"**
"I maintain a RAID Log throughout the project. I capture Risks with probability and impact scores and define mitigation strategies for anything scoring above 6. I document Assumptions and actively work to confirm or invalidate them. Issues are tracked with owners and resolution dates — I review them in every weekly status call. Dependencies are mapped at project kickoff and monitored weekly, with early escalation if any external dependency is at risk of slipping."`
      },
      {
        title: "SAFe & PI Planning — Agile at Scale",
        content: `**What is SAFe?**
SAFe stands for **Scaled Agile Framework**. It is a system for running Agile across MULTIPLE teams working on the SAME large product at the same time.

Regular Scrum works for 1 team of 5–9 people. But what if you have 5 teams, 50 people, all building different parts of the same platform? That's where SAFe comes in.

Think of it this way:
• Scrum = 1 band playing a song
• SAFe = An orchestra with 10 sections all playing the SAME symphony in sync

Infosys uses SAFe for large enterprise clients where multiple Agile teams must coordinate delivery.

**The SAFe Hierarchy (from small to large):**

1️⃣ **Team Level** — Individual Scrum teams running 2-week sprints (you already know this)
2️⃣ **Program Level** — Multiple teams (5–12) working together = an **Agile Release Train (ART)**
3️⃣ **Portfolio Level** — Multiple ARTs aligned to business strategy and investment themes

As a Senior PM at Infosys, you work at the **Program Level** — coordinating the ART.

**What is a PI? (Program Increment)**
A PI is a fixed timebox — typically **8 to 12 weeks** — in which an Agile Release Train delivers value.
It contains: 4 regular sprints + 1 Innovation & Planning (IP) sprint at the end.

Think of PI as a "super sprint" that multiple teams run together toward shared goals.

**PI Planning — The Most Important SAFe Event**
PI Planning is a 2-day face-to-face (or virtual) event held at the start of every PI.
ALL teams in the ART participate together.

What happens in PI Planning:
Day 1:
• Business context: Leadership presents the vision and top priorities
• Product Management presents the Program Backlog (features to be built)
• Teams break into their rooms and plan their sprints for the entire PI
• Each team creates their Sprint plans and identifies risks and dependencies

Day 2:
• Teams present their PI plans to the whole ART
• Dependencies between teams are identified and resolved
• Risks are discussed and classified: Resolved / Owned / Accepted / Mitigated (ROAM)
• Final PI Objectives are agreed — what each team commits to delivering

Output of PI Planning:
• **PI Objectives**: 5–10 committed business outcomes per team
• **Program Board**: A visual wall showing all team deliverables, dependencies, and milestones across the PI
• **ROAM Risk Log**: All risks classified and owned

**Key SAFe Roles:**
👤 **Release Train Engineer (RTE)** — The SAFe equivalent of a Scrum Master for the whole ART. As Senior PM, you may play this role.
👤 **Product Manager** — Owns the Program Backlog (features). Works with Product Owners.
👤 **System Architect** — Guides technical decisions across all teams.

**Key SAFe Metrics:**
📌 **PI Predictability**: % of PI Objectives achieved.
Formula: (Objectives met ÷ Total objectives) × 100
Target: ≥ 80%
Example: Team committed to 10 objectives, delivered 8 → Predictability = 80% ✅

📌 **Program Velocity**: Total story points delivered across ALL teams in a PI.
Trend should be stable or improving over consecutive PIs.

📌 **Feature Cycle Time**: Time from a feature being approved to being deployed.
Lower = more responsive to business needs.

**Dependency Management in SAFe:**
The Program Board is the KEY tool. It shows:
• What each team is building in each sprint
• Which team depends on another team's output
• Red strings/arrows connecting dependent items visually

PM Action: Review the Program Board weekly. Any dependency at risk gets escalated in the ART Sync (weekly 30-min cross-team standup).

**Interview Answer for "What is your experience with SAFe?"**
"I have applied SAFe principles to coordinate delivery across multiple Agile teams. In PI Planning, I facilitate the 2-day event where teams align on objectives, map cross-team dependencies on the Program Board, and ROAM risks. I track PI Predictability — targeting ≥ 80% objectives met per PI. I run weekly ART Syncs to surface and resolve dependency blockers before they impact delivery. SAFe gave us the structure to scale from 1 team to 4 teams without losing delivery discipline."`
      },
      {
        title: "Governance, Escalation & Executive Reporting",
        content: `**What is Project Governance?**
Governance is the system of rules, processes, and decision-making structures that ensure a project is controlled and accountable. It answers: Who decides what? Who needs to be informed? What gets escalated?

Without governance, projects drift — no one knows who has authority, decisions get made in hallways, and problems hide until they explode.

**The Governance Structure:**

📌 **Steering Committee (SteerCo)**
Senior-level group (Client CXOs + Infosys leadership) that meets monthly or quarterly.
Decisions made: Budget changes, major scope changes, project cancellation, strategic pivots.
PM's role: Prepare the executive dashboard. Present RAG status. Seek approvals.

📌 **Project Management Office (PMO)**
Internal governance body at Infosys that oversees delivery standards, templates, and compliance.
PM's role: Submit weekly/monthly reports, follow PMO processes, flag deviations.

📌 **Weekly Status Call**
With client project team. PM presents: Progress vs plan, risks, issues, upcoming milestones.
Format: RAG Status (Red / Amber / Green) for each workstream.
→ Green: On track
→ Amber: At risk but manageable — mitigation in place
→ Red: Off track — needs immediate action or decision

**Escalation Management:**
Escalation = raising a problem to a higher level because you cannot resolve it at your level.

Escalation Matrix (must know this):
Level 1: PM resolves within team (blockers, minor bugs, day-to-day issues)
Level 2: PM escalates to delivery manager (budget impact, resource shortage, client disagreement)
Level 3: Delivery Manager escalates to Account Manager / VP (contract issues, client relationship risk, major timeline miss)
Level 4: Executive escalation (project cancellation risk, legal issues, major commercial dispute)

Golden Rule of Escalation: Escalate EARLY with a recommendation. Never surprise leadership. Always bring a "here's the problem AND here are my 3 options" approach — never just drop a problem in their lap.

**Executive Reporting — What Leadership Wants:**
Executives don't read 20-page status reports. They want:
• ONE-PAGE dashboard
• RAG status per workstream
• 3 key risks with mitigation
• Milestone tracker: planned vs actual
• Budget: spent vs planned (CPI)
• Top 2-3 decisions needed from them

**Executive Dashboard Template:**

| Workstream | RAG | % Complete | Next Milestone | Risk |
|------------|-----|-----------|----------------|------|
| UI Design | 🟢 Green | 85% | Final mockup - June 5 | None |
| Backend API | 🟡 Amber | 60% | API complete - June 12 | Dep on DB team |
| QA & Testing | 🔴 Red | 30% | Test env delayed | Env not ready |
| Deployment | 🟢 Green | 10% | DR test - June 20 | None |

**Portfolio / Program Level Visibility:**
As a Senior PM, you may manage multiple projects simultaneously. Portfolio visibility means:
• Maintaining a master view of all projects with RAG, budget, and milestone status
• Identifying resource conflicts across projects (same developer on 2 projects)
• Reporting aggregate delivery health to leadership
• Flagging program-level risks that span multiple projects

**Interview Answer for "How do you manage governance on large projects?"**
"I establish governance at kickoff — a SteerCo with monthly meetings for strategic decisions, a weekly status call for operational issues, and a clear escalation matrix so everyone knows what gets raised where. I publish a one-page RAG dashboard weekly so leadership always has current visibility. For executive reporting, I focus on decisions needed and risks — not activities. I escalate early with options, not just problems. This keeps surprises off the table and builds client confidence."`
      },
      {
        title: "Advanced Delivery Metrics — Burn-Up, Throughput & Predictability",
        content: `The JD specifically mentions these metrics. You must know all four deeply.

**BURN-DOWN vs BURN-UP — What's the Difference?**

📌 **Burn-Down Chart** (you already know this)
Shows: Remaining work over time
X-axis: Days in sprint. Y-axis: Story points remaining.
Starts high, should reach zero by sprint end.
Problem: Only shows what's left — doesn't show if scope is being added mid-sprint.

📌 **Burn-Up Chart** (more powerful for senior PMs)
Shows: Work completed AND total scope over time — on the same chart.
Two lines:
→ Line 1 (blue): Work completed — rises from 0 toward total scope
→ Line 2 (red): Total scope — should be flat if scope is controlled

Why Burn-Up is better: If the red line keeps rising (scope added) while the blue line rises slowly, you can visually PROVE to the client that scope creep is the cause of delay — not team performance.
In a SteerCo meeting, showing a burn-up chart with a rising scope line is powerful evidence for why a deadline needs to move.

**THROUGHPUT — How Fast Is the Team Working?**
Definition: The number of work items (stories, features) completed per unit of time.
Formula: Stories completed ÷ Time period (usually per week)

Example: Team completes 8 stories in Week 1, 7 in Week 2, 9 in Week 3.
Average Throughput = 8 stories/week.

Use: Forecast completion date based on remaining backlog.
If 40 stories remain and throughput is 8/week → ~5 weeks to complete.

Throughput vs Velocity:
Velocity = Story points. Throughput = Number of items regardless of size.
Throughput is more reliable when story sizes vary a lot.

**PREDICTABILITY — Are We Delivering What We Commit To?**
Definition: The % of committed work actually delivered in a sprint or PI.

Sprint Predictability:
Formula: (Story Points Delivered ÷ Story Points Committed) × 100
Example: Team committed 40 points, delivered 35 → Predictability = 87.5% ✅
Target: ≥ 80% consistently.

PI Predictability (SAFe):
Formula: (PI Objectives met ÷ Total PI Objectives committed) × 100
Target: ≥ 80%

Why Predictability Matters:
A team with 80% predictability is MORE valuable than a team with high velocity but 50% predictability.
Clients plan releases, marketing campaigns, and business launches around your delivery dates.
Unpredictable teams destroy client trust — even if they eventually deliver everything.

**How to Improve Predictability:**
✅ Don't overcommit in sprint planning — use historical velocity as the guide
✅ Break stories into smaller pieces — large stories are harder to estimate
✅ Identify dependencies before the sprint starts
✅ Run a mid-sprint health check (Day 5 of a 10-day sprint) — catch problems early
✅ Track predictability trend over 6 sprints — present it in retrospectives

**CONTINUOUS IMPROVEMENT ACTIONS from Metrics:**
This is what the JD means by "drive continuous improvement actions."

If Velocity is declining → Root cause: Is the team growing? Losing members? Technical debt slowing them?
If Predictability is below 75% → Root cause: Overcommitment? Poor estimation? Too many mid-sprint blockers?
If Throughput is inconsistent → Root cause: Story size too variable? Dependencies blocking completion?
If Burn-up scope line is rising → Root cause: Scope creep. Bring client evidence. Raise CRs.

**Interview Answer for "How do you track delivery health?"**
"I track four key metrics every sprint: Velocity for team output, Burn-Up charts to show progress and surface scope creep, Throughput to forecast completion dates, and Predictability to measure whether we deliver what we commit. I review these in every Sprint Review and publish a weekly dashboard for stakeholders. When metrics show a degrading trend, I run a root cause analysis in the Retrospective and create specific improvement actions — not just discuss them, but assign owners and track them to closure."`
      },
      {
        title: "Distributed Team Management",
        content: `The JD explicitly asks for "experience working with distributed teams." This is critical for Infosys, which operates delivery centers across India, US, UK, Europe, and Asia.

**What is a Distributed Team?**
A distributed (or offshore/nearshore) team is one where members are in different cities, time zones, or countries. In Infosys context, this typically means:
• Client in US or UK (business hours: 9am–5pm EST or GMT)
• Development team in India (IST = EST + 10:30 hours)
• QA team possibly in Philippines or Eastern Europe

**The 5 Core Challenges of Distributed Teams:**

📌 **Time Zone Overlap**
India–US overlap: Only 1–2 hours of real-time collaboration possible.
Solution: Identify the overlap window (e.g., 8am IST = 9:30pm EST previous day) and make it sacred — this is when all critical syncs happen. Use async tools (Confluence, recorded videos, Loom) for everything else.

📌 **Communication Gaps**
Things get lost in written messages. Tone is misread. Context is missed.
Solution: Over-communicate in writing. Use structured meeting notes. Every decision gets documented in Confluence within 24 hours. Use video calls for any complex or sensitive conversation — never resolve conflict over text.

📌 **Cultural Differences**
Indian teams may avoid saying "no" directly — they say "we'll try" when they mean "this isn't possible."
Solution: Create psychological safety. Ask "What would make this impossible?" instead of "Can you do this?" Run explicit risk reviews where team members are rewarded for raising concerns.

📌 **Dependency & Handoff Management**
When Team A in India finishes and hands off to Team B in the US, information can drop.
Solution: Formal handoff documents. End-of-day summary emails. Jira tickets updated before EOD. Use a "Follow-the-Sun" model where each team picks up exactly where the last team left off.

📌 **Team Cohesion & Morale**
Distributed teams can feel disconnected and invisible.
Solution: Virtual team-building (online games, coffee chats). Celebrate wins publicly across all locations. Rotate opportunities — don't always give the interesting work to the onsite team. Ensure offshore team members present directly to clients — it builds pride and visibility.

**Best Practices PM Must Follow:**

✅ **Working Agreements**: Document and agree on: core hours, response time SLAs, meeting etiquette, escalation paths. Make these visible to everyone.
✅ **Single Source of Truth**: All project information lives in ONE place (Confluence / SharePoint). No "I'll email you separately."
✅ **Async-First Culture**: Design work so most progress happens asynchronously. Reserve real-time for decisions, not status updates.
✅ **Visible Progress**: Use Jira dashboards visible to all timezones. Anyone should be able to see project health without asking the PM.
✅ **Inclusion in Ceremonies**: Rotate standup times monthly so the same team isn't always inconvenienced. Record all meetings and post within 2 hours.

**Interview Answer for "How do you manage distributed teams?"**
"I've led distributed teams across India, US, and Philippines. The key is structure and intentional communication. I establish working agreements upfront — core hours, response SLAs, escalation paths. I use async-first tools like Confluence and recorded Looms so timezone differences don't block progress. I protect the overlap window for critical decisions and ensure offshore teams have direct client visibility — not just through me. I run virtual retrospectives specifically on team health, not just process. The goal is that every team member feels equally valued regardless of location."`
      },
      {
        title: "JD-Aligned Interview Questions",
        content: `These questions are directly mapped to the Infosys Senior PM job description. Prepare answers for each one.

**Q: What does "lead end-to-end project delivery across multiple workstreams" mean to you?**
"It means I own the entire delivery lifecycle — from requirements through release — not just one phase. Across multiple workstreams, I maintain a master plan, track interdependencies, and ensure each stream's milestones align to the overall program timeline. I use a Program Board to visualize cross-stream dependencies and run weekly integrated status reviews."

**Q: How do you use a RAID log in practice?**
Explain RAID in full — see the RAID subsection. Give a real example from your maps experience.

**Q: Walk me through how you run PI Planning.**
Describe the 2-day event, the outputs (PI Objectives, Program Board, ROAM risks), your role as facilitator, and how you track PI Predictability afterward.

**Q: How do you apply SAFe principles to coordinate delivery across teams?**
Talk about the ART structure, ART Sync meetings, Program Board, PI Objectives, and how you resolve cross-team dependency conflicts.

**Q: What metrics do you use to track delivery health?**
Velocity, Burn-Up (not just Burn-Down), Throughput, Predictability. Explain each and how you act on trends.

**Q: How do you report to executives on project status?**
One-page RAG dashboard. SteerCo format. Focus on decisions needed, not activities. Escalate early with options.

**Q: How do you coach teams on Agile mindset?**
"I lead by example — I facilitate retrospectives with psychological safety so teams raise real issues. I help teams understand WHY Agile ceremonies exist, not just follow them mechanically. When I see a team skipping retrospectives or using standups as status meetings, I coach them back to the intent. I celebrate outcomes over activity — delivery of value, not hours worked."

**Q: How do you manage dependencies across multiple teams?**
RAID log D-column, Program Board in SAFe, weekly dependency review, ART Sync, buffer planning for external dependencies, escalation when dependencies are at risk.

**Q: What is your approach to governance and escalation?**
SteerCo, PMO reporting, RAG status, escalation matrix. Escalate early with options. Never surprise leadership.

**Q: Describe your experience with distributed teams.**
Use your maps experience (India + US + Philippines coordination). Mention Follow-the-Sun, working agreements, async-first, Confluence, overlap window.`
      }
    ]
  }
];

export default function PMInterviewPrep() {
  const [activeSection, setActiveSection] = useState("intro");
  const [expandedSubs, setExpandedSubs] = useState({});

  const current = sections.find(s => s.id === activeSection);

  const toggleSub = (key) => {
    setExpandedSubs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (!line.trim()) return <div key={i} className="mb-2" />;
      
      // Headers with **text**
      if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
        return <div key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: current.color, marginTop: '1.2rem', marginBottom: '0.4rem' }}>{line.slice(2, -2)}</div>;
      }
      
      // Inline bold + rest
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} style={{ color: '#1a1a2e' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      
      if (line.startsWith('•') || line.startsWith('✅') || line.startsWith('→') || line.startsWith('📌') || line.startsWith('📋') || line.startsWith('🕐') || line.startsWith('👤') || line.startsWith('🌍') || line.startsWith('🔄') || line.startsWith('1️⃣') || line.startsWith('2️⃣') || line.startsWith('3️⃣') || line.startsWith('4️⃣') || line.startsWith('5️⃣') || line.startsWith('6️⃣') || line.startsWith('7️⃣') || line.startsWith('S:') || line.startsWith('T:') || line.startsWith('A:') || line.startsWith('R:')) {
        return <div key={i} style={{ paddingLeft: '0.5rem', marginBottom: '0.35rem', lineHeight: 1.65 }}>{rendered}</div>;
      }
      
      // Table-like rows
      if (line.startsWith('|')) {
        if (line.includes('---')) return null;
        const cells = line.split('|').filter(c => c.trim());
        const isHeader = i < lines.findIndex(l => l.includes('---')) || lines[i+1]?.includes('---');
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: `repeat(${cells.length}, 1fr)`, gap: '0', marginBottom: '1px' }}>
            {cells.map((cell, j) => (
              <div key={j} style={{ padding: '6px 10px', background: isHeader ? current.color + '22' : j % 2 === 0 ? '#f8f9fa' : '#fff', fontSize: '0.82rem', borderBottom: '1px solid #e0e0e0', fontWeight: isHeader ? 700 : 400 }}>
                {cell.trim()}
              </div>
            ))}
          </div>
        );
      }

      return <div key={i} style={{ marginBottom: '0.35rem', lineHeight: 1.7 }}>{rendered}</div>;
    });
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", minHeight: '100vh', background: '#f0f4f8', display: 'flex', flexDirection: 'column' }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)', padding: '2rem 2rem 1.5rem', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7eb8f7', marginBottom: '0.5rem' }}>Infosys Interview Preparation</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: 0, lineHeight: 1.2 }}>Project Manager</h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: '0 0 0.75rem', color: '#7eb8f7', lineHeight: 1.2 }}>Complete Interview Guide</h1>
          <p style={{ color: '#a8c8f0', fontSize: '0.9rem', margin: 0, fontWeight: 300 }}>Web Development Operations · Maps Development · Agile · Six Sigma · Team Management</p>
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: '#fff', borderBottom: '2px solid #e8ecf0', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem', display: 'flex', gap: '0' }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              style={{ padding: '1rem 1.1rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700, color: activeSection === s.id ? s.color : '#6b7280', borderBottom: activeSection === s.id ? `3px solid ${s.color}` : '3px solid transparent', transition: 'all 0.2s', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {s.icon} {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem', width: '100%', boxSizing: 'border-box' }}>
        {current && (
          <div>
            {/* Section Header */}
            <div style={{ background: `linear-gradient(135deg, ${current.color}18, ${current.color}08)`, border: `1px solid ${current.color}30`, borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2.5rem' }}>{current.icon}</div>
              <div>
                <h2 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1a1a2e' }}>{current.title}</h2>
                <div style={{ color: current.color, fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem', letterSpacing: '0.05em' }}>
                  {current.subsections.length} topic{current.subsections.length > 1 ? 's' : ''} covered
                </div>
              </div>
            </div>

            {/* Subsections */}
            {current.subsections.map((sub, idx) => {
              const key = `${current.id}-${idx}`;
              const isOpen = expandedSubs[key] !== false; // default open
              return (
                <div key={key} style={{ background: '#fff', borderRadius: 10, marginBottom: '1rem', border: '1px solid #e8ecf0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <button onClick={() => toggleSub(key)}
                    style={{ width: '100%', textAlign: 'left', padding: '1rem 1.25rem', border: 'none', background: isOpen ? `${current.color}08` : '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.2s' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e' }}>{sub.title}</span>
                    <span style={{ color: current.color, fontWeight: 900, fontSize: '1.1rem', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>▼</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '1.25rem 1.5rem', borderTop: `2px solid ${current.color}20`, fontSize: '0.9rem', color: '#374151', lineHeight: 1.7 }}>
                      {renderContent(sub.content)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Reference Footer — dynamic per section */}
        <div key={activeSection} style={{ background: '#1a1a2e', borderRadius: 12, padding: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.1rem' }}>⚡ Quick Reference Card</div>
            <div style={{ background: current.color + '33', color: current.color, fontSize: '0.7rem', fontWeight: 700, padding: '2px 10px', borderRadius: 20, letterSpacing: '0.05em' }}>
              {current.icon} {current.title}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {(quickRef[current.id] || []).map(item => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.75rem', textAlign: 'center', borderTop: `2px solid ${current.color}66` }}>
                <div style={{ color: '#7eb8f7', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{item.label}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
