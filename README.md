# promote-make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/takhao666/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/takhao666/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty (top 50 share $250 in USDC). The entry is the X post itself: one post of your own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, or links to it, with a photo of its own attached and make.fun (or @makefunai) plus your play code in its text. Places go by the post's score — replies + reposts + quotes.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid — https://make.fun/sponsor/new.

`POST.json` at the repository root names the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`); `main.ts` copies it to the grader's output directory, where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=hvn9m3q0&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
