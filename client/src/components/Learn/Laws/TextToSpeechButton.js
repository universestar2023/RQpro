import React, { useState, useEffect } from "react";

const TextToSpeechButton = ({title,statement, content }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const synth = window.speechSynthesis;

  // Fetch available voices on component mount
  useEffect(() => {
    const handleVoicesChanged = () => {
      const voices = synth.getVoices();
      // Filter available voices to find a lady's voice
      const ladyVoice = voices.find((voice) => {
        return (
          voice.name.toLowerCase().includes("female") ||
          voice.name.toLowerCase().includes("woman") ||
          voice.lang.toLowerCase().includes("female") ||
          voice.lang.toLowerCase().includes("woman")
        );
      });
      // If no lady's voice is found, default to the first available voice
      setSelectedVoice(ladyVoice || voices[0]);
    };

    synth.addEventListener("voiceschanged", handleVoicesChanged);

    // Clean up event listener on component unmount
    return () => {
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, [synth]);

  const speakText = () => {
    const combinedText = `${title}. ${statement}. ${content}`;
    const utterance = new SpeechSynthesisUtterance(combinedText);
    // Set selected voice if available
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synth.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    console.log("Stopping speech synthesis...");
    synth.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      {!isSpeaking ? (
        <button className="textToSpeechBtn" onClick={speakText}>click to listen</button>
      ) : (
        <button className="textToSpeechBtn" onClick={stopSpeaking}>click to stop listening</button>
      )}
    </div>
  );
};

export default TextToSpeechButton;
