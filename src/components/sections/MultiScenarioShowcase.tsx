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

        <div className="grid lg:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${scenario.persona.gradient} p-4 text-white`}>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <i className={getPersonaIcon(scenario.persona.id)} />
                  </div>
                  <div>
                    <div className="font-semibold">{scenario.persona.name}</div>
                    <div className="text-sm opacity-90">
                      {scenario.persona.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {scenario.schedule.map((timeBlock) => (
                    <div
                      key={timeBlock.id}
                      className={`bg-${timeBlock.color}-50 border border-${timeBlock.color}-200 rounded-lg p-3`}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-6 bg-${timeBlock.color}-500 rounded-full mr-3`} />
                        <div className="flex-1">
                          <div className={`font-medium text-${timeBlock.color}-900 text-sm`}>
                            {timeBlock.title}
                          </div>
                          <div className={`text-xs text-${timeBlock.color}-600`}>
                            {timeBlock.startTime} - {timeBlock.endTime} • {getEnergyLabel(timeBlock.energyLevel)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-700">
                    <i className="fas fa-lightbulb text-yellow-500 mr-2" />
                    <strong>AI Insight:</strong> &ldquo;{scenario.aiInsight}&rdquo;
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