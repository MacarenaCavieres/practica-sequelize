import { User } from "../models/user.model.js";
import { validate as uuidValidate } from "uuid";

const getAll = async (req, res) => {
    try {
        const data = await User.findAll();
        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false });
    }
};

const getOne = async (req, res) => {
    try {
        const { uuid } = req.params;

        if (!uuidValidate(uuid)) return res.status(400).json({ ok: false, msg: "uid inválido" });

        const data = await User.findOne({ where: { uuid } });

        if (!data) return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });

        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false });
    }
};

const create = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        await User.sync();
        const data = await User.create({ firstName, lastName });

        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false });
    }
};

const remove = async (req, res) => {
    try {
        const { uuid } = req.params;
        if (!uuidValidate(uuid)) return res.status(400).json({ ok: false, msg: "uid inválido" });

        const data = await User.findByPk(uuid);

        if (!data) return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });

        await data.destroy();
        return res.json({ msg: "Usuario eliminado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false });
    }
};

const updateOne = async (req, res) => {
    try {
        const { uuid } = req.params;
        const { firstName, lastName } = req.body;
        if (!uuidValidate(uuid)) return res.status(400).json({ ok: false, msg: "uid inválido" });

        const data = await User.findByPk(uuid);

        if (!data) return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });

        data.firstName = firstName;
        data.lastName = lastName;

        await data.save();

        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false });
    }
};

export const userMethod = {
    getAll,
    getOne,
    create,
    remove,
    updateOne,
};
