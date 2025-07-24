import { PageContent, CTAButton, Metric } from '@/types/content';
import { UserPersona, ChatMessage, TimeBlock } from '@/types/user';

// 主要頁面內容數據
export const pageContent: PageContent = {
  meta: {
    title: 'Orlo - Your AI Chief of Staff | Stop Managing Time, Start Partnering with AI',
    description: 'Stop managing time. Start partnering with AI that manages it for you. Like having a senior executive\'s personal assistant - but for your entire life.',
    keywords: ['AI', 'Chief of Staff', 'time management', 'AI assistant', 'productivity', 'personal assistant', 'AI partnership'],
    ogImage: 'https://orlo.cc/img/orlo-social-share.png'
  },
  
  hero: {
    badge: 'Join 500+ professionals',
    headline: 'Your AI',
    subheadline: 'Chief of Staff',
    description: 'Your AI partner that manages time, so you don\'t have to.',
    buttons: [
      {
        text: 'Meet Your AI Chief of Staff',
        href: 'https://my.orlo.cc',
        variant: 'primary',
        icon: 'fas fa-handshake'
      },
      {
        text: 'Watch Demo',
        href: '#demo',
        variant: 'outline',
        icon: 'fas fa-play'
      }
    ],
    metrics: [
      {
        value: '5+ hours',
        label: 'Weekly time saved',
        icon: 'fas fa-clock'
      },
      {
        value: '73%',
        label: 'Less decision fatigue',
        icon: 'fas fa-brain'
      },
      {
        value: 'Zero',
        label: 'Setup complexity',
        icon: 'fas fa-check-circle'
      }
    ]
  },

  socialProof: {
    metrics: [
      {
        value: '500+',
        label: 'Beta Users'
      },
      {
        value: '4.8/5',
        label: 'User Rating'
      },
      {
        value: '5h+',
        label: 'Weekly Time Saved'
      }
    ]
  },

  problems: [
    {
      id: 'todo-trap',
      title: 'The To-Do Trap',
      description: 'Endless lists create anxiety, not action.',
      highlight: 'Orlo users report 46% less task-related stress.',
      testimonial: '"I was drowning in to-dos before Orlo." - Early user',
      icon: 'fas fa-tasks'
    },
    {
      id: 'decision-fatigue',
      title: 'Decision Fatigue',
      description: 'Each "what next?" drains your mental energy.',
      highlight: 'Orlo reduces daily decisions by 73%.',
      testimonial: '"I have so much more mental energy now." - Early user',
      icon: 'fas fa-brain'
    },
    {
      id: 'role-conflicts',
      title: 'Role Conflicts',
      description: 'Context switching between roles depletes focus.',
      highlight: 'Orlo users save 5.2 hours weekly on role transitions.',
      testimonial: '"I\'m finally present in each role I play." - Early user',
      icon: 'fas fa-balance-scale'
    }
  ],

  features: [
    {
      id: 'time-boxing',
      title: 'Time Boxing System',
      description: 'Transform abstract to-dos into concrete "when to dos" with our intelligent time boxing system that matches tasks to your energy levels.',
      icon: 'fas fa-calendar-alt'
    },
    {
      id: 'ai-coaching',
      title: 'AI Coaching',
      description: 'Unlike cold productivity robots, Orlo uses coaching dialogue to help you discover your optimal patterns and adapt to change.',
      icon: 'fas fa-robot'
    }
  ],

  aiDemo: {
    messages: [
      {
        id: '1',
        sender: 'user',
        content: 'I have a product launch next week and I\'m feeling overwhelmed. I have 15 tasks and 3 meetings tomorrow.',
        timestamp: new Date()
      },
      {
        id: '2',
        sender: 'ai',
        content: 'I can see you&apos;re managing a lot right now. Let me help you prioritize and create focus blocks.',
        timestamp: new Date(),
        insight: {
          type: 'recommendation',
          title: 'My Recommendation:',
          points: [
            'Block 9-11 AM for your highest-impact launch task',
            'Batch your 3 meetings in the afternoon',
            'Move 8 lower-priority tasks to next week'
          ],
          summary: 'This will give you 2 hours of uninterrupted focus time. Sound good?'
        }
      },
      {
        id: '3',
        sender: 'user',
        content: 'Yes! But I&apos;m worried about the tasks I&apos;m postponing.',
        timestamp: new Date()
      },
      {
        id: '4',
        sender: 'ai',
        content: 'I understand that concern. I&apos;ve analyzed those 8 tasks:',
        timestamp: new Date(),
        analysis: [
          {
            type: 'success',
            count: 5,
            description: 'tasks can wait until after launch without any impact'
          },
          {
            type: 'warning',
            count: 3,
            description: 'tasks can be delegated or automated'
          }
        ],
        followUp: 'I&apos;ll send you a detailed breakdown. Focus on your launch - I&apos;ve got the rest covered.'
      }
    ]
  },

  scenarios: [
    {
      id: 'entrepreneur',
      persona: {
        id: 'sarah',
        name: 'Sarah, Startup Founder',
        role: 'Juggling product, fundraising, team',
        description: 'Managing multiple high-stakes priorities',
        avatar: '/img/personas/entrepreneur.jpg',
        gradient: 'from-blue-500 to-indigo-600'
      },
      schedule: [
        {
          id: 'pitch-prep',
          title: 'Investor Pitch Prep',
          startTime: '09:00',
          endTime: '11:00',
          type: 'deep-work',
          energyLevel: 'high',
          color: 'red'
        },
        {
          id: 'team-standup',
          title: 'Team Standup',
          startTime: '11:15',
          endTime: '12:00',
          type: 'meeting',
          energyLevel: 'medium',
          color: 'blue'
        },
        {
          id: 'product-strategy',
          title: 'Product Strategy',
          startTime: '14:00',
          endTime: '16:00',
          type: 'deep-work',
          energyLevel: 'high',
          color: 'green'
        }
      ],
      aiInsight: 'I&apos;ve protected your morning for high-stakes work and batched all admin tasks for Friday afternoon.'
    },
    {
      id: 'working-parent',
      persona: {
        id: 'marcus',
        name: 'Marcus, Dad & Designer',
        role: 'Balancing client work & family',
        description: 'Managing professional and family responsibilities',
        avatar: '/img/personas/parent.jpg',
        gradient: 'from-purple-500 to-pink-600'
      },
      schedule: [
        {
          id: 'client-work',
          title: 'Client Design Work',
          startTime: '09:30',
          endTime: '11:30',
          type: 'deep-work',
          energyLevel: 'high',
          color: 'blue'
        },
        {
          id: 'lunch-emma',
          title: 'Lunch with Emma',
          startTime: '12:00',
          endTime: '13:00',
          type: 'personal',
          energyLevel: 'medium',
          color: 'yellow'
        },
        {
          id: 'family-time',
          title: 'Family Time',
          startTime: '15:00',
          endTime: '18:00',
          type: 'personal',
          energyLevel: 'high',
          color: 'green'
        }
      ],
      aiInsight: 'I&apos;ve created hard boundaries around family time and moved all client calls to school hours.'
    },
    {
      id: 'freelancer',
      persona: {
        id: 'alex',
        name: 'Alex, Freelance Dev',
        role: 'Managing 4 clients, 1 passion project',
        description: 'Balancing multiple client projects and personal goals',
        avatar: '/img/personas/freelancer.jpg',
        gradient: 'from-green-500 to-teal-600'
      },
      schedule: [
        {
          id: 'client-a',
          title: 'Client A - Feature Development',
          startTime: '09:00',
          endTime: '11:00',
          type: 'deep-work',
          energyLevel: 'high',
          color: 'red'
        },
        {
          id: 'client-calls',
          title: 'Client Check-ins (3)',
          startTime: '14:00',
          endTime: '15:30',
          type: 'meeting',
          energyLevel: 'medium',
          color: 'blue'
        },
        {
          id: 'passion-project',
          title: 'Personal Project',
          startTime: '19:00',
          endTime: '21:00',
          type: 'deep-work',
          energyLevel: 'medium',
          color: 'purple'
        }
      ],
      aiInsight: 'I&apos;ve grouped similar client work together and protected evening time for your passion project.'
    }
  ],

  testimonials: [
    {
      id: '1',
      name: 'Sarah Kim',
      role: 'Solo Consultant',
      avatar: '/img/testimonials/sarah.jpg',
      rating: 5,
      content: 'It\'s like having a super-smart assistant who never sleeps. My AI Chief of Staff knows I\'m creative in the morning and handles logistics in the afternoon. I focus on what matters.',
      metrics: {
        timeSaved: '7.5 hours/week',
        stressReduction: '82%'
      }
    },
    {
      id: '2',
      name: 'Marcus Lee',
      role: 'Startup Founder & Dad',
      avatar: '/img/testimonials/marcus.jpg',
      rating: 5,
      content: 'My AI Chief of Staff protects my family time like a bodyguard and optimizes my work time like a consultant. No more guilt, no more overwhelm.',
      metrics: {
        timeSaved: '5.2 hours/week',
        stressReduction: '65%'
      }
    },
    {
      id: '3',
      name: 'Alex Thompson',
      role: 'Freelance Designer',
      avatar: '/img/testimonials/alex.jpg',
      rating: 5,
      content: 'I went from chaos to calm. My AI Chief of Staff handles the juggling so I can focus on delivering amazing work. Clients notice the difference.',
      metrics: {
        timeSaved: '6.8 hours/week',
        stressReduction: '73%'
      }
    }
  ],

  pricing: {
    title: 'Meet Your AI Chief of Staff',
    description: 'Start the partnership that will transform how you work and live.',
    plans: [
      {
        id: 'trial',
        name: 'Free Partnership Trial',
        price: '$0',
        period: '14 days to meet your AI Chief of Staff',
        description: 'Experience the partnership risk-free',
        features: [
          'Complete AI time management system',
          'Smart scheduling & instant reshuffling',
          'Energy pattern learning & optimization',
          'Calendar integrations & mobile access'
        ],
        cta: {
          text: 'Start Free Partnership',
          href: 'https://my.orlo.cc',
          variant: 'outline'
        },
        highlight: false
      },
      {
        id: 'pro',
        name: 'Full AI Chief of Staff',
        price: '$12',
        period: 'per month, billed annually',
        description: 'Your complete AI partner for life and work optimization',
        features: [
          'Everything in Free, plus:',
          'Advanced AI coaching & strategic insights',
          'Multi-role management & boundaries',
          'Productivity analytics & optimization',
          'Priority support & feature access'
        ],
        cta: {
          text: 'Get Full AI Chief of Staff',
          href: 'https://my.orlo.cc',
          variant: 'primary'
        },
        highlight: true
      }
    ]
  },

  sections: [],
  cta: {
    title: 'Ready to Meet Your AI Chief of Staff?',
    description: 'Join 500+ professionals who\'ve already found their perfect AI partner. Stop managing time. Start partnering with AI that manages it for you.',
    buttons: [
      {
        text: 'Meet Your AI Chief of Staff',
        href: 'https://my.orlo.cc',
        variant: 'primary',
        icon: 'fas fa-handshake'
      },
      {
        text: 'Watch Partnership Demo',
        href: '#demo',
        variant: 'outline',
        icon: 'fas fa-play'
      }
    ]
  }
};