# PromptCrafter Pro · Vercel Drop

Premium local-first intent compiler and AI execution specification studio.

## Deploy

1. Extract this ZIP.
2. Upload the extracted folder to a Git repository.
3. Import the repository into Vercel.
4. Vercel runs `npm run build` and publishes `dist`.

No environment variables, provider keys, databases, server functions, or authentication services are required.

## Local validation

```bash
npm test
npm run build
npm run dev
```

Open `http://localhost:4173`.

## Product boundary
Selecting OpenAI, Gemini, Grok, or Grok API compiles an instruction artifact for that target. The website does not connect to or execute those providers.
