/** The invite line, then email, the résumé (its PDF on the résumé itself), LinkedIn, GitHub. */
export const ContactLinks = ({ pdf = false }: { pdf?: boolean }) => (
  <>
    <p className="invite">Building something in fintech? I&apos;m happy to chat.</p>
    <ul className="contact" aria-label="Contact">
      <li className="email">
        <a href="mailto:fabricio@fabriciopirini.com">fabricio@fabriciopirini.com</a>
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
