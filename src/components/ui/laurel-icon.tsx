'use client';

import { GiFeather } from 'react-icons/gi';
import { useEffect, useState } from 'react';

interface FeatherColumnProps {
  side: 'left' | 'right';
  spacing?: number;
}

export const FeatherColumn: React.FC<FeatherColumnProps> = ({
  side,
  spacing = 150
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(3000);
  // Removed unused windowHeight state

  useEffect(() => {
    // Update dimensions
    const updateDimensions = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial updates
    updateDimensions();
    handleScroll();

    // Trigger load animation after a brief delay for content to settle
    const loadTimer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(loadTimer);
    };
  }, []);

  const featherCount = Math.ceil(documentHeight / spacing);

  return (
    <div className={`absolute ${side}-0 top-0 w-0 z-10 pointer-events-none md:block hidden`} style={{ height: documentHeight }}>
      <div className={`relative ${side === 'right' ? 'right-0' : 'left-0'}`}>
        {Array.from({ length: featherCount }).map((_, index) => {
          const featherPosition = index * spacing;
          const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
          
          // Calculate the center of the current viewport
          const viewportCenter = scrollY + windowHeight / 2;
          
          // Calculate visibility based on how close the feather is to the viewport center
          // Increased viewport range for better visibility
          const distanceFromCenter = Math.abs(featherPosition - viewportCenter);
          const maxDistance = windowHeight * 1.2; // Increased from 0.5 to 1.2 (2.4x larger viewport)
          const visibility = Math.max(0, 1 - distanceFromCenter / maxDistance);
          
          // Interpolate properties based on visibility
          const startOffset = -15;
          const endOffset = 0;
          const currentOffset = startOffset + (endOffset - startOffset) * visibility;
          
          const startScale = 0.3;
          const endScale = 1;
          const currentScale = startScale + (endScale - startScale) * visibility;

          // Calculate load animation for hero section (smoother, more delightful)
          const isInHeroSection = featherPosition < windowHeight * 1.5;
          
          // Much more gradual timing for graceful entrance
          const heroDelay = 1200 + (index * 400); // Slower, more graceful delays
          const loadDelay = heroDelay;
          
          // Longer animation duration for graceful float
          const baseDuration = 2800;
          const durationVariation = (index % 3) * 300; // Variation per feather
          const animationDuration = baseDuration + durationVariation;
          
          // Determine if this feather should animate on load
          const shouldAnimateOnLoad = isInHeroSection;

          return (
            <div
              key={index}
              className={`absolute transition-all ${
                hasLoaded ? 'duration-200 ease-out' : ''
              }`}
              style={{
                top: `${featherPosition}px`,
                [side === 'right' ? 'right' : 'left']: (hasLoaded && shouldAnimateOnLoad) || (!shouldAnimateOnLoad)
                  ? `${currentOffset}px`
                  : '-80px',
                opacity: (hasLoaded && shouldAnimateOnLoad) || (!shouldAnimateOnLoad)
                  ? visibility 
                  : 0,
                transform: `scale(${(hasLoaded && shouldAnimateOnLoad) || (!shouldAnimateOnLoad) ? currentScale : 0.4}) ${
                  side === 'right'
                    ? 'rotate(-20deg) scaleX(-1)'
                    : 'rotate(20deg)'
                }`,
                transitionProperty: hasLoaded || !shouldAnimateOnLoad ? 'all' : 'all',
                transitionDuration: hasLoaded 
                  ? '200ms' 
                  : (shouldAnimateOnLoad ? `${animationDuration}ms` : '0ms'),
                transitionTimingFunction: hasLoaded 
                  ? 'ease-out' 
                  : (shouldAnimateOnLoad ? 'cubic-bezier(0.16, 0.84, 0.44, 1)' : 'ease'),
                transitionDelay: hasLoaded ? '0ms' : (shouldAnimateOnLoad ? `${loadDelay}ms` : '0ms'),
              }}
            >
            <GiFeather
              size={42}
              className="text-[#B8860B]"
              style={{
                filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
              }}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
};
