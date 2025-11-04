import { FeaturePageContent, FeaturesOverviewContent } from '@/types/features';

/**
 * 功能總覽頁面內容
 */
export const featuresOverviewContent: FeaturesOverviewContent = {
  meta: {
    title: 'Features - Orlo | Your AI Rhythm Ally',
    description: 'Explore Orlo\'s AI-powered features that help you achieve fulfilling days with less stress and more balance.',
    keywords: ['AI features', 'time management', 'daily planning', 'task management', 'productivity tools'],
  },
  hero: {
    title: 'Everything You Need for Fulfilling Days',
    subtitle: 'AI-powered features that turn chaos into rhythm',
    description: 'Discover how Orlo\'s intelligent features work together to create your perfect daily flow.',
  },
  features: [
    {
      id: 'daily-rhythm',
      slug: 'daily-rhythm',
      icon: 'sunrise',
      title: 'Daily Rhythm',
      description: 'From morning clarity to evening celebration, experience AI-guided flow throughout your day.',
      preview: '/img/features/daily-rhythm-preview.png',
    },
    {
      id: 'capture',
      slug: 'capture',
      icon: 'zap',
      title: 'Quick Capture',
      description: 'Empty your mind instantly. AI transforms thoughts into actionable tasks in seconds.',
      preview: '/img/features/capture-preview.png',
    },
    {
      id: 'ai-planning',
      slug: 'ai-planning',
      icon: 'bot',
      title: 'AI Planning',
      description: 'Get perfect week plans in 30 seconds. AI drafts, you refine, zero stress.',
      preview: '/img/features/ai-planning-preview.png',
    },
    {
      id: 'task-intelligence',
      slug: 'task-intelligence',
      icon: 'sparkles',
      title: 'Task Intelligence',
      description: 'Break down overwhelming tasks automatically. AI splits, refines, and schedules for you.',
      preview: '/img/features/task-intelligence-preview.png',
    },
  ],
  integration: {
    title: 'Features That Work Together',
    description: 'Each feature enhances the others, creating a seamless rhythm system that adapts to your life.',
    visual: '/img/features/integration-flow.png',
  },
  cta: {
    title: 'Experience All Features Free',
    description: 'Start your journey to fulfilling days with your AI rhythm ally.',
    buttonText: 'Get Started Free',
    buttonHref: 'https://my.orlo.cc',
  },
};

/**
 * Daily Rhythm 功能頁面內容
 */
