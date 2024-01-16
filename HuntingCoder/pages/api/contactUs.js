import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === "POST") {
        let data = await fs.promises.readdir('contactUsFormContent');
        let writeData = await fs.promises.writeFile(`contactUsFormContent/${data.length + 1}.json`, JSON.stringify(req.body));
        res.status(200).json({ msg: "Form has been submitted successfully" })
    } else {
        res.status(400).json({ msg: "Please use a post method" })
    }
}