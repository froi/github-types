import * as generics from './generics';

export interface User extends generics.GitHubEntity {
  type: generics.GitHubEntityType.user;
  hireable: boolean;
  bio: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  gravatar_id: string;
  received_events_url: string;
  site_admin: boolean;
  two_factor_authentication: boolean;
}
