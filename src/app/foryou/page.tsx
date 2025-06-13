// src/pages/foryou.tsx

'use client';

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import MobileNavigationBar from "../../components/mobile-navigation/MobileNavigationBar";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const VideoItem = ({ video }: { video: { videoUrl: string; title: string } }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) setShouldLoad(true);
  }, [inView]);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid && inView && shouldLoad) {
      vid.play().catch(() => {});
    } else if (vid) {
      vid.pause();
    }
  }, [inView, shouldLoad]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full snap-start overflow-hidden bg-black"
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={video.videoUrl}
          muted
          loop
          playsInline
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          className="h-full w-full object-cover"
        />
      )}

      {isLoading && shouldLoad && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}

      <div className="absolute bottom-20 left-4 z-10 text-white w-3/4">
        <h2 className="text-lg font-semibold">{video.title}</h2>
        <p className="text-sm opacity-70">وصف للمنتج أو الفيديو</p>
      </div>

      <div className="absolute bottom-24 right-4 z-10 flex flex-col items-center gap-5">
        <button className="text-white">
          <Heart size={28} />
        </button>
        <button className="text-white">
          <MessageCircle size={28} />
        </button>
        <button className="text-white">
          <Share2 size={28} />
        </button>
      </div>
    </div>
  );
};

export default function ForYouPage() {
  const videoList = [
    {
      id: 1,
      title: "منتج 1",
      videoUrl: "/videos/video1.mp4",
    },
    {
      id: 2,
      title: "منتج 2",
      videoUrl: "/videos/video2.mp4",
    },
    {
      id: 3,
      title: "منتج 3",
      videoUrl: "/videos/video3.mp4",
    },
  ];

 return (
  <div className="relative h-screen overflow-hidden flex flex-col">

    {/* فيديوهات مع خاصية التمرير */}
    <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
      {videoList.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>

    {/* Spacer بحجم شريط التنقل للحفاظ على عرض الفيديو كامل */}
    <div className="h-20 md:hidden" />

    {/* شريط التنقل (ثابت أسفل الشاشة) */}
    <MobileNavigationBar />
  </div>
);

}
