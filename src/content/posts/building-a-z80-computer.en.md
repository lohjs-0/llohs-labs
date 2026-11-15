
---
title: building a z80 computer from scratch
description: documenting the development of an 8-bit computer based on the Zilog Z80, from electronic schematics in KiCad to PCB design.
date: 2026-11-14
tags: electronics, z80, kicad, hardware
---

I've recently started exploring digital electronics and computer architecture through a personal project: building a computer based on the **Zilog Z80** microprocessor.

The idea is to better understand how a computer works at its most fundamental level, from communication between components to instruction execution.

For now, the project is still in the schematic design stage using KiCad.

## why the z80?

The Zilog Z80 is an 8-bit microprocessor introduced in 1976.

I chose to explore this architecture because it provides an opportunity to understand concepts that modern computers often hide behind several layers of abstraction.

Although it is an older architecture, the Z80 offers a practical way to study fundamental concepts such as:

- Data and address buses.
- Communication between the processor and memory.
- Read and write cycles.
- Control signals.
- Clock generation and synchronization.
- Address decoding.

The processor has an 8-bit data bus and a 16-bit address bus, allowing it to directly address up to **64 KiB of memory**.

My goal is not simply to make the computer work, but to understand the role of each component and how they interact.

## designing with kicad

I'm using KiCad to develop and organize the electronic schematics for the project.

At this stage, I've started bringing together the components required to build a Z80-based system.

![Preliminary electronic schematic of the Z80 computer in KiCad](/images/blog/z80/z80-kicad-schematic.png)

*figure 01 — preliminary electronic schematic developed in KiCad. The circuit is still under development, and several connections need to be completed and verified.*

The current schematic includes some of the main components of the system.

### microprocessor

The central component is the **Zilog Z80**, responsible for executing instructions and coordinating communication with other devices.

Its data and address buses will be used to establish communication with the memory chips.

### clock

I'm using a **1 MHz clock source** to provide the timing signal required by the processor.

This signal synchronizes the CPU's internal operations and influences the speed at which instructions are executed.

### memory

The project includes two types of memory:

- **ROM (28C256):** intended to store instructions and programs.
- **RAM (CY62256):** intended to temporarily store data during execution.

The memory address space still needs to be defined and validated.

### supporting circuits

I've also started adding components responsible for supporting the processor:

- An MCP130-based reset circuit.
- Pull-up resistors for control signals.
- Decoupling capacitors.
- 74LS32 logic gates.
- 74HC04 inverters.

These components support functions such as initialization, electrical stability, and memory selection logic.

Their presence in the schematic does not mean that all connections have already been completed or verified.

## what still needs to be solved?

One of the most interesting things I've learned from this project is that building a computer involves much more than connecting a processor to memory.

There are still several important aspects I need to study and review:

- Data and address bus connections.
- ROM and RAM chip selection logic.
- Read and write control signals.
- Electrical compatibility between components.
- Processor initialization.
- Memory map organization.
- Schematic validation before any physical assembly.

Each of these steps requires understanding how the components work and consulting their respective datasheets.

## planning the physical computer

Besides developing the electronic schematic in KiCad, I've also started thinking about what the computer's printed circuit board might look like.

My idea is to design a compact PCB, with the components arranged so that each part of the system can be easily identified.

![Concept of the future Z80 computer PCB](/images/blog/z80/z80-pcb-concept.png)

*figure 02 — visual concept of the future Z80 computer PCB. This digitally generated illustration represents a possible component arrangement and does not correspond to a validated electronic layout.*

The concept places the Z80 processor at the center, surrounded by ROM and RAM, power connections, buses, and control components.

I'd also like to include LEDs and buttons to make it easier to observe the system's behavior during testing.

The final component placement, traces, and supporting circuitry will still need to be developed in KiCad.

For now, this image serves as a visual reference for the direction I would like to take when developing the physical version of the project.

### visualizing the pcb routing

Beyond component placement, I've also started exploring what the PCB trace routing might look like.

![Conceptual routing layout of the Z80 computer PCB](/images/blog/z80/z80-pcb-layout.png)

*figure 03 — conceptual PCB layout showing traces on the top and bottom copper layers, buses, and components of the Z80 computer. This is a digitally generated illustration, not a validated KiCad design.*

In the image, the red and blue traces visually represent the two copper layers of a possible PCB.

The purpose is to explore how connections between the processor, memory chips, and supporting components could be organized while considering the available space and signal distribution.

The actual routing will be developed in KiCad after the electronic schematic has been reviewed and validated.

### 3d visualization of the future board

To better visualize what the computer might look like after assembly, I also created a three-dimensional representation of the board.

![Conceptual 3D visualization of the Z80 computer PCB](/images/blog/z80/z80-pcb-3d.png)

*figure 04 — conceptual 3D visualization of the future Z80 computer PCB. This digitally generated image was inspired by KiCad's 3D Viewer and does not represent a manufactured board or a validated electronic design.*

The visualization shows a possible arrangement of components, including the Z80 microprocessor, ROM and RAM chips, supporting circuits, connectors, and LED indicators.

My intention is to use this representation as an aesthetic reference while developing the actual electronic design.

Once the schematic and PCB layout are completed in KiCad, I'll be able to generate a 3D visualization based on the real components and physical dimensions of the board.

## next steps

For now, this is an experimental project driven mainly by curiosity.

I plan to continue studying the Z80 architecture, reviewing the electronic schematic, and documenting the decisions made throughout development.

I also want to record the mistakes, challenges, and discoveries that come up along the way.

The intention is to move forward gradually, without necessarily setting a deadline for completing the computer.

Perhaps one day it will move beyond KiCad and become a physical computer.
