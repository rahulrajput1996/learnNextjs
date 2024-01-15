import fs from 'fs';

export default async function handler(req, res) {
  try {
    const { title } = req.query;
    let content = fs.readFileSync(`jsonContent/${title}`, 'utf-8');
    res.status(200).json(JSON.parse(content));
  } catch (error) {
    res.status(500).json({ error: "internal server error" })
  }
}
