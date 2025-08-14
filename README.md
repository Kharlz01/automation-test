# 🚀 Automation Testing Suite

Suite de pruebas automatizadas para APIs (REST) y pruebas E2E, diseñada para demostrar mis conocimientos en automatizacion QA.
La prueba consta de tres numerales 

## 📌 Características Clave

- **Pruebas API**: Validación funcional y de performance (k6)
- **Pruebas E2E**: Flujos UI completos (Playwright)
- **Métricas Clave**: Latencia, throughput, tasa de errores
- **Integrable en CI/CD**: Ejecución en pipelines

## 🛠 Tecnologías Utilizadas

| Área           | Tecnologías                                                                 |
|----------------|----------------------------------------------------------------------------|
| API Testing    | ![k6](https://img.shields.io/badge/k6-FF6C37?logo=k6&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| E2E Testing    | ![Playwright](https://img.shields.io/badge/Playwright-45BA4B?logo=playwright&logoColor=white) |
| Validación     | ![JSON Schema](https://img.shields.io/badge/JSON_Schema-000000?logo=json&logoColor=white) |
| CI/CD Ready    | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white) |

## 🏗 Estructura del Proyecto

automation-test/
├── 📂 schemas/ # Esquemas de validación  
│ ├── jsonplaceholder.schemas.js  
│ └── reqres.schemas.js  
├── 📂 test/ # Directorio con los tres numerales  
│ ├── 📂 api/ # Automatización de Pruebas de API  
│ │ ├── 📂 jsonplaceholder/ # Casos de prueba (JSONPlaceholder API)  
│ │ │ ├── negative.test.js  
│ │ │ ├── performance.test.js  
│ │ │ ├── posts.test.js  
│ │ │ └── relations.test.js  
│ │ └── 📂 reqres/ # Casos de prueba (ReqRes API)  
│ │   ├── auth.test.js  
│ │   ├── pagination.test.js  
│ │   ├── rate_limits.test.js  
│ │   └── users.test.js  
│ ├── 📂 e2e/ # Automatizacion de Pruebas E2E  
│ │ ├── 📂 fixtures/ # Directorio para pruebas de carga (/upload)  
│ │ │ └── example.txt  
│ │ ├── 📂 pages/ # Paginacion para pruebas visuales.  
│ │ │ ├── dynamicControlsPage.js  
│ │ │ ├── loginPage.js  
│ │ │ └── uploadPage.js  
│ │ └── 📂 specs/ # Casos de prueba (The Internet - Herokuapp)  
│ │   ├── 📂 critical/ # Casos Criticos  
│ │   │  ├── drag_drop_critical.spec.js  
│ │   │  ├── dynamic_critical.spec.js  
│ │   │  ├── login_critical.spec.js  
│ │   │  └── upload_critical.spec.js  
│ │   ├── alert.test.js  
│ │   ├── auth.test.js  
│ │   ├── drag_drop.test.js  
│ │   ├── dynamic_elements.js  
│ │   ├── example.spec.js  
│ │   ├── auth.test.js  
│ │   ├── file_operations.test.js  
│ │   ├── forms.test.js  
│ │   ├── hovers.test.js  
│ │   └── windows_test.js  
│ └── 📂 performance/ # Pruebas de Performance  
│   ├── jsonplaceholder_test.js  
│   ├── reqres_test.js  
│   └── petstore_test.js  
├── 📜 package.json # Dependencias y scripts  
└── 📜 README.md # Documentacion  

## 🚀 Cómo Ejecutar

### Prerrequisitos
- Node.js v18+
- k6 (opcional: Docker)
- Playwright (`npm install playwright`)

### 🔄 Instalación
```
git clone https://github.com/Kharlz01/automation-test.git
cd automation-test
npm install
npx playwright install
```

## 🧪 Ejecutar Pruebas

El repositorio cuenta con scripts para ejecucion rapida de las diferentes pruebas

### Terminal

- **Pruebas API**: npm run test:api
- **Pruebas E2E**: npm run test:e2e
- **Pruebas Performance**: npm run test:perf
- **Tests completo (Todas las pruebas anteriores)**: npm run test:all
- **Tests específicos (ej: login)**: npx playwright test e2e/specs/auth.spec.js --headed

## Docker compose

- **Pruebas API**: npm run docker:api
- **Pruebas E2E**: npm run docker:e2e
- **Pruebas Performance**: npm run docker:perf
- **Tests completo (Todas las pruebas anteriores)**: npm run docker:all

## 📞 Contacto

**Carlos Andrés Agudelo M.**  

📧 **Correo electrónico**: [kharlz.agudelo@hotmail.com](kharlz.agudelo@hotmail.com)  
🔗 **LinkedIn**: [linkedin.com/in/kharlz](https://www.linkedin.com/in/kharlz)  
🐙 **GitHub**: [@Kharlz01](https://github.com/Kharlz01)  

💬 **Soporte técnico**:  
Para reportar bugs o solicitar características, por favor abre un [issue](https://github.com/Kharlz01/automation-test/issues) en el repositorio.