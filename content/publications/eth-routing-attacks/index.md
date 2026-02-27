---
title: "Routing Attacks in Ethereum PoS: A Systematic Exploration" 
summary: "Financial Cryptography and Data Security 2026"
categories: ["Publications","Blog"]
tags: ["publication","ethereum","routing","attacks","bgp","hijack"]
date: 2026-03-02
publishDate: 2026-02-26
draft: false
---
{{< badge >}}Financial Cryptography & Data Security 2026{{< /badge >}}

## Paper PDF
{{< button href="https://fc26.ifca.ai/preproceedings/220.pdf" target="_blank" >}}{{< icon "download" >}} FC'26 Pre-proceedings{{< /button >}}

## Abstract
With the promise of greater decentralization and sustainability, Ethereum transitioned from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) consensus mechanism. The new consensus protocol introduces novel vulnerabilities that warrant further investigation. The goal of this paper is to investigate the security of Ethereum's PoS system from an Internet routing perspective. To this end, this paper makes two contributions: First, we devise a novel framework for inferring the distribution of validators on the Internet without disturbing the real network. Second, we introduce a class of network-level attacks on Ethereum's PoS system that jointly exploit Internet routing vulnerabilities with the protocol's reward and penalty mechanisms. We describe two representative attacks: StakeBleed, where the attacker triggers an inactivity leak, halting block finality and causing financial losses for all validators; and KnockBlock, where the attacker increases her expected MEV gains by preventing targeted blocks from being included in the chain. We find that both attacks are practical and effective. An attacker executing StakeBleed can inflict losses of almost 300 ETH in just 2 hours by hijacking as few as 30 IP prefixes. An attacker implementing KnockBlock could increase their MEV expected gains by 44.5% while hijacking a single prefix for less than 2 minutes. Our paper serves as a call to action for validators to reinforce their Internet routing infrastructure and for the Ethereum P2P protocol to implement stronger mechanisms to conceal validator locations.

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
