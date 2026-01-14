// Generar meditación completa con 11Labs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_4ac2ad5a95bba4cf5ebc90457d59c89cedda0fb4590db544';
const VOICE_ID = 'KGZeK6FsnWQdrkDHnDNA';

// Script completo con pausas SSML
const meditationScript = `<speak>
<prosody rate="0.85" pitch="-2%">
Hello. <break time="1s"/>
You are about to eat. <break time="1s"/>
And you have chosen to do it differently this time. <break time="1.5s"/>
You have chosen to be fully present. <break time="1.5s"/>
This is an act of care for yourself. <break time="4s"/>

Before we begin, I want you to know something important. <break time="1.5s"/>
There is no right way to do this. <break time="1s"/>
There is no wrong way. <break time="1s"/>
You are not being tested. <break time="1.5s"/>
You are simply learning to listen to your body again. <break time="5s"/>

<emphasis level="moderate">We will start with three deep breaths.</emphasis> <break time="1s"/>
These breaths will bring you completely into this present moment. <break time="1.5s"/>
Ready? <break time="2s"/>

Breathe in deeply through your nose. <break time="5s"/>
And breathe out slowly through your mouth. <break time="7s"/>
Good. <break time="1s"/>

One more time. <break time="1s"/>
Breathe in. <break time="5s"/>
And breathe out. <break time="1.5s"/>
Let go of any rush. <break time="1s"/>
Let go of any tension. <break time="7s"/>

Last one. <break time="1s"/>
Deep breath in. <break time="5s"/>
And breathe all the way out. <break time="7s"/>
Beautiful. <break time="2s"/>

Your body is now more relaxed. <break time="1.5s"/>
More present. <break time="1.5s"/>
Ready to receive this food. <break time="3s"/>

Before we start eating, I need to teach you something important. <break time="1.5s"/>
Something about your thoughts. <break time="3s"/>

In the next few minutes, your mind will probably have many thoughts about this food. <break time="1.5s"/>
Thoughts like "this is good" or "this is bad." <break time="1.5s"/>
Thoughts of guilt. <break time="1.5s"/>
Thoughts of "I should eat this" or "I should not eat this." <break time="4s"/>

And here is what matters. <break time="1.5s"/>
Those thoughts are just thoughts. <break time="1.5s"/>
They are like clouds passing through the sky of your mind. <break time="1.5s"/>
You can notice them. <break time="1s"/>
You can see they are there. <break time="1s"/>
But you do not have to believe them. <break time="1s"/>
You do not have to follow them. <break time="5s"/>

Imagine this. <break time="1.5s"/>
You are the driver of a bus. <break time="2s"/>
This bus is going where you want to go. <break time="1.5s"/>
Toward feeling good in your body. <break time="1s"/>
Toward having peace with food. <break time="3s"/>

Your thoughts are just passengers on this bus. <break time="1.5s"/>
They can get on. <break time="1s"/>
They can talk. <break time="1s"/>
They can have opinions. <break time="1s"/>
But you are the one driving. <break time="1.5s"/>
You decide where the bus goes. <break time="5s"/>

Okay. <break time="1s"/>
With that in mind, let us begin. <break time="3s"/>

Now, look at the food in front of you. <break time="1.5s"/>
Just look at it. <break time="1s"/>
No judgment. <break time="8s"/>

What is the first thing you notice about it? <break time="1s"/>
Maybe it is the color. <break time="1s"/>
Maybe the shape. <break time="1s"/>
Maybe how it smells. <break time="1s"/>
There is no correct answer. <break time="1s"/>
Just observe what captures your attention first. <break time="10s"/>

If you are holding the food in your hands, notice how it feels to the touch. <break time="1.5s"/>
Is it soft? <break time="1s"/>
Rough? <break time="1s"/>
Warm? <break time="1s"/>
Cold? <break time="1s"/>
Heavy or light? <break time="8s"/>

Now bring it close to your nose. <break time="1.5s"/>
What do you smell? <break time="1s"/>
Do not think too much. <break time="1s"/>
Just notice what aroma is there. <break time="8s"/>

And now, observe your body. <break time="1.5s"/>
What is happening in your body as you look at this food? <break time="1.5s"/>
Maybe there is saliva in your mouth. <break time="1.5s"/>
Maybe there is a sensation in your stomach. <break time="1.5s"/>
Maybe tension somewhere. <break time="1s"/>
Just notice. <break time="1s"/>
No judgment. <break time="8s"/>

And if right now thoughts appear in your mind about this food. <break time="1.5s"/>
Thoughts like "this will make me gain weight." <break time="1s"/>
Or "this will make me feel bad." <break time="1s"/>
Or "I should eat something else." <break time="1.5s"/>
Simply notice them. <break time="1.5s"/>
They are passengers on the bus. <break time="1s"/>
They are there. <break time="1s"/>
But they do not have to direct where you are going. <break time="5s"/>

It is perfectly okay to have chosen this food. <break time="1.5s"/>
Trust that. <break time="3s"/>

Now, slowly, with all your attention, bring a piece of this food to your mouth. <break time="5s"/>
Place it in your mouth. <break time="1s"/>
But do not chew it yet. <break time="1s"/>
Just let it rest there for a moment. <break time="5s"/>

Where is it resting? <break time="1s"/>
On your tongue? <break time="1s"/>
Between your teeth? <break time="1s"/>
To the side of your mouth? <break time="1.5s"/>
Just notice where it is. <break time="1s"/>
Notice how it feels to have it there. <break time="8s"/>

What taste do you notice immediately? <break time="1.5s"/>
Do not think about whether you like it or not. <break time="1s"/>
Just notice. <break time="1s"/>
What flavor is there? <break time="8s"/>

Now, very slowly, begin to chew. <break time="1.5s"/>
Chew slowly. <break time="1s"/>
As if you have never tasted this food before. <break time="1.5s"/>
As if you are a curious scientist exploring something completely new. <break time="10s"/>

Notice how the texture changes as you chew. <break time="1.5s"/>
Notice if the flavor intensifies or changes. <break time="1.5s"/>
You are not in a hurry. <break time="1.5s"/>
Chew at least twenty times. <break time="1s"/>
Feel each movement of your jaw. <break time="15s"/>

If your mind tells you "this is boring." <break time="1s"/>
Or "I want to go faster." <break time="1.5s"/>
Just notice that thought. <break time="1.5s"/>
It is a passenger on the bus. <break time="1.5s"/>
Let it be there. <break time="1s"/>
But you keep driving toward where you want to go. <break time="1.5s"/>
Toward connection with your body. <break time="8s"/>

When it is completely chewed, swallow. <break time="1.5s"/>
And feel, if you can, the food going down your throat. <break time="1.5s"/>
Feel how it arrives in your stomach. <break time="8s"/>

Now, pause. <break time="1.5s"/>
This is the most important moment. <break time="5s"/>

I am going to ask you two different questions. <break time="1.5s"/>
And I want you to notice if the answers are different. <break time="3s"/>

First question. <break time="1.5s"/>
What does your BODY say right now? <break time="1.5s"/>
Not your mind. <break time="1s"/>
Your physical body. <break time="1.5s"/>
Does your stomach physically want more? <break time="1s"/>
Does it feel satisfied? <break time="1s"/>
Does it still have space and want more food? <break time="1.5s"/>
Just listen to your stomach. <break time="1s"/>
To your physical body. <break time="12s"/>

Second question. <break time="1.5s"/>
What does your MIND say? <break time="1.5s"/>
Does your mind want more? <break time="1.5s"/>
Is it thinking "I still want to keep eating" even though your stomach is already satisfied? <break time="1.5s"/>
Or is it thinking "I should stop" even though your stomach still has hunger? <break time="12s"/>

Sometimes your body and your mind say different things. <break time="1.5s"/>
And that is okay. <break time="1.5s"/>
Both are valuable information. <break time="1.5s"/>
But here is the key. <break time="1.5s"/>
Your body knows how much food it needs. <break time="1.5s"/>
Your mind sometimes looks for food for other reasons. <break time="1.5s"/>
Boredom. <break time="1s"/>
Stress. <break time="1s"/>
Habit. <break time="1s"/>
Emotions. <break time="5s"/>

There is no correct answer here. <break time="1.5s"/>
You are just learning to tell the difference between the two voices. <break time="1.5s"/>
The voice of your body. <break time="1.5s"/>
And the voice of your mind. <break time="3s"/>

Okay. <break time="1.5s"/>
You have eaten this bite with complete presence. <break time="1.5s"/>
That is beautiful. <break time="1.5s"/>
That is a gift you have given yourself. <break time="4s"/>

Now you have a choice. <break time="1.5s"/>
You can continue eating the rest of your meal keeping this same gentle attention. <break time="1.5s"/>
Chewing slowly. <break time="1s"/>
Noticing flavors. <break time="1s"/>
Listening to your body. <break time="1.5s"/>
You do not need me here guiding you through every bite. <break time="1.5s"/>
You already know how to do this. <break time="5s"/>

Trust that your body will tell you when it has had enough. <break time="1.5s"/>
Maybe it will be after three more bites. <break time="1s"/>
Maybe it will be after finishing everything you have. <break time="1.5s"/>
There is no correct amount. <break time="1.5s"/>
There is only what YOUR body needs today. <break time="1s"/>
In this moment. <break time="5s"/>

And if at some point you realize you started eating on autopilot, without presence, that is okay. <break time="1.5s"/>
Do not judge yourself. <break time="1.5s"/>
Simply come back. <break time="1.5s"/>
One deep breath. <break time="1.5s"/>
And you return to the present moment. <break time="1.5s"/>
That is all you need to do. <break time="5s"/>

Remember this. <break time="1.5s"/>
Eating with presence is an act of care. <break time="1.5s"/>
Not control. <break time="1s"/>
Not restriction. <break time="1s"/>
Care. <break time="3s"/>

Your body deserves to be listened to. <break time="1.5s"/>
Not controlled. <break time="4s"/>

Enjoy your meal.
</prosody>
</speak>`;

