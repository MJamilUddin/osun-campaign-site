import Image from "next/image";
import { OSUN_STATE_IMAGES } from "@/lib/image-urls";

interface OsunImageProps {
  query: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function OsunImage({ query, alt, width = 400, height = 300, className = "", priority = false }: OsunImageProps) {
  // Get the appropriate pre-selected image URL based on the query context
  const getImageUrl = (query: string): string => {
    const queryLower = query.toLowerCase();

    if (queryLower.includes('landscape') || queryLower.includes('osun state')) {
      return OSUN_STATE_IMAGES.landscape;
    } else if (queryLower.includes('culture') || queryLower.includes('heritage') || queryLower.includes('yoruba')) {
      return OSUN_STATE_IMAGES.culture;
    } else if (queryLower.includes('agriculture') || queryLower.includes('farm') || queryLower.includes('nigerian')) {
      return OSUN_STATE_IMAGES.agriculture;
    } else {
      return OSUN_STATE_IMAGES.heritage;
    }
  };

  const imageUrl = getImageUrl(query);

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
