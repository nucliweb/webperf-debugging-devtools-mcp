# Exercise 5: React & Next.js Performance Rules
<!--
  For Gemini and Codex: append this content to your active rules file (GEMINI.md / AGENTS.md).
  For Claude Code: uncomment the @import line in your CLAUDE.md.
  For Cursor: enable the _webperf-ex05 rule in your workspace settings.
-->

## React Best Practices
When proposing React solutions, follow these principles in priority order:

1. **Avoid unnecessary effects** — don't use `useEffect` to sync state that can be derived
2. **Component composition** — prefer composition over prop-drilling
3. **Strategic memoization** — use `useMemo`, `useCallback`, and `React.memo` only when profiling shows a real benefit, not preemptively

## Next.js & Vercel Recommendations
- Prefer **Server Components** for data fetching — avoid client-side fetching when SSR or RSC can handle it
- Use `next/image` with explicit `width`, `height`, and `priority` for LCP images
- Analyze the bundle with `@next/bundle-analyzer` before proposing code-splitting
- Check for route-level data waterfalls: each page should fetch all its data in parallel

## Scope of This Exercise
The intentional bottlenecks in `demos/nextjs-performance-app/` may include:
- Render-blocking patterns
- Unnecessary client components
- Missing image optimization
- Suboptimal data fetching

Identify the specific anti-pattern, name it, and explain why it hurts performance before proposing a fix.
