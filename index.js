const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

const VOICE_CHANNEL_ID = "empty";
const GUILD_ID = "empty";
const TOKEN = "";

client.once("ready", () => {
    console.log("Bot is ready!");
    const targetGuild = client.guilds.cache.get(GUILD_ID);
    const voiceChannel = targetGuild.channels.cache.get(VOICE_CHANNEL_ID);
    new (require("./utils/SoundManager"))(targetGuild).joinChannel(voiceChannel.id);
});

const wait = ms => new Promise(r => setTimeout(r, ms));

client.on("messageCreate", async message => {
    const { content, guild } = message;

    const SOUND_PATH = "./sounds/soundTest2.mp3";

    const SoundManager = new (require("./utils/SoundManager"))(guild)
    const voicePlayer = SoundManager.getVoicePlayer();
    SoundManager.setSound(SOUND_PATH);

    if (content === "!playsound") {
        SoundManager.joinChannel(VOICE_CHANNEL_ID);
        SoundManager.play();
    } else if (content === "!pausesound") {
        if (typeof voicePlayer !== 'undefined') {
            SoundManager.pause();
        }
    } else if (content === "!resumesound") {
        if (typeof voicePlayer !== 'undefined') {
            SoundManager.resume();
        }
    } else if (content === "!disconnect") {
        if (typeof voicePlayer !== 'undefined') {
            SoundManager.disconnectChannel();
        }
    }
});

client.login(TOKEN).then(() => console.log("Token verified"))