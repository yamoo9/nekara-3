export interface AvatarProps {
  as?: string | React.ComponentType<any>;
  loading?: boolean;
  src?: string;
  alt?: string;
  name?: string;
  $size?: number | string;
  [key:string]: any;
}

export interface FaceProps {
  src?: string;
  alt?: string;
  $size?: number | string;
}