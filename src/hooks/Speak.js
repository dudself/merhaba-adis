import * as React from 'react';
import * as Speech from 'expo-speech';

function Speak( prompt, i, clickedResume, isSpeaking ) {

    isSpeaking.current = true;
        const options = {
          language: 'tr-TR',
          rate: 1.1,
          pitch: 0.9,
        };

        if(clickedResume.current == false){
          i = 0;
        }

        
        while (i < prompt.length) {
            output(i);
            i++;
        }

        function output(i) {
            setTimeout(function() {
              if (isSpeaking.current == true) {
                Speech.speak(prompt[i], options);
            }
          }, 1000 * i);
        }

        return i;
}

export default Speak;