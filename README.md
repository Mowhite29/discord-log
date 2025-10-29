# Discord Log

[![npm version](https://img.shields.io/npm/v/discord-log)](https://www.npmjs.com/package/discord-log)
[![License](https://img.shields.io/npm/l/discord-log)](LICENSE)

A Node.js logging handler that sends application logs to Discord channels via webhooks, with color-coded embeds, timestamps, and stack traces.

## Installation

```bash
npm install discord-log

```

## Usage

```bash
import DiscordLog from 'discord-log'

const logger = new DiscordLog('YOUR_WEBHOOK_URL', 'DEBUG')

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
