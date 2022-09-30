/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-29 01:26:21
 * @ Modified time: 2022-09-30 16:07:39
 * @ Description:
 */


import mongoose, { Schema, model } from 'mongoose';

export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    provider: string;
    providerID: number;
    lastSeen: Date;
    createdAt: Date;
    __v: number;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    username: { type: String },
    avatar: { type: String, required: true },
    bio: { type: String, required: true },
    provider: { type: String, required: true },
    providerID: { type: Number, required: true },
    lastSeen: { type: Date },
    __v: { type: Number, select: false }
}, { timestamps: true });

export default model<IUser>('User', userSchema);