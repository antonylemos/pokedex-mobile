type TypographyType = 'title' | 'text';
type TypographyWeight = 'bold' | 'medium' | 'regular';
type TypographySize = 'sm' | 'md' | 'lg' | 'xlg';

export interface ITypography {
  type?: TypographyType;
  weight?: TypographyWeight;
  size?: TypographySize;
  color?: string;
}
