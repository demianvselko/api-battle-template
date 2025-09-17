# Application Layer

Contiene la **lógica de aplicación y casos de uso**.  
Orquesta la ejecución del dominio y coordina con los puertos (repositorios, servicios externos).

Ejemplos:

- `RegisterUserUseCase`
- `StartBattleUseCase`
- `GetCharacterStatsUseCase`

📌 Importante:

- Depende de **domain**, pero nunca de **infrastructure** ni **interfaces**.
- No contiene lógica de negocio compleja (eso es del dominio).
