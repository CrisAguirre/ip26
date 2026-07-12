export interface Experience {
  id: number;
  title: string;
  origin: string;
  scope: string;
  methodology: string;
  summary: string;
  fullDescription: string;
  results: string[];
  keySuccess: string[];
  institution: string;
  year: string;
  reference: string;
  color: string;
  colorSecondary: string;
  icon: string;
  theme: 'space' | 'puzzle' | 'game' | 'gear';
  gradient: string;
}
