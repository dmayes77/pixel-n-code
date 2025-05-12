// components/sections/SurveyEmbed.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function SurveyEmbed({ surveyId, title = 'Survey' }) {
  const iframeRef = useRef(null);

  // Attempt to auto-resize if same-origin
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const resize = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        iframe.style.height = doc.body.scrollHeight + 'px';
      } catch {}
    };
    iframe.addEventListener('load', resize);
    window.addEventListener('resize', resize);
    return () => {
      iframe.removeEventListener('load', resize);
      window.removeEventListener('resize', resize);
    };
  }, [surveyId]);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        src={`https://link.getcodemaze.com/widget/survey/${surveyId}`}
        style={{ border: 'none', width: '100%' }}
        scrolling="no"
        id={surveyId}
        title={title}
      />
      {/* this script powers the embed */}
      <Script src="https://link.getcodemaze.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
