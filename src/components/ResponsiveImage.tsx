import React, { useState, useRef, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  loading = 'lazy',
  sizes,
  style,
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Set the initial source
    setImageSrc(src);
    setImageError(false);
    setImageLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(false);
    
    // Try fallback image if provided
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
    
    onError?.();
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc: string) => {
    if (!imageSrc.includes('/')) return imageSrc;
    
    const basePath = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
    const extension = imageSrc.substring(imageSrc.lastIndexOf('.'));
    
    return `${imageSrc} 1x, ${basePath}-2x${extension} 2x`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={imageSrc}
        srcSet={generateSrcSet(imageSrc)}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={style}
      />
      
      {/* Error fallback */}
      {imageError && !imageLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;