export const dailyRhythmContent: FeaturePageContent = {
  slug: 'daily-rhythm',
  meta: {
    title: 'Daily Rhythm - Orlo | AI-Guided Daily Flow',
    description: 'Experience perfect daily flow from morning to evening. AI guides your rhythm with Morning Kickoff, Today View, and Day Close.',
    keywords: ['daily planning', 'morning routine', 'daily review', 'time blocking', 'AI daily assistant'],
    ogImage: '/img/features/daily-rhythm-og.png',
  },
  hero: {
    badge: 'Core Feature',
    title: 'Your Day, Perfectly Orchestrated',
    subtitle: 'From morning clarity to evening celebration',
    description: 'Experience AI-guided flow throughout your day with three powerful moments: Morning Kickoff, Today View, and Day Close.',
    visual: {
      type: 'image',
      src: '/img/features/daily-rhythm-hero.png',
      alt: 'Daily Rhythm Feature',
    },
    cta: {
      primary: {
        text: 'Start Your Perfect Day',
        href: 'https://my.orlo.cc',
      },
      secondary: {
        text: 'Watch Demo',
        href: '#demo',
      },
    },
  },
  problemSolution: {
    problems: [
      { icon: 'frown', text: 'Wake up anxious, not knowing where to start' },
      { icon: 'refresh', text: 'Plans constantly disrupted, feeling out of control' },
      { icon: 'sad', text: 'End day focusing on what wasn\'t completed' },
    ],
    solutions: [
      { icon: 'sunrise', text: 'Morning Kickoff: AI drafts your perfect day before you start' },
      { icon: 'zap', text: 'Today View: Drag-drop adjust with instant AI suggestions' },
      { icon: 'check-circle', text: 'Day Close: Celebrate wins, automatically archive the rest' },
    ],
  },
  showcase: {
    title: 'Three Moments That Transform Your Day',
    description: 'Each moment designed to reduce stress and increase fulfillment',
    highlights: [
      {
        id: 'morning-kickoff',
        icon: 'sunrise',
        title: 'Morning Kickoff',
        description: 'Wake up to a perfectly planned day. AI considers your goals, energy patterns, and deadlines to create an achievable rhythm before your first coffee.',
        visual: {
          type: 'image',
          src: '/img/features/morning-kickoff.png',
          alt: 'Morning Kickoff Interface',
        },
      },
      {
        id: 'today-view',
        icon: 'calendar',
        title: 'Today View',
        description: 'Life happens. Plans change. Simply drag and drop to adjust your schedule. AI instantly detects conflicts and suggests smart alternatives in real-time.',
        visual: {
          type: 'gif',
          src: '/img/features/today-view.gif',
          alt: 'Today View Drag and Drop',
        },
      },
      {
        id: 'day-close',
        icon: 'check-circle',
        title: 'Day Close',
        description: 'End each day celebrating what you accomplished. Orlo only shows completed tasks, automatically archiving the rest. No guilt, just progress.',
        visual: {
          type: 'image',
          src: '/img/features/day-close.png',
          alt: 'Day Close Celebration',
        },
      },
    ],
  },
  scenarios: {
    title: 'See It In Real Life',
    description: 'How different professionals use Daily Rhythm to transform their days',
    items: [
      {
        id: 'content-creator',
        title: 'Content Creator\'s Wednesday',
        persona: {
          name: 'Sarah',
          role: 'Content Creator & Podcaster',
          avatar: '/img/personas/sarah.png',
        },
        steps: [
          {
            time: '7:00 AM',
            action: 'Opens Morning Kickoff',
            result: 'AI suggests prioritizing today\'s podcast editing over social posts',
          },
          {
            time: '3:00 PM',
            action: 'Unexpected sponsor call',
            result: 'Drags time blocks around, AI suggests moving content review to tomorrow',
          },
          {
            time: '9:00 PM',
            action: 'Opens Day Close',
            result: 'Celebrates completed podcast episode, 4,200 words written. 60% week progress.',
          },
        ],
        visual: {
          type: 'image',
          src: '/img/scenarios/content-creator-day.png',
          alt: 'Content Creator Daily Rhythm',
        },
      },
      {
        id: 'solo-marketer',
        title: 'Solo Marketer\'s Launch Day',
        persona: {
          name: 'Alex',
          role: 'Solo Brand Marketer',
          avatar: '/img/personas/alex.png',
        },
        steps: [
          {
            time: '7:00 AM',
            action: 'Morning Kickoff for product launch',
            result: 'AI recommends energy distribution for high-intensity monitoring day',
          },
          {
            time: '12:00 PM',
            action: 'Launch performing well',
            result: 'AI suggests extending social monitoring time, reducing planned admin work',
          },
          {
            time: '9:00 PM',
            action: 'Day Close review',
            result: 'Sees impact metrics, AI celebrates successful launch execution',
          },
        ],
        visual: {
          type: 'image',
          src: '/img/scenarios/marketer-launch-day.png',
          alt: 'Marketer Launch Day',
        },
      },
    ],
  },
  demo: {
    title: 'Experience Your Perfect Day',
    description: 'Watch how Daily Rhythm transforms a chaotic day into a fulfilling journey',
    type: 'video',
    video: {
      src: 'https://www.youtube.com/embed/placeholder',
      platform: 'youtube',
      thumbnail: '/img/features/daily-rhythm-video-thumb.png',
    },
  },
  cta: {
    title: 'Start Your Perfect Day Tomorrow',
    description: 'Experience AI-guided daily rhythm that adapts to your life',
    cta: {
      text: 'Get Started Free',
      href: 'https://my.orlo.cc',
    },
    features: ['Morning Kickoff', 'Today View', 'Day Close'],
    note: 'No credit card required. Start in 60 seconds.',
  },
};

/**
 * Capture 功能頁面內容
 */
