// Mindful Eating App - Estados Fluidos

// Traducciones
const translations = {
  en: {
    appName: "Mindful Eating",
    tagline: "Find your own rhythm",
    homeTitle: "Disconnect\nto reconnect",
    homeSubtitle: "They create products that hook you. We give you space to find your rhythm.",
    startSession: "Start Mindful Session",
    recentSessions: "Recent Sessions",
    empty: "Nothing yet",
    sessionsCount: (n) => `${n} session${n === 1 ? '' : 's'} recorded`,
    
    // Tabs
    home: "Home",
    history: "History",
    profile: "Profile",
    
    // Check-in
    preparation: "Preparation",
    checkInMessages: ['Land here', 'Feel your feet', 'Turn off the noise'],
    
    // Breathing
    breathingTitle: "Three breaths",
    breathingInstructions: "Inhale... exhale... let your mind arrive",
    breathingCycles: (n) => `${n} of 3`,
    
    // Hunger
    hungerTitle: "How hungry are you?",
    hungerQuestion: "Before you start eating",
    hungerLevel: "Hunger level",
    hungerFeedback: {
      low: "Are you really hungry, or is it something else?",
      high: "Very hungry. Try to slow down, even if your body is asking for speed."
    },
    continue: "Continue",
    
    // Eating
    inSession: "In session",
    eatingTips: [
      'Notice the colors on your plate... without judging',
      'Feel the texture in your mouth',
      'Breathe... this moment is yours',
      'Each bite is a chance to be present',
      'There\'s no rush, the food isn\'t going anywhere',
      'What does this taste actually feel like?',
      'It\'s okay to pause between bites',
      'Your attention is a gift you give yourself'
    ],
    distractionWarning: "Come back to your plate, the world can wait",
    finish: "Finish",
    
    // Finish
    almostDone: "Almost done",
    satietyQuestion: "How full do you feel now?",
    satietyLevel: "Satiety level",
    satisfactionQuestion: "How satisfied are you with this meal?",
    satisfactionLevel: "Satisfaction level",
    viewInsight: "View Insight",
    
    // Early finish warning
    earlyWarningTitle: "Just a moment",
    earlyWarningMessage: "You've only been eating for {minutes} minutes. Your body needs time to tell you it's full. Do you want to keep eating?",
    keepEating: "Keep eating",
    finishNow: "Finish now",
    
    // Insight
    summary: "Summary",
    insightTitle: "Inner child insight",
    insightMessages: {
      long: (m) => `You ate for ${m} minutes, your body had time to tell you it was full. Great work!`,
      short: (m) => `Only ${m} minutes... Next time, try giving your body more space to feel.`,
      medium: (m) => `${m} minutes is a good pace. You're learning to listen.`,
      rapidFull: " Note: You went from hungry to very full quickly. What did you feel along the way?"
    },
    sessionSummary: "Your session",
    initialHunger: "Initial hunger",
    finalSatiety: "Final satiety",
    minutes: "Minutes",
    backHome: "Back to Home",
    
    // History
    historyTitle: "History",
    historySubtitle: "Your mindful eating sessions",
    historyEmpty: "No sessions recorded yet.\nStart your first session from Home.",
    min: "min",
    
    // Profile
    profileTitle: "Profile",
    profileSubtitle: "Your progress with mindful eating",
    statistics: "Statistics",
    sessions: "Sessions",
    totalMinutes: "Minutes",
    average: "Average",
    philosophy: "Our philosophy",
    philosophyText: "They create products that hook you.\nWe give you space to find your rhythm.",
    settings: "Settings",
    language: "Language",
    reminders: "Reminders",
    exportData: "Export data",
    about: "About"
  },
  es: {
    appName: "Mindful Eating",
    tagline: "Encuentra tu ritmo",
    homeTitle: "Desconecta\npara reconectar",
    homeSubtitle: "Ellos crean productos que te enganchan. Nosotros te damos el espacio para encontrar tu ritmo.",
    startSession: "Empezar Sesión Consciente",
    recentSessions: "Sesiones Recientes",
    empty: "Por ahora vacío",
    sessionsCount: (n) => `${n} sesión${n === 1 ? '' : 'es'} registrada${n === 1 ? '' : 's'}`,
    
    // Tabs
    home: "Inicio",
    history: "Historial",
    profile: "Perfil",
    
    // Check-in
    preparation: "Preparación",
    checkInMessages: ['Aterriza aquí', 'Siente tus pies', 'Apaga el ruido'],
    
    // Breathing
    breathingTitle: "Tres respiraciones",
    breathingInstructions: "Inhala... exhala... deja que tu mente llegue",
    breathingCycles: (n) => `${n} de 3`,
    
    // Hunger
    hungerTitle: "¿Cuánta hambre tienes?",
    hungerQuestion: "Antes de empezar a comer",
    hungerLevel: "Nivel de hambre",
    hungerFeedback: {
      low: "¿Realmente tienes hambre, o es otra cosa?",
      high: "Mucha hambre. Intenta ir despacio, aunque tu cuerpo pida velocidad."
    },
    continue: "Continuar",
    
    // Eating
    inSession: "En sesión",
    eatingTips: [
      'Observa los colores en tu plato... sin juzgar',
      'Nota cómo se siente la textura en tu boca',
      'Respira... el momento es tuyo',
      'Cada bocado es una oportunidad para estar presente',
      'No hay prisa, la comida no se va',
      '¿A qué sabe esto realmente?',
      'Está bien hacer una pausa entre bocados',
      'Tu atención es un regalo que te das'
    ],
    distractionWarning: "Vuelve a tu plato, el mundo puede esperar",
    finish: "Terminar",
    
    // Finish
    almostDone: "Casi terminamos",
    satietyQuestion: "¿Qué tan lleno te sientes ahora?",
    satietyLevel: "Nivel de saciedad",
    satisfactionQuestion: "¿Qué tan satisfecho estás con esta comida?",
    satisfactionLevel: "Nivel de satisfacción",
    viewInsight: "Ver Insight",
    
    // Early finish warning
    earlyWarningTitle: "Un momento",
    earlyWarningMessage: "Solo llevas {minutes} minutos comiendo. Tu cuerpo necesita tiempo para avisarte que está lleno. ¿Quieres seguir comiendo?",
    keepEating: "Seguir comiendo",
    finishNow: "Terminar ahora",
    
    // Insight
    summary: "Resumen",
    insightTitle: "Insight del niño interior",
    insightMessages: {
      long: (m) => `Comiste por ${m} minutos, tu cuerpo tuvo tiempo de avisarte que estaba lleno. ¡Gran trabajo!`,
      short: (m) => `Solo ${m} minutos... La próxima vez, intenta darle más espacio a tu cuerpo para sentir.`,
      medium: (m) => `${m} minutos es un buen ritmo. Estás aprendiendo a escuchar.`,
      rapidFull: " Nota: Pasaste de hambre a muy lleno rápidamente. ¿Qué sentiste en el camino?"
    },
    sessionSummary: "Tu sesión",
    initialHunger: "Hambre inicial",
    finalSatiety: "Saciedad final",
    minutes: "Minutos",
    backHome: "Volver al Inicio",
    
    // History
    historyTitle: "Historial",
    historySubtitle: "Tus sesiones de comida consciente",
    historyEmpty: "Aún no tienes sesiones registradas.\nComienza tu primera sesión desde Inicio.",
    min: "min",
    
    // Profile
    profileTitle: "Perfil",
    profileSubtitle: "Tu progreso con la comida consciente",
    statistics: "Estadísticas",
    sessions: "Sesiones",
    totalMinutes: "Minutos",
    average: "Promedio",
    philosophy: "Nuestra filosofía",
    philosophyText: "Ellos crean productos que te enganchan.\nNosotros te damos el espacio para encontrar tu ritmo.",
    settings: "Configuración",
    language: "Idioma",
    reminders: "Recordatorios",
    exportData: "Exportar datos",
    about: "Acerca de"
  }
};

