import {Schema} from 'mongoose';
import * as shortid from 'shortid';
import {MarkerDoc} from 'types/docs';

export const MarkerSchema = new Schema<MarkerDoc>(
  {
    title: {
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
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      default: 1
    },
    markerId: {
      type: String
    }
  },
  {timestamps: true}
);

MarkerSchema.pre<MarkerDoc>('save', function (next) {
  if (!this.markerId) {
    this.markerId = shortid.generate();
  }
  next();
});
