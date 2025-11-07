# Contributing Guide

Thank you for your interest in contributing to Turkish Form Validator!

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/turkish-form-validator.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/amazing-feature`

## Development Commands

- `npm run build` - Build the project
- `npm run dev` - Build in watch mode
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run type-check` - Run TypeScript type checking

## Making Changes

1. Make your changes in the `src/` directory
2. Write tests for your changes
3. Ensure all tests pass: `npm test`
4. Ensure type checking passes: `npm run type-check`
5. Build the project: `npm run build`

## Submitting Changes

1. Commit your changes with a clear message
2. Push to your branch: `git push origin feature/amazing-feature`
3. Create a Pull Request

## Code Style

- We use TypeScript with strict mode
- Follow the existing code style
- Add JSDoc comments for all public functions
- Write tests for all new features

## Adding a Changeset

When you add a feature or fix a bug, you need to add a changeset:

```bash
npm run changeset
```

This will help us track what changes are in each release.

Thanks for contributing! 🎉
