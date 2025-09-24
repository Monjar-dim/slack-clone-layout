import { useEffect } from 'react';

const RetellWidget = () => {
  useEffect(() => {
    // Create and append the Retell AI script
    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget.js';
    script.type = 'module';
    script.setAttribute('data-public-key', 'public_key_1202d2e6b380c14ec7a30');
    script.setAttribute('data-agent-id', 'agent_1c3c8bdceb0ef14159fb6f7c11');
    script.setAttribute('data-agent-version', 'v1.0');
    script.setAttribute('data-title', 'Slack AI Assistant');
    script.setAttribute('data-logo-url', 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png');
    script.setAttribute('data-color', '#4A154B');
    script.setAttribute('data-bot-name', 'Slack Assistant');
    script.setAttribute('data-popup-message', 'Hi! I\'m your Slack AI Assistant. Ask me anything about Slack features, pricing, or how to get started with your team collaboration!');
    script.setAttribute('data-show-ai-popup', 'true');
    script.setAttribute('data-show-ai-popup-time', '8');
    script.setAttribute('data-auto-open', 'false');
    script.setAttribute('data-dynamic', '{"source": "slack-landing-page"}');
    script.setAttribute('data-recaptcha-key', '');

    // Append to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('retell-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default RetellWidget;