import {
  defineCollections,
  defineConfig,
  defineDocs
} from "../chunk-GBMFGEC7.js";
import {
  getDefaultMDXOptions
} from "../chunk-GYWPPGFD.js";
import {
  remarkInclude
} from "../chunk-IGXZS2W6.js";
import "../chunk-VWJKRQZR.js";

// src/config/zod-3.ts
import { z } from "zod/v3";
var metaSchema = z.object({
  title: z.string().optional(),
  pages: z.array(z.string()).optional(),
  description: z.string().optional(),
  root: z.boolean().optional(),
  defaultOpen: z.boolean().optional(),
  icon: z.string().optional()
});
var frontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  full: z.boolean().optional(),
  // Fumadocs OpenAPI generated
  _openapi: z.object({}).passthrough().optional()
});
export {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  getDefaultMDXOptions,
  metaSchema,
  remarkInclude
};
