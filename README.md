# GuardianAgenticDashboard

A starter dashboard project with a FastAPI backend and a React + TypeScript
frontend powered by Vite.

## Project structure

```text
backend/
  app/
    main.py
  requirements.txt
frontend/
  src/
    App.tsx
    main.tsx
    styles.css
  index.html
  package.json
  tsconfig.json
  vite.config.ts
```

## Run locally

Start the backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API runs at `http://localhost:8000`; its interactive docs are at
`http://localhost:8000/docs`.

Start the frontend in a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite serves the frontend at `http://localhost:5173`.