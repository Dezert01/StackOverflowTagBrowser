export type TTag = {
  has_anonymous: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export type TTagsRequest = {
  items: TTag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};
