import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  banData: z.optional(
    z.object({
      message: z.string(),
      expires: z.number()
    })
  ),
  banned: z.oboolean(),
  bio: z.string().max(500, {
    message: "Bio too long"
  }),
  profile_icon: z.string().url(),
  role: z.enum([
    "admin",
    "moderator",
    "helper",
    "verified",
    "nerd",
    "donator",
    "default"
  ]),
  username: z.string().max(32, {
    message: "Username too long"
  })
});

export const projectSchema = z.object({
  ID: z.onumber(),
  author: z.number(),
  body: z.ostring(),
  category: z.ostring(),
  description: z.ostring(),
  icon: z.optional(z.string().url()),
  mod_message: z.string().nullish(),
  status: z.optional(
    z.enum([
      "unpublished",
      "in_queue",
      "live",
      "draft",
      "disabled",
      "deleted",
      "ghost",
      "publish_queue",
      "review_queue"
    ])
  ),
  title: z.string(),
  type: z.enum(["datapack", "url"]),
  url: z
    .string()
    .trim()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Invalid slug"
    }), // checks for valid slug
  latest_version: z.optional(
    z.object({
      name: z.string(),
      description: z.string(),
      minecraft_versions: z.string(),
      version_code: z.string()
    })
  )
});

export const notificationSchema = z.object({
  id: z.number(),
  description: z.ostring(),
  message: z.string(),
  read: z.boolean(),
  type: z.enum(["announcement", "ban", "warn", "default", "rainbow"])
});

export const roleSchema = z.object({
  name: z.string(),
  color: z.optional(
    z.string().regex(/#([a-f]|[A-F]|[0-9]){3,6}/, {
      message: "Not a valid colour"
    })
  ),
  verified: z.boolean(),
  permissions: z.array(
    z.enum([
      "BAN_USER",
      "WARN_USER",
      "EDIT_USER",
      "DELETE_CONTENT",
      "USE_CONSOLE"
    ])
  )
});

export const versionSchema = z.object({
  name: z.string(),
  description: z.string(),
  minecraft_versions: z.string(),
  primary_download: z.string(),
  resource_pack_download: z.ostring(),
  version_code: z.string()
});

export type User = z.infer<typeof userSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Notif = z.infer<typeof notificationSchema>;
export type Role = z.infer<typeof roleSchema>;
export type Version = z.infer<typeof versionSchema>;