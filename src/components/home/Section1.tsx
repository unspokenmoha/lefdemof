'use client';

import React, { useState } from 'react';

interface Story {
  id: number;
  imageUrl: string;
  userName: string;
}

const stories: Story[] = [
  {
    id: 1,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0267/2587/5903/files/000055.jpg?v=1742074709',
    userName: 'story1',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/id/1012/400/700',
    userName: 'story2',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/id/1013/400/700',
    userName: 'story3',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/id/1014/400/700',
    userName: 'story4',
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/id/1015/400/700',
    userName: 'story5',
  },
];

const Section1 = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <>
      {/* ستوري دوائر */}
      <section className="flex space-x-4 overflow-x-auto px-4 pt-2 pb-1 bg-white border-b border-gray-200">
  {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="flex flex-col items-center focus:outline-none"
          >
            <div className="w-16 h-16 rounded-full border-4 border-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 cursor-pointer">
              <img
                src={story.imageUrl}
                alt={`${story.userName} story`}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <span className="text-xs mt-2 text-gray-700">{story.userName}</span>
          </button>
        ))}
      </section>

      {/* مودال عرض الصورة */}
      {activeStory && (
        <div
          onClick={() => setActiveStory(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md max-h-[90vh] w-full rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              aria-label="Close story"
            >
              &times;
            </button>
            <img
              src={activeStory.imageUrl}
              alt={`${activeStory.userName} story large`}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Section1;
