'use client';

import { useState, useEffect } from 'react';
import { AIConversationContent } from '@/types/content';

interface AIConversationDemoProps {
  conversation: AIConversationContent;
}

export default function AIConversationDemo({ conversation }: AIConversationDemoProps) {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleMessages < conversation.messages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setVisibleMessages(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [visibleMessages, conversation.messages.length]);

  return (
    <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            See Your AI Chief of Staff in Action
          </h2>
          <p className="text-xl text-gray-600">
            Real conversation with Orlo&apos;s AI. No scripts, no fake demos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-robot" />
                </div>
                <div>
                  <div className="font-semibold">Orlo AI Chief of Staff</div>
                  <div className="text-sm opacity-90">
                    Always learning, always optimizing
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 h-96 overflow-y-auto">
              {conversation.messages.slice(0, visibleMessages).map((message) => (
                <div key={message.id}>
                  {message.sender === 'user' ? (
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-md">
                        <div className="text-gray-800">
                          {message.content}

                          {message.insight && (
                            <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-200">
                              <div className="font-semibold text-blue-800 mb-2">
                                {message.insight.title}
                              </div>
                              <div className="text-sm text-blue-700">
                                {message.insight.points.map((point, index) => (
                                  <div key={index}>• {point}</div>
                                ))}
                              </div>
                            </div>
                          )}

                          {message.analysis && (
                            <div className="mt-2 space-y-2">
                              {message.analysis.map((item, index) => (
                                <div
                                  key={index}
                                  className={item.type === 'success'
                                    ? 'p-2 rounded border bg-green-50 border-green-200'
                                    : 'p-2 rounded border bg-yellow-50 border-yellow-200'
                                  }
                                >
                                  <div className="text-sm">
                                    {item.type === 'success' ? '✅' : '⚡'}{' '}
                                    <strong>{item.count} tasks</strong> {item.description}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {message.followUp && (
                            <div className="mt-2 text-gray-800">
                              {message.followUp}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex items-center space-x-1">
                      <span className="typing-indicator" />
                      <span className="typing-indicator" />
                      <span className="typing-indicator" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center text-gray-500">
                <i className="fas fa-comment-dots mr-2" />
                <span className="text-sm">
                  This is how Orlo helps you every day...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}