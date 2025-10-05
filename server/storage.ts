import { type Usuario, type InsertUsuario } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUsuario(id: string): Promise<Usuario | undefined>;
  getUsuarioByUsername(nomeUsuario: string): Promise<Usuario | undefined>;
  getUsuarioByEmail(email: string): Promise<Usuario | undefined>;
  createUsuario(usuario: InsertUsuario): Promise<Usuario>;
}

export class MemStorage implements IStorage {
  private usuarios: Map<string, Usuario>;

  constructor() {
    this.usuarios = new Map();
  }

  async getUsuario(id: string): Promise<Usuario | undefined> {
    return this.usuarios.get(id);
  }

  async getUsuarioByUsername(nomeUsuario: string): Promise<Usuario | undefined> {
    return Array.from(this.usuarios.values()).find(
      (usuario) => usuario.nomeUsuario === nomeUsuario,
    );
  }

  async getUsuarioByEmail(email: string): Promise<Usuario | undefined> {
    return Array.from(this.usuarios.values()).find(
      (usuario) => usuario.email === email,
    );
  }

  async createUsuario(insertUsuario: InsertUsuario): Promise<Usuario> {
    const id = randomUUID();
    const usuario: Usuario = { ...insertUsuario, id };
    this.usuarios.set(id, usuario);
    return usuario;
  }
}

export const storage = new MemStorage();
