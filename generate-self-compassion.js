// Generar meditaciÃ³n Self-Compassion con ElevenLabs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_20b68223a1a833e6f68384ce8544098c0efbd2ac4d83e127';
const VOICE_ID = 'KGZeK6FsnWQdrkDHnDNA'; // English female voice

// Script completo con pausas SSML
const selfCompassionScript = `<speak>
<prosody rate="0.70" pitch="-2%">
Hey... <break time="1s"/>
I know what is happening right now... <break time="1s"/>
You have a strong urge to eat... <break time="1s"/>
Maybe it feels overwhelming... <break time="1s"/>
Maybe it feels like you cannot resist it... <break time="1s"/>
Maybe you are already planning what you will eat... <break time="1s"/>
Or maybe you are already in the kitchen... <break time="3s"/>

I want you to know something important... <break time="1s"/>
You are not weak... <break time="1s"/>
You are not failing... <break time="1s"/>
This urge you are feeling is normal... <break time="1s"/>
It is your brain doing what brains do... <break time="4s"/>

And here is what else I want you to know... <break time="1s"/>
This urge will pass... <break time="1s"/>
Not because you fight it... <break time="1s"/>
Not because you use willpower... <break time="1s"/>
But because urges always pass... <break time="1s"/>
They are like waves... <break time="1s"/>
They rise... <break time="1s"/>
They peak... <break time="1s"/>
And they fall... <break time="3s"/>

Right now... you are going to learn to surf this wave... <break time="1s"/>
Not fight it... <break time="1s"/>
Not give in to it... <break time="1s"/>
Just surf it... <break time="4s"/>

Let's begin... <break time="3s"/>

First... we need to slow down your nervous system... <break time="1s"/>
Your body right now is probably in fight or flight mode... <break time="1s"/>
Heart beating fast... <break time="1s"/>
Maybe shaking... <break time="1s"/>
Maybe feeling hot... <break time="1s"/>
That is adrenaline... <break time="1s"/>
Your body thinks this is an emergency... <break time="3s"/>

We are going to tell your body it is safe... <break time="1s"/>
We do that with breath... <break time="2s"/>

Breathe in slowly through your nose... <break time="1s"/>
Count to four... <break time="5s"/>
Hold for a moment... <break time="2s"/>
Now breathe out slowly through your mouth... <break time="1s"/>
Count to six... <break time="7s"/>

Good... <break time="1s"/>
The long exhale activates your calm system... <break time="1s"/>
Let's do three more... <break time="2s"/>

Breathe in... <break time="4s"/>
Hold... <break time="2s"/>
Breathe out slowly... <break time="6s"/>

Again... <break time="1s"/>
In... <break time="4s"/>
Hold... <break time="2s"/>
Out... <break time="6s"/>

One more... <break time="1s"/>
In... <break time="4s"/>
Hold... <break time="2s"/>
Out... <break time="6s"/>
<break time="3s"/>

Good... <break time="1s"/>
Your nervous system is starting to calm down... <break time="1s"/>
Not completely... <break time="1s"/>
But enough... <break time="3s"/>

Now I want you to understand what is happening in your body right now... <break time="3s"/>

This urge to eat... <break time="1s"/>
This feeling that you NEED to eat right now... <break time="1s"/>
It feels permanent... <break time="1s"/>
It feels like it will never go away unless you eat... <break time="4s"/>

But that is not true... <break time="2s"/>

Urges are like waves in the ocean... <break time="1s"/>
They build... <break time="1s"/>
They get stronger... <break time="1s"/>
They reach a peak... <break time="1s"/>
And then they fall... <break time="3s"/>

Every single time... <break time="1s"/>
Without exception... <break time="3s"/>

You have two choices when a wave comes... <break time="1s"/>
You can let the wave crash over you and pull you under... <break time="1s"/>
That is giving in to the urge... <break time="1s"/>
Or you can surf the wave... <break time="1s"/>
Ride it... <break time="1s"/>
Stay on top of it... <break time="1s"/>
And watch it fall naturally... <break time="5s"/>

Right now... we are going to surf... <break time="1s"/>
Not fight... <break time="1s"/>
Not resist... <break time="1s"/>
Just observe... <break time="1s"/>
Just ride... <break time="3s"/>

Urges are not just thoughts... <break time="1s"/>
They are physical sensations... <break time="3s"/>

Right now... I want you to notice where in your body you feel this urge... <break time="2s"/>

Maybe it is in your stomach... <break time="1s"/>
A tightness... <break time="1s"/>
An emptiness... <break time="1s"/>
Even though you ate recently... <break time="5s"/>

Maybe it is in your chest... <break time="1s"/>
A pressure... <break time="1s"/>
Anxiety... <break time="1s"/>
Restlessness... <break time="5s"/>

Maybe it is in your throat... <break time="1s"/>
A tightness... <break time="1s"/>
Like you need to swallow something... <break time="5s"/>

Maybe it is in your hands... <break time="1s"/>
A tingling... <break time="1s"/>
A need to reach for something... <break time="1s"/>
To hold something... <break time="5s"/>

Maybe it is in your head... <break time="1s"/>
Buzzing thoughts... <break time="1s"/>
Images of food... <break time="1s"/>
Plans of what to eat... <break time="5s"/>

Wherever it is... <break time="1s"/>
Just notice it... <break time="1s"/>
You do not need to make it go away... <break time="1s"/>
You do not need to like it... <break time="1s"/>
Just notice where it lives in your body... <break time="8s"/>

Good... <break time="1s"/>
Now I want you to imagine that sensation as the wave... <break time="1s"/>
See it clearly... <break time="5s"/>

How big is this wave right now? <break time="1s"/>
Is it building? <break time="1s"/>
Is it at its peak? <break time="1s"/>
Just notice... <break time="6s"/>

Remember... <break time="1s"/>
You are not trying to make the wave smaller... <break time="1s"/>
You are just observing it... <break time="1s"/>
Surfing it... <break time="3s"/>

Now comes the most important part... <break time="3s"/>

For the next few minutes... you are going to stay with this sensation... <break time="1s"/>
Not run from it... <break time="1s"/>
Not give in to it... <break time="1s"/>
Just stay... <break time="4s"/>

I know it is uncomfortable... <break time="1s"/>
I know every part of you wants to make it stop by eating... <break time="3s"/>

But here is the truth... <break time="1s"/>
This discomfort is temporary... <break time="1s"/>
It will not last forever... <break time="1s"/>
In fact... it usually lasts about ten to fifteen minutes... <break time="1s"/>
That is it... <break time="5s"/>

So right now... just breathe... <break time="1s"/>
And watch the wave... <break time="3s"/>

Notice the sensations in your body... <break time="8s"/>

Are they changing? <break time="1s"/>
Maybe getting a little stronger? <break time="1s"/>
That is okay... <break time="1s"/>
That is the wave building... <break time="1s"/>
Let it build... <break time="1s"/>
You are surfing... <break time="10s"/>

Keep breathing... <break time="1s"/>
In through your nose... <break time="1s"/>
Out through your mouth... <break time="6s"/>

Notice your thoughts... <break time="1s"/>
They might be loud right now... <break time="1s"/>
"Just eat." <break time="1s"/>
"This is stupid." <break time="1s"/>
"You cannot do this." <break time="1s"/>
"One bite won't hurt." <break time="5s"/>

Those are just thoughts... <break time="1s"/>
They are part of the wave... <break time="1s"/>
Let them be there... <break time="1s"/>
You do not have to believe them... <break time="1s"/>
You do not have to follow them... <break time="8s"/>

Keep breathing... <break time="1s"/>
Keep watching the sensations... <break time="10s"/>

Notice if the intensity is changing... <break time="1s"/>
Is the wave still building? <break time="1s"/>
Or is it starting to plateau? <break time="8s"/>

Just observe... <break time="1s"/>
No judgment... <break time="1s"/>
You are doing this... <break time="1s"/>
You are surfing... <break time="10s"/>

The urge might feel strong still... <break time="1s"/>
That is okay... <break time="1s"/>
You are not trying to make it disappear... <break time="1s"/>
You are just not acting on it... <break time="1s"/>
That is all surfing is... <break time="8s"/>

Keep breathing... <break time="10s"/>

Notice your body... <break time="1s"/>
Maybe some of the tension is releasing... <break time="1s"/>
Maybe your shoulders are dropping a little... <break time="1s"/>
Maybe your jaw is unclenching... <break time="8s"/>

The wave is starting to fall... <break time="1s"/>
Not because you fought it... <break time="1s"/>
But because that is what waves do... <break time="1s"/>
They always fall... <break time="10s"/>

Stay here a little longer... <break time="1s"/>
Keep breathing... <break time="1s"/>
Keep observing... <break time="10s"/>

You are doing something incredibly difficult... <break time="1s"/>
You are sitting with discomfort... <break time="1s"/>
Not running... <break time="1s"/>
Not numbing... <break time="1s"/>
Just being... <break time="5s"/>

That takes courage... <break time="3s"/>

By now... you might notice that the urgency has shifted... <break time="1s"/>
Maybe it is a little less intense... <break time="1s"/>
Maybe the thoughts are a little quieter... <break time="1s"/>
Maybe your body feels a little less activated... <break time="6s"/>

That is the wave falling... <break time="3s"/>

It always falls... <break time="1s"/>
Always... <break time="4s"/>

You did not make it fall by eating... <break time="1s"/>
You did not make it fall by fighting... <break time="1s"/>
It fell because that is its nature... <break time="5s"/>

Urges are temporary... <break time="1s"/>
They feel permanent when you are in them... <break time="1s"/>
But they are not... <break time="4s"/>

You just proved that to yourself... <break time="1s"/>
You just surfed the wave... <break time="3s"/>

So what happens now? <break time="3s"/>

You have options... <break time="2s"/>

Option one... <break time="1s"/>
If you realize you actually have physical hunger... <break time="1s"/>
Real hunger... <break time="1s"/>
Not urgency... <break time="1s"/>
Then eat... <break time="1s"/>
Eat something nourishing... <break time="1s"/>
Eat slowly... <break time="1s"/>
Eat with awareness... <break time="1s"/>
There is no shame in eating when you are hungry... <break time="5s"/>

Option two... <break time="1s"/>
If you realize this was not hunger... <break time="1s"/>
It was an emotional urge... <break time="1s"/>
Then ask yourself... <break time="1s"/>
What do I actually need right now? <break time="3s"/>

Do you need to move your body? <break time="1s"/>
Go for a walk... <break time="1s"/>
Do some push-ups... <break time="1s"/>
Shake out the energy... <break time="4s"/>

Do you need connection? <break time="1s"/>
Call someone... <break time="1s"/>
Text a friend... <break time="1s"/>
Reach out... <break time="4s"/>

Do you need to feel something? <break time="1s"/>
Let yourself cry... <break time="1s"/>
Write in a journal... <break time="1s"/>
Punch a pillow... <break time="4s"/>

Do you need rest? <break time="1s"/>
Lie down... <break time="1s"/>
Close your eyes... <break time="1s"/>
Let yourself be tired... <break time="5s"/>

The urge was trying to tell you something... <break time="1s"/>
Not that you need food... <break time="1s"/>
But that you need something... <break time="3s"/>

Try to figure out what that something is... <break time="3s"/>

You did it... <break time="1s"/>
You surfed the wave... <break time="4s"/>

The urge might come back later... <break time="1s"/>
Waves come in sets... <break time="1s"/>
That is okay... <break time="3s"/>

Next time... you know what to do... <break time="1s"/>
Breathe... <break time="1s"/>
Locate the sensation... <break time="1s"/>
Watch the wave... <break time="1s"/>
Let it rise... <break time="1s"/>
Let it fall... <break time="5s"/>

Every time you do this... you are retraining your brain... <break time="1s"/>
You are teaching it... <break time="1s"/>
"I can feel discomfort without immediately fixing it." <break time="1s"/>
"I can feel an urge without acting on it." <break time="1s"/>
"I am stronger than I thought." <break time="5s"/>

That is true freedom... <break time="1s"/>
Not never having urges... <break time="1s"/>
But knowing you can surf them... <break time="4s"/>

You did something powerful today... <break time="1s"/>
Remember this feeling... <break time="3s"/>

Breathe... <break time="5s"/>

You are okay...
</prosody>
</speak>`;

async function generateAudio() {
    try {
        console.log('Generando audio de Self-Compassion...');
        
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
                    text: selfCompassionScript,
                    model_id: 'eleven_turbo_v2_5',
                    voice_settings: {
                        stability: 0.7,
                        similarity_boost: 0.85,
                        style: 0.15,
                        use_speaker_boost: true
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const audioBuffer = await response.arrayBuffer();
        const audioDir = path.join(__dirname, 'audio');
        
        if (!fs.existsSync(audioDir)) {
            fs.mkdirSync(audioDir, { recursive: true });
        }

        const outputPath = path.join(audioDir, 'self_compassion.mp3');
        fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
        
        console.log(`âœ“ Audio generado exitosamente: ${outputPath}`);
        console.log(`TamaÃ±o: ${(audioBuffer.byteLength / 1024 / 1024).toFixed(2)} MB`);
        
    } catch (error) {
        console.error('Error generando audio:', error);
    }
}

generateAudio();
