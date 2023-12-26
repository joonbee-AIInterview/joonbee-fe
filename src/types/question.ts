export type CategoryName =
  | ''
  | 'fe'
  | 'be'
  | 'language'
  | 'cs'
  | 'mobile'
  | 'etc'
  | '세부 카테고리';
export type SubcategoryName =
  | '세부 카테고리'
  | 'web'
  | 'network'
  | 'react'
  | 'html/css'
  | 'next'
  | 'vue'
  | 'svelte'
  | 'db'
  | 'spring_framework'
  | 'nest'
  | 'node'
  | 'msa'
  | 'rabbitmq'
  | 'redis'
  | 'java'
  | 'kotlin'
  | 'typescript'
  | 'javascript'
  | 'delphi'
  | 'cC++'
  | 'c#'
  | 'golang'
  | 'swift'
  | 'objective-c'
  | 'aos'
  | 'ios'
  | 'flutter'
  | 'reactNative'
  | 'git'
  | 'team'
  | 'project'
  | 'datastructureAlgorithms'
  | 'operatingSystem'
  | 'virtualMachine'
  | 'docker'
  | 'computerArchitecture';

export type QuestionCategory = {
  category: CategoryName;
  subcategory: SubcategoryName[];
};

export type QustionItem = {
  questionId: string;
  categoryId: number;
  questionContent: string;
  subcategoryName: string;
};
