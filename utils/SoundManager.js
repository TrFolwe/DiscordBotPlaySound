const { getVoiceConnection, createAudioPlayer, joinVoiceChannel, createAudioResource } = require("@discordjs/voice");

class SoundManager {
    constructor(guild) {
        this.guild = guild;
        this.voiceConnection = getVoiceConnection(guild.id);
        this.voicePlayer = createAudioPlayer();
    }

    joinChannel(channelId) {
        joinVoiceChannel({
            "channelId": channelId,
            "guildId": this.guild.id,
            "adapterCreator": this.guild.voiceAdapterCreator
        });
    }

    setSound(soundPath) {
        this.sound = createAudioResource(soundPath);
    }

    getSound() {
        return this.sound;
    }

    play() {
        this.voiceConnection.subscribe(this.voicePlayer);
        this.voicePlayer.play(this.sound);
    }

    pause() {
        this.voicePlayer.pause();
        this.voiceConnection.subscribe(this.voicePlayer);
    }

    resume() {
        this.voiceConnection.subscribe(this.voicePlayer);
        this.voicePlayer.unpause();
    }

    getVoicePlayer() {
        return this.voicePlayer;
    }

    disconnectChannel() {
        this.voiceConnection.disconnect();
    } 
}

module.exports = SoundManager;