export const captureContent: FeaturePageContent = {
  slug: 'capture',
  meta: {
    title: 'Quick Capture - Orlo | Empty Your Mind Instantly',
    description: 'Capture thoughts instantly and let AI transform them into actionable tasks. Your second brain for stress-free productivity.',
    keywords: ['quick capture', 'brain dump', 'thought capture', 'AI task creation', 'second brain'],
    ogImage: '/img/features/capture-og.png',
  },
  hero: {
    badge: 'Second Brain',
    title: 'Empty Your Mind, Not Your Day',
    subtitle: 'Capture anything instantly. AI turns it into action.',
    description: 'Stop letting great ideas slip away. Capture thoughts in 3 seconds, let AI organize and transform them into your perfect next steps.',
    visual: {
      type: 'image',
      src: '/img/features/capture-hero.png',
      alt: 'Quick Capture Feature',
    },
    cta: {
      primary: {
        text: 'Try Quick Capture',
        href: 'https://my.orlo.cc',
      },
    },
  },
  problemSolution: {
    problems: [
      { icon: 'chat', text: 'Great ideas vanish before you can write them down' },
      { icon: 'bolt', text: 'Random thoughts interrupt your focused work' },
      { icon: 'document', text: 'Turning ideas into tasks feels like extra work' },
    ],
    solutions: [
      { icon: 'zap', text: '3-second capture: Text, voice, or quick note' },
      { icon: 'bot', text: 'AI auto-organizes by type and priority' },
      { icon: 'target', text: 'One-click transform into scheduled tasks' },
    ],
  },
  showcase: {
    title: 'From Thought to Action in Seconds',
    highlights: [
      {
        id: 'instant-capture',
        icon: 'zap',
        title: 'Instant Capture',
        description: 'Capture thoughts in 3 seconds with text, voice, or keyboard shortcut. Available everywhere: desktop app, mobile widget, or web.',
        visual: {
          type: 'gif',
          src: '/img/features/capture-instant.gif',
          alt: 'Instant Capture Animation',
        },
      },
      {
        id: 'ai-organize',
        icon: 'bot',
        title: 'AI Auto-Organize',
        description: 'AI automatically categorizes captures as tasks, ideas, or notes. Suggests priority levels and perfect timing for execution.',
        visual: {
          type: 'image',
          src: '/img/features/capture-organize.png',
          alt: 'AI Organization Interface',
        },
      },
      {
        id: 'transform',
        icon: 'target',
        title: 'One-Click Transform',
        description: 'Transform any capture into a scheduled task with AI-suggested time and duration. Or break it into subtasks automatically.',
        visual: {
          type: 'image',
          src: '/img/features/capture-transform.png',
          alt: 'Transform to Task',
        },
      },
    ],
  },
  scenarios: {
    title: 'Never Lose Another Idea',
    items: [
      {
        id: 'shower-insight',
        title: 'The Shower Insight',
        persona: {
          name: 'Jordan',
          role: 'Solo Entrepreneur',
        },
        steps: [
          {
            action: 'Morning shower sparks brilliant marketing campaign idea',
            result: 'Voice captures idea in 5 seconds before it fades',
          },
          {
            action: 'AI categorizes as "Marketing Project" with high priority',
            result: 'Suggests breaking into 3 actionable tasks',
          },
          {
            action: 'One-click accepts AI suggestion',
            result: 'Tasks scheduled across next week with estimated durations',
          },
        ],
      },
    ],
  },
  demo: {
    title: 'See Capture in Action',
    type: 'video',
    video: {
      src: 'https://www.youtube.com/embed/placeholder',
      platform: 'youtube',
    },
  },
  cta: {
    title: 'Never Lose An Idea Again',
    description: 'Your second brain that turns thoughts into progress',
    cta: {
      text: 'Start Capturing Free',
      href: 'https://my.orlo.cc',
    },
    features: ['Instant Capture', 'AI Organization', 'Smart Transform'],
  },
};

/**
 * AI Planning 功能頁面內容
 */
