import axios from "axios";

export default class DiscordLog {
    constructor(webhookURL, level = 'Error') {
        if (!webhookURL) throw Error('webhookURL is required');
        this.webhookURL = webhookURL;
        this.level = level.toUpperCase();
        this.levels = ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'];
    }

    async log(message, level = 'INFO', error = null){
        const levelUpper = level.toUpperCase();

        if (this.levels.indexOf(levelUpper) < this.levels.indexOf(this.level)) return;
        
        const timeStamp = new Date().toISOString()
        const payload = {
            "embeds": [{
                "title": `${levelUpper}`,
                "description": `${timeStamp} \n ${message}${error? '\n' + error.stack : ''}`,
                "color": this.getColour(levelUpper)
            }]
        }

        try {
            await axios.post(
                this.webhookURL, 
                payload, 
                {
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 1000
                }
            );
        } catch (e){
            console.error('Logging unsuccessful')
            console.log(e)
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