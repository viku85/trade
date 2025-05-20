export interface CreateRuleDto {
  description: string;
  type: string;
  userId: string;
}

export interface UpdateRuleDto {
  description?: string;
  type?: string;
  userId?: string;
}
