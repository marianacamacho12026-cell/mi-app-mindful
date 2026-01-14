# 📊 Eventos de Google Analytics 4 - Implementados

## ✅ Estado: TODOS IMPLEMENTADOS Y DESPLEGADOS

**URL Producción:** https://mi-app-mindful-jzwzpg4ep-maos-projects-9428faf7.vercel.app  
**GA4 Measurement ID:** G-4VP3J5CJV1  
**Fecha Implementación:** 13 enero 2026

---

## 📍 10 Eventos Críticos para PMF

### 1️⃣ `app_opened` - DAU/MAU Calculation
**Cuándo:** Una vez por sesión cuando la app carga  
**Parámetros:**
- `language`: 'en' | 'es'
- `meditation_duration_preference`: 'brief' | 'full'

**Para qué sirve:** Calcular usuarios activos diarios (DAU) y mensuales (MAU). Stickiness = DAU/MAU. Target: >15% para app de cambio de comportamiento.

---

### 2️⃣ `hunger_check_completed` - Retention Metric
**Cuándo:** Cuando termina slider de hambre O cuestionario  
**Parámetros:**
- `method`: 'slider' | 'questionnaire'
- `hunger_level`: 'low' | 'medium' | 'high'
- `value` o `score`: número exacto

**Para qué sirve:** Acción núcleo del producto. % usuarios que completan 1er hunger check en semana 1 = retención potencial. Si >30% completan = buena onboarding.

---

### 3️⃣ `first_awareness_moment` - Time to Value
**Cuándo:** Primera vez que usuario ve resultado de hunger check  
**Parámetros:**
- `is_demo_data`: true (si son las sesiones demo)

**Para qué sirve:** Medir cuánto tarda usuario en recibir valor del producto. Usuarios que llegan aquí rápido (<2 min) tienen 3x más retención.

---

### 4️⃣ `emotional_eating_avoided` - TRUE AHA MOMENT 🎯
**Cuándo:** Usuario usa herramientas y elige NO comer  
**Parámetros:**
- `total_sessions`: número total de sesiones grabadas

**Para qué sirve:** EL MOMENTO MÁGICO. Usuarios que llegan aquí tienen 5-10x más retención. Si >20% de usuarios lo experimentan en semana 1 = PRODUCTO FUNCIONA. Medir tiempo desde registro hasta este evento.

---

### 5️⃣ `mindful_session_completed` - Engagement Depth
**Cuándo:** Usuario termina sesión de comer (insight screen)  
**Parámetros:**
- `duration_minutes`: cuántos minutos comió
- `hunger_start`: nivel inicial
- `satiety_end`: nivel final
- `satisfaction`: nivel de satisfacción
- `eating_mode`: 'physical' | 'emotional'
- `total_sessions`: total acumulado

**Para qué sirve:** Medir engagement profundo. Usuarios con >3 sesiones en semana 1 = power users. Monitorear correlación entre duración y satisfacción.

---

### 6️⃣ `history_reviewed` - Reflection Indicator
**Cuándo:** Usuario abre pantalla de historial  
**Parámetros:**
- `total_sessions`: cuántas sesiones tiene

**Para qué sirve:** Usuarios que revisan historial están reflexionando = señal de cambio de comportamiento real. Si >40% revisan historial = producto genera awareness.

---

### 7️⃣ `milestone_reached` - Power Users
**Cuándo:** Usuario llega a 3, 7, 14, o 30 sesiones  
**Parámetros:**
- `milestone`: 3 | 7 | 14 | 30
- `session_type`: 'eating' | 'avoided'

**Para qué sirve:** Identificar power users. Típicamente 20% de usuarios generan 80% del engagement. Estos usuarios son los que debes entrevistar para entender qué les funciona.

---

### 8️⃣ `meditation_abandoned` - Friction Point
**Cuándo:** Usuario detiene meditación antes de terminar  
**Parámetros:**
- `duration_type`: 'brief' | 'full'
- `seconds_listened`: cuánto tiempo escuchó
- `language`: 'en' | 'es'

**Para qué sirve:** Si >40% abandonan = meditación muy larga/aburrida. Si >60% abandonan en <30 segundos = auto-play molesta. Identificar si brief vs full funciona mejor.

---

### 9️⃣ `hunger_check_skipped` - Misuse Signal
**Cuándo:** Usuario va directo a comer sin revisar hambre  
**Parámetros:**
- `eating_mode`: 'physical' (default)

**Para qué sirve:** Si >50% saltean hunger check = onboarding falló, usuarios no entienden propuesta de valor. Indica necesidad de mejor educación inicial.

---

### 🔟 `questionnaire_abandoned` - UX Issue
**Cuándo:** Usuario empieza cuestionario pero se sale antes de terminar  
**Parámetros:**
- `questions_answered`: cuántas respondió
- `total_questions`: total de preguntas

