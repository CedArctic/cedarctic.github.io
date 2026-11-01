---
title: "No Hyperscaler? No Problem. Your Students also Break (and Fix) Networks" 
summary: "HotNets 2026: Twenty-Fifth ACM Workshop on Hot Topics in Networks"
categories: ["Publications"]
tags: ["trace mining", "debugging traces", "network troubleshooting", "root-cause analysis", "network management",  "education", "agentic network operations"]
date: 2026-11-01
publishDate: 2026-11-01
draft: false
---
{{< badge >}}HotNets '26{{< /badge >}}

## Paper PDF
{{< button href="/hotnets_26_no_hyperscaler.pdf" target="_blank" >}}{{< icon "download" >}} HotNets'26 Pre-proceedings{{< /button >}}

## Abstract
Network operators diagnose faults by issuing commands, forming hypotheses, and iterating to a fix. Yet, no dataset captures this diagnostic process. Production traces are locked down, and synthetic benchmarks reduce debugging to single injected faults on homogeneous topologies. We propose mining students' actions during the completion of networking course assignments as a source of realistic, labeled, and shareable debugging traces. We test this idea in the mini-Internet, an open-source platform in which students configure their part of a miniature of the Internet, naturally generating cascading, multi-protocol failures and the trajectories that fix them. Realizing this opportunity requires confronting two challenges: what to log and at what granularity, and how to extract clean diagnostic trajectories from noisy, concurrent student sessions. We describe our initial design and the open research problems ahead. Our preliminary results show that non-trivial faults such as misconfigurations and diagnostic patterns can be mined from student logs automatically, and that the resulting guidance improves the root cause analysis accuracy of LLM agents.

<!--## Citation
```bibtex
@misc{doumanidis2025routingattacksethereumpos,
      title={Routing Attacks in Ethereum PoS: A Systematic Exploration}, 
      author={Constantine Doumanidis and Maria Apostolaki},
      year={2025},
      eprint={2505.07713},
      archivePrefix={arXiv},
      primaryClass={cs.NI},
      url={https://arxiv.org/abs/2505.07713}, 
}
```-->
