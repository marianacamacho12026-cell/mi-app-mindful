import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_616cdee9512c39c419a1a9e93aaff10b37b75ccb8dd1352a';
const VOICE_ID = 'spPXlKT5a4JMfbhPRAzA';

const meditationScript = `<speak>
<prosody rate="0.70" pitch="-2%">
Hola... Estás a punto de comer... Y has elegido hacerlo de manera diferente esta vez... Has elegido estar completamente presente... Esto es un acto de cuidado hacia ti mismo...
<break time="4s"/>
Antes de comenzar... quiero que sepas algo importante... No hay una forma correcta de hacer esto... Tampoco hay una forma incorrecta... Nadie te está evaluando... Simplemente estás aprendiendo a escuchar a tu cuerpo otra vez...
<break time="5s"/>

Vamos a empezar con tres respiraciones profundas... Estas respiraciones te van a traer completamente al momento presente... ¿Listo?...
<break time="2s"/>
Inhala profundo por la nariz...
<break time="4s"/>
Y exhala despacio por la boca...
<break time="6s"/>
Bien... Una vez más... Inhala...
<break time="4s"/>
Y exhala... Suelta cualquier prisa... Suelta cualquier tensión...
<break time="6s"/>
La última... Inhala profundo...
<break time="4s"/>
Y exhala todo el aire...
<break time="6s"/>
<break time="3s"/>
Perfecto... Tu cuerpo ahora está más relajado... Más presente... Listo para recibir este alimento...
<break time="4s"/>

Antes de que empieces a comer... necesito enseñarte algo importante... Algo sobre tus pensamientos...
<break time="3s"/>
En los próximos minutos... tu mente probablemente va a tener muchos pensamientos sobre esta comida... Pensamientos como... esto es bueno... o esto es malo... Pensamientos de culpa... Pensamientos de... debería comer esto... o no debería comer esto...
<break time="4s"/>
Y esto es lo importante... Esos pensamientos son solo eso... Pensamientos... Son como nubes que pasan por el cielo de tu mente... Puedes notarlos... Puedes ver que están ahí... Pero no tienes que creerles... No tienes que seguirlos...
<break time="5s"/>
Imagina esto... Tú eres el conductor de un autobús...
<break time="2s"/>
Este autobús va hacia donde tú quieres ir... Hacia sentirte bien en tu cuerpo... Hacia tener paz con la comida...
<break time="3s"/>
Tus pensamientos son solo pasajeros en ese autobús... Pueden subirse... Pueden hablar... Pueden opinar... Pero tú eres quien maneja... Tú decides hacia dónde va el autobús...
<break time="5s"/>
Bien... Con esto en mente... vamos a comenzar...
<break time="4s"/>

Ahora... mira la comida frente a ti... Solo mírala... Sin juzgar...
<break time="8s"/>
¿Qué es lo primero que notas?... Tal vez el color... Tal vez la forma... Tal vez cómo huele... No hay respuesta correcta... Solo observa qué llama tu atención primero...
<break time="10s"/>
Si tienes la comida en tus manos... nota cómo se siente al tacto... ¿Es suave?... ¿Áspera?... ¿Está caliente?... ¿Fría?... ¿Pesada o ligera?...
<break time="8s"/>
Ahora acércala a tu nariz... ¿Qué hueles?... No pienses demasiado... Solo nota qué aroma tiene...
<break time="8s"/>
Y ahora... observa tu cuerpo... ¿Qué está pasando en tu cuerpo mientras miras esta comida?... Tal vez hay saliva en tu boca... Tal vez una sensación en tu estómago... Tal vez tensión en algún lugar... Solo nota... Sin juzgar...
<break time="8s"/>
Y si en este momento aparecen pensamientos en tu mente sobre esta comida... Pensamientos como... esto me va a engordar... O... esto me va a hacer sentir mal... O... debería comer otra cosa... Simplemente nótalos... Son pasajeros en el autobús... Están ahí... Pero no tienen que dirigir hacia dónde vas...
<break time="5s"/>
Está perfectamente bien que hayas elegido esta comida... Confía en eso...
<break time="4s"/>

Ahora... despacio... con toda tu atención... lleva un pedazo de esta comida a tu boca...
<break time="5s"/>
Ponlo en tu boca... Pero no lo mastiques todavía... Solo déjalo ahí un momento...
<break time="5s"/>
¿Dónde está?... ¿En tu lengua?... ¿Entre tus dientes?... ¿A un lado de tu boca?... Solo nota dónde está... Nota cómo se siente tenerlo ahí...
<break time="8s"/>
¿Qué sabor notas de inmediato?... No pienses si te gusta o no... Solo nota... ¿Qué sabor hay?...
<break time="8s"/>
Ahora... muy despacio... empieza a masticar... Mastica lento... Como si nunca antes hubieras probado esta comida... Como si fueras un científico curioso explorando algo completamente nuevo...
<break time="10s"/>
Nota cómo cambia la textura mientras masticas... Nota si el sabor se intensifica o cambia... No tienes prisa... Mastica por lo menos veinte veces... Siente cada movimiento de tu mandíbula...
<break time="15s"/>
Si tu mente te dice... esto es aburrido... O... quiero ir más rápido... Solo nota ese pensamiento... Es un pasajero del autobús... Déjalo estar ahí... Pero tú sigues manejando hacia donde quieres ir... Hacia la conexión con tu cuerpo...
<break time="8s"/>
Cuando esté completamente masticado... traga... Y siente... si puedes... la comida bajando por tu garganta... Siente cómo llega a tu estómago...
<break time="8s"/>

Ahora... haz una pausa... Este es el momento más importante...
<break time="5s"/>
Te voy a hacer dos preguntas diferentes... Y quiero que notes si las respuestas son diferentes...
<break time="3s"/>
Primera pregunta... ¿Qué dice tu cuerpo ahora mismo?... No tu mente... Tu cuerpo físico... ¿Tu estómago físicamente quiere más?... ¿Se siente satisfecho?... ¿Todavía tiene espacio y quiere más comida?... Solo escucha a tu estómago... A tu cuerpo físico...
<break time="12s"/>
Segunda pregunta... ¿Qué dice tu mente?... ¿Tu mente quiere más?... ¿Está pensando... todavía quiero seguir comiendo... aunque tu estómago ya esté satisfecho?... ¿O está pensando... debería parar... aunque tu estómago aún tenga hambre?...
<break time="12s"/>
A veces tu cuerpo y tu mente dicen cosas diferentes... Y eso está bien... Ambas son información valiosa... Pero aquí está la clave... Tu cuerpo sabe cuánta comida necesita... Tu mente a veces busca comida por otras razones... Aburrimiento... Estrés... Costumbre... Emociones...
<break time="5s"/>
No hay respuesta correcta aquí... Solo estás aprendiendo a distinguir entre las dos voces... La voz de tu cuerpo... Y la voz de tu mente...
<break time="5s"/>

Bien... Has comido este bocado con total presencia... Eso es hermoso... Eso es un regalo que te has dado a ti mismo...
<break time="4s"/>
Ahora tienes una opción... Puedes seguir comiendo el resto de tu comida manteniendo esta misma atención suave... Masticando despacio... Notando sabores... Escuchando a tu cuerpo... No necesitas que yo esté aquí guiándote en cada bocado... Ya sabes cómo hacerlo...
<break time="5s"/>
Confía en que tu cuerpo te va a decir cuándo ha sido suficiente... Tal vez sea después de tres bocados más... Tal vez sea después de terminar todo lo que tienes... No hay una cantidad correcta... Solo está lo que tu cuerpo necesita hoy... En este momento...
<break time="5s"/>
Y si en algún momento te das cuenta de que empezaste a comer en automático... sin presencia... está bien... No te juzgues... Simplemente regresa... Una respiración profunda... Y vuelves al momento presente... Eso es todo lo que necesitas hacer...
<break time="5s"/>
Recuerda esto... Comer con presencia es un acto de cuidado... No de control... No de restricción... De cuidado...
<break time="3s"/>
Tu cuerpo merece ser escuchado... No controlado...
<break time="4s"/>
Disfruta tu comida...
</prosody>
</speak>`;

async function generateMeditation() {
  console.log('Generando meditación larga en español...');
  
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
    
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    
    const outputPath = path.join(audioDir, 'meditation_full_es.mp3');
    fs.writeFileSync(outputPath, audioBuffer);
    
    const sizeInKB = (audioBuffer.length / 1024).toFixed(2);
    const durationMinutes = (sizeInKB / 1000 * 0.5).toFixed(1);
    
    console.log(`✅ Meditación larga en español generada!`);
    console.log(`📁 Guardada en: ${outputPath}`);
    console.log(`📊 Tamaño: ${sizeInKB} KB (~${durationMinutes} min)`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

generateMeditation();