export const aiPlanningContent: FeaturePageContent = {
  slug: 'ai-planning',
  meta: {
    title: 'AI Planning - Orlo | Perfect Week Plans in 30 Seconds',
    description: 'Stop staring at blank calendars. AI drafts your perfect week plan in 30 seconds. You just refine and go.',
    keywords: ['AI planning', 'weekly planning', 'auto scheduling', 'smart suggestions', 'AI calendar'],
    ogImage: '/img/features/ai-planning-og.png',
  },
  hero: {
    badge: 'Powered by AI',
    title: 'Planning Without the Panic',
    subtitle: 'AI drafts your perfect week. You just refine.',
    description: 'Skip the Sunday night planning anxiety. Get a complete week plan in 30 seconds, perfectly balanced for your goals, energy, and deadlines.',
    visual: {
      type: 'image',
      src: '/img/features/ai-planning-hero.png',
      alt: 'AI Planning Feature',
    },
    cta: {
      primary: {
        text: 'Let AI Plan Your Week',
        href: 'https://my.orlo.cc',
      },
    },
  },
  problemSolution: {
    problems: [
      { icon: 'frown', text: 'Sunday nights spent agonizing over weekly planning' },
      { icon: 'question', text: 'Unsure how long tasks actually take' },
      { icon: 'sad', text: 'Manual rescheduling when plans change' },
    ],
    solutions: [
      { icon: 'bot', text: 'AI generates perfect week plan in 30 seconds' },
      { icon: 'target', text: 'Smart time estimates based on task complexity' },
      { icon: 'refresh', text: 'One-click auto-reschedule when life happens' },
    ],
  },
  showcase: {
    title: 'From Blank Canvas to Perfect Plan',
    highlights: [
      {
        id: 'ai-engine',
        icon: 'bot',
        title: 'AI Planning Engine',
        description: 'AI considers your goals, deadlines, energy patterns, and past performance to create an achievable week plan. Balances deep work with admin tasks automatically.',
        visual: {
          type: 'image',
          src: '/img/features/planning-engine.png',
          alt: 'AI Planning Engine',
        },
      },
      {
        id: 'smart-suggestions',
        icon: 'lightbulb',
        title: 'Smart Suggestions',
        description: 'As you work, AI notices patterns and makes intelligent suggestions: "This task looks big, want to split it?" or "Friday afternoon you\'re usually low energy, move to Tuesday?"',
        visual: {
          type: 'image',
          src: '/img/features/planning-suggestions.png',
          alt: 'Smart Suggestions',
        },
      },
      {
        id: 'auto-reschedule',
        icon: 'refresh',
        title: 'Auto Re-scheduling',
        description: 'Plans change. No problem. One click and AI instantly reorganizes your entire week around the new priority, maintaining balance and respecting your boundaries.',
        visual: {
          type: 'gif',
          src: '/img/features/planning-reschedule.gif',
          alt: 'Auto Rescheduling',
        },
      },
    ],
  },
  scenarios: {
    title: 'Real Planning Transformations',
    items: [
      {
        id: 'freelancer-emergency',
        title: 'The Urgent Client Request',
        persona: {
          name: 'Maria',
          role: 'Freelance Designer',
        },
        steps: [
          {
            time: 'Sunday 10 PM',
            action: 'Opens Orlo for weekly planning',
            result: 'AI generates balanced plan for 3 client projects in 30 seconds',
          },
          {
            time: 'Wednesday 2 PM',
            action: 'Urgent request from Client A arrives',
            result: 'Clicks "Re-plan Week" - AI adjusts entire schedule in seconds',
          },
          {
            time: 'Result',
            action: 'Zero manual rescheduling',
            result: 'Client A handled, other projects remain balanced',
          },
        ],
      },
    ],
  },
  demo: {
    title: 'Watch AI Plan Your Perfect Week',
    type: 'video',
    video: {
      src: 'https://www.youtube.com/embed/placeholder',
      platform: 'youtube',
    },
  },
  cta: {
    title: 'Plan Your Week in 30 Seconds',
    description: 'Never face a blank calendar with anxiety again',
    cta: {
      text: 'Try AI Planning Free',
      href: 'https://my.orlo.cc',
    },
    features: ['AI Week Planning', 'Smart Suggestions', 'Auto Re-schedule'],
  },
};

/**
 * Task Intelligence 功能頁面內容
 */
