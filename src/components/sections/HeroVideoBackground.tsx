"use client";

import { useEffect, useRef } from "react";
import type Hls from "hls.js";

const DEFAULT_MUX_PLAYBACK_ID = "yZvXt02jfhfKlNvgHStDUzYYoSVuTP6JeQ0102UYf01dYfA";

export function HeroVideoBackground({
  playbackId = DEFAULT_MUX_PLAYBACK_ID,
  overlayOpacity = 0.35,
}: {
  playbackId?: string;
  /** Opacity (0-1) of the white wash placed over the video for text contrast. */
  overlayOpacity?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = `https://stream.mux.com/${playbackId}.m3u8`;
    let hls: Hls | undefined;
    let cancelled = false;

    // Prefer hls.js (MSE-based) wherever it's supported — this covers
    // Chrome, Firefox, and Edge. canPlayType() for HLS mime types is
    // unreliable (Chrome can report "maybe" while being unable to
    // actually play an .m3u8 via a native <video src>), so it's only
    // used as a last-resort fallback for browsers without MSE support
    // (i.e. real Safari / iOS).
    import("hls.js").then(({ default: HlsClass }) => {
      if (cancelled) return;
      if (HlsClass.isSupported()) {
        hls = new HlsClass();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [playbackId]);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-forest-900">
      <video
        ref={videoRef}
        className="size-full object-cover grayscale brightness-[0.92]"
        poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Light wash to lift text contrast without hiding the footage */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})` }}
      />
    </div>
  );
}
