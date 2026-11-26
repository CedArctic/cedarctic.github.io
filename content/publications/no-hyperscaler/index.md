---
title: "No Hyperscaler? No Problem. Your Students also Break (and Fix) Networks" 
summary: "HotNets 2026: Twenty-Fifth ACM Workshop on Hot Topics in Networks"
description: "HotNets '26 paper: mining students' troubleshooting sessions in networking courses as realistic, labeled and shareable debugging traces, and using them to guide LLM root cause analysis agents."
categories: ["Publications"]
tags: ["trace mining", "debugging traces", "network troubleshooting", "root-cause analysis", "network management",  "education", "agentic network operations"]
date: 2026-11-01
publishDate: 2026-11-01
draft: false
showZenMode: true
zenModeDefault: true
aliases: ["/posts/no-hyperscaler-demo/"]
---
{{< badge >}}HotNets '26{{< /badge >}} The 25th ACM Workshop on Hot Topics in Networks · Salt Lake City, UT

<p class="nh-meta"><strong>Constantine Doumanidis</strong>, <a href="https://hongyu.nl">Hongyu Hè</a>, <a href="https://ece.princeton.edu/people/maria-apostolaki">Maria Apostolaki</a><br>
<a href="https://netsyn.princeton.edu">NetSyn</a> · Princeton University</p>

<div class="nh-actions">
{{< button href="/hotnets_26_no_hyperscaler.pdf" target="_blank" >}}{{< icon "download" >}} Paper (PDF){{< /button >}}
{{< button href="/no-hyperscaler/demo/" >}}{{< icon "wand-magic-sparkles" >}} Interactive demo{{< /button >}}
{{< button href="#talk" >}}{{< icon "youtube" >}} Talk{{< /button >}}
{{< button href="#cite" >}}{{< icon "quote-left" >}} Cite{{< /button >}}
</div>

## In short

<div class="nh-cards">
  <div class="nh-card"><h3>Problem</h3><p>LLM agents still struggle to find the root cause of network faults. At the same time network operator traces contain knowledge that would help diagnosis, but no available dataset captures this process.</p></div>
  <div class="nh-card"><h3>Insight</h3><p>Students in networking courses break and fix real-looking networks every semester. We can extract realistic, labeled and shareable debugging traces from their terminal sessions.</p></div>
  <div class="nh-card"><h3>Challenges</h3><p>Deciding what to log, at what granularity, and then extracting clean meaningful diagnostic trajectories from noisy, concurrent student terminal sessions.</p></div>
</div>

<ul class="nh-takeaways">
  <li>We can automatically mine meaningful action traces from networking courses.</li>
  <li>Mined faults are challenging benchmarks for root cause analysis (RCA) agents.</li>
  <li>Runbooks generated from mined patterns effectively guide RCA agents.</li>
</ul>

## Abstract
Network operators diagnose faults by issuing commands, forming hypotheses, and iterating to a fix. Yet, no dataset captures this diagnostic process. Production traces are locked down, and synthetic benchmarks reduce debugging to single injected faults on homogeneous topologies. We propose mining students' actions during the completion of networking course assignments as a source of realistic, labeled, and shareable debugging traces. We test this idea in the mini-Internet, an open-source platform in which students configure their part of a miniature of the Internet, naturally generating cascading, multi-protocol failures and the trajectories that fix them. Realizing this opportunity requires confronting two challenges: what to log and at what granularity, and how to extract clean diagnostic trajectories from noisy, concurrent student sessions. We describe our initial design and the open research problems ahead. Our preliminary results show that non-trivial faults such as misconfigurations and diagnostic patterns can be mined from student logs automatically, and that the resulting guidance improves the root cause analysis accuracy of LLM agents.

## Talk {#talk}
{{< youtubeLite id="SMX25O_o4OU" >}}

## Results
We mined two example misconfigurations from student traces, an **L2 subnetting** fault (overlapping subnets, dropped packets) and a **BGP traffic engineering** fault (bad AS-path prepending, high latency), and gave them to LLM root cause analysis agents. Without help, the mined faults are hard: GPT-5.4 mini never finds the BGP root cause, and GPT-5.5 finds the L2 root cause in 1 of 5 runs. With runbooks generated automatically from the mined patterns, both models find the root cause in every run, in most settings with fewer tokens: GPT-5.5 on the BGP fault drops from 239k to 34k tokens per run.

{{< nohyperscaler-results >}}

<p class="nh-note">5 runs per setting. From Table 5 of the paper.</p>

## Try it yourself
Play the student in our guided demo, recorded on a real lab network: watch a fault get diagnosed and fixed in the terminals, see which troubleshooting pattern the commands match, and compare the run with AI agents, with and without runbooks. No account needed.

{{< button href="/no-hyperscaler/demo/" >}}{{< icon "wand-magic-sparkles" >}} Open the interactive demo{{< /button >}}

## Cite {#cite}
```bibtex
@inproceedings{doumanidis2026nohyperscaler,
  title     = {No Hyperscaler? No Problem. Your Students also Break (and Fix) Networks},
  author    = {Doumanidis, Constantine and Hè, Hongyu and Apostolaki, Maria},
  booktitle = {The 25th ACM Workshop on Hot Topics in Networks},
  series    = {HotNets '26},
  year      = {2026},
  publisher = {Association for Computing Machinery},
  doi       = {10.1145/3847290.3859948},
  url       = {https://doi.org/10.1145/3847290.3859948}
}
```

<p class="nh-note">The paper is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. The demo is built on the <a href="https://github.com/nsg-ethz/mini_internet_project">Mini-Internet Project</a> (ETH Zurich).</p>
