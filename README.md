# Play Sound
Discord bot with play sound example code

For use<br>
<code>
Download rar or git clone https://github.com/TrFolwe/DiscordBotPlaySound.git then npm install
</code>

<code>const SoundManager = new(require("./utils/SoundManager"))(guild);
</code>

Join Voice Channel<br/>
<code>
SoundManager.joinChannel(channelId);
</code>
<br/>

Set audio to played<br/>
<code>
SoundManager.setSound(SoundPath); //example "./sounds/testSound.mp3"
</code>

Set Sound<br/>
<code>
SoundManager.setSound(SoundPath); //example "./sounds/testSound.mp3"
</code>

Play Sound<br/>
<code>
SoundManager.play();
</code>

Pause Sound<br/>
<code>
SoundManager.pause();
</code>

Resume Sound<br/>
<code>
SoundManager.resume();
</code>

Disconnect Channel<br/>
<code>
SoundManager.disconnect();
</code>