# Infrastructure Layer

Contiene las implementaciones concretas de los puertos definidos en el dominio.

Ejemplos:

- Repositorios concretos (`UserRepositoryPostgres`).
- Servicios externos (PokéAPI, DBZ API, AWS S3).
- Adaptadores técnicos (logger, mailer, cache).

📌 Importante:

- Aquí va todo lo que tenga dependencias externas.
- El `health.service.ts` es un ejemplo: chequea estado de dependencias.
