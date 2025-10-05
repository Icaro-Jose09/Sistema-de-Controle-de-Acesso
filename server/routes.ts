import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUsuarioSchema, loginUsuarioSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/usuarios", async (req, res) => {
    try {
      const result = insertUsuarioSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: "Dados inválidos",
          errors: fromError(result.error).toString(),
        });
      }

      const usuarioExistente = await storage.getUsuarioByUsername(result.data.nomeUsuario);
      if (usuarioExistente) {
        return res.status(400).json({
          message: "Nome de usuário já está em uso",
        });
      }

      const emailExistente = await storage.getUsuarioByEmail(result.data.email);
      if (emailExistente) {
        return res.status(400).json({
          message: "Email já está cadastrado",
        });
      }

      const usuario = await storage.createUsuario(result.data);
      return res.status(201).json(usuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const result = loginUsuarioSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: "Dados inválidos",
          errors: fromError(result.error).toString(),
        });
      }

      const usuario = await storage.getUsuarioByUsername(result.data.nomeUsuario);
      
      if (!usuario || usuario.email !== result.data.email) {
        return res.status(401).json({
          message: "Nome de usuário ou email incorretos",
        });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return res.status(500).json({ message: "Erro ao fazer login" });
    }
  });

  app.get("/api/usuarios/:id", async (req, res) => {
    try {
      const usuario = await storage.getUsuario(req.params.id);
      
      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      return res.status(500).json({ message: "Erro ao buscar usuário" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
