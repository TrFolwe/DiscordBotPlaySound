# Play Sound
Discord bot with play sound example code

For use<br>
```
Download rar or git clone https://github.com/TrFolwe/DiscordBotPlaySound.git then npm install
```

```js
const SoundManager = new(require("./utils/SoundManager"))(guild);
```

Join Voice Channel<br/>
```js
SoundManager.joinChannel(channelId);
```
<br/>

Set audio to played<br/>
```js
SoundManager.setSound(SoundPath); //example "./sounds/testSound.mp3"
```
Set Sound<br/>
```js
SoundManager.setSound(SoundPath); //example "./sounds/testSound.mp3"
```

Play Sound<br/>
```js
SoundManager.play();
```

Pause Sound<br/>
```js
SoundManager.pause();
```

Resume Sound<br/>
```js
SoundManager.resume();
```

Disconnect Channel<br/>
```js
SoundManager.disconnect();
```