// Mindful Eating App - Estados Fluidos

// Traducciones
const translations = {
  en: {
    appName: "Mindful",
    tagline: "Your support in difficult moments",
    
    // Home cards
    urgeCardTitle: "I feel a strong urge",
    urgeCardSubtitle: "Surf the impulse in 5 minutes",
    compassionCardTitle: "I ate and feel bad",
    compassionCardSubtitle: "Reconnect with compassion",
    mindfulEatingCardTitle: "Eat mindfully",
    mindfulEatingCardSubtitle: "Enjoy your meal with full attention",
    
    // Urge Surfing meditation
    urgeSurfingTitle: "Surfing the Urge",
    urgeSurfingPhase1: "Notice the urge without judgment",
    urgeSurfingPhase2: "Where do you feel it in your body?",
    urgeSurfingPhase3: "Watch it like a wave - it will pass",
    urgeSurfingPhase4: "Breathe through it. You're in control.",
    urgeSurfingPhase5: "The wave is passing. You surfed it.",
    urgeSurfingComplete: "You did it. The urge is just a feeling.",
    
    // Self-Compassion meditation
    selfCompassionTitle: "Self-Compassion",
    selfCompassionPhase1: "What happened, happened. You're human.",
    selfCompassionPhase2: "This struggle is part of being alive",
    selfCompassionPhase3: "You deserve kindness, especially from yourself",
    selfCompassionPhase4: "One moment doesn't define you",
    selfCompassionPhase5: "You can start fresh, right now",
    selfCompassionComplete: "You are more than this moment",
    
    backToHome: "Back to Home",
    finishConfirmTitle: "Are you sure you want to finish?",
    yes: "Yes",
    no: "No",
    
    // Tools Section
    toolsTitle: "What's happening?",
    toolsSubtitle: "Choose what fits right now",
    
    // Behavioral States
    state1: "Something went wrong",
    state1Desc: "Blocked, stuck, things didn't work out",
    state2: "I have too much to do",
    state2Desc: "Overwhelmed, can't handle it all",
    state3: "Something bad might happen",
    state3Desc: "Worried, can't stop thinking about it",
    state4: "I'm alone right now",
    state4Desc: "Need company, miss connection",
    state5: "Nothing to do",
    state5Desc: "Bored, restless, need something",
    state6: "I just feel off",
    state6Desc: "Can't pinpoint it, just not right",
    
    // Strategy screens
    strategyTitle: "Try this",
    itWorked: "It helped",
    stillNeedMore: "Still need something",
    
    // State 1 Strategies
    state1Strategy1Title: "Move intensely for 2 minutes",
    state1Strategy1Desc: "Walk fast, do push-ups, jump, climb stairs. Burn that stuck energy.",
    state1Strategy1Why: "Frustration is energy pushing against a wall. Give it a physical outlet or it stays trapped.",
    state1Strategy2Title: "Do something you CAN control",
    state1Strategy2Desc: "Wash dishes, organize something, complete a small task.",
    state1Strategy2Why: "Your brain needs proof that 'I CAN do something.' Any win restores your sense of control.",
    
    // State 2 Strategies
    state2Strategy1Title: "Write everything down (3 min)",
    state2Strategy1Desc: "Dump it all on paper. Don't organize, just get it out of your head.",
    state2Strategy1Why: "Your brain is overloaded trying to remember everything. Externalizing it frees up that mental space instantly.",
    state2Strategy2Title: "Pick ONE thing, 10 minutes only",
    state2Strategy2Desc: "Ignore everything else. Timer on. Just this one task.",
    state2Strategy2Why: "Overwhelm paralyzes because you see a giant block. Breaking it into 'just this, just now' makes it manageable.",
    
    // State 3 Strategies
    state3Strategy1Title: "Breathe: 4-7-8 (three times)",
    state3Strategy1Desc: "Inhale 4 seconds, hold 7, exhale 8. Repeat 3 times.",
    state3Strategy1Why: "The long exhale directly activates your calm system. It's the fastest physiological reset.",
    state3Strategy2Title: "Name what you sense right now",
    state3Strategy2Desc: "5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
    state3Strategy2Why: "Anxiety lives in the imagined future. This pulls you back to the concrete present.",
    
    // State 4 Strategies
    state4Strategy1Title: "Call someone (not text)",
    state4Strategy1Desc: "Voice call. Even 5 minutes. You initiate it.",
    state4Strategy1Why: "Voice activates your social circuits more than text. Even brief connection releases oxytocin.",
    state4Strategy2Title: "Go where humans are",
    state4Strategy2Desc: "Café, park, bookstore. You don't have to talk to anyone.",
    state4Strategy2Why: "Your mammal brain calms down just being near other humans. It's why people work alone in cafes.",
    
    // State 5 Strategies  
    state5Strategy1Title: "Make something with your hands",
    state5Strategy1Desc: "Draw, cook, fix something, build, play with clay.",
    state5Strategy1Why: "Boredom is lack of engagement. Hands-on work gives immediate feedback and activates your reward system.",
    state5Strategy2Title: "Explore somewhere new",
    state5Strategy2Desc: "Walk with no destination. New route. Change your environment.",
    state5Strategy2Why: "Boredom evolved to make you seek new resources. Movement + novelty activates your dopamine without consuming.",
    
    // State 6 Strategies
    state6Strategy1Title: "Go outside, walk 10 minutes",
    state6Strategy1Desc: "Fresh air, natural light, movement. Don't think, just walk.",
    state6Strategy1Why: "Walking outside is the universal reset button. Changes your environment, gives you light, calms your nervous system.",
    state6Strategy2Title: "Cold water on your face",
    state6Strategy2Desc: "Shower or wash your face with cold water.",
    state6Strategy2Why: "When you feel numb or disconnected, cold water is a wake-up call that reconnects you to your body and the present.",
    
    // Check-in
    preparation: "Before you start",
    checkInMessages: ['Land here', 'Feel your feet', 'Turn off the noise'],
    preparingToConnect: "Preparing to connect...",
    checkInHeader: "Take a moment",
    
    // Breathing
    breathingTitle: "Breathe with me",
    breathingHeader: "Slow down",
    breathingInstructions: "Nothing to fix, just breathe",
    breathingCycles: (n) => `${n} of 5`,
    breathingComplete: "Complete. Moving forward...",
    breathingInhaleExhale: "Inhale... Exhale...",
    
    // Hunger
    hungerTitle: "How hungry are you?",
    hungerQuestion: "Before start",
    hungerSubtitle: "Connect with your body before you begin",
    hungerLevel: "Hunger level",
    notHungry: "Not hungry",
    hungry: "Hungry",
    notSure: "I don't really know",
    startEating: "Start Eating",
    hungerFeedback: {
      low: "Are you really hungry, or is it something else?",
      high: "Very hungry. Try to slow down, even if your body is asking for speed.",
      medium: "A perfect level of hunger to eat mindfully."
    },
    
    // Hunger Guide
    hungerGuideTitle: "How to know if you're hungry",
    hungerGuideIntro: "Sometimes we confuse hunger with other sensations. Here's how to identify true physical hunger:",
    hungerGuideSteps: [
      '🤔 Pause and ask yourself: When did I last eat?',
      '🫀 Notice your body: Empty stomach? Low energy? Slight dizziness?',
      '🧠 Is it in your head or your body? Boredom and anxiety live in the mind; hunger lives in the stomach.',
      '⏰ True hunger builds gradually, cravings appear suddenly.',
      '💧 Sometimes thirst disguises itself as hunger. Try drinking water first.'
    ],
    hungerGuideScale: "Quick reference scale:",
    hungerScaleItems: [
      '1-3: Not really hungry (emotional, bored, thirsty)',
      '4-6: Moderate hunger (ideal to start eating mindfully)',
      '7-10: Very hungry (you may eat too fast, try to slow down)'
    ],
    gotIt: "Got it, let me choose",
    continue: "Continue",
    
    // Simple Hunger Test
    simpleTestTitle: "Quick Check",
    simpleTestSubtitle: "3 simple questions to understand your hunger",
    simpleQuestions: [
      {
        q: "When did you last eat?",
        options: [
          { text: "Less than 3 hours ago", score: 0 },
          { text: "3 hours or more ago", score: 3 }
        ]
      },
      {
        q: "Would simple, healthy food sound good right now? (like chicken with vegetables, eggs, fruit)",
        options: [
          { text: "Yes, that sounds good", score: 3 },
          { text: "No, I only want something specific", score: 0 }
        ]
      },
      {
        q: "What do you feel in your stomach right now?",
        options: [
          { text: "Empty, growling, or uncomfortable", score: 3 },
          { text: "Nothing specific", score: 0 }
        ]
      }
    ],
    simpleResultPhysical: "Your body needs food",
    simpleResultPhysicalDesc: "You have genuine physical hunger. Let's eat mindfully.",
    simpleResultLikely: "You probably have hunger",
    simpleResultLikelyDesc: "Some signs of physical hunger. Eat if you want to.",
    simpleResultEmotional: "This seems emotional",
    simpleResultEmotionalDesc: "This might be emotional hunger rather than physical. What do you really need?",
    eatMindfully: "Eat Mindfully Anyway",
    tryToolsFirst: "Try Tools First",
    
    // Questionnaire
    questionnaireTitle: "Let's check in",
    questionnaireSubtitle: "A few questions to understand what you need",
    questionProgress: (n) => `Question ${n} of 7`,
    skipOption: "I don't know",
    back: "Back",
    questions: [
      {
        id: 'timing',
        text: 'When did you last eat a full meal?',
        options: [
          { text: 'Less than 2 hours ago', score: -3 },
          { text: '2-4 hours ago', score: 1 },
          { text: '4-6 hours ago', score: 3 },
          { text: '6+ hours ago', score: 3 }
        ]
      },
      {
        id: 'sensations',
        text: 'What physical sensations are you noticing?',
        subtitle: 'Select all that apply',
        multiSelect: true,
        options: [
          { text: 'Empty or growling stomach', score: 2 },
          { text: 'Low energy', score: 2 },
          { text: 'Light-headed or dizzy', score: 2 },
          { text: 'None of these', score: -2 }
        ]
      },
      {
        id: 'location',
        text: 'Where do you feel this sensation?',
        options: [
          { text: 'In my stomach/body', score: 2 },
          { text: 'In my head/thoughts', score: -2 },
          { text: 'Both', score: 0 },
          { text: 'Not sure', score: 0 }
        ]
      },
      {
        id: 'specificity',
        text: 'What sounds good to you right now?',
        options: [
          { text: 'Any food would satisfy me', score: 2 },
          { text: 'Only specific comfort foods', score: -2 },
          { text: 'I don\'t know', score: 0 }
        ]
      },
      {
        id: 'emotions',
        text: 'How are you feeling emotionally right now?',
        subtitle: 'Select all that apply',
        multiSelect: true,
        options: [
          { text: 'Stressed', score: -1 },
          { text: 'Bored', score: -1 },
          { text: 'Anxious', score: -1 },
          { text: 'Sad', score: -1 },
          { text: 'Content or neutral', score: 1 }
        ]
      },
      {
        id: 'urgency',
        text: 'How does this hunger feel?',
        options: [
          { text: 'It can wait', score: 2 },
          { text: 'Growing steadily', score: 2 },
          { text: 'Urgent, need food now', score: -1 }
        ]
      },
      {
        id: 'hydration',
        text: 'Have you had water in the last 30 minutes?',
        options: [
          { text: 'Yes, still feel hungry', score: 1 },
          { text: 'No, let me try water first', score: 0 },
          { text: 'Just thirsty', score: -2 }
        ]
      }
    ],
    
    // Questionnaire Results
    physicalHungerTitle: "Your body is calling",
    physicalHungerMessage: "You're genuinely hungry. Your body is asking for nourishment.",
    physicalHungerAction: "Let's eat mindfully",
    
    emotionalHungerTitle: "Something else is calling",
    emotionalHungerMessage: "It seems like something other than hunger is asking for attention. That's completely okay—let's explore what might help.",
    emotionalHungerSubtitle: "Choose what feels right:",
    
    uncertainHungerTitle: "Mixed signals",
    uncertainHungerMessage: "Your signals are mixed—this is really common. Let's try something to get clearer.",
    uncertainHungerSubtitle: "Try one of these:",
    
    // Emotional Hunger Tools
    toolMindfulPause: "Mindful pause",
    toolMindfulPauseDesc: "2-minute breathing to feel your feelings",
    toolCheckIn: "Emotional check-in",
    toolCheckInDesc: "What am I really hungry for?",
    toolProceedAnyway: "Eat mindfully anyway",
    toolProceedAnywayDesc: "It's okay to eat for comfort consciously",
    
    // Uncertainty Tools
    toolHydration: "Hydration test",
    toolHydrationDesc: "Drink water, wait 10 minutes, reassess",
    toolPause: "5-minute pause",
    toolPauseDesc: "Walk, stretch, breathe—then check back in",
    toolEatLight: "Eat lightly and check in",
    toolEatLightDesc: "Small portion with frequent satiety checks",
    
    // Timer Screens
    timerWaterTitle: "Hydration test",
    timerWaterMessage: "Drink a glass of water. Sometimes thirst disguises as hunger.",
    timerWaterWaiting: "Give your body time to respond...",
    timerPauseTitle: "Take a pause",
    timerPauseMessage: "Try one of these for 5 minutes:",
    timerPauseSuggestions: [
      '🚶 Take a short walk',
      '🙆 Stretch your body',
      '🫁 Breathe deeply',
      '🪟 Look out a window'
    ],
    timerComplete: "Time's up",
    skipTimer: "I already did it",
    feelBetter: "I feel better now",
    stillWantToEat: "I still want to eat",
    
    // Emotional Check-in
    emotionalCheckInTitle: "What are you really hungry for?",
    emotionalCheckInPrompts: [
      'Connection with someone?',
      'Rest or a break?',
      'Comfort or soothing?',
      'Distraction from something?',
      'To feel in control?',
      'Just to feel something?'
    ],
    emotionalCheckInReflection: "Sometimes naming it is enough. What feels true?",
    emotionalCheckInContinue: "I've reflected",
    
    // Eating
    inSession: "In session",
    eatingStatus: "EATING",
    surfingStatus: "SURFING",
    compassionStatus: "FEELING COMPASSION",
    eatingTips: [
      'Breathe... this moment is yours',
      'Feel your feet on the ground',
      'Notice the texture in your mouth',
      'There\'s no rush, the food isn\'t going anywhere',
      'Each bite is a chance to be present',
      'You\'re safe here',
      'Be gentle with yourself'
    ],
    emotionalEatingTips: [
      'It\'s okay to seek comfort in food',
      'You deserve kindness, especially from yourself',
      'Notice how this food makes you feel'
    ],
    distractionWarning: "Come back to your plate, the world can wait",
    finish: "Finish",
    
    // Finish
    reflection: "Reflection",
    almostDone: "Almost done",
    satietyQuestion: "How do you feel now?",
    satietySubtitle: "Notice the changes in your body",
    satietyLevel: "Satiety",
    satietyEmpty: "Empty",
    satietyFull: "Full",
    satisfactionQuestion: "How satisfied are you with this meal?",
    satisfactionLevel: "Satisfaction",
    satisfactionUnsatisfied: "Unsatisfied",
    satisfactionSatisfied: "Satisfied",
    viewInsight: "Continue",
    
    // Early finish warning
    pause: "Pause",
    earlyWarningTitle: "Just a moment",
    earlyWarningMessage: "You've only been eating for {minutes} minutes. Your body needs at least 15-20 minutes to register fullness.",
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
    emotionalInsightMessages: {
      long: (m) => `You took ${m} minutes with awareness, even while seeking comfort. That's what matters.`,
      short: (m) => `${m} minutes of conscious comfort. There's no shame in needing this.`,
      medium: (m) => `${m} minutes of being present with yourself. You showed up.`,
      rapidFull: " You moved quickly through this meal. Notice how comfort and fullness feel different."
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
    avoidedHunger: "Overcame urge",
    avoidedBadge: "Victory",
    
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
    appName: "Mindful",
    tagline: "Tu apoyo en momentos difíciles",
    
    // Home cards
    urgeCardTitle: "Siento una urgencia fuerte",
    urgeCardSubtitle: "Surfea el impulso en 5 minutos",
    compassionCardTitle: "Ya comí y me siento mal",
    compassionCardSubtitle: "Reconecta con compasión",
    mindfulEatingCardTitle: "Comer conscientemente",
    mindfulEatingCardSubtitle: "Disfruta tu comida con atención plena",
    
    // Urge Surfing meditation
    urgeSurfingTitle: "Surfeando la Urgencia",
    urgeSurfingPhase1: "Observa la urgencia sin juzgarte",
    urgeSurfingPhase2: "¿Dónde la sientes en tu cuerpo?",
    urgeSurfingPhase3: "Mírala como una ola - pasará",
    urgeSurfingPhase4: "Respira a través de ella. Tienes el control.",
    urgeSurfingPhase5: "La ola está pasando. La surfeaste.",
    urgeSurfingComplete: "Lo lograste. La urgencia es solo una sensación.",
    
    // Self-Compassion meditation
    selfCompassionTitle: "Autocompasión",
    selfCompassionPhase1: "Lo que pasó, pasó. Eres humano.",
    selfCompassionPhase2: "Esta lucha es parte de estar vivo",
    selfCompassionPhase3: "Mereces amabilidad, especialmente de ti mismo",
    selfCompassionPhase4: "Un momento no te define",
    selfCompassionPhase5: "Puedes empezar de nuevo, ahora mismo",
    selfCompassionComplete: "Eres más que este momento",
    
    backToHome: "Volver al inicio",
    finishConfirmTitle: "¿Estás seguro que quieres finalizarla?",
    yes: "Sí",
    no: "No",
    
    // Tools Section
    toolsTitle: "¿Qué está pasando?",
    toolsSubtitle: "Elige lo que te resuena ahora",
    
    // Behavioral States
    state1: "Algo salió mal",
    state1Desc: "Bloqueado, atascado, no funcionó",
    state2: "Tengo mucho que hacer",
    state2Desc: "Abrumado, no puedo con todo",
    state3: "Algo malo podría pasar",
    state3Desc: "Preocupado, no dejo de pensar en eso",
    state4: "Estoy solo/a ahora",
    state4Desc: "Necesito compañía, extraño conexión",
    state5: "No tengo nada que hacer",
    state5Desc: "Aburrido, inquieto, necesito algo",
    state6: "Simplemente me siento mal",
    state6Desc: "No sé qué es, solo no me siento bien",
    
    // Strategy screens
    strategyTitle: "Prueba esto",
    itWorked: "Me ayudó",
    stillNeedMore: "Aún necesito algo",
    
    // State 1 Strategies
    state1Strategy1Title: "Muévete intenso por 2 minutos",
    state1Strategy1Desc: "Camina rápido, haz flexiones, salta, sube escaleras. Quema esa energía atrapada.",
    state1Strategy1Why: "La frustración es energía empujando contra una pared. Dale una salida física o se queda atrapada.",
    state1Strategy2Title: "Haz algo que SÍ puedas controlar",
    state1Strategy2Desc: "Lava platos, organiza algo, completa una tarea pequeña.",
    state1Strategy2Why: "Tu cerebro necesita prueba de que 'SÍ puedo hacer algo'. Cualquier logro restaura tu sentido de control.",
    
    // State 2 Strategies
    state2Strategy1Title: "Escribe todo en papel (3 min)",
    state2Strategy1Desc: "Vacía tu cabeza en papel. No lo organices, solo sácalo.",
    state2Strategy1Why: "Tu cerebro está sobrecargado tratando de recordar todo. Externalizarlo libera ese espacio mental al instante.",
    state2Strategy2Title: "Elige UNA cosa, solo 10 minutos",
    state2Strategy2Desc: "Ignora todo lo demás. Timer encendido. Solo esta tarea.",
    state2Strategy2Why: "El abrumamiento paraliza porque ves un bloque gigante. Dividirlo en 'solo esto, solo ahora' lo hace manejable.",
    
    // State 3 Strategies
    state3Strategy1Title: "Respira: 4-7-8 (tres veces)",
    state3Strategy1Desc: "Inhala 4 segundos, sostén 7, exhala 8. Repite 3 veces.",
    state3Strategy1Why: "La exhalación larga activa directamente tu sistema de calma. Es el reset fisiológico más rápido.",
    state3Strategy2Title: "Nombra lo que sientes ahora",
    state3Strategy2Desc: "5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas.",
    state3Strategy2Why: "La ansiedad vive en el futuro imaginado. Esto te regresa al presente concreto.",
    
    // State 4 Strategies
    state4Strategy1Title: "Llama a alguien (no texto)",
    state4Strategy1Desc: "Llamada de voz. Aunque sean 5 minutos. Tú inicias.",
    state4Strategy1Why: "La voz activa tus circuitos sociales más que el texto. Incluso conexión breve libera oxitocina.",
    state4Strategy2Title: "Ve donde hay humanos",
    state4Strategy2Desc: "Café, parque, librería. No tienes que hablar con nadie.",
    state4Strategy2Why: "Tu cerebro mamífero se calma solo estando cerca de otros humanos. Por eso la gente trabaja sola en cafés.",
    
    // State 5 Strategies  
    state5Strategy1Title: "Crea algo con tus manos",
    state5Strategy1Desc: "Dibuja, cocina, arregla algo, construye, juega con plastilina.",
    state5Strategy1Why: "El aburrimiento es falta de engagement. El trabajo manual da feedback inmediato y activa tu sistema de recompensa.",
    state5Strategy2Title: "Explora algo nuevo",
    state5Strategy2Desc: "Camina sin destino. Ruta nueva. Cambia tu ambiente.",
    state5Strategy2Why: "El aburrimiento evolucionó para hacerte buscar recursos nuevos. Movimiento + novedad activa tu dopamina sin consumir.",
    
    // State 6 Strategies
    state6Strategy1Title: "Sal afuera, camina 10 minutos",
    state6Strategy1Desc: "Aire fresco, luz natural, movimiento. No pienses, solo camina.",
    state6Strategy1Why: "Caminar afuera es el botón de reset universal. Cambia tu ambiente, te da luz, calma tu sistema nervioso.",
    state6Strategy2Title: "Agua fría en tu cara",
    state6Strategy2Desc: "Ducha o lávate la cara con agua fría.",
    state6Strategy2Why: "Cuando te sientes entumecido o desconectado, el agua fría es una llamada de atención que te reconecta con tu cuerpo y el presente.",
    
    // Check-in
    preparation: "Antes de empezar",
    checkInMessages: ['Aterriza aquí', 'Siente tus pies', 'Apaga el ruido'],
    preparingToConnect: "Preparándote para conectar...",
    checkInHeader: "Tómate un momento",
    
    // Breathing
    breathingTitle: "Respira conmigo",
    breathingHeader: "Desacelera",
    breathingInstructions: "Nada que arreglar, solo respira",
    breathingCycles: (n) => `${n} de 5`,
    breathingComplete: "Completo. Avanzando...",
    breathingInhaleExhale: "Inhala... Exhala...",
    
    // Hunger
    hungerTitle: "¿Cuánta hambre tienes?",
    hungerQuestion: "Antes de empezar",
    hungerSubtitle: "Conecta con tu cuerpo antes de comenzar",
    hungerLevel: "Nivel de hambre",
    notHungry: "Sin hambre",
    hungry: "Hambriento",
    notSure: "La verdad no sé",
    startEating: "Comenzar a Comer",
    hungerFeedback: {
      low: "¿Realmente tienes hambre, o es otra cosa?",
      high: "Mucha hambre. Intenta ir despacio, aunque tu cuerpo pida velocidad.",
      medium: "Un nivel de hambre perfecto para comer conscientemente."
    },
    
    // Guía de Hambre
    hungerGuideTitle: "Cómo saber si tienes hambre",
    hungerGuideIntro: "A veces confundimos el hambre con otras sensaciones. Aquí te mostramos cómo identificar el hambre física real:",
    hungerGuideSteps: [
      '🤔 Haz una pausa y pregúntate: ¿Cuándo fue la última vez que comí?',
      '🫀 Observa tu cuerpo: ¿Estómago vacío? ¿Poca energía? ¿Un poco mareado?',
      '🧠 ¿Está en tu cabeza o en tu cuerpo? El aburrimiento y la ansiedad viven en la mente; el hambre vive en el estómago.',
      '⏰ El hambre real se construye gradualmente, los antojos aparecen de repente.',
      '💧 A veces la sed se disfraza de hambre. Prueba beber agua primero.'
    ],
    hungerGuideScale: "Escala de referencia rápida:",
    hungerScaleItems: [
      '1-3: No tengo hambre real (emocional, aburrido, sediento)',
      '4-6: Hambre moderada (ideal para empezar a comer conscientemente)',
      '7-10: Mucha hambre (puedes comer muy rápido, intenta ir despacio)'
    ],
    gotIt: "Entendido, voy a elegir",
    continue: "Continuar",
    
    // Simple Hunger Test
    simpleTestTitle: "Chequeo Rápido",
    simpleTestSubtitle: "3 preguntas simples para entender tu hambre",
    simpleQuestions: [
      {
        q: "¿Cuándo fue la última vez que comiste?",
        options: [
          { text: "Hace menos de 3 horas", score: 0 },
          { text: "Hace 3 horas o más", score: 3 }
        ]
      },
      {
        q: "¿Te sonaría bien comida simple y saludable ahora? (como pollo con verduras, huevos, fruta)",
        options: [
          { text: "Sí, suena bien", score: 3 },
          { text: "No, solo quiero algo específico", score: 0 }
        ]
      },
      {
        q: "¿Qué sientes en tu estómago ahora mismo?",
        options: [
          { text: "Vacío, haciendo ruidos, o incómodo", score: 3 },
          { text: "Nada en particular", score: 0 }
        ]
      }
    ],
    simpleResultPhysical: "Tu cuerpo necesita comida",
    simpleResultPhysicalDesc: "Tienes hambre física genuina. Comamos conscientemente.",
    simpleResultLikely: "Probablemente tienes hambre",
    simpleResultLikelyDesc: "Algunas señales de hambre física. Come si quieres.",
    simpleResultEmotional: "Esto parece emocional",
    simpleResultEmotionalDesc: "Puede ser hambre emocional más que física. ¿Qué necesitas realmente?",
    eatMindfully: "Comer Conscientemente De Todas Formas",
    tryToolsFirst: "Probar Herramientas Primero",
    
    // Questionnaire
    questionnaireTitle: "Vamos a conectar",
    questionnaireSubtitle: "Unas preguntas para entender qué necesitas",
    questionProgress: (n) => `Pregunta ${n} de 7`,
    skipOption: "No sé",
    back: "Atrás",
    questions: [
      {
        id: 'timing',
        text: '¿Cuándo fue tu última comida completa?',
        options: [
          { text: 'Hace menos de 2 horas', score: -3 },
          { text: 'Hace 2-4 horas', score: 1 },
          { text: 'Hace 4-6 horas', score: 3 },
          { text: 'Hace 6+ horas', score: 3 }
        ]
      },
      {
        id: 'sensations',
        text: '¿Qué sensaciones físicas estás notando?',
        subtitle: 'Selecciona todas las que apliquen',
        multiSelect: true,
        options: [
          { text: 'Estómago vacío o con sonidos', score: 2 },
          { text: 'Poca energía', score: 2 },
          { text: 'Mareo o aturdimiento', score: 2 },
          { text: 'Ninguna de estas', score: -2 }
        ]
      },
      {
        id: 'location',
        text: '¿Dónde sientes esta sensación?',
        options: [
          { text: 'En mi estómago/cuerpo', score: 2 },
          { text: 'En mi cabeza/pensamientos', score: -2 },
          { text: 'En ambos', score: 0 },
          { text: 'No estoy seguro', score: 0 }
        ]
      },
      {
        id: 'specificity',
        text: '¿Qué te apetece ahora mismo?',
        options: [
          { text: 'Cualquier comida me satisfaría', score: 2 },
          { text: 'Solo comidas específicas de confort', score: -2 },
          { text: 'No lo sé', score: 0 }
        ]
      },
      {
        id: 'emotions',
        text: '¿Cómo te sientes emocionalmente ahora?',
        subtitle: 'Selecciona todas las que apliquen',
        multiSelect: true,
        options: [
          { text: 'Estresado/a', score: -1 },
          { text: 'Aburrido/a', score: -1 },
          { text: 'Ansioso/a', score: -1 },
          { text: 'Triste', score: -1 },
          { text: 'Tranquilo/a o neutral', score: 1 }
        ]
      },
      {
        id: 'urgency',
        text: '¿Cómo se siente este hambre?',
        options: [
          { text: 'Puede esperar', score: 2 },
          { text: 'Creciendo gradualmente', score: 2 },
          { text: 'Urgente, necesito comer ya', score: -1 }
        ]
      },
      {
        id: 'hydration',
        text: '¿Has tomado agua en los últimos 30 minutos?',
        options: [
          { text: 'Sí, aún siento hambre', score: 1 },
          { text: 'No, déjame probar con agua primero', score: 0 },
          { text: 'Solo tengo sed', score: -2 }
        ]
      }
    ],
    
    // Questionnaire Results
    physicalHungerTitle: "Tu cuerpo está llamando",
    physicalHungerMessage: "Tienes hambre genuina. Tu cuerpo está pidiendo alimento.",
    physicalHungerAction: "Comamos conscientemente",
    
    emotionalHungerTitle: "Algo más está llamando",
    emotionalHungerMessage: "Parece que algo más que el hambre está pidiendo atención. Está completamente bien—exploremos qué puede ayudar.",
    emotionalHungerSubtitle: "Elige lo que te resuene:",
    
    uncertainHungerTitle: "Señales mixtas",
    uncertainHungerMessage: "Tus señales están mezcladas—esto es muy común. Intentemos algo para tener más claridad.",
    uncertainHungerSubtitle: "Prueba una de estas:",
    
    // Emotional Hunger Tools
    toolMindfulPause: "Pausa consciente",
    toolMindfulPauseDesc: "2 minutos respirando para sentir tus emociones",
    toolCheckIn: "Chequeo emocional",
    toolCheckInDesc: "¿Qué es lo que realmente necesito?",
    toolProceedAnyway: "Comer conscientemente igual",
    toolProceedAnywayDesc: "Está bien comer para confort conscientemente",
    
    // Uncertainty Tools
    toolHydration: "Prueba de hidratación",
    toolHydrationDesc: "Toma agua, espera 10 minutos, reevalúa",
    toolPause: "Pausa de 5 minutos",
    toolPauseDesc: "Camina, estírate, respira—luego revisa",
    toolEatLight: "Come ligero y revisa",
    toolEatLightDesc: "Porción pequeña con chequeos frecuentes",
    
    // Timer Screens
    timerWaterTitle: "Prueba de hidratación",
    timerWaterMessage: "Toma un vaso de agua. A veces la sed se disfraza de hambre.",
    timerWaterWaiting: "Dale tiempo a tu cuerpo para responder...",
    timerPauseTitle: "Toma una pausa",
    timerPauseMessage: "Prueba una de estas por 5 minutos:",
    timerPauseSuggestions: [
      '🚶 Camina un poco',
      '🙆 Estira tu cuerpo',
      '🫁 Respira profundo',
      '🪟 Mira por una ventana'
    ],
    timerComplete: "Se acabó el tiempo",
    skipTimer: "Ya lo hice",
    feelBetter: "Ya me siento mejor",
    stillWantToEat: "Aún quiero comer",
    
    // Emotional Check-in
    emotionalCheckInTitle: "¿Qué es lo que realmente necesitas?",
    emotionalCheckInPrompts: [
      '¿Conexión con alguien?',
      '¿Descanso o un break?',
      '¿Confort o alivio?',
      '¿Distracción de algo?',
      '¿Sentir que tienes control?',
      '¿Solo sentir algo?'
    ],
    emotionalCheckInReflection: "A veces nombrarlo es suficiente. ¿Qué te resuena?",
    emotionalCheckInContinue: "Ya reflexioné",
    
    // Eating
    inSession: "En sesión",
    inSession: "En sesión",
    eatingStatus: "COMIENDO",
    eatingTips: [
      'Respira... el momento es tuyo',
      'Siente tus pies en el suelo',
      'Nota cómo se siente la textura en tu boca',
      'No hay prisa, la comida no se va',
      'Cada bocado es una oportunidad de estar presente',
      'Estás a salvo aquí',
      'Sé gentil contigo mismo'
    ],
    emotionalEatingTips: [
      'Está bien buscar confort en la comida',
      'Mereces amabilidad, especialmente de ti mismo',
      'Nota cómo te hace sentir esta comida'
    ],
    distractionWarning: "Vuelve a tu plato, el mundo puede esperar",
    distractionWarning: "Vuelve a tu plato, el mundo puede esperar",
    finish: "Terminar",
    
    // Finish
    reflection: "Reflexión",
    almostDone: "Casi terminamos",
    satietyQuestion: "¿Cómo te sientes ahora?",
    satietySubtitle: "Observa los cambios en tu cuerpo",
    satietyLevel: "Saciedad",
    satietyEmpty: "Vacío",
    satietyFull: "Lleno",
    satisfactionQuestion: "¿Qué tan satisfecho estás con esta comida?",
    satisfactionLevel: "Satisfacción",
    satisfactionUnsatisfied: "Insatisfecho",
    satisfactionSatisfied: "Satisfecho",
    viewInsight: "Continuar",
    
    // Early finish warning
    pause: "Pausa",
    earlyWarningTitle: "Un momento",
    earlyWarningMessage: "Solo llevas {minutes} minutos comiendo. Tu cuerpo necesita al menos 15-20 minutos para registrar la saciedad.",
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
    emotionalInsightMessages: {
      long: (m) => `Tomaste ${m} minutos con consciencia, incluso buscando confort. Eso es lo que importa.`,
      short: (m) => `${m} minutos de confort consciente. No hay vergüenza en necesitar esto.`,
      medium: (m) => `${m} minutos de estar presente contigo mismo. Te presentaste.`,
      rapidFull: " Te moviste rápido en esta comida. Nota cómo el confort y la saciedad se sienten diferente."
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
    avoidedHunger: "Superaste el impulso",
    avoidedBadge: "Victoria",
    
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
  language: localStorage.getItem('mindfulLanguage') || 'en',
  currentScreen: 'home', // 'home' | 'urgeSurfing' | 'selfCompassion' | 'checkin' | 'eating' | 'finish'
  breathCount: 0,
  meditationPhase: 0, // Para urge surfing y compassion
  sessions: JSON.parse(localStorage.getItem('sessions') || '[]'),
  
  // Solo para eating consciente
  hungerLevel: 5,
  satietyLevel: 5,
  satisfactionLevel: 5,
  eatingStartTime: null,
  eatingDuration: 0,
  messageIndex: 0,
  currentTipIndex: 0,
  selectedTips: [],
  currentAudio: null,
  backgroundMusic: null,
  
  intervals: {
    messages: null,
    tips: null,
    meditation: null
  }
};

// Helper para obtener traducciones
const t = () => translations[AppState.language];

// Helper para tracking de eventos de Google Analytics
function trackEvent(eventName, params = {}) {
  try {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
      console.log(`📊 Event tracked: ${eventName}`, params);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

// Cambiar idioma
function toggleLanguage() {
  AppState.language = AppState.language === 'en' ? 'es' : 'en';
  localStorage.setItem('mindfulLanguage', AppState.language);
  render();
}

function setLanguage(lang) {
  AppState.language = lang;
  localStorage.setItem('mindfulLanguage', lang);
  render();
}

function showHistory() {
  console.log('showHistory function called');
  AppState.currentScreen = 'historyDetail';
  
  // Track history reviewed
  trackEvent('history_reviewed', {
    total_sessions: AppState.sessions.length
  });
  
  render();
}
window.showHistory = showHistory;

function backToProfile() {
  AppState.currentTab = 'profile';
  AppState.currentScreen = 'home';
  render();
}
window.backToProfile = backToProfile;

// Renderizado principal
function render() {
  const root = document.getElementById('root');
  
  let content = '';
  
  // Simple screen routing (no tabs, no navbar)
  switch(AppState.currentScreen) {
    case 'home':
      content = renderHome();
      break;
    case 'urgeSurfing':
      content = renderUrgeSurfing();
      break;
    case 'selfCompassion':
      content = renderSelfCompassion();
      break;
    case 'checkin':
      content = renderCheckIn();
      break;
    case 'eating':
      content = renderEating();
      break;
    case 'finish':
      content = renderFinish();
      break;
    default:
      content = renderHome();
  }
  
  root.innerHTML = content;
}

// Pantalla Home
function renderHome() {
  return `
    <div class="min-h-[100svh] flex flex-col bg-[#FFF4E6] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)]">
      <!-- Header: Mindful + tagline -->
      <div class="text-center mb-[clamp(3rem,8vh,5rem)]">
        <h1 class="serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#5A5A5A]">
          ${t().appName}
        </h1>
        <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-60 font-medium mt-2">
          ${t().tagline}
        </p>
      </div>
      
      <!-- 3 Cards: Urge, Compassion, Eating -->
      <div class="flex-1 flex flex-col justify-center max-w-md mx-auto w-full space-y-[clamp(1.25rem,4vh,2rem)]">
        
        <!-- Card 1: Urge Surfing (PRIMARY) -->
        <button 
          class="bg-[#D88B77] text-white border-3 border-[#5A5A5A] rounded-3xl p-[clamp(1.5rem,5vw,2rem)] 
                 hover:bg-[#C67B68] transition-all duration-200 text-left"
          onclick="startUrgeSurfing()">
          <h2 class="font-black text-[clamp(1.15rem,4vw,1.35rem)] mb-1.5">
            ${t().urgeCardTitle}
          </h2>
          <p class="font-medium text-[clamp(0.9rem,3.5vw,1rem)] opacity-90">
            ${t().urgeCardSubtitle}
          </p>
        </button>

        <!-- Card 2: Self-Compassion (PRIMARY) -->
        <button 
          class="bg-[#FFFBF5] text-[#5A5A5A] border-3 border-[#D88B77] rounded-3xl p-[clamp(1.5rem,5vw,2rem)] 
                 hover:bg-white transition-all duration-200 text-left"
          onclick="startSelfCompassion()">
          <h2 class="font-black text-[clamp(1.15rem,4vw,1.35rem)] mb-1.5">
            ${t().compassionCardTitle}
          </h2>
          <p class="font-medium text-[clamp(0.9rem,3.5vw,1rem)] opacity-70">
            ${t().compassionCardSubtitle}
          </p>
        </button>

        <!-- Card 3: Mindful Eating (SECONDARY) -->
        <button 
          class="bg-white text-[#5A5A5A] border-3 border-[#5A5A5A] border-opacity-20 rounded-3xl p-[clamp(1.5rem,5vw,2rem)] 
                 hover:bg-[#FFFBF5] transition-all duration-200 text-left"
          onclick="startMindfulEating()">
          <h2 class="font-bold text-[clamp(1.1rem,3.8vw,1.25rem)] mb-1.5">
            ${t().mindfulEatingCardTitle}
          </h2>
          <p class="font-medium text-[clamp(0.85rem,3.2vw,0.95rem)] opacity-60">
            ${t().mindfulEatingCardSubtitle}
          </p>
        </button>
        
      </div>
      
      <!-- Language toggle footer -->
      <div class="text-center mt-[clamp(3rem,6vh,4rem)]">
        <button 
          class="text-[#5A5A5A] text-sm font-bold hover:text-[#D88B77] transition-colors"
          onclick="toggleLanguage()">
          ${AppState.language === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    </div>
  `;
}

// Urge Surfing Meditation Screen
function renderUrgeSurfing() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const seconds = AppState.eatingDuration % 60;
  
  const phases = [
    t().urgeSurfingPhase1,
    t().urgeSurfingPhase2,
    t().urgeSurfingPhase3,
    t().urgeSurfingPhase4,
    t().urgeSurfingPhase5
  ];
  
  const currentPhase = AppState.meditationPhase;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
        <span class="mx-3 text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">${t().inSession}</span>
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,2rem)] max-w-md mx-auto w-full">
        <div class="text-center">
          <div id="meditationTimer" class="serif text-[clamp(5rem,15vw,7rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,2vh,1.5rem)] tracking-tight leading-none">
            ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
          </div>
          <p class="text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">
            ${t().surfingStatus}
          </p>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-[#FFF4E6]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1rem,3vh,1.25rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="finishMeditation('urgeSurfing')">
            ${t().finish}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Self-Compassion Meditation Screen
function renderSelfCompassion() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const seconds = AppState.eatingDuration % 60;
  
  const phases = [
    t().selfCompassionPhase1,
    t().selfCompassionPhase2,
    t().selfCompassionPhase3,
    t().selfCompassionPhase4,
    t().selfCompassionPhase5
  ];
  
  const currentPhase = AppState.meditationPhase;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
        <span class="mx-3 text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">${t().inSession}</span>
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,2rem)] max-w-md mx-auto w-full">
        <div class="text-center">
          <div id="meditationTimer" class="serif text-[clamp(5rem,15vw,7rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,2vh,1.5rem)] tracking-tight leading-none">
            ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
          </div>
          <p class="text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">
            ${t().compassionStatus}
          </p>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-[#FFF4E6]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1rem,3vh,1.25rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="finishMeditation('selfCompassion')">
            ${t().finish}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Clear all active intervals
function clearAllIntervals() {
  Object.values(AppState.intervals).forEach(interval => {
    if (interval) clearInterval(interval);
  });
}

// Start Functions
function startUrgeSurfing() {
  AppState.currentScreen = 'urgeSurfing';
  AppState.meditationPhase = 0;
  AppState.eatingStartTime = Date.now();
  AppState.eatingDuration = 0;
  clearAllIntervals();
  render();
  
  // Start background music
  startBackgroundMusic();
  
  // Play Urge Surfing audio after short delay
  setTimeout(() => {
    playUrgeSurfingAudio();
  }, 1500);
  
  // Start timer
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElement = document.getElementById('meditationTimer');
    if (timerElement) {
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Auto-advance phases every 50 seconds
    const phaseTime = Math.floor(AppState.eatingDuration / 50);
    if (phaseTime !== AppState.meditationPhase && phaseTime < 5) {
      AppState.meditationPhase = phaseTime;
      render();
    }
  }, 1000);
}

function startSelfCompassion() {
  AppState.currentScreen = 'selfCompassion';
  AppState.meditationPhase = 0;
  AppState.eatingStartTime = Date.now();
  AppState.eatingDuration = 0;
  clearAllIntervals();
  render();
  
  // Start background music
  startBackgroundMusic();
  
  // Play Self-Compassion audio after short delay
  setTimeout(() => {
    playSelfCompassionAudio();
  }, 1500);
  
  // Start timer
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElement = document.getElementById('meditationTimer');
    if (timerElement) {
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Auto-advance phases every 50 seconds
    const phaseTime = Math.floor(AppState.eatingDuration / 50);
    if (phaseTime !== AppState.meditationPhase && phaseTime < 5) {
      AppState.meditationPhase = phaseTime;
      render();
    }
  }, 1000);
}

function startMindfulEating() {
  clearAllIntervals();
  startEating();
}

// Finish meditation with confirmation
function finishMeditation(meditationType) {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-[100svh] flex flex-col bg-[#FFF4E6] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)]">
      <div class="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        
        <div class="bg-white rounded-3xl p-[clamp(2.5rem,7vw,3.5rem)] border-3 border-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          <h2 class="serif text-[clamp(1.75rem,5.5vw,2.25rem)] font-black text-[#5A5A5A] text-center mb-[clamp(1rem,3vh,1.5rem)]">
            ${t().finishConfirmTitle}
          </h2>
        </div>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1.05rem,4vw,1.25rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A] hover:bg-[#C67B68] transition-all duration-200"
            onclick="confirmFinishMeditation()">
            ${t().yes}
          </button>
          
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(1rem,3.8vw,1.15rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A] hover:bg-[#FFFBF5] transition-all duration-200"
            onclick="returnToMeditation('${meditationType}')">
            ${t().no}
          </button>
        </div>
        
      </div>
    </div>
  `;
}

function confirmFinishMeditation() {
  clearInterval(AppState.intervals.timer);
  
  // Stop audio if playing
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Stop background music with fade out
  stopBackgroundMusic();
  
  goHome();
}

function returnToMeditation(meditationType) {
  AppState.currentScreen = meditationType;
  render();
  
  // Resume timer
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElement = document.getElementById('meditationTimer');
    if (timerElement) {
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Auto-advance phases every 50 seconds
    const phaseTime = Math.floor(AppState.eatingDuration / 50);
    if (phaseTime !== AppState.meditationPhase && phaseTime < 5) {
      AppState.meditationPhase = phaseTime;
      render();
    }
  }, 1000);
}

// Cycle through check-in messages before starting eating
function cycleCheckInMessages() {
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
        startEating();
      }, 1000);
    }
  }, 4000);
}

// Phase Advancement Functions
function advanceUrgeSurfingPhase() {
  clearInterval(AppState.intervals.meditation);
  
  if (AppState.meditationPhase < 5) {
    AppState.intervals.meditation = setInterval(() => {
      AppState.meditationPhase++;
      render();
      
      if (AppState.meditationPhase >= 5) {
        clearInterval(AppState.intervals.meditation);
      }
    }, 50000); // 50 seconds per phase
  }
}

function advanceSelfCompassionPhase() {
  clearInterval(AppState.intervals.meditation);
  
  if (AppState.meditationPhase < 5) {
    AppState.intervals.meditation = setInterval(() => {
      AppState.meditationPhase++;
      render();
      
      if (AppState.meditationPhase >= 5) {
        clearInterval(AppState.intervals.meditation);
      }
    }, 50000); // 50 seconds per phase
  }
}

// Pantalla Check-in (Mensajes dinámicos)
function renderCheckIn() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-[48px]"></div>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70">${t().checkInHeader}</h3>
        <button onclick="goHome()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,2rem)] max-w-md mx-auto w-full">
        <div class="bg-white rounded-3xl p-[clamp(2.5rem,8vw,4rem)] border-3 border-[#5A5A5A] w-full">
          <h2 id="checkInMessage" class="serif text-[clamp(2.25rem,7vw,3.5rem)] font-black text-[#5A5A5A] text-center leading-tight">
            ${t().checkInMessages[AppState.messageIndex]}
          </h2>
        </div>
      </div>
    </div>
  `;
}

// Pantalla de Respiración Guiada
function renderBreathing() {
  return `
    <div class="min-h-screen flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-10"></div>
        <h3 class="font-bold text-[#5A5A5A] opacity-70">${t().breathingHeader}</h3>
        <button onclick="goHome()" class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <div class="px-6 py-4">
        <div class="flex gap-2 max-w-md mx-auto">
          <div class="breathing-progress-bar flex-1 h-1 rounded-full ${AppState.breathCount >= 1 ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
          <div class="breathing-progress-bar flex-1 h-1 rounded-full ${AppState.breathCount >= 2 ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
          <div class="breathing-progress-bar flex-1 h-1 rounded-full ${AppState.breathCount >= 3 ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
          <div class="breathing-progress-bar flex-1 h-1 rounded-full ${AppState.breathCount >= 4 ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
          <div class="breathing-progress-bar flex-1 h-1 rounded-full ${AppState.breathCount >= 5 ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
        </div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        <h2 class="serif text-3xl font-black text-[#5A5A5A] mb-16 text-center">
          ${t().breathingTitle}
        </h2>
        
        <div class="relative w-64 h-64 mb-16">
          <div id="breathingCircle" 
               class="absolute inset-0 bg-[#D88B77] rounded-full border-3 border-[#5A5A5A]"
               style="animation: breathe 8s ease-in-out infinite;">
          </div>
        </div>
        
        <div class="text-center">
          <p class="text-[#5A5A5A] text-xl mb-2">
            <span id="breathCounter" class="serif text-3xl font-black">${AppState.breathCount}</span> ${t().breathingCycles(AppState.breathCount).split(' ').slice(1).join(' ')}
          </p>
          <p class="text-[#5A5A5A] opacity-60 text-sm font-medium">
            ${AppState.breathCount >= 5 ? t().breathingComplete : t().breathingInhaleExhale}
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
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="goHome()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70">${t().hungerQuestion}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto justify-center">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          ${t().hungerTitle}
        </h2>
        
        <div class="mb-[clamp(2rem,5vh,3rem)]">
          <input 
            type="range" 
            min="1" 
            max="10" 
            value="${AppState.hungerLevel}"
            id="hungerSlider"
            class="w-full h-4 bg-[#5A5A5A] bg-opacity-20 rounded-full appearance-none cursor-pointer"
            oninput="updateHunger(this.value)"
            style="accent-color: #D88B77;">
          
          <div class="flex justify-between mt-[clamp(1rem,3vh,1.5rem)]">
            <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60">${t().notHungry}</span>
            <span id="hungerValue" class="serif text-[clamp(1.75rem,6vw,2.5rem)] font-black text-[#5A5A5A]">${AppState.hungerLevel}</span>
            <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60">${t().hungry}</span>
          </div>
        </div>
        
        <button 
          class="w-full mb-[clamp(1rem,3vh,1.5rem)] bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#C67B68]
                 transition-all duration-150 ease-out"
          onclick="startEating()">
          ${t().startEating}
        </button>
        
        <button 
          class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#FFFBF5]
                 transition-all duration-150 ease-out"
          onclick="startSimpleQuestionnaire()">
          ${t().notSure}
        </button>
      </div>
    </div>
  `;
}

// Pantalla Guía de Hambre (educacional)
function renderHungerGuide() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="backToHunger()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-bold text-[#5A5A5A] opacity-70">Check-in</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-[clamp(2rem,6vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
          ${t().hungerGuideTitle}
        </h2>
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-70 font-medium mb-[clamp(2rem,5vh,3rem)] leading-relaxed">
          ${t().hungerGuideIntro}
        </p>
        
        <div class="space-y-[clamp(1.5rem,4vh,2rem)] mb-[clamp(2rem,5vh,3rem)]">
          ${t().hungerGuideSteps.map((step, index) => `
            <div class="flex gap-[clamp(1rem,3vw,1.5rem)]">
              <div class="flex-shrink-0 w-[clamp(2rem,6vw,2.5rem)] h-[clamp(2rem,6vw,2.5rem)] rounded-full bg-[#D88B77] flex items-center justify-center">
                <span class="text-white font-black text-[clamp(1rem,3vw,1.25rem)]">${index + 1}</span>
              </div>
              <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] font-medium leading-relaxed pt-[clamp(0.25rem,1vh,0.5rem)]">
                ${step}
              </p>
            </div>
          `).join('')}
        </div>
        
        <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] mb-[clamp(1.5rem,4vh,2rem)]">
          <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
            ${t().hungerGuideScale}
          </h3>
          <div class="space-y-[clamp(0.75rem,2vh,1rem)]">
            ${t().hungerScaleItems.map(item => `
              <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-80 font-medium leading-relaxed">
                ${item}
              </p>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] pb-[clamp(1.5rem,4vh,2rem)] pt-[clamp(1rem,3vh,1.5rem)] border-t border-[#5A5A5A] border-opacity-20 bg-[#FFFBF5]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full min-h-[48px] bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1rem,3vh,1.25rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="backToHunger()">
            ${t().gotIt}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Cuestionario
function renderQuestionnaire() {
  const question = t().questions[AppState.currentQuestionIndex];
  const isMultiSelect = question.multiSelect;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        ${AppState.currentQuestionIndex > 0 ? `
          <button onclick="previousQuestion()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
        ` : '<div class="w-[48px]"></div>'}
        <h3 class="font-bold text-[#5A5A5A] opacity-70">${t().questionProgress(AppState.currentQuestionIndex + 1)}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-[clamp(2rem,6vw,2.75rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
          ${question.text}
        </h2>
        ${question.subtitle ? `<p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium mb-[clamp(1.5rem,4vh,2rem)]">${question.subtitle}</p>` : ''}
        
        <div class="space-y-[clamp(0.75rem,2vh,1rem)] mb-[clamp(2rem,5vh,3rem)]">
          ${question.options.map((option, index) => {
            const isSelected = isMultiSelect 
              ? (question.id === 'emotions' ? AppState.selectedEmotions.includes(index) : AppState.selectedSensations.includes(index))
              : false;
            return `
              <button 
                class="w-full text-left px-[clamp(1.5rem,4vw,2rem)] py-[clamp(1.25rem,3vh,1.5rem)] rounded-3xl 
                       ${isSelected ? 'bg-[#D88B77] text-white' : 'bg-white text-[#5A5A5A]'}
                       border-3 ${isSelected ? 'border-[#5A5A5A]' : 'border-[#5A5A5A]'}
                       hover:bg-[${isSelected ? '#C67B68' : '#FFFBF5'}]
                       transition-all duration-150 ease-out
                       text-[clamp(0.95rem,3.5vw,1.05rem)] font-bold"
                onclick="${isMultiSelect ? `toggleMultiSelect('${question.id}', ${index})` : `answerQuestion(${index})`}">
                ${option.text}
              </button>
            `;
          }).join('')}
        </div>
        
        ${isMultiSelect ? `
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="nextQuestionMulti('${question.id}')">
            ${t().continue}
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

// Helper function: Map questionnaire emotions to Tools states
function mapEmotionsToToolsStates() {
  const emotionQuestion = AppState.questionnaireAnswers.find(a => a.questionId === 'emotions');
  if (!emotionQuestion || !emotionQuestion.selected) return [];
  
  const emotionMap = {
    'Stressed': 2,      // "Tengo mucho que hacer" (Overwhelmed)
    'Estresado': 2,
    'Anxious': 3,       // "Algo malo podría pasar"
    'Ansioso': 3,
    'Bored': 5,         // "No tengo nada que hacer"
    'Aburrido': 5,
    'Sad': 4,           // "Estoy solo/a ahora" (Lonely)
    'Triste': 4
  };
  
  const mappedStates = emotionQuestion.selected
    .map(emotion => emotionMap[emotion])
    .filter(state => state !== undefined);
  
  // If no specific emotions mapped or only "Content", default to state 6 (general discomfort)
  return mappedStates.length > 0 ? [...new Set(mappedStates)] : [6];
}

// Pantalla Resultado del Cuestionario
function renderQuestionnaireResult() {
  let title, message, actionButton, tools;
  
  if (AppState.hungerType === 'physical') {
    title = t().physicalHungerTitle;
    message = t().physicalHungerMessage;
    actionButton = `
      <button 
        class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
               border-3 border-[#5A5A5A]
               hover:bg-[#C67B68]
               transition-all duration-150 ease-out"
        onclick="startEating()">
        ${t().physicalHungerAction}
      </button>
    `;
  } else if (AppState.hungerType === 'emotional') {
    title = t().emotionalHungerTitle;
    message = t().emotionalHungerMessage;
    
    // Get mapped Tools states based on emotions
    const toolsStates = mapEmotionsToToolsStates();
    const primaryState = toolsStates[0]; // Use first mapped state
    
    // Create buttons for the specific Tools strategy + option to eat anyway
    actionButton = `
      <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
        <button 
          class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#C67B68]
                 transition-all duration-150 ease-out"
          onclick="showStrategy(${primaryState})">
          ${t().continue}
        </button>
        
        <button 
          class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#FFFBF5]
                 transition-all duration-150 ease-out"
          onclick="startEmotionalEating()">
          ${t().toolProceedAnyway}
        </button>
      </div>
    `;
  } else { // uncertain
    title = t().uncertainHungerTitle;
    message = t().uncertainHungerMessage;
    actionButton = `
      <button 
        class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
               border-3 border-[#5A5A5A]
               hover:bg-[#C67B68]
               transition-all duration-150 ease-out"
        onclick="showUncertaintyTools()">
        ${t().continue}
      </button>
    `;
  }
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex-1 flex flex-col justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(1.5rem,4vh,2rem)]">
          ${title}
        </h2>
        
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-80 font-medium leading-relaxed mb-[clamp(2rem,5vh,3rem)]">
          ${message}
        </p>
        
        ${actionButton}
      </div>
    </div>
  `;
}

// ========== SIMPLE HUNGER QUESTIONNAIRE ==========

function renderSimpleQuestionnaire() {
  const questions = t().simpleQuestions;
  const currentQ = questions[AppState.simpleCurrentQuestion];
  const progress = AppState.simpleCurrentQuestion + 1;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="goHome()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70">${t().simpleTestTitle}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)]">
        <div class="flex gap-2 max-w-md mx-auto">
          ${questions.map((_, i) => `
            <div class="flex-1 h-1 rounded-full ${i < progress ? 'bg-[#D88B77]' : 'bg-[#5A5A5A] bg-opacity-20'}"></div>
          `).join('')}
        </div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <p class="text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] mb-[clamp(1rem,3vh,1.5rem)] font-bold">
          ${progress} / ${questions.length}
        </p>
        
        <h2 class="serif text-[clamp(2rem,6vw,2.5rem)] font-black text-[#5A5A5A] mb-[clamp(2.5rem,6vh,4rem)] leading-tight">
          ${currentQ.q}
        </h2>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          ${currentQ.options.map((option, index) => `
            <button 
              class="w-full bg-white text-[#5A5A5A] text-left font-bold text-[clamp(1rem,4vw,1.125rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                     border-3 border-[#5A5A5A]
                     hover:bg-[#FFFBF5]
                     transition-all duration-150 ease-out"
              onclick="answerSimpleQuestion(${option.score})">
              ${option.text}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSimpleQuestionnaireResult() {
  const score = AppState.simpleQuestionnaireScore;
  let title, message, suggestedLevel, showTools = false;
  
  if (score >= 6) {
    // PHYSICAL HUNGER
    title = t().simpleResultPhysical;
    message = t().simpleResultPhysicalDesc;
    suggestedLevel = 7;
  } else if (score >= 3) {
    // LIKELY PHYSICAL
    title = t().simpleResultLikely;
    message = t().simpleResultLikelyDesc;
    suggestedLevel = 5;
  } else {
    // EMOTIONAL HUNGER
    title = t().simpleResultEmotional;
    message = t().simpleResultEmotionalDesc;
    suggestedLevel = 2;
    showTools = true;
  }
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-[48px]"></div>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70">${t().simpleTestTitle}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto justify-center">
        <div class="text-center mb-[clamp(2rem,5vh,3rem)]">
          <div class="text-[clamp(3rem,10vw,4rem)] mb-[clamp(1rem,3vh,1.5rem)]">
            ${score >= 6 ? '🍽️' : score >= 3 ? '🤔' : '💭'}
          </div>
          <h2 class="serif text-[clamp(2rem,6vw,2.5rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
            ${title}
          </h2>
          <p class="text-[#5A5A5A] text-[clamp(1rem,4vw,1.25rem)] leading-relaxed opacity-80 font-medium">
            ${message}
          </p>
        </div>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          ${!showTools ? `
            <button 
              class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                     border-3 border-[#5A5A5A]
                     hover:bg-[#C67B68]
                     transition-all duration-150 ease-out"
              onclick="proceedToEatingWithLevel(${suggestedLevel})">
              ${t().startEating}
            </button>
          ` : `
            <button 
              class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                     border-3 border-[#5A5A5A]
                     hover:bg-[#C67B68]
                     transition-all duration-150 ease-out"
              onclick="showTools()">
              ${t().tryToolsFirst}
            </button>
            
            <button 
              class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                     border-3 border-[#5A5A5A]
                     hover:bg-[#FFFBF5]
                     transition-all duration-150 ease-out"
              onclick="proceedToEatingWithLevel(${suggestedLevel})">
              ${t().eatMindfully}
            </button>
          `}
          
          <button 
            class="w-full bg-transparent text-[#5A5A5A] opacity-50 font-bold text-[clamp(0.875rem,3vw,1rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.75rem,2vh,1rem)] rounded-lg 
                   hover:opacity-100
                   transition-opacity duration-150"
            onclick="goHome()">
            ${t().backHome}
          </button>
        </div>
      </div>
    </div>
  `;
}

function startSimpleQuestionnaire() {
  AppState.currentScreen = 'simpleQuestionnaire';
  AppState.simpleCurrentQuestion = 0;
  AppState.simpleQuestionnaireScore = 0;
  AppState.questionnaireStarted = true;
  render();
}

function answerSimpleQuestion(score) {
  AppState.simpleQuestionnaireScore += score;
  AppState.simpleCurrentQuestion++;
  
  const questions = t().simpleQuestions;
  if (AppState.simpleCurrentQuestion < questions.length) {
    render();
  } else {
    AppState.currentScreen = 'simpleQuestionnaireResult';
    
    // Track hunger check completed
    const hungerLevel = AppState.simpleQuestionnaireScore <= 2 ? 'low' : 
                        AppState.simpleQuestionnaireScore >= 5 ? 'high' : 'medium';
    trackEvent('hunger_check_completed', {
      method: 'questionnaire',
      hunger_level: hungerLevel,
      score: AppState.simpleQuestionnaireScore
    });
    
    render();
  }
}

function proceedToEatingWithLevel(level) {
  AppState.hungerLevel = level;
  AppState.currentScreen = 'hunger';
  render();
}

function showTools() {
  AppState.currentTab = 'tools';
  AppState.currentScreen = 'home';
  render();
}

// Pantalla Herramientas para Hambre Emocional
function renderEmotionalHungerTools() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="backToHunger()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-bold text-[#5A5A5A] opacity-60">${t().emotionalHungerSubtitle}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startEmotionalBreathing()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolMindfulPause}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolMindfulPauseDesc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startEmotionalCheckIn()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolCheckIn}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolCheckInDesc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startEating()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolProceedAnyway}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolProceedAnywayDesc}
            </p>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Herramientas para Incertidumbre
function renderUncertaintyTools() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="backToHunger()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-bold text-[#5A5A5A] opacity-60">${t().uncertainHungerSubtitle}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startWaterTimer()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolHydration}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolHydrationDesc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startPauseTimer()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolPause}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolPauseDesc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="startEating()">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().toolEatLight}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().toolEatLightDesc}
            </p>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Timer de Agua
function renderWaterTimer() {
  const minutes = Math.floor(AppState.timerDuration / 60);
  const seconds = AppState.timerDuration % 60;
  const totalSeconds = 600; // 10 minutes
  const progress = ((totalSeconds - AppState.timerDuration) / totalSeconds) * 100;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex-1 flex flex-col justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full text-center">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(1.5rem,4vh,2rem)]">
          ${t().timerWaterTitle}
        </h2>
        
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-80 font-medium mb-[clamp(2rem,5vh,3rem)]">
          ${AppState.timerDuration === totalSeconds ? t().timerWaterMessage : t().timerWaterWaiting}
        </p>
        
        <div class="mb-[clamp(3rem,6vh,4rem)]">
          <div class="relative w-full max-w-[200px] mx-auto">
            <svg class="w-full h-auto transform -rotate-90" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#5A5A5A" stroke-opacity="0.2" stroke-width="12"/>
              <circle cx="100" cy="100" r="90" fill="none" stroke="#D88B77" stroke-width="12"
                      stroke-dasharray="${2 * Math.PI * 90}"
                      stroke-dashoffset="${2 * Math.PI * 90 * (1 - progress / 100)}"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-linear"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#5A5A5A]">
                ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
        
        ${AppState.timerDuration === 0 ? `
          <button 
            class="w-full mb-[clamp(1rem,3vh,1.5rem)] bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="feelBetter()">
            ${t().feelBetter}
          </button>
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="startEating()">
            ${t().stillWantToEat}
          </button>
        ` : `
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="skipWaterTimer()">
            ${t().skipTimer}
          </button>
        `}
      </div>
    </div>
  `;
}

// Pantalla Timer de Pausa
function renderPauseTimer() {
  const minutes = Math.floor(AppState.timerDuration / 60);
  const seconds = AppState.timerDuration % 60;
  const totalSeconds = 300; // 5 minutes
  const progress = ((totalSeconds - AppState.timerDuration) / totalSeconds) * 100;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex-1 flex flex-col justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(1.5rem,4vh,2rem)] text-center">
          ${t().timerPauseTitle}
        </h2>
        
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-80 font-medium mb-[clamp(1.5rem,4vh,2rem)] text-center">
          ${t().timerPauseMessage}
        </p>
        
        <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          ${t().timerPauseSuggestions.map(suggestion => `
            <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] font-medium mb-[clamp(0.75rem,2vh,1rem)] last:mb-0">
              ${suggestion}
            </p>
          `).join('')}
        </div>
        
        <div class="mb-[clamp(3rem,6vh,4rem)]">
          <div class="relative w-full max-w-[200px] mx-auto">
            <svg class="w-full h-auto transform -rotate-90" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#5A5A5A" stroke-opacity="0.2" stroke-width="12"/>
              <circle cx="100" cy="100" r="90" fill="none" stroke="#D88B77" stroke-width="12"
                      stroke-dasharray="${2 * Math.PI * 90}"
                      stroke-dashoffset="${2 * Math.PI * 90 * (1 - progress / 100)}"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-linear"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#5A5A5A]">
                ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
        
        ${AppState.timerDuration === 0 ? `
          <button 
            class="w-full mb-[clamp(1rem,3vh,1.5rem)] bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="feelBetter()">
            ${t().feelBetter}
          </button>
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="startEating()">
            ${t().stillWantToEat}
          </button>
        ` : `
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="skipPauseTimer()">
            ${t().skipTimer}
          </button>
        `}
      </div>
    </div>
  `;
}

// Pantalla Check-in Emocional
function renderEmotionalCheckIn() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex-1 flex flex-col justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          ${t().emotionalCheckInTitle}
        </h2>
        
        <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          ${t().emotionalCheckInPrompts.map(prompt => `
            <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] font-medium mb-[clamp(1rem,3vh,1.5rem)] last:mb-0">
              ${prompt}
            </p>
          `).join('')}
        </div>
        
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-70 italic font-medium mb-[clamp(2rem,5vh,3rem)] text-center">
          ${t().emotionalCheckInReflection}
        </p>
        
        <button 
          class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#C67B68]
                 transition-all duration-150 ease-out mb-[clamp(1rem,3vh,1.5rem)]"
          onclick="backToHunger()">
          ${t().emotionalCheckInContinue}
        </button>
        
        <button 
          class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#FFFBF5]
                 transition-all duration-150 ease-out"
          onclick="startEating()">
          ${t().proceedToEat}
        </button>
      </div>
    </div>
  `;
}

// Pantalla Respiración Emocional (similar a breathing pero enfocado en emociones)
function renderEmotionalBreathing() {
  const isComplete = AppState.breathCount >= 5;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto">
      <h3 class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-70 font-medium text-center mb-[clamp(0.5rem,2vh,1rem)]">
        ${t().toolMindfulPause}
      </h3>
      
      <h2 class="serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#5A5A5A] text-center mb-[clamp(3rem,6vh,4rem)]">
        ${t().breathingTitle}
      </h2>
      
      <div class="mb-[clamp(3rem,6vh,4rem)]">
        ${[1,2,3,4,5].map(i => `
          <div class="breathing-progress-bar h-[clamp(8px,1.5vh,12px)] bg-[#5A5A5A] bg-opacity-20 rounded-full mb-[clamp(0.75rem,2vh,1rem)] overflow-hidden">
            <div class="h-full bg-[#D88B77] transition-all duration-300 ${AppState.breathCount >= i ? 'w-full' : 'w-0'}"></div>
          </div>
        `).join('')}
      </div>
      
      <div class="text-center mb-[clamp(2rem,5vh,3rem)]">
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-70 font-bold mb-[clamp(0.5rem,2vh,1rem)]">
          ${t().breathingCycles(AppState.breathCount)}
        </p>
        <p class="text-[clamp(1.125rem,4.5vw,1.25rem)] text-[#5A5A5A] font-bold">
          ${isComplete ? t().breathingComplete : t().breathingInstructions}
        </p>
      </div>
      
      ${isComplete ? `
        <button 
          class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#C67B68]
                 transition-all duration-150 ease-out mb-[clamp(1rem,3vh,1.5rem)]"
          onclick="backToHunger()">
          ${t().emotionalCheckInContinue}
        </button>
        <button 
          class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                 border-3 border-[#5A5A5A]
                 hover:bg-[#FFFBF5]
                 transition-all duration-150 ease-out"
          onclick="startEating()">
          ${t().proceedToEat}
        </button>
      ` : ''}
    </div>
  `;
}

// Pantalla Comiendo (modo inmersivo)
function renderEating() {
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const seconds = AppState.eatingDuration % 60;
  
  // Use emotional tips if in emotional mode, otherwise physical tips
  const tipsArray = AppState.eatingMode === 'emotional' ? t().emotionalEatingTips : t().eatingTips;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#F5F3EE]">
      <div class="flex items-center justify-center px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
        <span class="mx-3 text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">${t().inSession}</span>
        <div class="w-2 h-2 rounded-full bg-[#D88B77]"></div>
      </div>
      
      <div class="flex-1 flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,2rem)] max-w-md mx-auto w-full"
           onmousedown="handleDistraction()"
           ontouchstart="handleDistraction()">
        
        <div class="text-center">
          <div id="eatingTimer" class="serif text-[clamp(5rem,15vw,7rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,2vh,1.5rem)] tracking-tight leading-none">
            ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
          </div>
          <p class="text-[#5A5A5A] opacity-60 text-[clamp(0.875rem,3vw,1rem)] tracking-wide font-bold">
            ${t().eatingStatus}
          </p>
        </div>
        
        <div id="distractionWarning" class="hidden bg-white rounded-3xl p-[clamp(1.25rem,4vw,1.5rem)] border-3 border-[#5A5A5A] mt-[clamp(1.5rem,4vh,2rem)] max-w-sm w-full">
          <p class="text-[#5A5A5A] text-center text-[clamp(0.875rem,3vw,1rem)] font-medium">
            ${t().distractionWarning}
          </p>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-[#FFF4E6]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1rem,3vh,1.25rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="finishEating()">
            ${t().finish}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla de Finalización
function renderFinish() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-[48px]"></div>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70">${t().reflection}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(0.5rem,1.5vh,1rem)]">
          ${t().satietyQuestion}
        </h2>
        <p class="text-[#5A5A5A] text-[clamp(0.95rem,3.5vw,1.05rem)] opacity-70 font-medium mb-[clamp(2.5rem,6vh,4rem)]">
          ${t().satietySubtitle}
        </p>
        
        <div class="flex-1 space-y-[clamp(2.5rem,6vh,4rem)]">
          <div>
            <label class="serif text-[clamp(1.5rem,5vw,2rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)] block">
              ${t().satietyLevel}
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value="${AppState.satietyLevel}"
              id="satietySlider"
              class="w-full h-4 bg-[#5A5A5A] bg-opacity-20 rounded-full appearance-none cursor-pointer"
              oninput="updateSatiety(this.value)"
              style="accent-color: #D88B77;">
            <div class="flex justify-between mt-[clamp(0.75rem,2vh,1rem)]">
              <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60 font-medium">${t().satietyEmpty}</span>
              <span id="satietyValue" class="serif text-[clamp(1.5rem,5vw,2rem)] font-black text-[#5A5A5A]">${AppState.satietyLevel}</span>
              <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60 font-medium">${t().satietyFull}</span>
            </div>
          </div>
          
          <div>
            <label class="serif text-[clamp(1.5rem,5vw,2rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)] block">
              ${t().satisfactionLevel}
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value="${AppState.satisfactionLevel}"
              id="satisfactionSlider"
              class="w-full h-4 bg-[#5A5A5A] bg-opacity-20 rounded-full appearance-none cursor-pointer"
              oninput="updateSatisfaction(this.value)"
              style="accent-color: #D88B77;">
            <div class="flex justify-between mt-[clamp(0.75rem,2vh,1rem)]">
              <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60 font-medium">${t().satisfactionUnsatisfied}</span>
              <span id="satisfactionValue" class="serif text-[clamp(1.5rem,5vw,2rem)] font-black text-[#5A5A5A]">${AppState.satisfactionLevel}</span>
              <span class="text-[clamp(0.875rem,3vw,1rem)] text-[#5A5A5A] opacity-60 font-medium">${t().satisfactionSatisfied}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-[#5A5A5A] border-opacity-20 bg-[#FFF4E6]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="showInsight()">
            ${t().viewInsight}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Funciones de Control

function startSession() {
  // Mostrar pantalla de hunger antes de la meditación
  AppState.currentScreen = 'hunger';
  AppState.hungerLevel = 5; // Reset to default
  render();
}

function startBreathingCounter() {
  AppState.intervals.breathing = setInterval(() => {
    AppState.breathCount++;
    
    const counterEl = document.getElementById('breathCounter');
    if (counterEl) {
      counterEl.textContent = AppState.breathCount;
    }
    
    // Actualizar las barras de progreso
    const progressBars = document.querySelectorAll('.breathing-progress-bar');
    progressBars.forEach((bar, index) => {
      if (index < AppState.breathCount) {
        bar.classList.remove('bg-[#5A5A5A]', 'bg-opacity-20');
        bar.classList.add('bg-[#D88B77]');
      }
    });
    
    if (AppState.breathCount >= 5) {
      clearInterval(AppState.intervals.breathing);
      setTimeout(() => {
        AppState.currentScreen = 'hunger';
        render();
      }, 8000);
    }
  }, 8000);
}

function updateHunger(value) {
  AppState.hungerLevel = parseInt(value);
  document.getElementById('hungerValue').textContent = value;
  document.getElementById('hungerFeedback').innerHTML = `
    <p class="text-[#5A5A5A] text-lg font-medium leading-relaxed">
      ${getHungerFeedback(AppState.hungerLevel)}
    </p>
  `;
  
  // Track hunger check completed with slider
  const hungerLevel = AppState.hungerLevel <= 3 ? 'low' : 
                      AppState.hungerLevel >= 7 ? 'high' : 'medium';
  trackEvent('hunger_check_completed', {
    method: 'slider',
    hunger_level: hungerLevel,
    value: AppState.hungerLevel
  });
}

function getHungerFeedback(level) {
  if (level >= 9) {
    return t().hungerFeedback.high;
  } else if (level <= 3) {
    return t().hungerFeedback.low;
  } else {
    return t().hungerFeedback.medium;
  }
}

// Helper function: Shuffle array randomly
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper function: Select random tips for this eating session
function selectRandomTips() {
  const tipsArray = AppState.eatingMode === 'emotional' ? t().emotionalEatingTips : t().eatingTips;
  // Shuffle all tips and select 10-12 for this session
  const numTips = Math.min(12, tipsArray.length);
  return shuffleArray(tipsArray).slice(0, numTips);
}

// Helper function: Play audio for tip
function playTipAudio(tipIndex) {
  // Stop current audio if playing
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Determine audio file name
  const mode = AppState.eatingMode === 'emotional' ? 'emotional' : 'physical';
  const audioFile = `audio/tip_${mode}_${String(tipIndex + 1).padStart(2, '0')}.mp3`;
  
  // Create and play audio
  const audio = new Audio(audioFile);
  audio.volume = 0;
  
  // Try to play (may fail due to autoplay restrictions)
  audio.play()
    .then(() => {
      console.log('Playing audio:', audioFile);
      // Fade in
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume += 0.1;
          audio.volume = Math.min(volume, 1);
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    })
    .catch(error => {
      console.log('Audio playback prevented (autoplay restriction):', audioFile);
    });
  
  audio.addEventListener('ended', () => {
    AppState.currentAudio = null;
  });
  
  audio.addEventListener('error', (e) => {
    console.log('Audio file not found:', audioFile);
  });
  
  AppState.currentAudio = audio;
}

function startBackgroundMusic() {
  if (AppState.backgroundMusic) {
    return; // Ya está sonando
  }
  
  const music = new Audio('audio/background.mp3');
  music.loop = true;
  music.volume = 0;
  
  music.play().then(() => {
    // Fade in suave
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 0.3) { // Volumen constante al 30%
        volume += 0.02;
        music.volume = Math.min(volume, 0.3);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch(err => {
    console.log('Background music blocked:', err);
  });
  
  AppState.backgroundMusic = music;
}

function stopBackgroundMusic() {
  if (AppState.backgroundMusic) {
    const fadeOut = setInterval(() => {
      if (AppState.backgroundMusic.volume > 0.02) {
        AppState.backgroundMusic.volume -= 0.02;
      } else {
        clearInterval(fadeOut);
        AppState.backgroundMusic.pause();
        AppState.backgroundMusic = null;
      }
    }, 100);
  }
}

// Play full guided meditation
function playFullMeditation() {
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Use Spanish or English meditation based on language
  const meditationFile = AppState.language === 'es' ? 
    'audio/meditation_full_es.mp3' : 
    'audio/meditation_full.mp3';
  
  const audio = new Audio(meditationFile);
  audio.volume = 0;
  
  audio.play().then(() => {
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 0.8) {
        volume += 0.05;
        audio.volume = Math.min(volume, 0.8);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch(err => {
    console.log('Meditation audio blocked:', err);
  });
  
  audio.addEventListener('ended', () => {
    AppState.currentAudio = null;
  });
  
  audio.addEventListener('error', () => {
    console.log('Meditation audio not found');
  });
  
  AppState.currentAudio = audio;
}

function playBriefMeditation() {
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Use Spanish or English meditation based on language
  const meditationFile = AppState.language === 'es' ? 
    'audio/meditation_brief_es.mp3' : 
    'audio/meditation_brief.mp3';
  
  const audio = new Audio(meditationFile);
  audio.volume = 0;
  
  let meditationStartTime = Date.now();
  let meditationCompleted = false;
  
  audio.play().then(() => {
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 0.8) {
        volume += 0.05;
        audio.volume = Math.min(volume, 0.8);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch(err => {
    console.log('Brief meditation audio blocked:', err);
  });
  
  audio.addEventListener('ended', () => {
    meditationCompleted = true;
    AppState.currentAudio = null;
  });
  
  audio.addEventListener('pause', () => {
    if (!meditationCompleted && audio.currentTime > 0) {
      const timeListened = Math.floor((Date.now() - meditationStartTime) / 1000);
      trackEvent('meditation_abandoned', {
        duration_type: 'brief',
        seconds_listened: timeListened,
        language: AppState.language
      });
    }
  });
  
  audio.addEventListener('error', () => {
    console.log('Brief meditation audio not found');
  });
  
  AppState.currentAudio = audio;
}

function playUrgeSurfingAudio() {
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  const audio = new Audio('audio/urge_surfing.mp3');
  audio.volume = 0;
  
  audio.play().then(() => {
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 0.8) {
        volume += 0.05;
        audio.volume = Math.min(volume, 0.8);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch(err => {
    console.log('Urge surfing audio blocked:', err);
  });
  
  audio.addEventListener('ended', () => {
    AppState.currentAudio = null;
  });
  
  audio.addEventListener('error', () => {
    console.log('Urge surfing audio not found');
  });
  
  AppState.currentAudio = audio;
}

function playSelfCompassionAudio() {
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  const audio = new Audio('audio/self_compassion.mp3');
  audio.volume = 0;
  
  audio.play().then(() => {
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 0.8) {
        volume += 0.05;
        audio.volume = Math.min(volume, 0.8);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch(err => {
    console.log('Self-compassion audio blocked:', err);
  });
  
  audio.addEventListener('ended', () => {
    AppState.currentAudio = null;
  });
  
  audio.addEventListener('error', () => {
    console.log('Self-compassion audio not found');
  });
  
  AppState.currentAudio = audio;
}

function selectMeditationDuration(duration) {
  AppState.meditationDuration = duration;
  localStorage.setItem('meditationDuration', duration);
  render();
}

function startEating() {
  // Track if hunger check was skipped (hunger level still at default)
  if (AppState.hungerLevel === 5 && AppState.currentScreen !== 'eating') {
    trackEvent('hunger_check_skipped', {
      eating_mode: 'physical'
    });
  }
  
  AppState.currentScreen = 'eating';
  AppState.eatingStartTime = Date.now();
  AppState.eatingDuration = 0;
  AppState.currentTipIndex = 0;
  AppState.eatingMode = 'physical'; // Default to physical eating
  AppState.selectedTips = selectRandomTips(); // Select random tips for this session
  render();
  
  // Start background music
  startBackgroundMusic();
  
  // Play selected meditation after a short delay
  setTimeout(() => {
    if (AppState.meditationDuration === 'brief') {
      playBriefMeditation();
    } else {
      playFullMeditation();
    }
  }, 1500);
  
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElement = document.getElementById('eatingTimer');
    if (timerElement) {
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
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
  
  // Stop audio playback
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Stop background music with fade out
  stopBackgroundMusic();
  
  AppState.currentScreen = 'finish';
  render();
}

function startEmotionalEating() {
  AppState.eatingMode = 'emotional';
  startEating();
}

function finishEating() {
  // Show confirmation dialog
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-[100svh] flex flex-col bg-[#FFF4E6] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)]">
      <div class="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        
        <div class="bg-white rounded-3xl p-[clamp(2.5rem,7vw,3.5rem)] border-3 border-[#5A5A5A] mb-[clamp(2rem,5vh,3rem)]">
          <h2 class="serif text-[clamp(1.75rem,5.5vw,2.25rem)] font-black text-[#5A5A5A] text-center mb-[clamp(1rem,3vh,1.5rem)]">
            ${t().finishConfirmTitle || '¿Estás seguro que quieres finalizarla?'}
          </h2>
        </div>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1.05rem,4vw,1.25rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A] hover:bg-[#C67B68] transition-all duration-200"
            onclick="confirmFinishEating()">
            ${t().yes || 'Sí'}
          </button>
          
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(1rem,3.8vw,1.15rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A] hover:bg-[#FFFBF5] transition-all duration-200"
            onclick="returnToEating()">
            ${t().no || 'No'}
          </button>
        </div>
        
      </div>
    </div>
  `;
}

function confirmFinishEating() {
  clearInterval(AppState.intervals.timer);
  clearInterval(AppState.intervals.tips);
  
  // Stop audio playback
  if (AppState.currentAudio) {
    AppState.currentAudio.pause();
    AppState.currentAudio = null;
  }
  
  // Stop background music with fade out
  stopBackgroundMusic();
  
  // Go directly to home
  goHome();
}

function returnToEating() {
  AppState.currentScreen = 'eating';
  render();
  
  // Resume background music if not playing
  if (!AppState.backgroundMusic) {
    startBackgroundMusic();
  }
  
  // Resume selected meditation if not playing
  if (!AppState.currentAudio) {
    if (AppState.meditationDuration === 'brief') {
      playBriefMeditation();
    } else {
      playFullMeditation();
    }
  }
  
  AppState.intervals.timer = setInterval(() => {
    AppState.eatingDuration = Math.floor((Date.now() - AppState.eatingStartTime) / 1000);
    const minutes = Math.floor(AppState.eatingDuration / 60);
    const seconds = AppState.eatingDuration % 60;
    
    const timerElement = document.getElementById('eatingTimer');
    if (timerElement) {
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}

function updateSatiety(value) {
  AppState.satietyLevel = parseInt(value);
  const satietyValueEl = document.getElementById('satietyValue');
  if (satietyValueEl) {
    satietyValueEl.textContent = value;
  }
}

function updateSatisfaction(value) {
  AppState.satisfactionLevel = parseInt(value);
  const satisfactionValueEl = document.getElementById('satisfactionValue');
  if (satisfactionValueEl) {
    satisfactionValueEl.textContent = value;
  }
}

function showInsight() {
  console.log('showInsight called');
  const minutes = Math.floor(AppState.eatingDuration / 60);
  const hungerDiff = AppState.satietyLevel - AppState.hungerLevel;
  
  // Use emotional or physical insight messages based on eating mode
  const messages = AppState.eatingMode === 'emotional' ? t().emotionalInsightMessages : t().insightMessages;
  
  let insight = '';
  
  if (minutes >= 15) {
    insight = messages.long(minutes);
  } else if (minutes < 10) {
    insight = messages.short(minutes);
  } else {
    insight = messages.medium(minutes);
  }
  
  if (hungerDiff > 5) {
    insight += messages.rapidFull;
  }
  
  // Remove demo sessions when creating first real session
  const hadDemoSessions = AppState.sessions.some(s => s.isDemo);
  if (hadDemoSessions) {
    AppState.sessions = AppState.sessions.filter(s => !s.isDemo);
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
    insight: insight,
    type: 'eating', // 'eating' or 'avoided'
    eatingMode: AppState.eatingMode, // 'physical' or 'emotional'
    isDemo: false // Real session
  });
  
  // Mark that user has created a real session
  localStorage.setItem('hasRealSession', 'true');
  
  // Track mindful session completed
  trackEvent('mindful_session_completed', {
    duration_minutes: minutes,
    hunger_start: AppState.hungerLevel,
    satiety_end: AppState.satietyLevel,
    satisfaction: AppState.satisfactionLevel,
    eating_mode: AppState.eatingMode,
    total_sessions: AppState.sessions.length
  });
  
  // Track milestones (3, 7, 14, 30 sessions)
  const sessionCount = AppState.sessions.length;
  if ([3, 7, 14, 30].includes(sessionCount)) {
    trackEvent('milestone_reached', {
      milestone: sessionCount,
      session_type: 'eating'
    });
  }
  
  // Limitar a últimas 30 sesiones
  if (AppState.sessions.length > 30) {
    AppState.sessions = AppState.sessions.slice(0, 30);
  }
  
  // Save to localStorage
  localStorage.setItem('sessions', JSON.stringify(AppState.sessions));
  
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20">
        <div class="w-[48px]"></div>
        <h3 class="font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-60">${t().summary}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <h2 class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#5A5A5A] mb-[clamp(2.5rem,6vh,4rem)] text-center">
          ${t().insightTitle}
        </h2>
        
        <div class="bg-white rounded-3xl p-[clamp(2.5rem,7vw,3.5rem)] border-3 border-[#5A5A5A] border-opacity-20 mb-[clamp(2.5rem,6vh,4rem)]">
          <p class="text-[#5A5A5A] text-[clamp(1.125rem,4.5vw,1.5rem)] font-medium leading-relaxed text-center">
            ${insight}
          </p>
        </div>
        
        <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20 mb-[clamp(1rem,3vh,1.5rem)]">
          <h3 class="font-bold text-[#5A5A5A] opacity-60 text-[clamp(0.75rem,2.5vw,0.875rem)] mb-[clamp(1rem,3vh,1.5rem)] uppercase tracking-wide">
            ${t().sessionSummary}
          </h3>
          <div class="grid grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)]">
            <div class="text-center">
              <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77] mb-[clamp(0.25rem,1vh,0.5rem)]">${AppState.hungerLevel}</div>
              <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium">${t().initialHunger}</div>
            </div>
            <div class="text-center">
              <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77] mb-[clamp(0.25rem,1vh,0.5rem)]">${AppState.satietyLevel}</div>
              <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium">${t().finalSatiety}</div>
            </div>
            <div class="text-center">
              <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77] mb-[clamp(0.25rem,1vh,0.5rem)]">${minutes}</div>
              <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium">${t().minutes}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-[#5A5A5A] border-opacity-20 bg-[#FFF4E6]">
        <div class="max-w-md mx-auto">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] rounded-3xl 
                   border-3 border-[#5A5A5A]
                   hover:bg-[#C67B68]
                   transition-all duration-150 ease-out"
            onclick="goHome()">
            ${t().backHome}
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

// Navegar a guía de hambre
function showHungerGuide() {
  AppState.currentScreen = 'hungerguide';
  render();
}

// Volver a pantalla de hambre
function backToHunger() {
  // Track questionnaire abandoned if started but not completed
  if (AppState.questionnaireStarted && 
      AppState.currentScreen === 'simpleQuestionnaire' && 
      AppState.simpleCurrentQuestion < t().simpleQuestions.length) {
    trackEvent('questionnaire_abandoned', {
      questions_answered: AppState.simpleCurrentQuestion,
      total_questions: t().simpleQuestions.length
    });
  }
  
  AppState.questionnaireStarted = false;
  AppState.currentScreen = 'hunger';
  render();
}

// Iniciar cuestionario
function startQuestionnaire() {
  AppState.currentScreen = 'questionnaire';
  AppState.currentQuestionIndex = 0;
  AppState.questionnaireAnswers = [];
  AppState.selectedEmotions = [];
  AppState.selectedSensations = [];
  AppState.hungerScore = 0;
  render();
}

// Responder pregunta de selección única
function answerQuestion(optionIndex) {
  const question = t().questions[AppState.currentQuestionIndex];
  const option = question.options[optionIndex];
  
  // Guardar respuesta y puntaje
  AppState.questionnaireAnswers[AppState.currentQuestionIndex] = {
    questionId: question.id,
    answer: option.text,
    score: option.score
  };
  
  AppState.hungerScore += option.score;
  
  // Avanzar a siguiente pregunta o mostrar resultado
  if (AppState.currentQuestionIndex < t().questions.length - 1) {
    AppState.currentQuestionIndex++;
    render();
  } else {
    calculateHungerType();
    AppState.currentScreen = 'questionnaireResult';
    render();
  }
}

// Toggle para selección múltiple
function toggleMultiSelect(questionId, optionIndex) {
  if (questionId === 'emotions') {
    const index = AppState.selectedEmotions.indexOf(optionIndex);
    if (index > -1) {
      AppState.selectedEmotions.splice(index, 1);
    } else {
      AppState.selectedEmotions.push(optionIndex);
    }
  } else if (questionId === 'sensations') {
    const index = AppState.selectedSensations.indexOf(optionIndex);
    if (index > -1) {
      AppState.selectedSensations.splice(index, 1);
    } else {
      AppState.selectedSensations.push(optionIndex);
    }
  }
  render();
}

// Avanzar en pregunta multi-select
function nextQuestionMulti(questionId) {
  const question = t().questions[AppState.currentQuestionIndex];
  const selectedIndices = questionId === 'emotions' ? AppState.selectedEmotions : AppState.selectedSensations;
  
  // Calcular puntaje total de opciones seleccionadas
  let totalScore = 0;
  if (selectedIndices.length > 0) {
    selectedIndices.forEach(index => {
      totalScore += question.options[index].score;
    });
  }
  
  // Guardar respuesta
  AppState.questionnaireAnswers[AppState.currentQuestionIndex] = {
    questionId: question.id,
    answers: selectedIndices.map(i => question.options[i].text),
    score: totalScore
  };
  
  AppState.hungerScore += totalScore;
  
  // Limpiar selecciones
  if (questionId === 'emotions') {
    AppState.selectedEmotions = [];
  } else {
    AppState.selectedSensations = [];
  }
  
  // Avanzar a siguiente pregunta o mostrar resultado
  if (AppState.currentQuestionIndex < t().questions.length - 1) {
    AppState.currentQuestionIndex++;
    render();
  } else {
    calculateHungerType();
    AppState.currentScreen = 'questionnaireResult';
    render();
  }
}

// Volver a pregunta anterior
function previousQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    // Restar puntaje de pregunta actual si ya fue respondida
    const currentAnswer = AppState.questionnaireAnswers[AppState.currentQuestionIndex];
    if (currentAnswer) {
      AppState.hungerScore -= currentAnswer.score;
    }
    
    AppState.currentQuestionIndex--;
    
    // Restar puntaje de pregunta anterior
    const previousAnswer = AppState.questionnaireAnswers[AppState.currentQuestionIndex];
    if (previousAnswer) {
      AppState.hungerScore -= previousAnswer.score;
    }
    
    render();
  }
}

// Calcular tipo de hambre basado en puntaje
function calculateHungerType() {
  if (AppState.hungerScore >= 6) {
    AppState.hungerType = 'physical';
  } else if (AppState.hungerScore < 0) {
    AppState.hungerType = 'emotional';
  } else {
    AppState.hungerType = 'uncertain';
  }
}

// Mostrar herramientas emocionales
function showEmotionalTools() {
  AppState.currentScreen = 'emotionalHungerTools';
  render();
}

// Mostrar herramientas de incertidumbre
function showUncertaintyTools() {
  AppState.currentScreen = 'uncertaintyTools';
  render();
}

// Iniciar respiración emocional
function startEmotionalBreathing() {
  AppState.currentScreen = 'emotionalBreathing';
  AppState.breathCount = 0;
  render();
  
  // Ciclo de respiración: 4s inhalar, 4s exhalar
  AppState.intervals.breathing = setInterval(() => {
    AppState.breathCount++;
    render();
    
    if (AppState.breathCount >= 5) {
      clearInterval(AppState.intervals.breathing);
    }
  }, 8000);
}

// Iniciar check-in emocional
function startEmotionalCheckIn() {
  AppState.currentScreen = 'emotionalCheckIn';
  render();
}

// Iniciar timer de agua
function startWaterTimer() {
  AppState.currentScreen = 'waterTimer';
  AppState.timerDuration = 600; // 10 minutes
  AppState.timerStartTime = Date.now();
  render();
  
  AppState.intervals.timer = setInterval(() => {
    AppState.timerDuration--;
    render();
    
    if (AppState.timerDuration <= 0) {
      clearInterval(AppState.intervals.timer);
      AppState.timerDuration = 0;
      render();
    }
  }, 1000);
}

// Iniciar timer de pausa
function startPauseTimer() {
  AppState.currentScreen = 'pauseTimer';
  AppState.timerDuration = 300; // 5 minutes
  AppState.timerStartTime = Date.now();
  render();
  
  AppState.intervals.timer = setInterval(() => {
    AppState.timerDuration--;
    render();
    
    if (AppState.timerDuration <= 0) {
      clearInterval(AppState.intervals.timer);
      AppState.timerDuration = 0;
      render();
    }
  }, 1000);
}

// Saltar timer de agua
function skipWaterTimer() {
  if (AppState.intervals.timer) {
    clearInterval(AppState.intervals.timer);
  }
  AppState.timerDuration = 0;
  render();
}

// Saltar timer de pausa
function skipPauseTimer() {
  if (AppState.intervals.timer) {
    clearInterval(AppState.intervals.timer);
  }
  AppState.timerDuration = 0;
  render();
}

// Usuario se siente mejor, volver a home
function feelBetter() {
  if (AppState.intervals.timer) {
    clearInterval(AppState.intervals.timer);
  }
  
  // Save as an "avoided" victory session
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  
  AppState.sessions.unshift({
    date: dateStr,
    type: 'avoided',
    insight: AppState.language === 'en' ? 
      'You paused, checked in, and realized you didn\'t need food. That\'s powerful.' : 
      'Hiciste una pausa, te revisaste, y te diste cuenta de que no necesitabas comida. Eso es poderoso.'
  });
  
  // Limitar a últimas 30 sesiones
  if (AppState.sessions.length > 30) {
    AppState.sessions = AppState.sessions.slice(0, 30);
  }
  
  // Save to localStorage
  localStorage.setItem('sessions', JSON.stringify(AppState.sessions));
  
  AppState.currentScreen = 'home';
  AppState.currentTab = 'home';
  render();
}

// Reiniciar cuestionario
function restartQuestionnaire() {
  // Limpiar timer si está corriendo
  if (AppState.intervals.timer) {
    clearInterval(AppState.intervals.timer);
    AppState.intervals.timer = null;
  }
  
  startQuestionnaire();
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
    <nav class="fixed bottom-0 left-0 right-0 bg-[#FFF4E6] border-t border-[#5A5A5A] border-opacity-15 z-50 pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-around max-w-md mx-auto py-[clamp(0.75rem,2.5vh,1rem)]">
        <button 
          onclick="switchTab('home')"
          class="flex-1 flex flex-col items-center min-h-[48px] justify-center transition-all duration-200 ${AppState.currentTab === 'home' ? 'text-[#D88B77] scale-110' : 'text-[#5A5A5A] opacity-50'}">
          <svg class="w-[clamp(1.5rem,6vw,1.75rem)] h-[clamp(1.5rem,6vw,1.75rem)] mb-[clamp(0.25rem,1vh,0.5rem)]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="text-[clamp(0.75rem,3vw,0.875rem)] font-black">${t().home}</span>
        </button>
        
        <button 
          onclick="switchTab('tools')"
          class="flex-1 flex flex-col items-center min-h-[48px] justify-center transition-all duration-200 ${AppState.currentTab === 'tools' ? 'text-[#D88B77] scale-110' : 'text-[#5A5A5A] opacity-50'}">
          <svg class="w-[clamp(1.5rem,6vw,1.75rem)] h-[clamp(1.5rem,6vw,1.75rem)] mb-[clamp(0.25rem,1vh,0.5rem)]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <span class="text-[clamp(0.75rem,3vw,0.875rem)] font-black">${t().tools}</span>
        </button>
        
        <button 
          onclick="switchTab('profile')"
          class="flex-1 flex flex-col items-center min-h-[48px] justify-center transition-all duration-200 ${AppState.currentTab === 'profile' ? 'text-[#D88B77] scale-110' : 'text-[#5A5A5A] opacity-50'}">
          <svg class="w-[clamp(1.5rem,6vw,1.75rem)] h-[clamp(1.5rem,6vw,1.75rem)] mb-[clamp(0.25rem,1vh,0.5rem)]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span class="text-[clamp(0.75rem,3vw,0.875rem)] font-black">${t().profile}</span>
        </button>
      </div>
    </nav>
  `;
}

// Pantalla Historial
function renderHistory() {
  const sessions = AppState.sessions;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[calc(5rem+env(safe-area-inset-bottom))]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20 bg-white">
        <button onclick="backToProfile()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="serif text-[clamp(1.5rem,5vw,2rem)] font-black text-[#5A5A5A]">${t().historyTitle}</h1>
        </div>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1.5rem,4vh,2.5rem)]">
        ${sessions.length === 0 ? `
          <div class="max-w-md mx-auto mt-[clamp(3rem,8vh,5rem)] text-center">
            <div class="w-[clamp(4rem,12vw,5rem)] h-[clamp(4rem,12vw,5rem)] bg-[#5A5A5A] bg-opacity-10 rounded-full mx-auto mb-[clamp(1rem,3vh,1.5rem)] flex items-center justify-center">
              <svg class="w-[clamp(2rem,6vw,2.5rem)] h-[clamp(2rem,6vw,2.5rem)] text-[#5A5A5A] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <p class="text-[#5A5A5A] text-[clamp(0.95rem,3.5vw,1.05rem)] opacity-60 font-medium">
              ${t().historyEmpty}
            </p>
          </div>
        ` : `
          <div class="max-w-md mx-auto space-y-[clamp(0.75rem,2vh,1.25rem)]">
            ${sessions.map((session, index) => {
              // Check if this is an avoided session
              if (session.type === 'avoided') {
                return `
                  <div class="bg-white rounded-3xl p-[clamp(1.25rem,4vw,1.75rem)] border-3 border-[#D88B77]">
                    <div class="flex items-center justify-between mb-[clamp(0.75rem,2vh,1rem)]">
                      <span class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium">${session.date}</span>
                      <span class="text-[clamp(0.75rem,2.5vw,0.875rem)] bg-[#D88B77] text-white font-black px-[clamp(0.5rem,2vw,0.75rem)] py-[clamp(0.25rem,1vh,0.375rem)] rounded-full">${t().avoidedBadge}</span>
                    </div>
                    
                    <div class="text-center py-[clamp(1rem,3vh,1.5rem)]">
                      <svg class="w-[clamp(2.5rem,8vw,3.5rem)] h-[clamp(2.5rem,8vw,3.5rem)] text-[#D88B77] mx-auto mb-[clamp(0.5rem,2vh,0.75rem)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <p class="text-[clamp(1rem,4vw,1.125rem)] font-black text-[#D88B77]">${t().avoidedHunger}</p>
                    </div>
                    
                    ${session.insight ? `
                      <p class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-70 font-medium mt-[clamp(0.75rem,2vh,1rem)] pt-[clamp(0.75rem,2vh,1rem)] border-t border-[#5A5A5A] border-opacity-20">
                        ${session.insight}
                      </p>
                    ` : ''}
                  </div>
                `;
              }
              
              // Regular eating session
              return `
              <div class="bg-white rounded-3xl p-[clamp(1.25rem,4vw,1.75rem)] border-3 border-[#5A5A5A]">
                <div class="flex items-center justify-between mb-[clamp(0.75rem,2vh,1rem)]">
                  <span class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium">${session.date}</span>
                  <span class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#D88B77] font-bold">${session.duration} ${t().min}</span>
                </div>
                
                <div class="grid grid-cols-3 gap-[clamp(0.75rem,2.5vw,1.25rem)]">
                  <div class="text-center">
                    <div class="serif text-[clamp(1.5rem,5.5vw,2rem)] font-black text-[#5A5A5A]">${session.hungerStart}</div>
                    <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium mt-[clamp(0.25rem,1vh,0.5rem)]">${t().initialHunger}</div>
                  </div>
                  <div class="text-center flex items-center justify-center">
                    <svg class="w-[clamp(1.25rem,4vw,1.5rem)] h-[clamp(1.25rem,4vw,1.5rem)] text-[#D88B77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                  <div class="text-center">
                    <div class="serif text-[clamp(1.5rem,5.5vw,2rem)] font-black text-[#5A5A5A]">${session.satietyEnd}</div>
                    <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-60 font-medium mt-[clamp(0.25rem,1vh,0.5rem)]">${t().finalSatiety}</div>
                  </div>
                </div>
                
                ${session.insight ? `
                  <p class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-70 font-medium mt-[clamp(0.75rem,2vh,1rem)] pt-[clamp(0.75rem,2vh,1rem)] border-t border-[#5A5A5A] border-opacity-20">
                    ${session.insight}
                  </p>
                ` : ''}
              </div>
            `;
            }).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// Pantalla Perfil
function renderProfile() {
  const totalSessions = AppState.sessions.length;
  const totalMinutes = AppState.sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const avgDuration = totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0;
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[calc(5rem+env(safe-area-inset-bottom))]">
      <div class="px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] pt-[max(2rem,env(safe-area-inset-top))] border-b border-[#5A5A5A] border-opacity-20 bg-white">
        <h1 class="serif text-[clamp(1.75rem,6vw,2.5rem)] font-black text-[#5A5A5A]">${t().profileTitle}</h1>
        <p class="text-[#5A5A5A] opacity-70 font-medium text-[clamp(0.875rem,3vw,1rem)] mt-[clamp(0.25rem,1vh,0.5rem)]">${t().profileSubtitle}</p>
      </div>
      
      <div class="flex-1 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1.5rem,4vh,2.5rem)]">
        <div class="max-w-md mx-auto space-y-[clamp(1.5rem,4vh,2.5rem)]">
          
          <!-- Estadísticas / Historial -->
          <button onclick="showHistory()" class="w-full bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] text-left hover:bg-[#FFFBF5] transition-all cursor-pointer">
            <div class="flex items-center justify-between mb-[clamp(1rem,3vh,1.5rem)]">
              <h3 class="font-bold text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A]">${t().historyTitle}</h3>
              <svg class="w-6 h-6 text-[#D88B77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            
            <div class="grid grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)]">
              <div class="text-center">
                <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77]">${totalSessions}</div>
                <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-70 font-bold mt-[clamp(0.25rem,1vh,0.5rem)]">${t().sessions}</div>
              </div>
              
              <div class="text-center">
                <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77]">${totalMinutes}</div>
                <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-70 font-bold mt-[clamp(0.25rem,1vh,0.5rem)]">${t().totalMinutes}</div>
              </div>
              
              <div class="text-center">
                <div class="serif text-[clamp(2.25rem,7vw,3rem)] font-black text-[#D88B77]">${avgDuration}</div>
                <div class="text-[clamp(0.75rem,2.5vw,0.875rem)] text-[#5A5A5A] opacity-70 font-bold mt-[clamp(0.25rem,1vh,0.5rem)]">${t().average}</div>
              </div>
            </div>
          </button>
          
          <!-- Language Selector -->
          <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]">
            <h3 class="font-bold text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">${t().language}</h3>
            <div class="grid grid-cols-2 gap-[clamp(0.5rem,1.5vw,0.75rem)]">
              <button 
                onclick="setLanguage('es')" 
                class="p-[clamp(0.75rem,2.5vw,1rem)] rounded-3xl border-3 transition-all ${
                  AppState.language === 'es' 
                    ? 'bg-[#D88B77] border-[#5A5A5A] text-white' 
                    : 'bg-white border-[#5A5A5A] text-[#5A5A5A] hover:bg-[#FFFBF5]'
                }">
                <span class="font-black text-[clamp(0.95rem,3.5vw,1.05rem)]">Español</span>
              </button>
              <button 
                onclick="setLanguage('en')" 
                class="p-[clamp(0.75rem,2.5vw,1rem)] rounded-3xl border-3 transition-all ${
                  AppState.language === 'en' 
                    ? 'bg-[#D88B77] border-[#5A5A5A] text-white' 
                    : 'bg-white border-[#5A5A5A] text-[#5A5A5A] hover:bg-[#FFFBF5]'
                }">
                <span class="font-black text-[clamp(0.95rem,3.5vw,1.05rem)]">English</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

// Pantalla Tools
function renderTools() {
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[calc(5rem+env(safe-area-inset-bottom))]">
      <div class="flex-1 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <h1 class="serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
          ${t().toolsTitle}
        </h1>
        <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] opacity-70 font-medium mb-[clamp(2rem,5vh,3rem)]">
          ${t().toolsSubtitle}
        </p>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(1)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state1}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state1Desc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(2)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state2}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state2Desc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(3)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state3}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state3Desc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(4)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state4}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state4Desc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(5)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state5}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state5Desc}
            </p>
          </button>
          
          <button 
            class="w-full text-left bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A]
                   hover:bg-[#FFFBF5]
                   transition-all duration-150 ease-out"
            onclick="showStrategy(6)">
            <h3 class="font-bold text-[clamp(1.125rem,4vw,1.25rem)] text-[#5A5A5A] mb-[clamp(0.5rem,2vh,0.75rem)]">
              ${t().state6}
            </h3>
            <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 font-medium">
              ${t().state6Desc}
            </p>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Pantalla Strategy
function renderStrategy(strategyScreen) {
  const stateNum = strategyScreen.replace('strategy', '');
  
  return `
    <div class="min-h-[100svh] min-h-[100vh] flex flex-col bg-[#FFF4E6] pb-[env(safe-area-inset-bottom)]">
      <div class="flex items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1rem,3vh,1.5rem)] border-b border-[#5A5A5A] border-opacity-20">
        <button onclick="backToTools()" class="w-[48px] h-[48px] flex items-center justify-center rounded-lg hover:bg-[#5A5A5A] hover:bg-opacity-5 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h3 class="font-bold text-[#5A5A5A] opacity-60">${t().strategyTitle}</h3>
        <div class="w-[48px]"></div>
      </div>
      
      <div class="flex-1 flex flex-col px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2rem,5vh,3rem)] max-w-md mx-auto w-full overflow-y-auto">
        <div class="space-y-[clamp(2rem,5vh,3rem)] mb-[clamp(2rem,5vh,3rem)]">
          <!-- Strategy 1 -->
          <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20">
            <h3 class="font-black text-[clamp(1.25rem,4.5vw,1.5rem)] text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
              ${t()[`state${stateNum}Strategy1Title`]}
            </h3>
            <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] font-medium mb-[clamp(1.5rem,4vh,2rem)] leading-relaxed">
              ${t()[`state${stateNum}Strategy1Desc`]}
            </p>
            <div class="bg-[#FFFBF5] rounded-3xl p-[clamp(1rem,3vw,1.5rem)]">
              <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 italic leading-relaxed font-medium">
                ${t()[`state${stateNum}Strategy1Why`]}
              </p>
            </div>
          </div>
          
          <!-- Strategy 2 -->
          <div class="bg-white rounded-3xl p-[clamp(1.5rem,4vw,2rem)] border-3 border-[#5A5A5A] border-opacity-20">
            <h3 class="font-black text-[clamp(1.25rem,4.5vw,1.5rem)] text-[#5A5A5A] mb-[clamp(1rem,3vh,1.5rem)]">
              ${t()[`state${stateNum}Strategy2Title`]}
            </h3>
            <p class="text-[clamp(1rem,4vw,1.125rem)] text-[#5A5A5A] font-medium mb-[clamp(1.5rem,4vh,2rem)] leading-relaxed">
              ${t()[`state${stateNum}Strategy2Desc`]}
            </p>
            <div class="bg-[#FFFBF5] rounded-3xl p-[clamp(1rem,3vw,1.5rem)]">
              <p class="text-[clamp(0.95rem,3.5vw,1.05rem)] text-[#5A5A5A] opacity-70 italic leading-relaxed font-medium">
                ${t()[`state${stateNum}Strategy2Why`]}
              </p>
            </div>
          </div>
        </div>
        
        <div class="space-y-[clamp(1rem,3vh,1.5rem)]">
          <button 
            class="w-full bg-[#D88B77] text-white font-black text-[clamp(1rem,4vw,1.125rem)] px-[clamp(2rem,6vw,2.5rem)] py-[clamp(1.25rem,4vh,1.5rem)] 
                   border-3 border-[#5A5A5A]
                   rounded-3xl
                   hover:bg-[#C67B68]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="strategyWorked()">
            ${t().itWorked}
          </button>
          
          <button 
            class="w-full bg-white text-[#5A5A5A] font-bold text-[clamp(0.95rem,3.5vw,1.05rem)] px-[clamp(1.5rem,5vw,2rem)] py-[clamp(0.875rem,3vh,1rem)] rounded-3xl 
                   border-3 border-[#5A5A5A] border-opacity-20
                   hover:bg-[#FFFBF5]
                   active:translate-y-[2px]
                   transition-all duration-150 ease-out"
            onclick="backToTools()">
            ${t().stillNeedMore}
          </button>
        </div>
      </div>
    </div>
  `;
}

render();

// Navigation functions for Tools tab
function showStrategy(stateNum) {
  AppState.currentTab = 'home';
  AppState.currentScreen = `strategy${stateNum}`;
  render();
}

function backToTools() {
  AppState.currentTab = 'tools';
  AppState.currentScreen = 'home';
  render();
}

function strategyWorked() {
  // Remove demo sessions when creating first real session
  const hadDemoSessions = AppState.sessions.some(s => s.isDemo);
  if (hadDemoSessions) {
    AppState.sessions = AppState.sessions.filter(s => !s.isDemo);
  }
  
  // Save as an "avoided" victory session
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  
  AppState.sessions.unshift({
    date: dateStr,
    type: 'avoided',
    insight: AppState.language === 'en' ? 
      'You chose awareness over impulse. That takes real strength.' : 
      'Elegiste la consciencia sobre el impulso. Eso requiere verdadera fortaleza.',
    isDemo: false // Real session
  });
  
  // Mark that user has created a real session
  localStorage.setItem('hasRealSession', 'true');
  
  // Track emotional eating avoided (aha moment)
  trackEvent('emotional_eating_avoided', {
    total_sessions: AppState.sessions.length
  });
  
  // Limitar a últimas 30 sesiones
  if (AppState.sessions.length > 30) {
    AppState.sessions = AppState.sessions.slice(0, 30);
  }
  
  // Save to localStorage
  localStorage.setItem('sessions', JSON.stringify(AppState.sessions));
  
  AppState.currentTab = 'home';
  AppState.currentScreen = 'home';
  render();
}

// Initialize demo sessions if localStorage is empty
function initializeDemoSessions() {
  // Track app opened (only once per session)
  if (!sessionStorage.getItem('app_opened_tracked')) {
    trackEvent('app_opened', {
      language: AppState.language,
      meditation_duration_preference: AppState.meditationDuration
    });
    sessionStorage.setItem('app_opened_tracked', 'true');
  }
  
  // Only show demo sessions if user has never created a real session
  const hasCreatedRealSession = localStorage.getItem('hasRealSession');
  
  if (AppState.sessions.length === 0 && !hasCreatedRealSession) {
    // Track first awareness moment when demo sessions are shown
    trackEvent('first_awareness_moment', {
      is_demo_data: true
    });
    const demoSessions = [
      {
        date: '10 ene 2026',
        hungerStart: 7,
        satietyEnd: 6,
        satisfaction: 8,
        duration: 12,
        insight: AppState.language === 'en' ? 
          'Ate slowly and noticed when I was satisfied. Stopped before feeling too full.' : 
          'Comí despacio y noté cuando estaba satisfecho. Me detuve antes de sentirme muy lleno.',
        type: 'eating',
        eatingMode: 'physical',
        isDemo: true  // Flag to identify demo sessions
      },
      {
        date: '9 ene 2026',
        type: 'avoided',
        insight: AppState.language === 'en' ? 
          'You paused, checked in, and realized you didn\'t need food. That\'s powerful.' : 
          'Hiciste una pausa, te revisaste, y te diste cuenta de que no necesitabas comida. Eso es poderoso.',
        isDemo: true
      },
      {
        date: '8 ene 2026',
        hungerStart: 6,
        satietyEnd: 7,
        satisfaction: 9,
        duration: 15,
        insight: AppState.language === 'en' ? 
          'Really paid attention to flavors and textures. Enjoyed every bite.' : 
          'Presté mucha atención a los sabores y texturas. Disfruté cada bocado.',
        type: 'eating',
        eatingMode: 'physical',
        isDemo: true
      }
    ];
    
    AppState.sessions = demoSessions;
    localStorage.setItem('sessions', JSON.stringify(AppState.sessions));
  }
}

// Initialize app
initializeDemoSessions();
render();

// Expose functions to global scope for onclick handlers
window.switchTab = switchTab;
window.selectMeditationDuration = selectMeditationDuration;
window.startSession = startSession;
window.goHome = goHome;
window.updateHunger = updateHunger;
window.startEating = startEating;
window.startSimpleQuestionnaire = startSimpleQuestionnaire;
window.backToHunger = backToHunger;
window.answerSimpleQuestion = answerSimpleQuestion;
window.proceedToEatingWithLevel = proceedToEatingWithLevel;
window.showTools = showTools;
window.startEmotionalEating = startEmotionalEating;
window.finishEating = finishEating;
window.returnToEating = returnToEating;
window.confirmFinish = confirmFinish;
window.updateSatiety = updateSatiety;
window.updateSatisfaction = updateSatisfaction;
window.showInsight = showInsight;
window.setLanguage = setLanguage;
window.showStrategy = showStrategy;
window.backToTools = backToTools;
window.strategyWorked = strategyWorked;
window.feelBetter = feelBetter;
