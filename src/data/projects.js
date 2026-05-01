export const projects = [
  {
    id: "tripsync",
    slug: "tripsync",
    title: "TripSync",
    subtitle: "One link to plan any group trip.",
    description:
      "Replaces the WhatsApp + Google Sheets + Splitwise stack with a single shareable trip link. Built for the coordination layer nobody was solving.",
    summary:
      "TripSync was built after 16 user interviews revealed that group travel's real blocker isn't booking — it's getting people to commit, align on budget, and coordinate without burning out one person. I replaced the scattered stack of WhatsApp, Sheets, and Splitwise with a single link that handles everything from RSVP to settlement.",
    image: "/images/projects/tripsync-card.png",
    tile: { category: "social", primaryIcon: "compass+map-pin", vibe: "playful" },
    images: [
      {
        src: "/images/projects/tripsync/01-landing.png",
        caption: "Landing",
        label: "LANDING",
        description: "The first screen a new member sees when the organizer shares the trip link — designed to communicate the value prop in one headline.",
        bullets: [
          "Names the exact problem: no more scattered WhatsApp chaos",
          "Single CTA — no account needed just to see what's happening",
          "Trip name and organizer visible upfront so it feels personal",
        ],
      },
      {
        src: "/images/projects/tripsync/02-join-invite.png",
        caption: "Join Invite",
        label: "JOIN INVITE",
        description: "A boarding-pass style invite that makes saying yes feel like an event, not another form to fill out.",
        bullets: [
          "Destination, dates, and organizer visible before any commitment",
          "Google sign-in — no new password, no friction",
          "RSVP captured in a single tap",
        ],
      },
      {
        src: "/images/projects/tripsync/03-trip-overview.png",
        caption: "Trip Overview",
        label: "TRIP OVERVIEW",
        description: "The single source of truth. Who's in, who's pending, budget status, and the shareable link — all in one screen.",
        bullets: [
          "Live RSVP board: confirmed, pending, declined",
          "Budget range visible at a glance — no guessing",
          "One link, always current — replace 50 WhatsApp messages",
        ],
      },
      {
        src: "/images/projects/tripsync/04-polls.png",
        caption: "Polls",
        label: "DECISION ALIGNMENT",
        description: "Structured polls replace chaotic group chats. Every option gets a real vote, and every decision gets a permanent record.",
        bullets: [
          "Anonymous voting removes social pressure to agree",
          "Live percentage breakdown as votes come in",
          "Status log: Proposed → Voting → Decided → Booked",
        ],
      },
      {
        src: "/images/projects/tripsync/05-itinerary.png",
        caption: "Itinerary",
        label: "ITINERARY",
        description: "Day-by-day plan with assigned owners, times, and booking status for each activity — so the organizer isn't the only one with context.",
        bullets: [
          "Activities assigned to specific members, not just the organizer",
          "Status tracking: Proposed, Confirmed, Booked",
          "Everyone sees the same plan — no more version confusion",
        ],
      },
      {
        src: "/images/projects/tripsync/06-expenses.png",
        caption: "Expenses",
        label: "EXPENSE TRACKING",
        description: "Optimized settlement shows the minimum transfers needed to zero out all balances — no Splitwise free-tier limits.",
        bullets: [
          "Add an expense in 4 taps, no daily transaction cap",
          "Group Fund mode: everyone contributes upfront to a shared pool",
          "Settlement summary: who pays who, exactly how much",
        ],
      },
    ],
    liveUrl: "https://tripsync.piyushfunde.com",
    prdUrl: "/docs/tripsync-prd.pdf",
    caseStudyUrl: "/projects/tripsync",
    tags: ["Travel Tech", "Consumer", "0 to 1", "User Research", "Vibe Coding"],
    metrics: [
      { value: "14/16 interviews", label: "Confirmed organizer tax as the most universal pain point. One person absorbs all research, booking, budgeting, coordination, and blame — that's the problem I designed against." },
      { value: "12/16 interviews", label: "Confirmed the commitment gap. Groups lose two-thirds of members between 'I'm interested' and 'I've committed.' Every organizer invented their own workaround because no product addressed this." },
      { value: "13/16 interviews", label: "Confirmed expense tracking friction. Splitwise's free tier limits 3 transactions/day. I designed two modes — Quick Split and Group Fund — to match how different groups actually behave." },
      { value: "19 → 5 P0", label: "Pain points identified from primary research, prioritized on severity × solvability. Five scored P0 Critical and form the product scope." },
    ],
    walkthroughUrl: null,
    walkthroughCaption: "A 2-minute walkthrough of how TripSync works.",
    caseSections: [
      {
        title: "Why every group trip has one exhausted person",
        content:
          "In 14 of 16 interviews, a single person handled everything: research, booking, budgeting, coordination, and conflict resolution. The organizer often had the worst trip experience because they were project-managing instead of relaxing. Existing tools don't distribute this burden — they concentrate it further by giving the organizer more to manage.",
      },
      {
        title: "The commitment gap no tool was solving",
        content:
          "Groups lose two-thirds of their members between 'I'm interested' and 'I've committed.' There's no formal mechanism to capture commitment. People say yes on WhatsApp, then go silent. Every organizer I interviewed invented their own workaround — non-refundable advances, Zoom calls, central funds. Three people, three solutions, one problem. Until commitment is locked, no downstream planning is reliable.",
      },
      {
        title: "16 interviews, 19 pain points, 5 that matter",
        content:
          "I conducted 16 interviews over 4 days across Pune, Bangalore, Mumbai, Delhi, Varanasi, and Boston. Ages 23–40, covering active organizers, passive travelers, execution-willing contributors, and family planners. I identified 19 pain points and prioritized them on two dimensions: severity and solvability. Five scored P0 Critical and form the minimum scope a product must address to be genuinely useful.",
      },
    ],
    layers: [
      {
        number: "01",
        title: "Commitment Layer",
        description:
          "Organizer shares a link. Each member taps, signs in with Google, and RSVPs. Live status board shows who's confirmed, pending, or out. Auto-email reminders go to non-responders before the deadline.",
      },
      {
        number: "02",
        title: "Decision Alignment",
        description:
          "Anonymous budget slider surfaces the group's overlap range. Structured polls replace chaotic WhatsApp threads. Every decision is logged with status: Proposed, Voting, Decided, Booked.",
      },
      {
        number: "03",
        title: "Work Distribution",
        description:
          "Organizer assigns tasks to specific members with deadlines and status tracking. Email on assignment, reminder when overdue. The burden distributes instead of piling up.",
      },
      {
        number: "04",
        title: "Expense Tracking",
        description:
          "Quick Split mode: add an expense in 4 taps, no daily limits. Group Fund mode: everyone contributes upfront, treasurer logs against the pool. Settlement summary shows optimized transfers.",
      },
      {
        number: "05",
        title: "Single Source of Truth",
        description:
          "One link, always current: confirmed members, dates, plan, budget status, task checklist, expense balances. A member who missed 50 WhatsApp messages taps the link and knows everything in 30 seconds.",
      },
    ],
  },
  {
    id: "subsmart",
    slug: "subsmart",
    title: "SubSmart",
    subtitle: "Stop wasting money on subscriptions you don't use.",
    description:
      "A 90-second subscription audit that tells you exactly which services to keep, review, or cancel — no login, no bank access, no dashboard to maintain.",
    summary:
      "SubSmart was built around one insight: people don't cancel subscriptions because they forget they have them, not because they want to keep them. A three-step audit — select your apps, answer two usage questions per service, get a personalised verdict — surfaces the ₹1,847 average waste hiding in plain sight.",
    image: "/images/projects/subsmart-card.png",
    images: [
      {
        src: "/images/projects/subsmart/1.jpeg",
        frame: "mobile",
        caption: "Landing",
        label: "LANDING",
        description: "The value prop in one headline — you're probably paying for apps you forgot you had. Three steps, 90 seconds, no account required.",
        bullets: [
          "Problem stated before a single tap: forgotten subscriptions drain budgets",
          "Three-step flow visible upfront so users know exactly what they're committing to",
          "Safe · Private · Free removes every trust barrier before the CTA",
        ],
      },
      {
        src: "/images/projects/subsmart/2.jpeg",
        frame: "mobile",
        caption: "App Selection",
        label: "APP SELECTION",
        description: "Pick your subscriptions from a pre-loaded list. No typing, no price lookup — pricing for every major Indian platform is already built in.",
        bullets: [
          "Categorised tabs: Streaming, Music, Food, Cloud — no scrolling through irrelevant apps",
          "Monthly spend counter updates in real time as you tap",
          "Pre-loaded pricing means zero manual input from the user",
        ],
      },
      {
        src: "/images/projects/subsmart/3.jpeg",
        frame: "mobile",
        caption: "Plan Picker",
        label: "PLAN PICKER",
        description: "Bottom sheet lets users select their exact plan tier so the spend calculation is accurate, not estimated.",
        bullets: [
          "All plan tiers shown with exact rupee amounts — no guessing",
          "Slide up on tap, dismiss to continue — no page navigation",
          "Handles variable pricing across Mobile, Basic, Standard, and Premium tiers",
        ],
      },
      {
        src: "/images/projects/subsmart/4.jpeg",
        frame: "mobile",
        caption: "Usage Q1",
        label: "USAGE QUESTION 1",
        description: "First of two questions per service: when did you last use it? Recency is the strongest signal for whether a subscription is worth keeping.",
        bullets: [
          "Four options cover the full behavioural range without overwhelming",
          "Running spend total visible in the header — keeps the stakes visible",
          "One question per screen keeps the cognitive load minimal",
        ],
      },
      {
        src: "/images/projects/subsmart/5.jpeg",
        frame: "mobile",
        caption: "Usage Q2",
        label: "USAGE QUESTION 2",
        description: "Second question: how often do you use it? Frequency combined with recency gives enough signal for a confident Keep, Review, or Cancel verdict.",
        bullets: [
          "Consistent layout across all services — users build a pattern and move fast",
          "No free-text fields — every answer is a tap",
          "Two questions total per service keeps the 90-second promise achievable",
        ],
      },
      {
        src: "/images/projects/subsmart/6.jpeg",
        frame: "mobile",
        caption: "Audit Results",
        label: "YOUR AUDIT",
        description: "The output: a verdict per service with a specific reason. Not a dashboard. Not a score. A decision you can act on in seconds.",
        bullets: [
          "KEEP verdict with justification — 'Actively used. ₹199/mo is justified'",
          "Thumbs up/down lets users override the verdict if they disagree",
          "Renewal reminder opt-in converts a one-time audit into an ongoing safety net",
        ],
      },
    ],
    liveUrl: "https://getsubsmart.opsbrainai.com/",
    prdUrl: null,
    caseStudyUrl: "/projects/subsmart",
    tags: ["FinTech", "Consumer", "0 to 1", "Vibe Coding"],
    metrics: [
      { value: "₹1,847", label: "Average monthly waste identified per user across streaming and subscription services. The number that makes the product's case in one stat." },
      { value: "90 seconds", label: "End-to-end audit completion time. Speed was the core design constraint — any longer and users abandon before seeing their result." },
      { value: "0 inputs", label: "No login, no bank access, no manual price entry. Pre-loaded pricing data removes every barrier between landing and insight." },
      { value: "3 verdicts", label: "Keep, Review, or Cancel — with a specific reason for each. Actionable output, not a dashboard to interpret." },
    ],
    walkthroughUrl: null,
    walkthroughCaption: "A 90-second walkthrough of the SubSmart audit flow.",
    caseSections: [
      {
        title: "The subscription trap nobody talks about",
        content:
          "The average Indian household pays for 6–8 streaming and software subscriptions simultaneously. Most were signed up during a free trial, a sale, or a moment of impulse. The problem isn't that people don't want to cancel — it's that they never audit. There's no natural trigger to review what's running in the background, and no tool built for the 90-second attention span most people have for this task.",
      },
      {
        title: "Why dashboards fail and verdicts work",
        content:
          "Existing tools like bank spend trackers surface subscription data but don't tell you what to do with it. Users see a list of charges and still don't act — because ambiguity is the real barrier, not information. SubSmart replaces the dashboard with a verdict: Keep, Review, or Cancel. Two usage questions per service is enough signal. The output is a decision, not more data to process.",
      },
      {
        title: "Zero-friction design as the core constraint",
        content:
          "Every step that required user effort was a potential drop-off. No login. No bank connection. No manual price entry. Pre-loaded pricing data for every major platform meant users could go from landing to result without touching a form field that required research. The entire experience was designed to be completable before the user's attention ran out.",
      },
    ],
    layers: [
      {
        number: "01",
        title: "Service Selection",
        description:
          "User picks their active subscriptions from a pre-loaded list — no typing, no price lookup. Indian market pricing built in.",
      },
      {
        number: "02",
        title: "Usage Assessment",
        description:
          "Two questions per service: how often do you use it, and could you replace it for free? Enough signal to generate a confident verdict.",
      },
      {
        number: "03",
        title: "Personalised Audit",
        description:
          "Each service gets a verdict — Keep, Review, or Cancel — with a specific reason. Not a score. Not a chart. A decision.",
      },
      {
        number: "04",
        title: "Savings Summary",
        description:
          "Total potential monthly savings surfaced at the end. The number that converts curiosity into action.",
      },
    ],
  },
  {
    id: "pmpath",
    slug: "pmpath",
    title: "PMpath",
    subtitle: "Your PM readiness journey starts here.",
    description:
      "Tells aspiring PMs exactly where they stand and builds a personalized path to their first product role.",
    summary:
      "PMpath replaces the infinite preparation loop with a calibrated, gated journey. Instead of passive course consumption, it gives aspiring PMs an honest signal of where they actually stand and a concrete path to their first application.",
    image: "/images/projects/pmpath-card.png",
    images: [
      {
        src: "/images/projects/pmpath/1.png",
        frame: "desktop",
        caption: "Landing",
        label: "LANDING",
        description: "The hook: you already think like a PM — let us prove it. Leads with confidence, not a course catalogue.",
        bullets: [
          "Resume upload as the primary CTA — gets users into the product immediately",
          "Quiz option for users without a resume, so no one is gated out at the start",
          "Value prop stated in one line: skills mapped, gaps identified, path to first role",
        ],
      },
      {
        src: "/images/projects/pmpath/2.png",
        frame: "desktop",
        caption: "Onboarding",
        label: "ONBOARDING",
        description: "Step 1 of 3: tell us about yourself. Progress bar and contextual sidebar keep users oriented and reduce drop-off.",
        bullets: [
          "33% complete shown upfront — users know exactly how much is left",
          "Why this matters sidebar explains personalisation logic as users fill it in",
          "Social proof embedded in the sidebar: join 12k+ PMs",
        ],
      },
      {
        src: "/images/projects/pmpath/3.png",
        frame: "desktop",
        caption: "Resume Upload",
        label: "RESUME UPLOAD",
        description: "Step 2: drop your PDF. The engine extracts PM-relevant experience the user didn't know they had.",
        bullets: [
          "Drag-and-drop with a fallback browse button — works for all users",
          "66% complete — users are close enough to finish",
          "No-resume path visible below the fold so switchers without a traditional CV aren't blocked",
        ],
      },
      {
        src: "/images/projects/pmpath/5.png",
        frame: "desktop",
        caption: "Readiness Results",
        label: "READINESS RESULTS",
        description: "The honest signal: resume parsed, PM-relevant skills identified, starting readiness score calculated across four PM tracks.",
        bullets: [
          "Three stats surfaced: work experiences found, PM skills identified, readiness score",
          "Four PM tracks with readiness % each — Growth PM highlighted as strong match",
          "Score is a starting point, not a verdict — sets up the learning path without demoralising",
        ],
      },
      {
        src: "/images/projects/pmpath/6.png",
        frame: "desktop",
        caption: "PM Assessment",
        label: "PM ASSESSMENT",
        description: "Scenario-based questions calibrate the readiness score beyond what a resume can show. AI evaluates the answer, not just the format.",
        bullets: [
          "Real PM scenarios, not trivia — tests decision-making, not memorisation",
          "1 of 6 shown with a progress bar — users know the assessment is bounded",
          "Five answer options surface reasoning patterns, not just correct/incorrect",
        ],
      },
      {
        src: "/images/projects/pmpath/7.png",
        frame: "desktop",
        caption: "Dashboard",
        label: "DASHBOARD",
        description: "The personalised home base: readiness score, skill breakdown across 8 PM competencies, and a clear next action.",
        bullets: [
          "Skill breakdown shows exactly where to focus — no vague 'keep learning' advice",
          "What to do next is always surfaced — removes the paralysis of open-ended prep",
          "Streak counter builds the habit loop that keeps users returning",
        ],
      },
      {
        src: "/images/projects/pmpath/9.png",
        frame: "desktop",
        caption: "Learning Path",
        label: "LEARNING PATH",
        description: "Gated curriculum: each stage unlocks only when the previous one is complete. Progress is earned, not passive.",
        bullets: [
          "PM Foundations completed, Analytical Skills in progress — state is always clear",
          "Locked stages visible so users can see the full path ahead",
          "Completion gating prevents the 'passive course consumption' loop the product was built to replace",
        ],
      },
    ],
    liveUrl: "https://pmpath.piyushfunde.com/",
    prdUrl: "/docs/pmpath-prd.pdf",
    caseStudyUrl: "/projects/pmpath",
    tags: ["EdTech", "Career Tech", "0 to 1", "User Research", "Vibe Coding"],
    metrics: [
      { value: "65%+", label: "Onboarding completion target. All 4 steps including proficiency assessment. Defined in PRD as the leading indicator of product-market fit." },
      { value: "45%+", label: "Day-7 retention target. Return and complete at least one task within a week. Learning tools live or die on habit formation." },
      { value: "55%+", label: "Resume builder activation for users above 60% readiness. The product only works if people cross the threshold and actually apply." },
      { value: "20%+", label: "Interview callback rate for users with 6+ stages complete. The north star — a PM role, not a readiness score." },
    ],
    walkthroughUrl: null,
    walkthroughCaption: "A 2-minute walkthrough of how PMpath works.",
    caseSections: [
      {
        title: "The infinite preparation loop",
        content:
          "Thousands of professionals want to break into product management in India. They consume courses, watch videos, and read blogs for months, but never apply. Not because they lack skill, but because nobody has ever given them an honest signal of where they actually stand. The preparation loop is infinite because there's no finish line.",
      },
      {
        title: "The insight from user interviews",
        content:
          "Five user interviews revealed three patterns. First, the real blocker isn't knowledge, it's the absence of calibrated self-knowledge. People can't assess their own readiness, so they default to \"keep learning.\" Second, confidence breaks before the skill gap becomes relevant. Third, career switchers with 5 to 10 years of relevant experience get filtered out by ATS because their title doesn't say \"Product Manager,\" even though their work does.",
      },
      {
        title: "Research and prioritization",
        content:
          "Researched 40+ sources covering the Indian PM hiring landscape, competitor platforms, and candidate journey data. Conducted 5 primary interviews with PM aspirants at different stages. Identified three user types: the career switcher who needs translation, the accidental PM who needs structure, and the complete beginner who needs a reality check. Prioritized 9 pain points using an impact-times-frequency scoring model.",
      },
    ],
    layers: [
      {
        number: "01",
        title: "Resume Parsing",
        description:
          "AI-powered parsing that surfaces PM-relevant experience the user didn't know they had.",
      },
      {
        number: "02",
        title: "Skill Gap Assessment",
        description:
          "Role-specific rubric producing a starting readiness score across PM competencies.",
      },
      {
        number: "03",
        title: "Personalized Learning Path",
        description:
          "Weak areas get deeper modules and harder thresholds. Progress is gated, not passive.",
      },
      {
        number: "04",
        title: "Resume Builder",
        description:
          "Takes any job description and generates a tailored resume with before-and-after ATS scoring.",
      },
    ],
  },
  {
    id: "dealpilot",
    slug: "dealpilot",
    title: "DealPilot",
    subtitle: "The CRM that works while the founder sells.",
    description:
      "A CRM built for founders who sell across WhatsApp, email, and phone. Zero data entry.",
    summary:
      "DealPilot was designed to solve the \"entry-fatigue\" that kills early-stage startup sales. I stripped the CRM back to its core: capturing context during the call without breaking the founder's flow.",
    image: "/images/projects/dealpilot-card.png",
    images: [
      {
        src: "/images/projects/dealpilot/1.png",
        frame: "desktop",
        caption: "Landing",
        label: "LANDING",
        description: "Every deal you ever spoke about. Remembered. The value prop targets the exact failure mode founders know: warm leads going dark because nobody logged the call.",
        bullets: [
          "Voice logging, auto-capture, and daily priority actions called out upfront",
          "Social proof: 400+ founders who stopped losing warm leads",
          "Google and LinkedIn sign-in — no new account friction",
        ],
      },
      {
        src: "/images/projects/dealpilot/3.png",
        frame: "desktop",
        caption: "Connect Channels",
        label: "PASSIVE CAPTURE",
        description: "The zero data entry promise starts here. Sync Gmail, WhatsApp, and Calendar once — DealPilot auto-creates contacts and moves deal stages without the founder touching anything.",
        bullets: [
          "Three channels in one step: email, messaging, and calendar",
          "AI intent detection surfaces deal signals from natural conversation",
          "Skip option for founders who want to start fresh from the pipeline",
        ],
      },
      {
        src: "/images/projects/dealpilot/8.png",
        frame: "desktop",
        caption: "Dashboard",
        label: "TODAY'S FOCUS",
        description: "The morning brief: two priority actions surfaced from the full pipeline so the founder always knows what to do first without reading every deal.",
        bullets: [
          "Deal summary with AI context: 'Strong momentum on this deal with James Harris'",
          "Log Call, Follow Up, View Deal, Done — all reachable in one tap from the card",
          "Active pipeline visible below so nothing falls off the radar",
        ],
      },
      {
        src: "/images/projects/dealpilot/9.png",
        frame: "desktop",
        caption: "Pipeline",
        label: "PIPELINE",
        description: "Kanban view of 50 active deals across five stages — all auto-populated from email and WhatsApp, none entered manually.",
        bullets: [
          "₹5.19Cr pipeline, ₹84L likely to close, ₹15L this-month target — always visible",
          "Deal cards show company, value, and last activity at a glance",
          "Auto-move toggle advances deals based on meeting and proposal signals",
        ],
      },
      {
        src: "/images/projects/dealpilot/11.png",
        frame: "desktop",
        caption: "Analytics",
        label: "SALES INSIGHTS",
        description: "Pipeline health and DealPilot Insights — AI-generated observations the founder actually needs, not generic charts.",
        bullets: [
          "Deals stall most at Proposal stage (avg 16 days) — surfaced automatically",
          "Voice-noted deals close 2.3x faster — behaviour-based insight, not a metric",
          "Win rate, velocity, and win/loss trend without any manual reporting",
        ],
      },
      {
        src: "/images/projects/dealpilot/12.png",
        frame: "desktop",
        caption: "Voice Logger",
        label: "VOICE LOGGING",
        description: "Tap record after a call. DealPilot transcribes, extracts context, and updates the CRM record — the entire logging flow in under 60 seconds.",
        bullets: [
          "One-tap record from the deal card — no app switching",
          "Transcribes in real time and pulls structured fields from natural speech",
          "Pipeline context stays visible behind the logger — founder never loses their place",
        ],
      },
    ],
    liveUrl: "https://dealpilotcrm.lovable.app/",
    note: {
      text: "For the best experience, download the sample sales data sheet before testing the app and upload it during onboarding. This loads real data so you can see curated sections in action.",
      linkLabel: "Download sample data",
      linkUrl: "https://docs.google.com/spreadsheets/d/1W1PNQglVI2glwgXPO5iO02kZDjCLB-OaAAxYoeBT_Ow/edit?usp=sharing",
      linkSuffix: " — you can also upload it later from the Settings tab.",
    },
    prdUrl: "/docs/dealpilot-prd.pdf",
    caseStudyUrl: "/projects/dealpilot",
    tags: ["B2B SaaS", "Sales Tech", "0 to 1", "User Research", "Vibe Coding"],
    metrics: [
      { value: "30–40% fewer", label: "Warm leads going dark — the core problem surfaced in founder interviews. This was the number I designed against." },
      { value: "Under 5 min", label: "Daily data entry target. 23% of CRM users cite manual entry as their #1 obstacle. My goal was to make it near-zero." },
      { value: "Week-2 retention", label: "The cliff I designed for. Research showed founders use a CRM for 2–4 weeks, get busy closing, then stop. That's the drop-off to beat." },
      { value: "2 interviews · 6 CRMs", label: "Primary research with early-stage founders. Competitive teardown across Salesforce, HubSpot, Pipedrive, Folk, Notion, and Sheets." },
    ],
    walkthroughUrl: null,
    walkthroughCaption: "A 2-minute walkthrough of how DealPilot works.",
    caseSections: [
      {
        title: "Why founders abandon every CRM",
        content:
          "Early-stage founders manage sales across WhatsApp, email, LinkedIn, and phone simultaneously. Existing CRMs like Salesforce and HubSpot assume you have a sales team, defined pipeline stages, and time for data entry. Founders have none of these. They sign up, use it for 2 to 3 weeks, get busy closing deals, and the CRM becomes fiction. The spreadsheet wins, not because it's good, but because it asks nothing of you.",
      },
      {
        title: "Discovery: the category gap",
        content:
          "The way a founder sells is not a simpler version of how a sales team sells. It's a fundamentally different activity. Founders are in discovery mode, not execution mode. Every conversation is research. Every CRM on the market was designed for execution. That's not a feature gap. It's a category gap.",
      },
      {
        title: "What I found talking to founders",
        content:
          "Conducted primary research with founders running sales at 0 to 20 person startups. Mapped the complete founder sales workflow across channels. Analysed 10 competing CRMs across a competitive white space matrix. Identified three critical gaps no tool addressed: passive conversation capture, WhatsApp as a first-class channel, and zero-data-entry pipeline management.",
      },
    ],
    layers: [
      {
        number: "01",
        title: "Passive Capture",
        description:
          "Auto-syncs Gmail, WhatsApp, and Calendar. Creates contacts and moves deal stages without the founder touching anything.",
      },
      {
        number: "02",
        title: "Intelligence at a Glance",
        description:
          "Deal health scoring, daily priority ranking, and a morning brief delivered in under 30 seconds.",
      },
      {
        number: "03",
        title: "Suggested Actions",
        description:
          "Template-based follow-up drafts the founder approves with one tap instead of writing from scratch.",
      },
      {
        number: "04",
        title: "Minimal Founder Input",
        description:
          "Voice-note logging after calls, extracted into structured CRM fields in under 60 seconds.",
      },
    ],
  },
  {
    id: "blinkit",
    slug: "blinkit",
    title: "Blinkit | Peak Assist",
    subtitle: "Zero-scroll ops for the 10-minute window.",
    description:
      "A real-time ops dashboard that auto-triages dark store bottlenecks during demand surges — so the duty manager acts in seconds, not minutes.",
    summary:
      "Peak Assist was designed around one constraint: during a Blinkit surge, the duty manager has 90 seconds to identify and resolve a bottleneck before SLA cascades. The existing dashboard required 4–6 navigation steps and multiple context switches to do the same. I redesigned the ops layer around the peak mode state — the system detects surge, surfaces only what changed, and collapses every action to a single tap.",
    image: "/images/projects/blinkit-card.png",
    images: [
      {
        src: "/images/projects/blinkit/1.png",
        frame: "desktop",
        caption: "Normal Mode",
        label: "NORMAL MODE",
        description: "Baseline ops view: order throughput, pipeline health, and store metrics at a glance — normal state, no surge intervention needed.",
        bullets: [
          "Header strip: total orders, pending, avg delivery time, GMV, velocity, and SLA losses live",
          "Order Pipeline shows bottleneck stages — receiving, picking, packing, dispatch — with counts",
          "COD Tally, Actions panel, and Live Activity Feed surface emerging issues before they escalate",
        ],
      },
      {
        src: "/images/projects/blinkit/2.png",
        frame: "desktop",
        caption: "Peak Hour Mode",
        label: "PEAK ASSIST MODE",
        description: "Triggered when picker load hits 137% and SLA is projected to drop to 82% in 15 minutes. The dashboard shifts from monitoring to intervention.",
        bullets: [
          "Trigger surfaced upfront: 137% picker bottleneck detected, SLA projected at 82% in 15 mins",
          "Priority Actions panel lists 5 critical items ranked by severity — stock out, overloaded pickers, delayed riders",
          "Quick Actions: Request Extra Riders, Prioritize Picking, AI call to Riders — one tap each",
        ],
      },
      {
        src: "/images/projects/blinkit/3.png",
        frame: "desktop",
        caption: "Rider Pipeline",
        label: "RIDER PIPELINE",
        description: "Full rider status across store loading and en-route zones, alongside active ops actions and live picker efficiency metrics.",
        bullets: [
          "Pipeline split: At Store (3 riders) and En Route (3 riders) — Vikram delayed, Amit in traffic and very late",
          "Actions panel flags Staff Shortage, Write-off approvals, and Cash Handover with severity labels",
          "Picker efficiency tracked live: 60 PPH against a 76 PPH target — gap visible without digging",
        ],
      },
    ],
    liveUrl: null,
    figmaUrl: "https://www.figma.com/proto/9SKMqnbUqqZ5LVSdCa42a9/AI-PM---figma-WIP-screens?node-id=3-2096&t=bNtqnv8dUi5aTpP9-1",
    prdUrl: "/docs/blinkit-prd.pdf",
    caseStudyUrl: "/projects/blinkit",
    tags: ["Quick Commerce", "Ops Tech", "0 to 1", "User Research"],
    metrics: [
      { value: "4–6 steps → 1", label: "Navigation depth to resolve a surge bottleneck. The duty manager's time-to-action during peak was the core design metric — every screen was evaluated against it." },
      { value: "90 seconds", label: "Target response window for a P1 bottleneck during peak. The dashboard was designed to surface the right action before the window closes." },
      { value: "3 severity tiers", label: "Critical, At Risk, On Track. Auto-triaged from order delay data so the manager reads the queue top-down and acts, not diagnoses." },
      { value: "6 quick actions", label: "Pre-built surge responses covering 80%+ of peak incidents. Designed from incident log analysis across 12 dark store shifts." },
    ],
    walkthroughUrl: null,
    walkthroughCaption: "A 2-minute walkthrough of Peak Assist in action during a simulated surge.",
    caseSections: [
      {
        title: "The 10-minute window nobody was designing for",
        content:
          "In quick commerce, SLA failure isn't a slow decay — it cascades. One delayed order triggers a reassignment, which shifts a rider's route, which delays two more orders. The duty manager has a 90-second window to intervene before it compounds. The existing Blinkit ops dashboard was designed for monitoring, not intervention. It showed everything equally, which meant the most critical signal was buried in the same view as ambient data.",
      },
      {
        title: "Surge state as a design primitive",
        content:
          "Most ops dashboards are static — the same layout whether demand is at 40% or 140% of capacity. Peak Assist introduced surge state as a first-class design primitive. When OPH crosses threshold, the system doesn't just alert — it reconfigures. Non-urgent panels collapse, the priority queue surfaces, and the Quick Actions panel expands to the most likely responses. The manager doesn't have to decide what to look at. The dashboard already made that call.",
      },
      {
        title: "Designed from incident logs, not assumptions",
        content:
          "The six Quick Actions weren't chosen arbitrarily. I mapped the most common duty manager interventions from shift incident logs: rider reallocation, SLA extension, zone override, escalation to ops lead, manual re-pick assignment, and inventory hold flag. Together they covered 80%+ of logged P1 incidents. Designing from real incident patterns meant the one-tap actions matched the decisions managers were already making — just faster.",
      },
    ],
    layers: [
      {
        number: "01",
        title: "Surge Detection",
        description:
          "Monitors orders-per-hour against capacity threshold. Triggers Peak Assist mode automatically — no manual toggle needed.",
      },
      {
        number: "02",
        title: "Auto-Triage",
        description:
          "Severity-scores every active order in real time. Critical, At Risk, On Track — the queue is always ranked, never flat.",
      },
      {
        number: "03",
        title: "Quick Actions",
        description:
          "Six pre-built responses for the most common surge scenarios. Each shows downstream impact before the manager confirms.",
      },
      {
        number: "04",
        title: "Auto-Logging",
        description:
          "Every action taken during Peak mode is logged with timestamp and outcome. The shift handover report populates itself.",
      },
    ],
  },
];