// Estado Global de la App
const AppState = {
  language: 'en',
  currentTab: 'home',
  currentScreen: 'home',
  breathCount: 0,
  hungerLevel: 5,
  satietyLevel: 5,
  satisfactionLevel: 5,
  eatingStartTime: null,
  eatingDuration: 0,
  messageIndex: 0,
  currentTipIndex: 0,
  sessions: [],
  intervals: {
    messages: null,
    tips: null,
    breathing: null,
    timer: null
  }
};

// Helper para obtener traducciones
const t = () => translations[AppState.language];

// Renderizado principal
function render() {
  const root = document.getElementById('root');
  
  let content = '';
  
  // Mostrar contenido según el tab activo
  if (AppState.currentTab === 'home') {
    switch(AppState.currentScreen) {
      case 'home':
        content = renderHome();
        break;
      case 'checkin':
        content = renderCheckIn();
        break;
      case 'breathing':
        content = renderBreathing();
        break;
      case 'hunger':
        content = renderHunger();
        break;
      case 'eating':
        content = renderEating();
        break;
      case 'finish':
        content = renderFinish();
        break;
    }
  } else if (AppState.currentTab === 'history') {
    content = renderHistory();
  } else if (AppState.currentTab === 'profile') {
    content = renderProfile();
  }
  
  // Agregar navbar solo si NO estamos en sesión activa
  const inSession = AppState.currentScreen !== 'home';
  
  root.innerHTML = content + (inSession ? '' : renderNavbar());
}

