import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  relatedQuestion?: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOverPurple, setIsOverPurple] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "👋 Hi! I'm the Slack Assistant. I can help you with questions about Slack features, pricing, security, workflows, and more. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Check if chat widget is over purple sections
  useEffect(() => {
    const checkPurpleBackground = () => {
      const widget = document.querySelector('.chat-widget-button');
      if (widget) {
        const rect = widget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Get element behind the widget
        const elementBelow = document.elementFromPoint(centerX, centerY);
        if (elementBelow) {
          const computedStyle = window.getComputedStyle(elementBelow);
          const bgColor = computedStyle.backgroundColor;
          
          // Check if background is purple-ish (rough detection)
          const isPurple = bgColor.includes('76, 29, 149') || // primary purple
                          !!elementBelow.closest('.bg-primary') ||
                          !!elementBelow.closest('[class*="purple"]') ||
                          (computedStyle.getPropertyValue('--tw-bg-opacity') && 
                          computedStyle.backgroundColor.includes('purple'));
          
          setIsOverPurple(isPurple);
        }
      }
    };

    const handleScroll = () => {
      checkPurpleBackground();
    };

    window.addEventListener('scroll', handleScroll);
    checkPurpleBackground(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const faqData = [
    {
      keywords: ['bot', 'build bot', 'create bot', 'slack bot', 'api'],
      question: "How do I build a bot using Slack APIs?",
      answer: "To build a Slack bot, use Slack's quickstart guide. You'll need to build a Slack app, add bot features, and provide a reachable HTTP server. The process involves creating an app in your Slack workspace, configuring OAuth scopes, and implementing event handling."
    },
    {
      keywords: ['developer', 'development', 'dev environment', 'build app'],
      question: "How do I set up a developer environment to build a Slack app?",
      answer: "Join the Slack Developer Program to get access to a sandbox workspace. Build your Slack app locally using our SDKs and tools, test it thoroughly, then distribute and install it in your target workspace."
    },
    {
      keywords: ['down', 'status', 'not working', 'outage', 'offline'],
      question: "Is Slack down?",
      answer: "To check if Slack is down, visit status.slack.com for real-time status updates. You can also use the Slack Status API or send HTTP requests to our api.test or auth.test endpoints to verify connectivity."
    },
    {
      keywords: ['workflow', 'automation', 'workflow builder'],
      question: "What is a workflow in Slack?",
      answer: "A workflow is a no-code way to build and automate everyday processes in Slack. You can create custom workflows to streamline repetitive tasks, automate notifications, and connect different tools without writing code."
    },
    {
      keywords: ['workflow link', 'outside slack', 'external'],
      question: "Can I use my workflow link outside of Slack?",
      answer: "No, workflow links must be shared within Slack (in channels, DMs, or Canvas) to start workflows. They cannot be used outside of the Slack platform for security and functionality reasons."
    },
    {
      keywords: ['shortcuts', 'workflow shortcuts', 'start workflow'],
      question: "Can people start a workflow from the shortcuts menu?",
      answer: "Yes! Published workflows appear in the shortcuts menu when you type '/' + workflow name. However, workflows must be shared in a conversation that's accessible to the user who wants to start it."
    },
    {
      keywords: ['workflow steps', 'how many steps', 'step limit'],
      question: "How many steps can I add to my workflow?",
      answer: "You can add up to 100 steps to a single workflow. This gives you plenty of flexibility to create complex automation processes while maintaining performance."
    },
    {
      keywords: ['variables', 'format variables', 'workflow variables'],
      question: "How do I format variables in workflows?",
      answer: "Variables in workflows have various format options available. You can change display options like timezones, email formats, date formats, and more to ensure your data appears exactly how you need it."
    },
    {
      keywords: ['button', 'multiple clicks', 'workflow button'],
      question: "Can multiple people click a button in my workflow?",
      answer: "Yes, by default multiple people can click workflow buttons. However, there's a toggle for single-click mode that makes buttons inactive after one person clicks them."
    },
    {
      keywords: ['connector', 'connector steps', 'missing connectors'],
      question: "I don't see connector steps in Workflow Builder — why?",
      answer: "This is likely due to app-approval settings in your workspace or organization. Workspace owners and admins may restrict access to certain connectors for security or compliance reasons."
    },
    {
      keywords: ['edit workflow', 'workflow permissions', 'manage workflow'],
      question: "Who can find and edit my published workflows?",
      answer: "Before publishing: only you and workflow managers you've added can access it. After publishing: workspace owners and admins can view your workflow and add themselves as managers if needed."
    },
    {
      keywords: ['data storage', 'where stored', 'data location'],
      question: "Where is my Slack data stored?",
      answer: "Slack primarily uses AWS for data storage, with the default being US-based servers. However, data residency options may change storage location based on your plan and regional requirements."
    },
    {
      keywords: ['retention', 'delete messages', 'message retention'],
      question: "What are Slack's message and file retention policies?",
      answer: "Free plan: Messages can be deleted after 90 days or auto-kept for one year. Paid plans: Default is to retain all messages for the workspace's lifetime, but owners and admins can customize retention policies."
    },
    {
      keywords: ['edit message', 'delete message', 'message history'],
      question: "What happens with edited or deleted messages?",
      answer: "On free plans: only the most recent version of messages is kept. Paid plans maintain logs of all edits and deletions for compliance and audit purposes."
    },
    {
      keywords: ['delete account', 'remove account', 'deactivate'],
      question: "How do I delete my Slack account?",
      answer: "Members can deactivate their own account through account settings. However, complete profile information deletion may require action from the workspace owner for data protection compliance."
    },
    {
      keywords: ['delete workspace', 'remove workspace'],
      question: "How do I delete a workspace?",
      answer: "Only the Primary Owner of a workspace can delete it. This action is permanent and will remove all data, messages, and files associated with that workspace."
    },
    {
      keywords: ['transfer ownership', 'change owner', 'workspace owner'],
      question: "How do I transfer ownership of a workspace?",
      answer: "The Primary Owner can transfer ownership to another workspace member. This process involves confirming the transfer and ensuring the new owner has the necessary permissions."
    },
    {
      keywords: ['pricing', 'cost', 'price', 'how much', 'plans'],
      question: "What does Slack cost?",
      answer: "Slack offers a free plan for small teams, Pro plan at $7.25/month per user, Business+ at $12.50/month per user, and Enterprise Grid with custom pricing for large organizations. All paid plans include advanced features and enhanced support."
    },
    {
      keywords: ['security', 'safe', 'secure', 'encryption'],
      question: "How secure is Slack?",
      answer: "Slack meets enterprise-grade security standards including SOC 2, ISO 27001, and GDPR compliance. We use encryption in transit and at rest, provide advanced identity management, and offer data loss prevention features."
    },
    {
      keywords: ['integrations', 'apps', 'connect tools'],
      question: "What integrations does Slack support?",
      answer: "Slack integrates with over 2,000+ popular business tools including Google Workspace, Microsoft 365, Salesforce, Trello, GitHub, Zoom, and many more. We also provide robust APIs for custom integrations."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    faqData.forEach(item => {
      let score = 0;
      
      // Check keywords
      item.keywords.forEach(keyword => {
        if (input.includes(keyword.toLowerCase())) {
          score += keyword.length * 2; // Longer matches get higher scores
        }
        
        // Fuzzy matching for partial matches
        const words = keyword.toLowerCase().split(' ');
        words.forEach(word => {
          if (input.includes(word) && word.length > 2) {
            score += word.length;
          }
        });
      });

      // Check question text
      const questionWords = item.question.toLowerCase().split(' ');
      questionWords.forEach(word => {
        if (input.includes(word) && word.length > 3) {
          score += word.length * 0.5;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    return highestScore > 3 ? bestMatch : null;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const match = findBestMatch(inputValue);
      let botResponse: Message;

      if (match) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: match.answer,
          timestamp: new Date(),
          relatedQuestion: match.question
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: "I'm not sure about that specific question, but I can help with topics like Slack pricing, security, workflows, integrations, bot development, and account management. Could you try rephrasing your question or ask about one of these areas?",
          timestamp: new Date()
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What does Slack cost?",
    "How secure is Slack?",
    "How do I build a Slack bot?",
    "What integrations are available?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`chat-widget-button p-4 rounded-full shadow-lg transition-all duration-500 hover:scale-110 group ${
            isOverPurple 
              ? 'bg-background hover:bg-background/90 text-foreground border-2 border-accent' 
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
          }`}
        >
          <Bot size={24} className={`transition-colors duration-500 ${isOverPurple ? 'text-accent' : ''}`} />
          <div className="absolute -top-12 right-0 bg-popover text-popover-foreground px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border">
            Need help? Ask me anything!
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-card rounded-lg shadow-2xl border border-border transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-96 md:h-[500px]'
      } w-80 md:w-96 flex flex-col`}>
        
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-full">
              <Bot size={16} className="text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Slack Assistant</h3>
              <p className="text-xs opacity-90">AI-powered help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-primary/80 rounded transition-colors"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary/80 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground shadow-md border border-border'
                  }`}>
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot size={12} className="text-secondary" />
                        <span className="text-xs font-medium text-secondary">Slack Assistant</span>
                      </div>
                    )}
                    {message.relatedQuestion && (
                      <div className="text-xs font-medium text-primary mb-1">
                        Re: {message.relatedQuestion}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card text-card-foreground shadow-md border border-border px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot size={12} className="text-secondary" />
                      <span className="text-xs font-medium text-secondary">Slack Assistant</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-card border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Popular questions:</p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left text-xs bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground p-2 rounded transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-card rounded-b-lg border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Slack features, pricing, security..."
                  className="flex-1 px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm placeholder:text-muted-foreground"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-secondary hover:bg-secondary/80 disabled:bg-muted text-secondary-foreground disabled:text-muted-foreground p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;