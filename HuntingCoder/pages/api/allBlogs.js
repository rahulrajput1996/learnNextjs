import fs from 'fs';

export default async function handler(req, res) {
    try {
        let content = fs.readdirSync(`jsonContent`);
        content = content.slice(0, parseInt(req.query.count));
        let arr = [];
        content.forEach((element) => {
            let content = fs.readFileSync(`jsonContent/${element}`, 'utf-8');
            arr.push(JSON.parse(content));
        })
        res.status(200).json(arr);
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}