# Domain Layer

Contiene la **lógica de negocio pura**.  
Aquí viven:

- **Entidades** (ej. `User`, `Character`, `Battle`).
- **Value Objects** (ej. `Email`, `Cuit`, `HealthPoints`).
- **Contratos/Interfaces** para repositorios (`UserRepository`).

📌 Importante:

- Nada aquí debe depender de NestJS ni de librerías externas.
- Esta capa no conoce infraestructura ni transporte HTTP.
