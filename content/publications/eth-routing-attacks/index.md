---
title: "Routing Attacks in Ethereum PoS: A Systematic Exploration"
summary: "Financial Cryptography and Data Security 2026"
categories: ["Publications","Blog"]
tags: ["publication","ethereum","routing","attacks","bgp","hijack"]
#externalUrl: ""
#showSummary: true
date: 2026-03-02
publishDate: 2026-02-26
draft: false
---
With the promise of greater decentralization and sustainability, Ethereum transitioned from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) consensus mechanism. The new consensus protocol introduces novel vulnerabilities that warrant further investigation. The goal of this paper is to investigate the security of Ethereum's PoS system from an Internet routing perspective. To this end, this paper makes two contributions: First, we devise a novel framework for inferring the distribution of validators on the Internet without disturbing the real network. Second, we introduce a class of network-level attacks on Ethereum's PoS system that jointly exploit Internet routing vulnerabilities with the protocol's reward and penalty mechanisms. We describe two representative attacks: StakeBleed, where the attacker triggers an inactivity leak, halting block finality and causing financial losses for all validators; and KnockBlock, where the attacker increases her expected MEV gains by preventing targeted blocks from being included in the chain. We find that both attacks are practical and effective. An attacker executing StakeBleed can inflict losses of almost 300 ETH in just 2 hours by hijacking as few as 30 IP prefixes. An attacker implementing KnockBlock could increase their MEV expected gains by 44.5% while hijacking a single prefix for less than 2 minutes. Our paper serves as a call to action for validators to reinforce their Internet routing infrastructure and for the Ethereum P2P protocol to implement stronger mechanisms to conceal validator locations.
