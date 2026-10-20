/** The invite line, then email, the résumé (its PDF on the résumé itself), LinkedIn, GitHub. */
export const ContactLinks = ({ pdf = false }: { pdf?: boolean }) => (
  <>
    <p className="invite">Building something in fintech? I&apos;m happy to chat.</p>
    <ul className="contact" aria-label="Contact">
      <li className="email">
        <a href="mailto:fabricio@fabriciopirini.com">
          {/* Material Icons "mail" (filled), Apache 2.0. */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          fabricio@fabriciopirini.com
        </a>
      </li>
      <li>{pdf ? <a href="/api/resume">Download PDF</a> : <a href="/resume">Résumé</a>}</li>
      <li>
        <a href="https://www.linkedin.com/in/fabriciopirini/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/fabriciopirini">GitHub</a>
      </li>
    </ul>
  </>
)
