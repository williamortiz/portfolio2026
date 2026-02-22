const knowledgeBasePath = 'data/recruiter-kb.json';

const defaultKnowledgeBase = {
  welcomeMessage:
    'Hi, I am William’s recruiter assistant. Ask me anything about fit, skills, or logistics.',
  fallbackAnswer:
    'Good question. For specifics not listed here, please use the contact form and include the role, location, and timeline.',
  quickQuestions: [],
  intents: []
};

let knowledgeBase = defaultKnowledgeBase;

const launcher = document.getElementById('assistantLauncher');
const panel = document.getElementById('assistantPanel');
const closeButton = document.getElementById('assistantClose');
const quickContainer = document.getElementById('assistantQuick');
const messages = document.getElementById('assistantMessages');
const form = document.getElementById('assistantForm');
const input = document.getElementById('assistantInput');

function addMessage(text, sender) {
  const item = document.createElement('div');
  item.className = `assistant-message ${sender}`;
  item.textContent = text;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function findAnswer(question) {
  const normalized = question.toLowerCase();

  const ranked = knowledgeBase.intents
    .map((intent) => {
      const score = intent.patterns.reduce((count, pattern) => {
        return normalized.includes(pattern) ? count + 1 : count;
      }, 0);

      return { intent, score };
    })
    .sort((first, second) => second.score - first.score);

  if (ranked[0] && ranked[0].score > 0) {
    return ranked[0].intent.answer;
  }

  return knowledgeBase.fallbackAnswer;
}

function ask(question) {
  if (!question.trim()) {
    return;
  }

  addMessage(question, 'user');

  window.setTimeout(() => {
    addMessage(findAnswer(question), 'assistant');
  }, 220);
}

function openPanel() {
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  input.focus();
}

function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
}

function renderQuickQuestions() {
  quickContainer.innerHTML = '';

  knowledgeBase.quickQuestions.forEach((question) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'assistant-chip';
    button.textContent = question;
    button.addEventListener('click', () => ask(question));
    quickContainer.appendChild(button);
  });
}

async function loadKnowledgeBase() {
  try {
    const response = await fetch(knowledgeBasePath);

    if (!response.ok) {
      throw new Error('Failed to load knowledge base file.');
    }

    const data = await response.json();
    knowledgeBase = {
      ...defaultKnowledgeBase,
      ...data
    };
  } catch (error) {
    knowledgeBase = defaultKnowledgeBase;
    addMessage('Knowledge base unavailable. Using default responses.', 'assistant');
  }

  renderQuickQuestions();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value;
  ask(question);
  input.value = '';
  input.focus();
});

launcher.addEventListener('click', openPanel);
closeButton.addEventListener('click', closePanel);

loadKnowledgeBase().then(() => {
  addMessage(knowledgeBase.welcomeMessage, 'assistant');
});