// Pantalla Home
function renderHome() {
  return `
    <div class="min-h-screen flex flex-col px-6 py-8 max-w-md mx-auto bg-[#F5F3EE] pb-24">
      <div class="mt-12 mb-16">
        <h1 class="serif text-5xl md:text-6xl font-bold text-[#2B2B2B] leading-tight mb-6" style="white-space: pre-line;">
          ${t().homeTitle}
        </h1>
        <p class="text-[#2B2B2B] text-lg md:text-xl leading-relaxed opacity-80">
          ${t().homeSubtitle}
        </p>
      </div>

      <div class="flex-1 flex items-center justify-center my-8">
        <button 
          class="w-full bg-[#475F47] text-white font-semibold text-lg px-8 py-6 rounded-lg 
                 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] 
                 border-2 border-[#1A1A1A] border-opacity-15
                 active:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.25)] 
                 active:translate-x-[4px] active:translate-y-[4px]
                 transition-all duration-150 ease-out"
          onclick="startSession()">
          ${t().startSession}
        </button>
      </div>

      <div class="mt-auto pt-8 border-t border-[#E5E5E5]">
        <h2 class="serif text-2xl font-semibold text-[#1A1A1A] mb-4">
          ${t().recentSessions}
        </h2>
        <div class="bg-[#E5E5E5] bg-opacity-50 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.12)] border border-[#E5E5E5]">
          <p class="text-[#1A1A1A] opacity-60 italic text-center">
            ${AppState.sessions.length === 0 ? t().empty : t().sessionsCount(AppState.sessions.length)}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Check-in (Mensajes dinámicos)
function renderCheckIn() {
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <div class="w-10"></div>
        <h3 class="font-semibold text-[#1A1A1A] opacity-60">Preparación</h3>
        <button onclick="goHome()" class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        <div class="bg-[#E5E5E5] bg-opacity-50 rounded-xl p-12 shadow-[10px_10px_0px_0px_rgba(26,26,26,0.2)] border-2 border-[#1A1A1A] border-opacity-10 w-full">
          <h2 id="checkInMessage" class="serif text-4xl font-bold text-[#1A1A1A] text-center">
            ${checkInMessages[AppState.messageIndex]}
          </h2>
        </div>
        
        <p class="text-[#1A1A1A] opacity-50 text-sm mt-8 text-center">
          Preparándote para conectar...
        </p>
      </div>
    </div>
  `;
}

// Pantalla de Respiración Guiada
function renderBreathing() {
  return `
    <div class="min-h-screen flex flex-col bg-[#FAFAFA]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <div class="w-10"></div>
        <h3 class="font-semibold text-[#1A1A1A] opacity-60">Respiración</h3>
        <button onclick="goHome()" class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="px-6 py-4">
        <div class="flex gap-2 max-w-md mx-auto">
          <div class="flex-1 h-1 rounded-full ${AppState.breathCount >= 1 ? 'bg-[#475F47]' : 'bg-[#E5E5E5]'}"></div>
          <div class="flex-1 h-1 rounded-full ${AppState.breathCount >= 2 ? 'bg-[#475F47]' : 'bg-[#E5E5E5]'}"></div>
          <div class="flex-1 h-1 rounded-full ${AppState.breathCount >= 3 ? 'bg-[#475F47]' : 'bg-[#E5E5E5]'}"></div>
        </div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        <h2 class="serif text-3xl font-bold text-[#1A1A1A] mb-16 text-center">
          Respira conmigo
        </h2>
        
        <div class="relative w-64 h-64 mb-16">
          <div id="breathingCircle" 
               class="absolute inset-0 bg-[#475F47] rounded-full shadow-[16px_16px_0px_0px_rgba(26,26,26,0.25)] border-4 border-[#1A1A1A] border-opacity-15"
               style="animation: breathe 8s ease-in-out infinite;">
          </div>
        </div>
        
        <div class="text-center">
          <p class="text-[#1A1A1A] text-xl mb-2">
            <span id="breathCounter" class="serif text-3xl font-bold">${AppState.breathCount}</span> de 3
          </p>
          <p class="text-[#1A1A1A] opacity-50 text-sm">
            ${AppState.breathCount >= 3 ? 'Completo. Avanzando...' : 'Inhala... Exhala...'}
          </p>
        </div>
      </div>
      
      <style>
        @keyframes breathe {
          0%, 100% { transform: scale(0.6); opacity: 0.6; }
          50% { transform: scale(1); opacity: 1; }
        }
      </style>
    </div>
  `;
}

