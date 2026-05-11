# Lingua Fly

**Lingua Fly** is a lightweight static web application for language learning through parallel texts, vocabulary, and simple practice mode.

The project is a simplified version of the broader **Motivator** idea — an educational platform designed to help people study languages more consistently, with structured content, reading support, and learning exercises.

This repository contains a static version of that concept: no database, no backend, no user accounts, and no complex infrastructure. The goal is to demonstrate the core learning experience in a clean and accessible format.

---

## Purpose

Lingua Fly helps users learn a foreign language by working with short structured texts.

The main idea is simple:

- choose a text from the catalog;
- read the original and translated version;
- review vocabulary;
- switch to practice mode;
- repeat and reinforce useful language patterns.

The project is focused on clarity, simplicity, and practical daily learning rather than heavy gamification or complicated settings.

---

## Why it is useful

Lingua Fly can be useful for:

- beginners who need short and understandable learning materials;
- people who want to read texts with translation support;
- language learners who prefer structured vocabulary and examples;
- demonstrating how a language-learning product can be built as a simple web app;
- testing an educational SaaS/product idea before building a full backend platform.

This version is intentionally lightweight. It can be deployed quickly, shared easily, and used as a prototype for a larger learning system.

---

## Relation to the Motivator project

Lingua Fly is based on a simplified idea of the **Motivator** project.

The original Motivator concept was broader: a platform for language learning with more dynamic content, user progress, and potentially AI-assisted practice.

Lingua Fly keeps only the essential part of that idea:

- structured learning materials;
- multilingual interface logic;
- reading and practice flow;
- simple catalog navigation;
- static content without database dependency.

This makes the project easier to maintain, easier to deploy, and easier to show as a portfolio or product prototype.

---

## Features

- Static language-learning content
- Parallel text reading
- Vocabulary list for each text
- Practice mode
- Catalog of learning materials
- Support for different language pairs
- Responsive layout
- No database required
- No authentication required
- Simple deployment as a static/Next.js app

---

## Tech Stack

The project is built with:

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **React Compiler**

Current main dependencies:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `eslint`

---

## Project Structure

```txt
lingua-fly/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app pages
│   ├── components/      # UI components
│   ├── context/         # Language context
│   └── data/            # Static learning content
├── next.config.ts       # Next.js configuration
├── package.json         # Project scripts and dependencies
└── tsconfig.json        # TypeScript configuration 

```
---

## Getting Started

Install dependencies:

npm install

Run the development server:

npm run dev

Open the application in the browser:

http://localhost:3000

Build the project:

npm run build

Run production build locally:

npm run start

Run linting:

npm run lint

---

## Content Model

The learning materials are stored as static data inside the project.

This means:

there is no external CMS;
there is no database;
content can be edited directly in the source files;
the project can be hosted with minimal infrastructure.

This approach is suitable for a prototype, MVP, portfolio project, or a small educational product.

---

## Possible Future Improvements

Possible next steps for the project:

add more language pairs;
add more texts and exercises;
add user progress tracking;
add spaced repetition;
add audio pronunciation;
add AI-generated exercises;
add backend and database support;
add personal learning statistics;
add authentication and user profiles.

---

## Author

Created by Natalia for personal study of foreign languages.

The project demonstrates the ability to build a clean, useful, and scalable educational interface with modern frontend technologies.

---

## License

This project is currently private in terms of product idea usage.
License can be added later depending on the intended distribution model.

---

## Link

https://lingua-fly.com/   
