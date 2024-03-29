import { config } from "./config";
import axios, { isAxiosError } from "axios";
import { TTagsRequest } from "./model";

const APP_TIMEOUT = 9_000;

export const mockData: TTagsRequest = {
  items: [
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 147,
      name: ".a",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 161,
      name: ".app",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 64,
      name: ".aspxauth",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 284,
      name: ".class-file",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 6,
      name: ".cod-file",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 3,
      name: ".csproj.in",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 2,
      name: ".ctf",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 161,
      name: ".d.ts",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 4,
      name: ".data",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 154,
      name: ".doc",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 64,
      name: ".emf",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 187,
      name: ".env",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 39,
      name: ".git-folder",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 6,
      name: ".git-info-grafts",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 2,
      name: ".gz",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 9,
      name: ".hgtags",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 73119,
      name: ".htaccess",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 532,
      name: ".htpasswd",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1,
      name: ".http-files",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 31,
      name: ".ico",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 132,
      name: ".lib",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 5,
      name: ".lrc",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 2,
      name: ".mobi",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 54,
      name: ".mov",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 337789,
      name: ".net",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 28,
      name: ".net-1.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 371,
      name: ".net-1.1",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 2576,
      name: ".net-2.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 113,
      name: ".net-3.0",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 5937,
      name: ".net-3.5",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 8822,
      name: ".net-4.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 17,
      name: ".net-4.0-beta-2",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 3785,
      name: ".net-4.5",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 139,
      name: ".net-4.5.2",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 443,
      name: ".net-4.6",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 278,
      name: ".net-4.6.1",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 161,
      name: ".net-4.6.2",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 112,
      name: ".net-4.7",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 60,
      name: ".net-4.7.1",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 325,
      name: ".net-4.7.2",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1136,
      name: ".net-4.8",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 3048,
      name: ".net-5",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 5886,
      name: ".net-6.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 1505,
      name: ".net-7.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 998,
      name: ".net-8.0",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 3361,
      name: ".net-assembly",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 32,
      name: ".net-attributes",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 3,
      name: ".net-bcl",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 147,
      name: ".net-cf-3.5",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 74,
      name: ".net-client-profile",
    },
  ],
  has_more: true,
  quota_max: 10000,
  quota_remaining: 9947,
};

export const api = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: APP_TIMEOUT,
});
