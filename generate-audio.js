// Script para generar audios de meditación con 11Labs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_4ac2ad5a95bba4cf5ebc90457d59c89cedda0fb4590db544';
const VOICE_ID = 'KGZeK6FsnWQdrkDHnDNA';

// Mensajes de prueba (7 physical + 3 emotional = 10 total)
const englishMessages = {
  physical: [
    'Breathe... this moment is yours',
    'Feel your feet on the ground',
    'Notice the texture in your mouth',
    'There\'s no rush, the food isn\'t going anywhere',
    'Each bite is a chance to be present',
    'You\'re safe here',
    'Be gentle with yourself'
  ],
  emotional: [
    'It\'s okay to seek comfort in food',
    'You deserve kindness, especially from yourself',
    'Notice how this food makes you feel'
  ]
};

async function generateAudio(text, filename) {
  console.log(`Generating: ${filename}...`);
  
  try {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const audioDir = path.join(__dirname, 'audio');
    
    // Create audio directory if it doesn't exist
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    
    const filepath = path.join(audioDir, filename);
    fs.writeFileSync(filepath, Buffer.from(audioBuffer));
    console.log(`✓ Saved: ${filename}`);
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
    
  } catch (error) {
    console.error(`✗ Failed ${filename}:`, error.message);
  }
}

async function generateAllAudios() {
  console.log('🎙️  Generando audios de prueba con 11Labs...\n');
  console.log(`Total de mensajes: ${englishMessages.physical.length + englishMessages.emotional.length}`);
  console.log(`Créditos estimados: ~${(englishMessages.physical.length + englishMessages.emotional.length) * 15} de tus 10,000\n`);
  
  // Generate physical eating tips
  for (let i = 0; i < englishMessages.physical.length; i++) {
    await generateAudio(
      englishMessages.physical[i],
      `tip_physical_${String(i + 1).padStart(2, '0')}.mp3`
    );
  }
  
  // Generate emotional eating tips
  for (let i = 0; i < englishMessages.emotional.length; i++) {
    await generateAudio(
      englishMessages.emotional[i],
      `tip_emotional_${String(i + 1).padStart(2, '0')}.mp3`
    );
  }
  
  console.log('\n✓ All audios generated successfully!');
  console.log(`Check the 'audio' folder for ${englishMessages.physical.length + englishMessages.emotional.length} audio files.`);
}

// Run the generator
generateAllAudios().catch(console.error);