// Pantalla de Hambre Real
function renderHunger() {
  const feedback = getHungerFeedback(AppState.hungerLevel);
  
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <button onclick="goHome()" class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-semibold text-[#1A1A1A] opacity-60">Check-in</h3>
        <div class="w-10"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-6 py-8 max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-4xl font-bold text-[#1A1A1A] mb-2">
          ¿Cuánta hambre tienes?
        </h2>
        <p class="text-[#1A1A1A] opacity-60 mb-12">
          Conecta con tu cuerpo antes de comenzar
        </p>
        
        <div class="flex-1 flex flex-col justify-center">
          <div class="mb-8">
            <input 
              type="range" 
              min="1" 
              max="10" 
              value="${AppState.hungerLevel}"
              id="hungerSlider"
              class="w-full h-4 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer"
              oninput="updateHunger(this.value)"
              style="accent-color: #475F47;">
            
            <div class="flex justify-between mt-4 mb-8">
              <span class="text-sm text-[#1A1A1A] opacity-50">Sin hambre</span>
              <span id="hungerValue" class="serif text-3xl font-bold text-[#1A1A1A]">${AppState.hungerLevel}</span>
              <span class="text-sm text-[#1A1A1A] opacity-50">Hambriento</span>
            </div>
          </div>
          
          <div id="hungerFeedback" class="bg-[#E5E5E5] bg-opacity-70 rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.18)] border border-[#E5E5E5]">
            <p class="text-[#1A1A1A] text-lg leading-relaxed">
              ${feedback}
            </p>
          </div>
        </div>
      </div>
      
      <div class="p-6 border-t border-[#1A1A1A] border-opacity-10 bg-[#EDE8DC]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#E07856] text-white font-semibold text-lg px-8 py-5 rounded-lg 
                   shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] 
                   border-2 border-[#1A1A1A] border-opacity-15
                   active:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.25)] 
                   active:translate-x-[4px] active:translate-y-[4px]
                   transition-all duration-150 ease-out"
            onclick="startEating()">
            Comenzar a Comer
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Comiendo (modo inmersivo)
function renderEating() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const seconds = AppState.eatingDuration % 60;
  
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-center px-6 py-4 border-b border-[#E5E5E5]">
        <div class="w-2 h-2 rounded-full bg-[#475F47]"></div>
        <span class="mx-3 text-[#1A1A1A] opacity-40 text-sm">En sesión</span>
        <div class="w-2 h-2 rounded-full bg-[#475F47]"></div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full"
           onmousedown="handleDistraction()"
           ontouchstart="handleDistraction()">
        
        <div class="text-center mb-16">
          <div class="serif text-7xl font-bold text-[#1A1A1A] mb-2 tracking-tight">
            ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
          </div>
          <p class="text-[#1A1A1A] opacity-40 text-sm tracking-wide">
            COMIENDO
          </p>
        </div>
        
        <div id="eatingTip" class="bg-[#E5E5E5] bg-opacity-50 rounded-xl p-8 shadow-[10px_10px_0px_0px_rgba(26,26,26,0.22)] border-2 border-[#1A1A1A] border-opacity-10 w-full max-w-sm">
          <p class="serif text-2xl text-[#1A1A1A] text-center leading-relaxed">
            ${eatingTips[AppState.currentTipIndex]}
          </p>
        </div>
        
        <div id="distractionWarning" class="hidden bg-[#E5E5E5] rounded-lg p-5 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] border border-[#1A1A1A] border-opacity-15 mt-6 max-w-sm w-full">
          <p class="text-[#1A1A1A] text-center text-sm">
            Vuelve a tu plato, el mundo puede esperar
          </p>
        </div>
      </div>
      
      <div class="p-6 bg-[#F5F3EE]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#475F47] text-white font-semibold px-8 py-4 rounded-lg 
                   shadow-[6px_6px_0px_0px_rgba(26,26,26,0.2)]
                   border-2 border-[#1A1A1A] border-opacity-15
                   active:shadow-[3px_3px_0px_0px_rgba(26,26,26,0.2)] 
                   active:translate-x-[3px] active:translate-y-[3px]
                   transition-all duration-150 ease-out"
            onclick="finishEating()">
            Terminar
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla de Finalización
function renderFinish() {
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <div class="w-10"></div>
        <h3 class="font-semibold text-[#1A1A1A] opacity-60">Reflexión</h3>
        <div class="w-10"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-6 py-8 max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-4xl font-bold text-[#2B2B2B] mb-2">
          ¿Cómo te sientes ahora?
        </h2>
        <p class="text-[#1A1A1A] opacity-60 mb-12">
          Observa los cambios en tu cuerpo
        </p>
        
        <div class="flex-1 space-y-10">
          <div>
            <label class="serif text-2xl font-semibold text-[#1A1A1A] mb-4 block">
              Saciedad
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value="${AppState.satietyLevel}"
              id="satietySlider"
              class="w-full h-4 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer"
              oninput="updateSatiety(this.value)"
              style="accent-color: #475F47;">
            <div class="flex justify-between mt-3">
              <span class="text-sm text-[#1A1A1A] opacity-50">Vacío</span>
              <span class="serif text-2xl font-bold text-[#1A1A1A]">${AppState.satietyLevel}</span>
              <span class="text-sm text-[#1A1A1A] opacity-50">Lleno</span>
            </div>
          </div>
          
          <div>
            <label class="serif text-2xl font-semibold text-[#1A1A1A] mb-4 block">
              Satisfacción
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value="${AppState.satisfactionLevel}"
              id="satisfactionSlider"
              class="w-full h-4 bg-[#E5E5E5] rounded-full appearance-none cursor-pointer"
              oninput="updateSatisfaction(this.value)"
              style="accent-color: #475F47;">
            <div class="flex justify-between mt-3">
              <span class="text-sm text-[#1A1A1A] opacity-50">Insatisfecho</span>
              <span class="serif text-2xl font-bold text-[#1A1A1A]">${AppState.satisfactionLevel}</span>
              <span class="text-sm text-[#1A1A1A] opacity-50">Satisfecho</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-6 border-t border-[#E5E5E5] bg-[#F5F3EE]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#475F47] text-white font-semibold text-lg px-8 py-5 rounded-lg 
                   shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] 
                   border-2 border-[#1A1A1A] border-opacity-15
                   active:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.25)]
                   active:translate-x-[4px] active:translate-y-[4px]
                   transition-all duration-150 ease-out"
            onclick="showInsight()">
            Ver Mi Insight
          </button>
        </div>
      </div>
    </div>
  `;
}

// Funciones de Control

function startSession() {
  AppState.currentScreen = 'checkin';
  AppState.messageIndex = 0;
  render();
  
  let messageCount = 0;
  AppState.intervals.messages = setInterval(() => {
    messageCount++;
    AppState.messageIndex = messageCount % t().checkInMessages.length;
    
    const messageEl = document.getElementById('checkInMessage');
    if (messageEl) {
      messageEl.style.opacity = '0';
      setTimeout(() => {
        messageEl.textContent = t().checkInMessages[AppState.messageIndex];
        messageEl.style.opacity = '1';
      }, 300);
      messageEl.style.transition = 'opacity 0.3s ease';
    }
    
    if (messageCount >= 3) {
      clearInterval(AppState.intervals.messages);
      setTimeout(() => {
        AppState.currentScreen = 'breathing';
        AppState.breathCount = 0;
        render();
        startBreathingCounter();
      }, 1000);
    }
  }, 4000);
}

function startBreathingCounter() {
  AppState.intervals.breathing = setInterval(() => {
    AppState.breathCount++;
    
    const counterEl = document.getElementById('breathCounter');
    if (counterEl) {
      counterEl.textContent = AppState.breathCount;
    }
    
    if (AppState.breathCount >= 3) {
      clearInterval(AppState.intervals.breathing);
      setTimeout(() => {
        AppState.currentScreen = 'hunger';
        render();
      }, 2000);
    }
  }, 8000);
}

function updateHunger(value) {
  AppState.hungerLevel = parseInt(value);
  document.getElementById('hungerValue').textContent = value;
  document.getElementById('hungerFeedback').innerHTML = `
    <p class="text-[#1A1A1A] text-lg leading-relaxed">
      ${getHungerFeedback(AppState.hungerLevel)}
    </p>
  `;
}

function getHungerFeedback(level) {
  if (level >= 9) {
    return 'Tienes mucha hambre, intenta el primer bocado aún más despacio.';
  } else if (level <= 3) {
    return '¿Es hambre física o emocional? Vamos a descubrirlo.';
  } else {
    return 'Un nivel de hambre perfecto para comer conscientemente.';
  }
}

function startEating() {
  AppState.currentScreen = 'eating';
  AppState.eatingStartTime = Date.now();
  AppState.eatingDuration = 0;
  AppState.currentTipIndex = 0;
  render();
  
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElements = document.querySelectorAll('.serif.text-7xl');
    if (timerElements.length > 0) {
      timerElements[0].textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
  
  AppState.intervals.tips = setInterval(() => {
    AppState.currentTipIndex = (AppState.currentTipIndex + 1) % eatingTips.length;
    const tipEl = document.getElementById('eatingTip');
    if (tipEl) {
      const textEl = tipEl.querySelector('p');
      if (textEl) {
        textEl.style.transition = 'opacity 0.4s ease';
        textEl.style.opacity = '0';
        
        setTimeout(() => {
          textEl.innerHTML = eatingTips[AppState.currentTipIndex];
          textEl.style.opacity = '1';
        }, 400);
      }
    }
  }, 75000);
}

function handleDistraction() {
  const warningEl = document.getElementById('distractionWarning');
  if (warningEl) {
    warningEl.classList.remove('hidden');
    setTimeout(() => {
      warningEl.classList.add('hidden');
    }, 3000);
  }
}

function confirmFinish() {
  clearInterval(AppState.intervals.timer);
  clearInterval(AppState.intervals.tips);
  
  AppState.currentScreen = 'finish';
  render();
}

function finishEating() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  
  if (minutes < 5) {
    const root = document.getElementById('root');
    root.innerHTML = `
      <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
        <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
          <button onclick="returnToEating()" class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] hover:bg-opacity-5 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h3 class="font-semibold text-[#1A1A1A] opacity-60">Pausa</h3>
          <div class="w-10"></div>
        </div>
        
        <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
          <div class="bg-[#E5E5E5] bg-opacity-70 rounded-xl p-10 shadow-[10px_10px_0px_0px_rgba(26,26,26,0.22)] border-2 border-[#1A1A1A] border-opacity-10 mb-12 w-full">
            <h3 class="serif text-3xl font-semibold text-[#1A1A1A] text-center mb-4">
              Solo llevas ${minutes} minuto${minutes !== 1 ? 's' : ''}
            </h3>
            <p class="text-[#1A1A1A] text-center leading-relaxed">
              Tu cuerpo necesita al menos 15-20 minutos para registrar la saciedad.
            </p>
          </div>
        </div>
        
        <div class="p-6 border-t border-[#E5E5E5] bg-[#F5F3EE]">
          <div class="max-w-md mx-auto space-y-3">
            <button 
              class="w-full bg-[#475F47] text-white font-semibold text-lg px-8 py-5 rounded-lg 
                     shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] 
                     border-2 border-[#1A1A1A] border-opacity-15
                     active:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.25)]
                     active:translate-x-[4px] active:translate-y-[4px]
                     transition-all duration-150 ease-out"
              onclick="returnToEating()">
              Seguir comiendo
            </button>
            
            <button 
              class="w-full bg-white bg-opacity-60 text-[#1A1A1A] font-semibold px-8 py-5 rounded-lg 
                     shadow-[6px_6px_0px_0px_rgba(26,26,26,0.15)]
                     border border-[#E5E5E5]
                     active:shadow-[3px_3px_0px_0px_rgba(26,26,26,0.15)] 
                     active:translate-x-[3px] active:translate-y-[3px]
                     transition-all duration-150 ease-out"
              onclick="confirmFinish()">
              Terminar ahora
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  confirmFinish();
}

function returnToEating() {
  AppState.currentScreen = 'eating';
  render();
  
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElements = document.querySelectorAll('.serif.text-7xl');
    if (timerElements.length > 0) {
      timerElements[0].textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
  
  AppState.intervals.tips = setInterval(() => {
    AppState.currentTipIndex = (AppState.currentTipIndex + 1) % eatingTips.length;
    const tipEl = document.getElementById('eatingTip');
    if (tipEl) {
      const textEl = tipEl.querySelector('p');
      if (textEl) {
        textEl.style.transition = 'opacity 0.4s ease';
        textEl.style.opacity = '0';
        
        setTimeout(() => {
          textEl.innerHTML = eatingTips[AppState.currentTipIndex];
          textEl.style.opacity = '1';
        }, 400);
      }
    }
  }, 75000);
}

function updateSatiety(value) {
  AppState.satietyLevel = parseInt(value);
}

function updateSatisfaction(value) {
  AppState.satisfactionLevel = parseInt(value);
}

function showInsight() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const hungerDiff = AppState.satietyLevel - AppState.hungerLevel;
  
  let insight = '';
  
  if (minutes >= 15) {
    insight = `Comiste por ${minutes} minutos, tu cuerpo tuvo tiempo de avisarte que estaba lleno. ¡Gran trabajo!`;
  } else if (minutes < 10) {
    insight = `Solo ${minutes} minutos... La próxima vez, intenta darle más espacio a tu cuerpo para sentir.`;
  } else {
    insight = `${minutes} minutos es un buen ritmo. Estás aprendiendo a escuchar.`;
  }
  
  if (hungerDiff > 5) {
    insight += ' Nota: Pasaste de hambre a muy lleno rápidamente. ¿Qué sentiste en el camino?';
  }
  
  // Guardar sesión en historial
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  
  AppState.sessions.unshift({
    date: dateStr,
    hungerStart: AppState.hungerLevel,
    satietyEnd: AppState.satietyLevel,
    satisfaction: AppState.satisfactionLevel,
    duration: minutes,
    insight: insight
  });
  
  // Limitar a últimas 30 sesiones
  if (AppState.sessions.length > 30) {
    AppState.sessions = AppState.sessions.slice(0, 30);
  }
  
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <div class="w-10"></div>
        <h3 class="font-semibold text-[#1A1A1A] opacity-60">Resumen</h3>
        <div class="w-10"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-6 py-8 max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
          Insight del niño interior
        </h2>
        
        <div class="bg-[#E5E5E5] bg-opacity-50 rounded-xl p-10 shadow-[10px_10px_0px_0px_rgba(26,26,26,0.22)] border-2 border-[#1A1A1A] border-opacity-10 mb-12">
          <p class="text-[#1A1A1A] text-xl leading-relaxed text-center">
            ${insight}
          </p>
        </div>
        
        <div class="bg-[#E5E5E5] bg-opacity-50 rounded-lg p-6 border border-[#E5E5E5] mb-4">
          <h3 class="font-semibold text-[#1A1A1A] opacity-60 text-sm mb-4 uppercase tracking-wide">
            Tu sesión
          </h3>
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="serif text-4xl font-bold text-[#1A1A1A] mb-1">${AppState.hungerLevel}</div>
              <div class="text-xs text-[#1A1A1A] opacity-60">Hambre inicial</div>
            </div>
            <div class="text-center">
              <div class="serif text-4xl font-bold text-[#1A1A1A] mb-1">${AppState.satietyLevel}</div>
              <div class="text-xs text-[#1A1A1A] opacity-60">Saciedad final</div>
            </div>
            <div class="text-center">
              <div class="serif text-4xl font-bold text-[#1A1A1A] mb-1">${minutes}</div>
              <div class="text-xs text-[#1A1A1A] opacity-60">Minutos</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-6 border-t border-[#E5E5E5] bg-[#F5F3EE]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#475F47] text-white font-semibold text-lg px-8 py-5 rounded-lg 
                   shadow-[8px_8px_0px_0px_rgba(26,26,26,0.25)] 
                   border-2 border-[#1A1A1A] border-opacity-15
                   active:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.25)]
                   active:translate-x-[4px] active:translate-y-[4px]
                   transition-all duration-150 ease-out"
            onclick="goHome()">
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  `;
}

function goHome() {
  AppState.currentScreen = 'home';
  AppState.currentTab = 'home';
  AppState.breathCount = 0;
  AppState.hungerLevel = 5;
  AppState.satietyLevel = 5;
  AppState.satisfactionLevel = 5;
  AppState.eatingStartTime = null;
  AppState.eatingDuration = 0;
  AppState.messageIndex = 0;
  AppState.currentTipIndex = 0;
  
  Object.values(AppState.intervals).forEach(interval => {
    if (interval) clearInterval(interval);
  });
  
  render();
}

// Cambiar de tab
function switchTab(tab) {
  AppState.currentTab = tab;
  AppState.currentScreen = 'home';
  render();
}

// Navbar inferior
function renderNavbar() {
  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] shadow-[0_-4px_12px_0_rgba(0,0,0,0.05)] z-50">
      <div class="flex items-center justify-around max-w-md mx-auto">
        <button 
          onclick="switchTab('home')"
          class="flex-1 flex flex-col items-center py-3 transition-colors ${AppState.currentTab === 'home' ? 'text-[#475F47]' : 'text-[#1A1A1A] opacity-40'}">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="text-xs font-medium">${t().home}</span>
        </button>
        
        <button 
          onclick="switchTab('history')"
          class="flex-1 flex flex-col items-center py-3 transition-colors ${AppState.currentTab === 'history' ? 'text-[#475F47]' : 'text-[#1A1A1A] opacity-40'}">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span class="text-xs font-medium">${t().history}</span>
        </button>
        
        <button 
          onclick="switchTab('profile')"
          class="flex-1 flex flex-col items-center py-3 transition-colors ${AppState.currentTab === 'profile' ? 'text-[#475F47]' : 'text-[#1A1A1A] opacity-40'}">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span class="text-xs font-medium">${t().profile}</span>
        </button>
      </div>
    </nav>
  `;
}

// Pantalla Historial
function renderHistory() {
  const sessions = AppState.sessions;
  
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE] pb-20">
      <div class="px-6 py-8 border-b border-[#E5E5E5] bg-white">
        <h1 class="serif text-3xl font-bold text-[#1A1A1A]">Historial</h1>
        <p class="text-[#1A1A1A] opacity-60 text-sm mt-1">Tus sesiones de comida consciente</p>
      </div>
      
      <div class="flex-1 px-6 py-6">
        ${sessions.length === 0 ? `
          <div class="max-w-md mx-auto mt-12 text-center">
            <div class="w-20 h-20 bg-[#E5E5E5] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-[#1A1A1A] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <p class="text-[#1A1A1A] opacity-60">
              Aún no tienes sesiones registradas.<br>
              Comienza tu primera sesión desde Inicio.
            </p>
          </div>
        ` : `
          <div class="max-w-md mx-auto space-y-3">
            ${sessions.map((session, index) => `
              <div class="bg-white rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.1)] border border-[#E5E5E5]">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs text-[#1A1A1A] opacity-50">${session.date}</span>
                  <span class="text-xs text-[#475F47] font-semibold">${session.duration} min</span>
                </div>
                
                <div class="grid grid-cols-3 gap-3">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-[#1A1A1A]">${session.hungerStart}</div>
                    <div class="text-xs text-[#1A1A1A] opacity-50 mt-1">Hambre inicial</div>
                  </div>
                  <div class="text-center flex items-center justify-center">
                    <svg class="w-5 h-5 text-[#475F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-[#1A1A1A]">${session.satietyEnd}</div>
                    <div class="text-xs text-[#1A1A1A] opacity-50 mt-1">Saciedad final</div>
                  </div>
                </div>
                
                ${session.insight ? `
                  <p class="text-xs text-[#1A1A1A] opacity-70 mt-3 pt-3 border-t border-[#E5E5E5]">
                    ${session.insight}
                  </p>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// Pantalla Perfil
function renderProfile() {
  const totalSessions = AppState.sessions.length;
  const totalMinutes = AppState.sessions.reduce((sum, s) => sum + s.duration, 0);
  const avgDuration = totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0;
  
  return `
    <div class="min-h-screen flex flex-col bg-[#F5F3EE] pb-20">
      <div class="px-6 py-8 border-b border-[#E5E5E5] bg-white">
        <h1 class="serif text-3xl font-bold text-[#1A1A1A]">Perfil</h1>
        <p class="text-[#1A1A1A] opacity-60 text-sm mt-1">Tu progreso con la comida consciente</p>
      </div>
      
      <div class="flex-1 px-6 py-6">
        <div class="max-w-md mx-auto space-y-6">
          
          <!-- Estadísticas -->
          <div class="bg-white rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,0.1)] border-2 border-[#1A1A1A] border-opacity-15">
            <h3 class="font-semibold text-[#1A1A1A] mb-4">Estadísticas</h3>
            
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div class="serif text-4xl font-bold text-[#475F47]">${totalSessions}</div>
                <div class="text-xs text-[#1A1A1A] opacity-60 mt-1">Sesiones</div>
              </div>
              
              <div class="text-center">
                <div class="serif text-4xl font-bold text-[#475F47]">${totalMinutes}</div>
                <div class="text-xs text-[#1A1A1A] opacity-60 mt-1">Minutos</div>
              </div>
              
              <div class="text-center">
                <div class="serif text-4xl font-bold text-[#475F47]">${avgDuration}</div>
                <div class="text-xs text-[#1A1A1A] opacity-60 mt-1">Promedio</div>
              </div>
            </div>
          </div>
          
          <!-- Filosofía -->
          <div class="bg-white bg-opacity-60 rounded-lg p-6 border border-[#E5E5E5]">
            <h3 class="font-semibold text-[#1A1A1A] mb-3">Nuestra filosofía</h3>
            <p class="text-sm text-[#1A1A1A] opacity-70 leading-relaxed">
              Ellos crean productos que te enganchan.<br>
              Nosotros te damos el espacio para encontrar tu ritmo.
            </p>
          </div>
          
          <!-- Configuración -->
          <div class="space-y-2">
            <button class="w-full bg-white rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.1)] border border-[#E5E5E5] text-left flex items-center justify-between active:shadow-[2px_2px_0px_0px_rgba(26,26,26,0.1)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
              <span class="text-[#1A1A1A]">Recordatorios</span>
              <svg class="w-5 h-5 text-[#1A1A1A] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
            <button class="w-full bg-white rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.1)] border border-[#E5E5E5] text-left flex items-center justify-between active:shadow-[2px_2px_0px_0px_rgba(26,26,26,0.1)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
              <span class="text-[#1A1A1A]">Exportar datos</span>
              <svg class="w-5 h-5 text-[#1A1A1A] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
            <button class="w-full bg-white rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.1)] border border-[#E5E5E5] text-left flex items-center justify-between active:shadow-[2px_2px_0px_0px_rgba(26,26,26,0.1)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
              <span class="text-[#1A1A1A]">Acerca de</span>
              <svg class="w-5 h-5 text-[#1A1A1A] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

render();
