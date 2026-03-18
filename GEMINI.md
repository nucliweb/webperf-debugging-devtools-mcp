# Project Instructions

- **Language**: Always respond in the same language used by the user in their query or prompt.
- **Web Vitals Focus**: Always prioritize the analysis of LCP, CLS, and INP in your performance reports.
- **MCP Usage**: Whenever a performance analysis is requested, use Chrome DevTools MCP tools before speculating about the code.
- **Accuracy in Findings**: When identifying a problem, always specify the file, exact line (if Source Maps are available), and task duration (Long Task).
- **Workflow**: After identifying a problem, propose a concrete technical solution, but wait for a clear "Directive" from the user before modifying any files.
- **React Best Practices**: When proposing React solutions, follow Vercel/Next.js recommendations: avoid unnecessary effects, use component composition to prevent prop-drilling, and optimize renders through strategic use of memoization hooks.
- **Senior Style**: Maintain a technical, direct, and concise tone without unnecessary filler (Senior Software Engineer style).
