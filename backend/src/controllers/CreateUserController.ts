import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserController {
    async handle(req:Request, res:Response){
        const {username, password} = req.body;
         
        const user = await prismaClient.user.create({
            data:{
                username,
                password
            }
        })

        return res.status(201).send();
    }
    
}