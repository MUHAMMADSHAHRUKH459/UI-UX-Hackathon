'use client';
import { useState } from 'react';

const AicadoChatbot = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setShowPopup(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontSize: '24px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {/* Chatbot Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '370px',
            height: '550px', // Slightly increased to show header
            backgroundColor: '#fff',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            zIndex: 10000,
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '12px',
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              zIndex: 10001,
              color: '#666',
            }}
          >
            ❌
          </button>

          {/* Iframe */}
          <iframe
            src="https://run.aicado.ai/llm?audi=1748300717434x509617646341744560"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allow="clipboard-read; clipboard-write; microphone; camera"
            title="Aicado Chatbot"
            style={{
              border: 'none',
            }}
          />
        </div>
      )}
    </>
  );
};

export default AicadoChatbot;