export const taskIntelligenceContent: FeaturePageContent = {
  slug: 'task-intelligence',
  meta: {
    title: 'Task Intelligence - Orlo | Break Down Any Task Automatically',
    description: 'Turn overwhelming tasks into clear action steps. AI splits, refines, and schedules tasks automatically.',
    keywords: ['task breakdown', 'AI task management', 'task splitting', 'task refinement', 'smart tasks'],
    ogImage: '/img/features/task-intelligence-og.png',
  },
  hero: {
    badge: 'AI-Powered',
    title: 'From Vague Ideas to Clear Actions',
    subtitle: 'AI breaks down, refines, and schedules your tasks automatically',
    description: 'Stop procrastinating on big tasks. AI automatically splits them into manageable steps and schedules each one perfectly.',
    visual: {
      type: 'image',
      src: '/img/features/task-intelligence-hero.png',
      alt: 'Task Intelligence Feature',
    },
    cta: {
      primary: {
        text: 'Try Task Intelligence',
        href: 'https://my.orlo.cc',
      },
    },
  },
  problemSolution: {
    problems: [
      { icon: 'cube', text: 'Big tasks feel overwhelming, leading to procrastination' },
      { icon: 'question', text: 'Vague task descriptions leave you unsure where to start' },
      { icon: 'clock', text: 'No idea how long tasks will actually take' },
    ],
    solutions: [
      { icon: 'scissors', text: 'AI splits large tasks into bite-sized steps' },
      { icon: 'sparkles', text: 'Refines vague tasks into specific actions' },
      { icon: 'calendar', text: 'Auto-schedules each step with time estimates' },
    ],
  },
  showcase: {
    title: 'Turn Elephants Into Easy Wins',
    highlights: [
      {
        id: 'smart-split',
        icon: 'scissors',
        title: 'Smart Split',
        description: 'AI analyzes task complexity and suggests optimal breakdown. One click to accept or customize. Turns "Launch new feature" into 8 manageable steps.',
        visual: {
          type: 'image',
          src: '/img/features/task-split.png',
          alt: 'Smart Task Splitting',
        },
      },
      {
        id: 'auto-refine',
        icon: 'sparkles',
        title: 'Auto Refine',
        description: 'AI detects vague tasks like "Prepare report" and suggests specific steps: "Gather data → Analyze trends → Write summary → Create slides → Practice presentation"',
        visual: {
          type: 'image',
          src: '/img/features/task-refine.png',
          alt: 'Task Refinement',
        },
      },
      {
        id: 'instant-schedule',
        icon: 'calendar',
        title: 'Instant Scheduling',
        description: 'After splitting, AI automatically schedules each subtask across your calendar, respecting deadlines and energy levels. No manual placement needed.',
        visual: {
          type: 'gif',
          src: '/img/features/task-schedule.gif',
          alt: 'Automatic Scheduling',
        },
      },
    ],
  },
  scenarios: {
    title: 'Watch Tasks Transform',
    items: [
      {
        id: 'course-project',
        title: 'The Overwhelming Course Project',
        persona: {
          name: 'David',
          role: 'Marketing Student',
        },
        steps: [
          {
            action: 'Original task: "Complete digital marketing course final project"',
            result: 'Feels overwhelming, keeps procrastinating',
          },
          {
            action: 'Clicks "AI Split" button',
            result: 'AI breaks into 5 steps: Research → Outline → Strategy → Slides → Practice',
          },
          {
            action: 'Clicks "Auto Schedule"',
            result: 'AI distributes across 5 days, avoiding other deadlines. Each step 1-2 hours.',
          },
          {
            action: 'Result: Elephant becomes bite-sized',
            result: 'Project completed without stress, one step at a time',
          },
        ],
      },
    ],
  },
  demo: {
    title: 'See Tasks Transform',
    type: 'video',
    video: {
      src: 'https://www.youtube.com/embed/placeholder',
      platform: 'youtube',
    },
  },
  cta: {
    title: 'Turn Big Tasks Into Easy Wins',
    description: 'Stop procrastinating. Start progressing.',
    cta: {
      text: 'Try Task Intelligence',
      href: 'https://my.orlo.cc',
    },
    features: ['Smart Split', 'Auto Refine', 'Instant Scheduling'],
  },
};
