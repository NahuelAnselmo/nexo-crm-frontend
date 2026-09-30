import {
  activities,
  contacts,
  metrics,
  pipeline,
  type Opportunity,
} from "@/data/demo-crm";

const navigation = [
  { href: "#resumen", label: "Resumen", icon: "⌂" },
  { href: "#pipeline", label: "Pipeline", icon: "◇" },
  { href: "#contactos", label: "Contactos", icon: "◎" },
  { href: "#actividades", label: "Actividades", icon: "◷" },
];

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-topline">
        <span
          className={`temperature temperature-${opportunity.temperature.toLowerCase()}`}
        >
          {opportunity.temperature}
        </span>
        <span aria-label="Valor estimado">{opportunity.value}</span>
      </div>
      <h3>{opportunity.title}</h3>
      <p className="opportunity-company">{opportunity.company}</p>
      <div className="opportunity-contact">
        <span className="avatar avatar-small" aria-hidden="true">
          {opportunity.initials}
        </span>
        <span>{opportunity.contact}</span>
      </div>
      <p className="next-action">
        <span aria-hidden="true">↳</span>
        {opportunity.nextAction}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="crm-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <aside className="sidebar">
        <a className="brand" href="#resumen" aria-label="Nexo CRM, inicio">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span>
            <strong>Nexo</strong>
            <small>CRM</small>
          </span>
        </a>
        <div className="workspace-switcher">
          <span className="workspace-logo" aria-hidden="true">
            NA
          </span>
          <div>
            <strong>Nexo Agency</strong>
            <span>Espacio comercial</span>
          </div>
          <span aria-hidden="true">⌄</span>
        </div>
        <nav aria-label="Navegación del CRM">
          <p className="sidebar-label">Espacio de trabajo</p>
          <ul>
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a
                  className={index === 0 ? "active" : undefined}
                  href={item.href}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                  {item.label === "Actividades" && <b>8</b>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-insight">
          <span aria-hidden="true">✦</span>
          <p>Tu pipeline creció</p>
          <strong>12,5% este mes</strong>
          <small>Hay 3 oportunidades listas para seguimiento.</small>
        </div>
        <div className="sidebar-profile">
          <span className="avatar" aria-hidden="true">
            NA
          </span>
          <div>
            <strong>Nahuel Anselmo</strong>
            <small>Propietario</small>
          </div>
          <span aria-hidden="true">•••</span>
        </div>
      </aside>

      <section className="crm-content" id="contenido" tabIndex={-1}>
        <header className="topbar">
          <div>
            <p className="eyebrow">Miércoles, 30 de septiembre</p>
            <h1>Buen día, Nahuel.</h1>
            <p>Este es el pulso comercial de tu equipo.</p>
          </div>
          <div className="topbar-actions">
            <label className="search-field">
              <span className="sr-only">Buscar en el CRM</span>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Buscar contactos u oportunidades"
              />
              <kbd>⌘ K</kbd>
            </label>
            <span className="demo-pill">
              <i aria-hidden="true" /> Datos de demostración
            </span>
          </div>
        </header>

        <div className="mobile-nav" aria-label="Secciones principales">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <section id="resumen" aria-labelledby="overview-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Vista general</p>
              <h2 id="overview-title">Resumen comercial</h2>
            </div>
            <p>Actualizado hace menos de un minuto</p>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-label">
                  <span>{metric.label}</span>
                  <i aria-hidden="true">↗</i>
                </div>
                <strong>{metric.value}</strong>
                <p>
                  <span data-trend={metric.trend}>{metric.change}</span>{" "}
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="dashboard-grid">
          <section
            className="pipeline-section"
            id="pipeline"
            aria-labelledby="pipeline-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pipeline</p>
                <h2 id="pipeline-title">Oportunidades abiertas</h2>
              </div>
              <div className="pipeline-summary">
                <span>11 visibles</span>
                <strong>$18,4 M</strong>
              </div>
            </div>
            <div
              className="pipeline-board"
              tabIndex={0}
              aria-label="Pipeline comercial. Desplazá horizontalmente para ver todas las etapas."
            >
              {pipeline.map((stage) => (
                <section
                  className="pipeline-column"
                  aria-labelledby={`stage-${stage.id}`}
                  key={stage.id}
                >
                  <header
                    style={
                      { "--stage-color": stage.color } as React.CSSProperties
                    }
                  >
                    <div>
                      <span className="stage-dot" aria-hidden="true" />
                      <h3 id={`stage-${stage.id}`}>{stage.name}</h3>
                      <b>{stage.opportunities.length}</b>
                    </div>
                    <span>{stage.total}</span>
                  </header>
                  <div className="opportunity-list">
                    {stage.opportunities.map((opportunity) => (
                      <OpportunityCard
                        opportunity={opportunity}
                        key={opportunity.id}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <aside
            className="activity-panel"
            id="actividades"
            aria-labelledby="activity-title"
          >
            <div className="section-heading compact">
              <div>
                <p className="eyebrow">Hoy</p>
                <h2 id="activity-title">Próximas actividades</h2>
              </div>
              <span className="count-badge">3</span>
            </div>
            <ol className="activity-list">
              {activities.map((activity) => (
                <li key={`${activity.time}-${activity.title}`}>
                  <time>{activity.time}</time>
                  <span
                    className={`activity-dot ${activity.tone}`}
                    aria-hidden="true"
                  />
                  <div>
                    <span>{activity.type}</span>
                    <strong>{activity.title}</strong>
                    <small>{activity.detail}</small>
                  </div>
                </li>
              ))}
            </ol>
            <a className="panel-link" href="#contactos">
              Ver agenda completa <span aria-hidden="true">→</span>
            </a>
            <div className="goal-card">
              <div>
                <span>Objetivo de septiembre</span>
                <strong>78%</strong>
              </div>
              <div
                className="goal-track"
                role="progressbar"
                aria-label="Objetivo mensual completado"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={78}
              >
                <span />
              </div>
              <p>$7,8 M de $10 M cerrados</p>
            </div>
          </aside>
        </div>

        <section
          className="contacts-section"
          id="contactos"
          aria-labelledby="contacts-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Relaciones</p>
              <h2 id="contacts-title">Contactos recientes</h2>
            </div>
            <a className="panel-link" href="#pipeline">
              Ver todos <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Contacto</th>
                  <th>Empresa</th>
                  <th>Responsable</th>
                  <th>Último contacto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.name}>
                    <td>
                      <span className="avatar avatar-small" aria-hidden="true">
                        {contact.initials}
                      </span>
                      <span>
                        <strong>{contact.name}</strong>
                        <small>{contact.role}</small>
                      </span>
                    </td>
                    <td>{contact.company}</td>
                    <td>{contact.owner}</td>
                    <td>{contact.lastContact}</td>
                    <td>
                      <span className="contact-status">{contact.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
