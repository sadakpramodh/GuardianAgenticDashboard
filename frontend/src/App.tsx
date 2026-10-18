function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand-mark" aria-hidden="true">
          G
        </div>
        <div>
          <p className="eyebrow">GUARDIAN</p>
          <h1>Agentic Dashboard</h1>
        </div>
      </header>

      <section className="welcome-card">
        <p className="eyebrow">WORKSPACE</p>
        <h2>Your dashboard is ready to take shape.</h2>
        <p>
          This starter interface is connected to a FastAPI backend. Add your
          agents, activity, and insights here.
        </p>
      </section>
    </main>
  );
}

export default App;
