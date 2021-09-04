import {Schema} from 'mongoose';
import * as shortid from 'shortid';
import {ProductDoc} from 'types/docs';

export const ProductSchema = new Schema<ProductDoc>(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumbers: [
      {
        type: String,
        required: true
      }
    ],
    message: {
      type: String,
      required: true
    },
    facebookLink: {
      type: String
    },
    uniqueId: {
      type: String
    },
    active: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

ProductSchema.pre<ProductDoc>('save', function (next) {
  if (!this.uniqueId) {
    this.uniqueId = shortid.generate();
  }
  next();
});
