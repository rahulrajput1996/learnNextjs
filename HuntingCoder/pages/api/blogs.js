import fs from 'fs';

export default async function handler(req, res) {
    try {
        let content = fs.readdirSync(`jsonContent`);
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}