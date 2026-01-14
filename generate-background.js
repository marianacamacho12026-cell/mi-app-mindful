import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate a simple ambient background sound (brown noise / ocean-like)
// This creates a 3-minute loopable ambient sound

async function generateBackground() {
  console.log('🎵 Descargando música de fondo ambient...\n');
  
  // Using a free ambient meditation track from a reliable source
  const audioUrl = 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_4a538dc336.mp3?filename=meditation-healing-ambient-113457.mp3';
  
  try {
    const response = await fetch(audioUrl);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const audioDir = path.join(__dirname, 'audio');
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    
    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = path.join(audioDir, 'background.mp3');
    fs.writeFileSync(filePath, buffer);
    
    console.log('✅ ¡Música de fondo descargada exitosamente!');
    console.log(`📁 Guardado en: ${filePath}`);
    console.log(`📊 Tamaño: ${(buffer.length / 1024).toFixed(2)} KB`);
    console.log('\n💡 La música se reproducirá en loop durante las sesiones');
    
  } catch (error) {
    console.error('❌ Error al descargar música de fondo:', error.message);
    console.log('\n💡 Alternativa: Descarga manualmente música ambient de:');
    console.log('   https://pixabay.com/music/search/meditation/');
    console.log('   Y guárdala como audio/background.mp3');
    process.exit(1);
  }
}

generateBackground();
