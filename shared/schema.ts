import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const usuarios = pgTable("usuarios", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nome: text("nome").notNull(),
  nomeUsuario: text("nome_usuario").notNull().unique(),
  email: text("email").notNull().unique(),
});

export const insertUsuarioSchema = createInsertSchema(usuarios).omit({
  id: true,
}).extend({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  nomeUsuario: z.string().min(3, "Nome de usuário deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
});

export const loginUsuarioSchema = z.object({
  nomeUsuario: z.string().min(1, "Nome de usuário é obrigatório"),
  email: z.string().email("Email inválido"),
});

export type InsertUsuario = z.infer<typeof insertUsuarioSchema>;
export type LoginUsuario = z.infer<typeof loginUsuarioSchema>;
export type Usuario = typeof usuarios.$inferSelect;
