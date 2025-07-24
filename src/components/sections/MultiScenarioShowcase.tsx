import Image from 'next/image';
import { ScenarioContent } from '@/types/content';

interface MultiScenarioShowcaseProps {
  scenarios: ScenarioContent[];
}

export default function MultiScenarioShowcase({ scenarios }: MultiScenarioShowcaseProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            One AI Chief of Staff, Every Life Scenario
          </h2>
          <p className="text-xl text-gray-600">
            See how Orlo adapts to different roles and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={getPersonaGradientClasses(scenario.persona.gradient)}>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 shadow-md border-2 border-white">
                    <Image
                      src={scenario.persona.avatar}
                      alt={scenario.persona.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white drop-shadow-sm">{scenario.persona.name}</div>
                    <div className="text-sm text-white/90 drop-shadow-sm">
                      {scenario.persona.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {scenario.schedule.map((timeBlock) => {
                    const colorClasses = getTimeBlockClasses(timeBlock.color);
                    return (
                      <div
                        key={timeBlock.id}
                        className={colorClasses.container}
                      >
                        <div className="flex items-center">
                          <div className={colorClasses.indicator} />
                          <div className="flex-1">
                            <div className={colorClasses.title}>
                              {timeBlock.title}
                            </div>
                            <div className={colorClasses.time}>
                              {timeBlock.startTime} - {timeBlock.endTime} • {getEnergyLabel(timeBlock.energyLevel)}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-700">
                    <i className="fas fa-lightbulb text-yellow-500 mr-2" />
                    <strong>AI Insight:</strong> {scenario.aiInsight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getPersonaIcon(personaId: string): string {
  switch (personaId) {
    case 'sarah':
      return 'fas fa-rocket';
    case 'marcus':
      return 'fas fa-heart';
    case 'alex':
      return 'fas fa-laptop-code';
    default:
      return 'fas fa-user';
  }
}

// 靜態定義所有可能的 persona gradient 類別組合
const PERSONA_GRADIENT_CLASSES = {
  'from-blue-600 to-indigo-600': 'bg-gradient-to-r from-blue-600 to-indigo-600 p-4',
  'from-purple-500 to-violet-600': 'bg-gradient-to-r from-purple-500 to-violet-600 p-4',
  'from-teal-500 to-cyan-600': 'bg-gradient-to-r from-teal-500 to-cyan-600 p-4'
} as const;

function getPersonaGradientClasses(gradient: string): string {
  return PERSONA_GRADIENT_CLASSES[gradient as keyof typeof PERSONA_GRADIENT_CLASSES] || 'bg-gradient-to-r from-gray-500 to-gray-600 p-4 text-white';
}

// 靜態定義所有可能的類別組合，確保 Tailwind 不會移除這些類別
const TIME_BLOCK_CLASSES = {
  red: {
    container: 'bg-red-50 border border-red-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-red-500 rounded-full mr-3',
    title: 'font-medium text-red-900 text-sm',
    time: 'text-xs text-red-600'
  },
  blue: {
    container: 'bg-blue-50 border border-blue-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-blue-500 rounded-full mr-3',
    title: 'font-medium text-blue-900 text-sm',
    time: 'text-xs text-blue-600'
  },
  green: {
    container: 'bg-green-50 border border-green-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-green-500 rounded-full mr-3',
    title: 'font-medium text-green-900 text-sm',
    time: 'text-xs text-green-600'
  },
  yellow: {
    container: 'bg-yellow-50 border border-yellow-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-yellow-500 rounded-full mr-3',
    title: 'font-medium text-yellow-900 text-sm',
    time: 'text-xs text-yellow-600'
  },
  purple: {
    container: 'bg-purple-50 border border-purple-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-purple-500 rounded-full mr-3',
    title: 'font-medium text-purple-900 text-sm',
    time: 'text-xs text-purple-600'
  },
  gray: {
    container: 'bg-gray-50 border border-gray-200 rounded-lg p-3',
    indicator: 'w-2 h-6 bg-gray-500 rounded-full mr-3',
    title: 'font-medium text-gray-900 text-sm',
    time: 'text-xs text-gray-600'
  }
} as const;

function getTimeBlockClasses(color: string) {
  return TIME_BLOCK_CLASSES[color as keyof typeof TIME_BLOCK_CLASSES] || TIME_BLOCK_CLASSES.gray;
}

function getEnergyLabel(energyLevel: string): string {
  switch (energyLevel) {
    case 'high':
      return 'Peak Energy';
    case 'medium':
      return 'Social Energy';
    case 'low':
      return 'Low Energy OK';
    default:
      return 'Energy';
  }
}