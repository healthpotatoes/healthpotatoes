# Contributing to Health Potatoes

:high_brightness: Welcome, young spud! :high_brightness:

This document is a set of guidelines for contributing to Health Potatoes. These are suggestions, not rules. Use your best judgment and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [Git Commit Messages](#git-commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by this [Code of Conduct](CODEOFCONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [healthpotatoes@gmail.com](mailto:healthpotatoes@gmail.com).

## What should I know before I get started?

Please read over this guide before starting anything. Once you have done so you will need to learn about setting up the project in your environment so you can begin contributing (if you are planning to submit a Pull Request, otherwise you can just follow this guide to learn how to report bugs or suggest enhancements).

You can find instructions on how to fork this project and set it up in your local environment [here in the read me](README.md).

## How Can I Contribute?

### Reporting Bugs

When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Search through open issues** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

You can report any bugs found in the issue section of the Health Potatoes repository.

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the application, e.g. which command exactly you used in the terminal, or how you started the app otherwise. When listing steps, **don't just say what you did, but explain how you did it**.
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

We would love to hear your ideas about improving Health Potatoes. Please read over the following guidelines before proceeding to open an issue regarding an enhancement.

#### Before Submitting An Enhancement Suggestion

- **Search the open issues** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Health Potatoes which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most Health Potatoes users.
- **List some other applications where this enhancement exists.**
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing? Take a look at the issues section of the Health Potatoes repository. Find an issue you find suitable to tackle. You can also suggest an improvement, new feature, or report a bug you may have found in the issue section.

#### Local development

Please [refer to our readme](README.md) for information on setting up your local environment for development.

### Pull Requests

The process described here has several goals:

- Maintain Health Potatoes's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Health Potatoes
- Enable a sustainable system for Health Potatoes's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- When only changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji, such as:
  - :art: `:art:` when improving the format/structure of the code
  - :speedboat: `:speedboat:` when improving performance
  - :umbrella: `:umbrella:` when fixing memory leaks
  - :memo: `:memo:` when writing docs
  - :bug: `:bug:` when fixing a bug
  - :boom: `:boom:` when removing code or files
  - :green_heart: `:green_heart:` when fixing the CI build
  - :microscope: `:microscope:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
