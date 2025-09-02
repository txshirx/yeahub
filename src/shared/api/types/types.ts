export type Specialization = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
};

export type Skills= {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: 'public' | 'private' | string; 
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: Specialization[];
  questionSkills: Skills[];
  createdAt: string; 
  updatedAt: string;
}

export type QuestionsResponse = {
  data: Question[],
  page: number,
  limit: number,
  total: number
}

export type SpecializationsResponse = {
  data: Specialization[],
  page: number,
  limit: number,
  total: number
}

export type SkillsResponse = {
  data: Skills[],
  page: number,
  limit: number,
  total: number
}

export type RateType = number[]

export type ComplexityType = number[]

export type FilterType = "specializations" | "skills" | "complexity" | "rate";

export type ParamsType = Partial<{
  specializations: number[],
  skills: number[],
  complexity: number[],
  rate: number[],
  keywords: string[],
  page: number,
}>