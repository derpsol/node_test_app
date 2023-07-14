import { Request, Response } from "express";
import Icontroller from "./userInterface";

let data: any[] = [
    {id: 1, name: "ini a", password: "passworda", phoneNumber: "1234567890", address: "addressA"},
    {id: 2, name: "ini b", password: "passwordb", phoneNumber: "1234567891", address: "addressB"},
    {id: 3, name: "ini c", password: "passwordc", phoneNumber: "1234567892", address: "addressC"},
    {id: 4, name: "ini d", password: "passwordd", phoneNumber: "1234567893", address: "addressD"},
]

class userController implements Icontroller {
    index(req: Request, res: Response): Response {
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        let { name, password, phoneNumber, address } = req.body;
        data.push({ name, password, phoneNumber, address });
        return res.send(`Created name: ${name} account`);
    }

    show(req: Request, res: Response): Response {
        let { id } = req.params;
        let find = data.find(x => x.id == id);
        return res.send(find);
    }

    update(req: Request, res: Response): Response {
        let { id } = req.params;
        let { name, password, phoneNumber, address } = req.body;
        let find = data.find(x => x.id == id);
        find.name = name;
        find.password = password;
        find.phoneNumber = phoneNumber;
        find.address = address;
        return res.send(`Update name: ${name} account info`);
    }

    delete(req: Request, res: Response): Response {
        let { id } = req.params;
        let deletes = data.filter(x => x.id != id)
        return res.send(deletes)
    }
}

export default new userController();