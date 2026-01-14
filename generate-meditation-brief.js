import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Script con pausas más naturales usando puntos suspensivos y velocidad más lenta
const meditationScript = `<speak>
<prosody rate="0.75" pitch="-2%">
Hello... Take a breath... You are about to eat... And this is a moment to reconnect with your body...

Let's take three deep breaths together... Breathe in... <break time="3s"/> Breathe out... <break time="4s"/> 
Again... In... <break time="3s"/> Out... <break time="4s"/> 
One more... In... <break time="3s"/> Out... <break time="4s"/> 
Good... You are present now...

Before you eat, remember this... Your thoughts about this food are just thoughts... They are not facts... 
Thoughts like, "I should not eat this"... Or "this is bad"... Or "I will regret this"... 
Those are just passengers on the bus of your mind... 
You are the driver... You decide where you go... Toward feeling good in your body... Toward peace with food... 
Notice the thoughts... But you do not have to follow them...

Now, before you take your first bite, ask your body... Am I physically hungry?... What does my stomach say?... 
<break time="4s"/>
There is no wrong answer... If you are hungry, great... If you are not very hungry but want to eat anyway, that is okay too... Just notice the truth... 
<break time="4s"/>
Your body knows what it needs... You just need to listen...

Now, as you eat... Chew slowly... Around twenty times per bite... 
Notice the taste... Notice the texture... 
And halfway through your meal, pause... Ask your body again... Am I still hungry?... Or is my body satisfied?... 
<break time="2s"/>
Trust what you hear...

Whatever you eat today... However much you eat... It is okay... 
You are learning to listen to your body... That takes practice... That takes kindness toward yourself... 
Enjoy your meal...
</prosody>
</speak>`;

async function generateMeditation() {
  const apiKey = 'sk_4ac2ad5a95bba4cf5ebc90457d59c89cedda0fb4590db544';
  const voiceId = 'KGZeK6FsnWQdrkDHnDNA';
  
  console.log('🎙️  Generando meditación breve (3.5 minutos)...\n');
  
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: meditationScript,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
    }

    // Crear directorio audio si no existe
    const audioDir = path.join(__dirname, 'audio');
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // Guardar el archivo de audio
    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = path.join(audioDir, 'meditation_brief.mp3');
    fs.writeFileSync(filePath, buffer);

    console.log('✅ ¡Meditación breve generada exitosamente!');
    console.log(`📁 Guardado en: ${filePath}`);
    console.log(`📊 Tamaño: ${(buffer.length / 1024).toFixed(2)} KB`);
    console.log('\n💡 Duración estimada: ~3.5 minutos');

  } catch (error) {
    console.error('❌ Error al generar meditación:', error.message);
    process.exit(1);
  }
}

generateMeditation();
