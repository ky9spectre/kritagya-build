'use client';

import { useEffect, useRef } from 'react';
import { env } from '@/lib/env';

export function CalendlyEmbed({ inline = false }: { inline?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly && containerRef.current) {
        if (inline) {
          window.Calendly.initInlineWidget({
            url: env.NEXT_PUBLIC_CALENDLY_URL,
            parentElement: containerRef.current,
          });
        } else {
          window.Calendly.initPopupWidget({ url: env.NEXT_PUBLIC_CALENDLY_URL });
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.Calendly) {
        window.Calendly.destroy();
      }
      script.remove();
    };
  }, [inline]);

  return <div ref={containerRef} className={inline ? 'w-full' : 'hidden'} />;
}

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (options: { url: string }) => void;
      destroy: () => void;
    };
  }
}