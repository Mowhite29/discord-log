import axios from "axios";

export default class DiscordLog {
    constructor(webhookURL, options = {}) {
        if (!webhookURL) throw Error('webhookURL is required');
        this.webhookURL = webhookURL;
        const level = typeof options === 'string' ? options : options.level || 'ERROR'
        this.level = level.toUpperCase();
        this.levels = ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'];
    }

    async log(message, level = 'INFO', error = null){
        if (this.webhookURL.toUpperCase() === 'DEV') return // Development mode to catch calls
        const levelUpper = level.toUpperCase();

        if (this.levels.indexOf(levelUpper) < this.levels.indexOf(this.level)) return;
        
        const timeStamp = new Date().toISOString();

        let errorMsg = '';
        if (error instanceof Error){
            errorMsg = `${error.stack}`;
        } else if (typeof error === 'string'){
            errorMsg = `${error}`;
        } else if (error){
            try {
                errorMsg = `${JSON.stringify(error, null, 2)}`;
            } catch {
                errorMsg = `[Unserialisable error: ${String(error)}]`;
            }
        }
        const payload = {
            "embeds": [{
                "title": `${levelUpper}`,
                "description": `${timeStamp} \n ${message}${error? '\n' + errorMsg : ''}`,
                "color": this.getColour(levelUpper)
            }]
        }

        try {
            await axios.post(
                this.webhookURL, 
                payload, 
                {
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 10000
                }
            );
        } catch (e){
            console.error('Discord logging unsuccessful')
        }
    }

    getColour(level) {
        const colours = {
            DEBUG: 8421504,
            INFO: 3447003,
            WARNING: 16776960,
            ERROR: 16711680,
            CRITICAL: 10038562,
        }
        return colours[level] || 0;
    }
}
