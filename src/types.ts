export interface ImageProps {
  src: string;
  height: number;
  width: number;
  alt: string;
  prioty?: boolean;
  className: string;
}

export interface blogsAndArtclesProps {
  id: number;
  title: string;
  slug: string;
  excerpt:string;
  author: string;
  date: string;
  category?: string;
  thumbnail: string;
  content:string;
}
