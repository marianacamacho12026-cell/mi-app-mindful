import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_e726c7ab0f39570589ebc38ed95607a6a61125c3ab19420c';
const VOICE_ID = 'spPXlKT5a4JMfbhPRAzA'; // Voz en español

// Texto de la meditación con SSML y pausas
const meditationScript = `<speak>
<prosody rate="0.70" pitch="-2%">
Hola... Respira... Estás a punto de comer... Y este es un momento para reconectar con tu cuerpo...
<break time="3s"/>

Vamos a hacer tres respiraciones profundas juntos... Inhala...
<break time="4s"/>
Exhala...
<break time="5s"/>
Otra vez... Inhala...
<break time="4s"/>
Exhala...
<break time="5s"/>
Una más... Inhala...
<break time="4s"/>
Exhala...
<break time="5s"/>
Bien... Ahora estás presente...
<break time="3s"/>

Antes de comer... recuerda esto...
<break time="2s"/>
Tus pensamientos sobre esta comida son solo pensamientos... No son hechos...
<break time="3s"/>
Pensamientos como... no debería comer esto... O... esto es malo... O... me voy a arrepentir... Son solo pasajeros en el autobús de tu mente...
<break time="3s"/>
Tú eres el conductor... Tú decides hacia dónde vas... Hacia sentirte bien en tu cuerpo... Hacia tener paz con la comida...
<break time="3s"/>
Nota los pensamientos... Pero no tienes que seguirlos...
<break time="3s"/>

Ahora... antes de dar tu primer bocado... pregúntale a tu cuerpo...
<break time="2s"/>
¿Tengo hambre física?... ¿Qué dice mi estómago?...
<break time="5s"/>
No hay respuesta incorrecta... Si tienes hambre... perfecto... Si no tienes mucha hambre pero quieres comer de todas formas... eso también está bien... Solo nota la verdad...
<break time="5s"/>
Tu cuerpo sabe lo que necesita... Solo necesitas escuchar...
<break time="3s"/>

Ahora... mientras comes... Mastica despacio... Por lo menos veinte veces cada bocado...
<break time="2s"/>
Nota el sabor... Nota la textura...
<break time="2s"/>
Y a la mitad de tu comida... haz una pausa... Pregúntale a tu cuerpo otra vez... ¿Todavía tengo hambre?... ¿O mi cuerpo ya está satisfecho?...
<break time="3s"/>
Confía en lo que escuchas...
<break time="3s"/>

Lo que comas hoy... La cantidad que comas... Está bien...
<break time="3s"/>
Estás aprendiendo a escuchar a tu cuerpo... Eso requiere práctica... Eso requiere amabilidad contigo mismo...
<break time="3s"/>
Disfruta tu comida...
</prosody>
</speak>`;

async function generateMeditation() {
  console.log('Generando meditación en español...');
  
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: meditationScript,
          model_id: 'eleven_turbo_v2_5',
          voice_settings: {
            stability: 0.65,
            similarity_boost: 0.8,
            style: 0.3,
            use_speaker_boost: true
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error de API: ${response.status} - ${errorText}`);
    }

    const audioBuffer = Buffer.from(await response.arrayBuffer());
    const audioDir = path.join(__dirname, 'audio');
    
    // Create audio directory if it doesn't exist
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    
    const outputPath = path.join(audioDir, 'meditation_brief_es.mp3');
    fs.writeFileSync(outputPath, audioBuffer);
    
    const sizeInKB = (audioBuffer.length / 1024).toFixed(2);
    console.log(`✅ Meditación en español generada exitosamente!`);
    console.log(`📁 Guardada en: ${outputPath}`);
    console.log(`📊 Tamaño: ${sizeInKB} KB`);
    
  } catch (error) {
    console.error('❌ Error generando meditación:', error.message);
    process.exit(1);
  }
}

generateMeditation();