**Para qué sirve:** Si >30% abandonan = cuestionario muy largo/complicado. Ver en qué pregunta abandonan más para simplificar.

---

## 📈 Dashboards Clave en GA4

### 1. Retention Dashboard
**Realtime → Eventos → Filtrar:**
- `app_opened` (DAU)
- `hunger_check_completed` (engagement)
- `emotional_eating_avoided` (aha moment)

### 2. Cohort Analysis
**Explorations → Cohort:**
- Agrupar por fecha de primer `app_opened`
- Métrica: % que hacen `hunger_check_completed` en week 1, 2, 3, 4
- **Target PMF:** >15% retención en week 4

### 3. Stickiness Ratio
**Explorations → Custom:**
- DAU: usuarios únicos con `app_opened` por día
- MAU: usuarios únicos con `app_opened` en 30 días
- **Target:** DAU/MAU >15% (para mindful eating app)

### 4. Aha Moment Timing
**Explorations → Path Analysis:**
- Start: `app_opened`
- End: `emotional_eating_avoided`
- Ver cuántos pasos y tiempo entre eventos
- **Target:** <7 días desde registro hasta aha moment

### 5. Power User Identification
**Explorations → Custom:**
- Filtrar usuarios con `milestone_reached` (milestone=7 o más)
- Ver qué eventos tienen en común
- **Target:** >20% llegan a 7 sesiones = producto sticky

---

## 🎯 Métricas de Éxito PMF (Primeras 4 Semanas)

### Week 1
- [ ] >30% completan primer `hunger_check_completed`
- [ ] >20% llegan a `first_awareness_moment`
- [ ] >5% logran `emotional_eating_avoided` (aha moment)

### Week 2
- [ ] >20% regresan (2+ `app_opened` en días diferentes)
- [ ] >15% completan 2+ `mindful_session_completed`

### Week 4
- [ ] >15% retención (activos en week 4) = **SEÑAL PMF** 🎯
- [ ] >20% revisan `history_reviewed`
- [ ] >20% llegan a `milestone_reached` (3+ sesiones)

### Stickiness (Month 1)
- [ ] DAU/MAU >15% = uso consistente
- [ ] <40% `meditation_abandoned` = experiencia acepta
- [ ] <50% `hunger_check_skipped` = onboarding funciona

---

## 🚨 Señales de Alerta (Problemas)

### ⚠️ CRÍTICO - Producto no funciona:
- <10% retención en week 4
- <5% llegan a `emotional_eating_avoided` en week 1
- <20% completan primer `hunger_check_completed`

### ⚠️ Friction en UX:
- >60% `meditation_abandoned` en <1 minuto
- >30% `questionnaire_abandoned`
- >50% `hunger_check_skipped`

### ⚠️ Onboarding débil:
- <20% llegan a `first_awareness_moment`
- >70% abandonan después de `app_opened`
- Tiempo promedio >10 minutos para llegar a aha moment

---

## 🔍 Cómo Ver Eventos en GA4

### Tiempo Real (Primeros Usuarios)
1. Ve a **Realtime** en GA4
2. Deberías ver:
   - `app_opened` cuando usuarios llegan
   - `hunger_check_completed` cuando completan sliders
   - `emotional_eating_avoided` cuando usan herramientas

### Después de 24-48 Horas
1. Ve a **Explorations → Blank**
2. Arrastra eventos a las dimensiones
3. Crea reportes custom con los 10 eventos

### Cohorts (Después de 1 Semana)
1. **Explorations → Cohort analysis**
2. **Include:** `app_opened` (primer uso)
3. **Return criteria:** `hunger_check_completed`
4. **Granularity:** Daily
5. **Period:** Week

---

## 💡 Próximos Pasos (Después de Validar PMF)

### Si Week 4 Retention >15%:
1. ✅ Agregar login opcional (para cloud sync)
2. ✅ Implementar push notifications
3. ✅ Dominio custom
4. ✅ Entrevistar power users (milestone>7)

### Si Week 4 Retention <10%:
1. ❌ NO agregar features
2. ❌ NO hacer DB/auth
3. ✅ Iterar en experiencia core (meditation, onboarding)
4. ✅ Hablar con usuarios que abandonaron

---

## 📝 Notas Técnicas

### Client ID Tracking (Sin Login)
- GA4 usa cookies para identificar usuarios únicos
- **Ventaja:** No pierdes 70-80% en signup
- **Limitación:** No trackea cross-device (<5% de usuarios)
- **Suficiente para:** Validar PMF, medir cohorts, identificar aha moment

### Cuándo Agregar Login
**Solo cuando:**
- Week 4 retention >15% (producto validado)
- 100+ usuarios activos mensuales
- Usuarios PIDEN sync entre devices
- Quieres agregar features sociales

---

**Implementado por:** GitHub Copilot  
**Con funciones:** `trackEvent()` helper + 10 tracking calls estratégicos  
**Ver código:** [App.js](App.js) líneas 849-855 (función helper)
