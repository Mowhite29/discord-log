# Discord Logger

[![npm version](https://img.shields.io/npm/v/discord-logger)](https://www.npmjs.com/package/discord-logger)
[![License](https://img.shields.io/npm/l/discord-logger)](LICENSE)

A Node.js logging handler that sends application logs to Discord channels via webhooks, with color-coded embeds, timestamps, and stack traces.

## Installation

```bash
npm install discord-logger

```

## Usage

```bash
import DiscordLogger from 'discord-logging-handler-js'

const logger = new DiscordLogger('YOUR_WEBHOOK_URL', 'DEBUG')

logger.log('This is an INFO log', 'INFO')

try {
    throw new Error('Sample error')
} catch (err) {
    logger.log('Caught an error', 'ERROR', err)
}
```

## Features 

- Color-coded embeds by log level
- Supports stack traces
- Configurable minimum log level
- Async, non-blocking log delivery

## License

MIT License

Copyright (c) 2025 Moses White
