'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [buttonColor, setButtonColor] = useState<string>('#ffffff');
  const [, setTextColor] = useState<string>('#1e3a8a');

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    video.playbackRate = 0.5;
    const ctx = canvas.getContext('2d');

    const extractColor = () => {
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      let r = 0, g = 0, b = 0;
      const pixelCount = data.length / 4;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      setButtonColor(`rgb(${r},${g},${b})`);
      setTextColor(luminance > 150 ? '#1e3a8a' : '#ffffff');
    };

    const handleLoaded = () => {
      extractColor();
      const interval = setInterval(extractColor, 2000);
      return () => clearInterval(interval);
    };

    video.addEventListener('loadeddata', handleLoaded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
    };
  }, []);

  return (
    <section className="relative text-white min-h-screen flex flex-col overflow-hidden">
      <canvas ref={canvasRef} width={64} height={36} className="hidden" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/80 z-10" />

      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <motion.div
        className="flex flex-1 items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center py-16">
          <div className="lg:w-2/5 text-center lg:text-left">
            <span className="w-20 h-1 bg-white inline-block mb-8" />
            <h1 className="text-3xl sm:text-5xl font-medium leading-tight">
              Smart. Scalable. Local.
              <span className="block text-4xl sm:text-6xl text-white/90 font-black uppercase">
                Believe in Technology.
              </span>
            </h1>
            <p className="mt-4 text-white text-xl sm:text-2xl">
              We empower African businesses with affordable ERP systems, payment automation, and digital integration.
            </p>

            <div className="flex justify-center lg:justify-start mt-10 space-x-4">
              <Link
                href="/contact"
                className="group relative inline-block font-semibold  overflow-hidden border-2"
                style={{ borderColor: buttonColor }}
              >
                <div
                  className="relative z-50 flex items-center py-3 px-5  transition duration-200"
                  style={{ backgroundColor: 'transparent', color: buttonColor }}
                >
                  <p className="mr-2 uppercase">Let&apos;s Talk</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:w-3/5 mb-12 lg:mb-0 flex justify-center relative group" />
        </div>
      </motion.div>

      <div className="container arrowContainerP">
        <div className="arrowSection">
          <div className="arrowContainer slideDownDiv">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