async function generateMeditation() {
  console.log('🎙️  Generando meditación completa con 11Labs...\n');
  
  const wordCount = meditationScript.split(' ').filter(w => !w.includes('<')).length;
  const estimatedCredits = Math.ceil(wordCount * 1.5);
  const estimatedMinutes = Math.ceil(wordCount / 130);
  
  console.log(`📝 Palabras: ${wordCount}`);
  console.log(`⏱️  Duración estimada: ~${estimatedMinutes} minutos`);
  console.log(`💰 Créditos estimados: ~${estimatedCredits} de tus 10,000\n`);
  
  try {
    console.log('Llamando a 11Labs API...');
    
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
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
          stability: 0.6,
          similarity_boost: 0.8
        }
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const audioDir = path.join(__dirname, 'audio');
    
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    
    const filepath = path.join(audioDir, 'meditation_full.mp3');
    fs.writeFileSync(filepath, Buffer.from(audioBuffer));
    
    console.log('\n✅ ¡Meditación generada exitosamente!');
    console.log(`📁 Guardado en: audio/meditation_full.mp3`);
    console.log(`\n🎵 Ahora descarga música de fondo de Pixabay:`);
    console.log(`   Busca: "40 BPM meditation ambient"`);
    console.log(`   Guárdala como: audio/background.mp3`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

generateMeditation();
