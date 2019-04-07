import { getModelCreator, SchemaCreator } from '@enigmatis/mongo-driver';
import { Schema } from 'mongoose';
import { BorderStyle } from '../enums';
import { modelNames } from '../model-names';
import { Mission } from './mission';
import { RomachEntitiesBase, RomachEntitiesBaseSchema } from './romach-entities-base';

export interface Ellipse extends RomachEntitiesBase {
    entitySubType: string;
    position: number[];
    height: number;
    comment?: string;
    aids: string[];
    classification: Mission[];
    expirationDate?: Date;
    mainRadius?: number;
    secondaryRadius?: number;
    angel?: number;
    internalMargins?: number;
    externalMargins?: number;
    fillColor?: string;
    entityColor?: string;
    borderStyle?: BorderStyle;
    borderWidth?: number;
}

const ellipseSchemaCreator: SchemaCreator = (refNameCreator) => new Schema<Ellipse>({
    ...RomachEntitiesBaseSchema,
    entitySubType: {
        type: String,
        required: true,
    },
    position: {
        type: [Number],
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    comment: String,
    aids: {
        type: [String],
        default: [],
        required: true,
    },
    classification: {
        type: Schema.Types.ObjectId,
        ref: refNameCreator(modelNames.MISSION),
    },
    expirationDate: Date,
    mainRadius: Number,
    secondaryRadius: Number,
    angel: Number,
    internalMargins: Number,
    externalMargins: Number,
    fillColor: String,
    entityColor: String,
    borderStyle: {
        type: Number,
        required: false,
    },
    borderWidth: Number,
});

export const ellipseModelPerReality = getModelCreator<Ellipse>(modelNames.ELLIPSE, ellipseSchemaCreator);
