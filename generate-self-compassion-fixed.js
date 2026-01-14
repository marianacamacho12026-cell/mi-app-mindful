// Generar meditación Self-Compassion con ElevenLabs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_0b4c5b8b0c4d769aa54b1c2fbedaab834e96cb141ef036b1';
const VOICE_ID = 'KGZeK6FsnWQdrkDHnDNA'; // English female voice

// Script completo de Self-Compassion con pausas SSML (13-15 minutos)
const selfCompassionScript = `<speak>
<prosody rate="0.70" pitch="-2%">
Hey... <break time="1.5s"/>
I know what's happening right now... <break time="1s"/>
And I want you to know something really important... <break time="2s"/>

You deserve kindness... <break time="1s"/>
Especially from yourself... <break time="1s"/>
Especially right now... <break time="3s"/>

I know your inner voice might be harsh right now... <break time="1s"/>
Telling you you're failing... <break time="1s"/>
Telling you you're not good enough... <break time="1s"/>
Telling you you should be better at this... <break time="2s"/>

But here's what I need you to understand... <break time="1.5s"/>
That harsh voice... <break time="1s"/>
It's trying to protect you... <break time="1s"/>
But it's using an old, outdated strategy... <break time="1s"/>
One that doesn't work... <break time="1s"/>
One that actually makes things worse... <break time="3s"/>

Because here's the truth... <break time="1s"/>
You cannot hate yourself into becoming someone you love... <break time="2s"/>
You cannot shame yourself into lasting change... <break time="2s"/>
You cannot criticize yourself into healing... <break time="3s"/>

What actually works... <break time="1s"/>
What the research shows... <break time="1s"/>
What thousands of people have discovered... <break time="1s"/>
Is compassion... <break time="3s"/>

So right now... <break time="1s"/>
We're going to practice something different... <break time="1s"/>
We're going to practice treating yourself... <break time="1s"/>
The way you would treat someone you deeply care about... <break time="4s"/>

Let's start by connecting with your breath... <break time="2s"/>

Take a slow breath in through your nose... <break time="5s"/>
Hold it gently... <break time="2s"/>
And breathe out slowly through your mouth... <break time="6s"/>

Good... <break time="2s"/>
Do that two more times at your own pace... <break time="18s"/>

Now... <break time="1s"/>
I want you to notice how you're feeling right now... <break time="2s"/>

Maybe you're feeling anxious... <break time="1s"/>
Maybe guilty... <break time="1s"/>
Maybe frustrated with yourself... <break time="1s"/>
Maybe overwhelmed... <break time="1s"/>
Maybe numb... <break time="3s"/>

Whatever you're feeling... <break time="1s"/>
It's okay... <break time="1s"/>
You don't have to fix it... <break time="1s"/>
You don't have to make it go away... <break time="1s"/>
Just notice it... <break time="4s"/>

Place one hand on your heart... <break time="1s"/>
Or on your belly... <break time="1s"/>
Wherever feels comforting... <break time="3s"/>

Feel the warmth of your own hand... <break time="2s"/>
Feel your breath moving under your hand... <break time="3s"/>

This is you... <break time="1s"/>
Taking care of you... <break time="3s"/>

Now I want to tell you something... <break time="1s"/>
Something that might be hard to hear... <break time="1s"/>
But I need you to really listen... <break time="3s"/>

What you're going through... <break time="1s"/>
This struggle with food... <break time="1s"/>
This struggle with your body... <break time="1s"/>
This struggle with control... <break time="2s"/>

It's not because you're weak... <break time="2s"/>
It's not because you lack discipline... <break time="2s"/>
It's not because something is fundamentally wrong with you... <break time="3s"/>

It's because you're human... <break time="2s"/>

And being human is hard... <break time="2s"/>

You're dealing with a nervous system that evolved for a completely different world... <break time="1s"/>
A brain that confuses emotional hunger with physical hunger... <break time="1s"/>
A culture that sends impossible messages about food and bodies... <break time="1s"/>
And probably... a past that taught you some not-so-helpful coping strategies... <break time="4s"/>

None of that is your fault... <break time="3s"/>

You are doing the best you can... <break time="1s"/>
With the tools you have... <break time="1s"/>
In the circumstances you're in... <break time="3s"/>

Let that sink in for a moment... <break time="5s"/>

You are doing the best you can... <break time="5s"/>

I know you might not believe that... <break time="1s"/>
I know there's probably a voice saying... <break time="1s"/>
"If I was doing my best, I wouldn't keep doing this." <break time="1s"/>
"If I was doing my best, I'd have it figured out by now." <break time="3s"/>

But here's the thing about "doing your best"... <break time="1s"/>
Your best changes... <break time="2s"/>

Some days your best is brilliant and effortless... <break time="1s"/>
Some days your best is just getting through the day... <break time="1s"/>
Some days your best is eating three balanced meals... <break time="1s"/>
Some days your best is eating something... anything... <break time="3s"/>

Your best is not constant... <break time="1s"/>
It fluctuates with your sleep, your stress, your hormones, your life... <break time="3s"/>

And that's okay... <break time="3s"/>

Right now... <break time="1s"/>
I want you to say something to yourself... <break time="1s"/>
Out loud if you can... <break time="1s"/>
Or silently in your mind... <break time="2s"/>

Say this... <break time="2s"/>
"I am doing the best I can right now." <break time="5s"/>

Say it again... <break time="2s"/>
"I am doing the best I can right now." <break time="5s"/>

How does that feel? <break time="2s"/>

Maybe it feels relieving... <break time="1s"/>
Maybe it feels uncomfortable... <break time="1s"/>
Maybe it brings up sadness... <break time="1s"/>
Maybe it feels like a lie... <break time="3s"/>

Whatever it brings up is okay... <break time="3s"/>

Keep your hand on your heart... <break time="1s"/>
Keep breathing... <break time="5s"/>

Now I want you to imagine someone you love... <break time="2s"/>

Maybe a child... <break time="1s"/>
A partner... <break time="1s"/>
A friend... <break time="1s"/>
A pet... <break time="2s"/>

Someone who, when you think of them, you feel warmth... <break time="1s"/>
Tenderness... <break time="1s"/>
Care... <break time="3s"/>

Imagine that this person came to you... <break time="1s"/>
And told you they were struggling... <break time="2s"/>

They told you they keep doing something they don't want to do... <break time="1s"/>
They told you they feel ashamed... <break time="1s"/>
They told you they feel like they're failing... <break time="3s"/>

What would you say to them? <break time="3s"/>

Would you tell them they're pathetic? <break time="2s"/>
Would you tell them they should just try harder? <break time="2s"/>
Would you list all their failures? <break time="3s"/>

No... <break time="2s"/>

You would probably... <break time="1s"/>
Put your arm around them... <break time="1s"/>
Tell them it's okay... <break time="1s"/>
Tell them you understand... <break time="1s"/>
Tell them this doesn't make them a bad person... <break time="1s"/>
Tell them you still love them... <break time="3s"/>

You would show them compassion... <break time="4s"/>

Now here's the radical part... <break time="2s"/>

You deserve that same compassion... <break time="3s"/>

Not just when you succeed... <break time="1s"/>
Not just when you do everything right... <break time="1s"/>
But right now... <break time="1s"/>
In the middle of the struggle... <break time="3s"/>

You deserve compassion... <break time="1s"/>
Because you are human... <break time="1s"/>
And you are suffering... <break time="1s"/>
And that is enough... <break time="5s"/>

So right now... <break time="1s"/>
I want you to speak to yourself... <break time="1s"/>
The way you would speak to that person you love... <break time="3s"/>

Put your hand on your heart... <break time="2s"/>

And say... <break time="2s"/>
"This is really hard right now..." <break time="4s"/>

Say it again... <break time="1s"/>
"This is really hard right now..." <break time="4s"/>

Let yourself feel the truth of that... <break time="3s"/>
It IS hard... <break time="3s"/>

Now say... <break time="2s"/>
"I'm doing the best I can..." <break time="4s"/>

Again... <break time="1s"/>
"I'm doing the best I can..." <break time="4s"/>

And finally... <break time="2s"/>
"May I be kind to myself..." <break time="4s"/>

One more time... <break time="1s"/>
"May I be kind to myself..." <break time="5s"/>

Breathe... <break time="5s"/>

Notice what comes up when you say these words to yourself... <break time="3s"/>

Maybe resistance... <break time="1s"/>
Maybe a voice saying you don't deserve it... <break time="2s"/>

That's okay... <break time="1s"/>
You don't have to believe it yet... <break time="1s"/>
You're just practicing saying it... <break time="3s"/>

Self-compassion is a skill... <break time="1s"/>
Like any skill, it takes practice... <break time="1s"/>
It might feel awkward at first... <break time="1s"/>
That's normal... <break time="3s"/>

Keep breathing... <break time="2s"/>
Keep your hand on your heart... <break time="4s"/>

I want you to know something else... <break time="2s"/>

Being kind to yourself... <break time="1s"/>
Is not the same as letting yourself off the hook... <break time="3s"/>

Compassion is not weakness... <break time="1s"/>
Compassion is not giving up... <break time="1s"/>
Compassion is not saying "anything goes"... <break time="3s"/>

Compassion is creating the conditions for change... <break time="2s"/>

When you're harsh with yourself... <break time="1s"/>
When you criticize and shame yourself... <break time="1s"/>
Your nervous system goes into threat mode... <break time="2s"/>

And when you're in threat mode... <break time="1s"/>
You can't learn... <break time="1s"/>
You can't heal... <break time="1s"/>
You can only defend or escape... <break time="3s"/>

But when you're compassionate with yourself... <break time="1s"/>
When you're kind... <break time="1s"/>
Your nervous system feels safe... <break time="2s"/>

And when you feel safe... <break time="1s"/>
You can actually change... <break time="3s"/>

So being kind to yourself... <break time="1s"/>
Is actually the most powerful thing you can do... <break time="4s"/>

Let's practice this one more way... <break time="3s"/>

Think about what happened today... <break time="1s"/>
Or recently... <break time="1s"/>
Whatever brought you here... <break time="3s"/>

Maybe you binged... <break time="1s"/>
Maybe you broke a promise to yourself... <break time="1s"/>
Maybe you feel out of control... <break time="3s"/>

Instead of asking... <break time="1s"/>
"What's wrong with me?" <break time="2s"/>

Try asking... <break time="1s"/>
"What was I feeling?" <break time="3s"/>

What were you feeling right before? <break time="2s"/>

Anxious? <break time="1s"/>
Lonely? <break time="1s"/>
Bored? <break time="1s"/>
Angry? <break time="1s"/>
Tired? <break time="1s"/>
Overwhelmed? <break time="4s"/>

Name the feeling... <break time="3s"/>

And then ask... <break time="1s"/>
"What did I need?" <break time="3s"/>

Not what did you do... <break time="1s"/>
But what did you actually need? <break time="3s"/>

Did you need comfort? <break time="2s"/>
Did you need rest? <break time="2s"/>
Did you need connection? <break time="2s"/>
Did you need to cry? <break time="2s"/>
Did you need to feel in control of something? <break time="4s"/>

Food was the strategy... <break time="1s"/>
But it wasn't the actual need... <break time="3s"/>

Can you identify what the real need was? <break time="5s"/>

This is compassionate curiosity... <break time="2s"/>

Not "Why did I do that again, I'm so stupid"... <break time="2s"/>

But "What was happening for me? What was I trying to take care of?"... <break time="4s"/>

This shifts everything... <break time="2s"/>

Because when you understand what you actually needed... <break time="1s"/>
You can start to find other ways to meet that need... <break time="4s"/>

Let's take a few more breaths together... <break time="2s"/>

Breathe in... <break time="5s"/>
Breathe out... <break time="6s"/>

In... <break time="5s"/>
Out... <break time="6s"/>

One more... <break time="1s"/>
In... <break time="5s"/>
Out... <break time="6s"/>

Good... <break time="3s"/>

Before we finish... <break time="1s"/>
I want to leave you with this... <break time="3s"/>

Your relationship with food... <break time="1s"/>
Is a mirror for your relationship with yourself... <break time="3s"/>

When you can't trust yourself around food... <break time="1s"/>
It's often because you don't feel safe with yourself... <break time="3s"/>

So the work isn't really about food... <break time="2s"/>

The work is about building safety with yourself... <break time="1s"/>
Building trust with yourself... <break time="1s"/>
Learning to be a good parent to yourself... <break time="4s"/>

And that starts with compassion... <break time="3s"/>

Every time you choose compassion over criticism... <break time="1s"/>
You're building that safety... <break time="1s"/>
You're building that trust... <break time="4s"/>

It won't be perfect... <break time="1s"/>
You'll forget sometimes... <break time="1s"/>
The harsh voice will come back... <break time="2s"/>

That's okay... <break time="2s"/>

Just notice it... <break time="1s"/>
And practice again... <break time="3s"/>

Place your hand on your heart... <break time="3s"/>

Say one more time... <break time="2s"/>
"May I be kind to myself..." <break time="5s"/>
"May I give myself the compassion I deserve..." <break time="5s"/>
"May I remember that I am human, and that is enough..." <break time="6s"/>

Breathe... <break time="5s"/>

You are enough... <break time="2s"/>
Right now... <break time="1s"/>
As you are... <break time="2s"/>
In the middle of the mess... <break time="2s"/>
You are enough... <break time="5s"/>

Take one more deep breath... <break time="6s"/>

And when you're ready... <break time="2s"/>
You can open your eyes... <break time="3s"/>

Remember... <break time="1s"/>
Compassion is always available... <break time="1s"/>
You can come back to this practice anytime... <break time="4s"/>

Be gentle with yourself today... <break time="3s"/>

You are doing better than you think...
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
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const audioBuffer = await response.arrayBuffer();
        const audioDir = path.join(__dirname, 'audio');
        
        if (!fs.existsSync(audioDir)) {
            fs.mkdirSync(audioDir, { recursive: true });
        }

        const outputPath = path.join(audioDir, 'self_compassion.mp3');
        fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
        
        console.log(`✓ Audio generado exitosamente: ${outputPath}`);
        console.log(`Tamaño: ${(audioBuffer.byteLength / 1024 / 1024).toFixed(2)} MB`);
        
    } catch (error) {
        console.error('Error generando audio:', error);
    }
}

generateAudio();
