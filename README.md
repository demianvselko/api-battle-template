# 👨‍💻 Guía de Desarrollo – API Battle Template

Este documento explica **cómo trabajar en el proyecto en local** durante las primeras etapas de desarrollo, antes de usar Docker en serio.

---

## 🚀 Primeros pasos

### 1. Instalar dependencias

Clona el repositorio y ejecuta:

```bash
npm install

```

Esto instalará todas las dependencias y configurará Husky para los hooks de Git.

### 2. Levantar el servidor en modo desarrollo

Para iniciar el servidor NestJS con hot reload:

```bash
npm run start:dev
```

### 3. Probar el endpoint /health

Con el servidor corriendo:

```bash
curl http://localhost:3000/health
```
