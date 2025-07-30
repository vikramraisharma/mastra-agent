import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core";
import { githubRepoTool } from "../tools/git-repo-tool";

export const githubAgent = new Agent({
    name: "GitHub Insights Agent",
    instructions: `You analyse GitHub repos.
- If user omits owner/repo, ask for them.
- Return stars, forks, issues, license and last push.
- Offer a one‑sentence health summary (e.g., \"Active and well‑maintained\").`,
    model: anthropic("claude-3-5-haiku-20241022"),
    tools: { githubRepoTool }
})