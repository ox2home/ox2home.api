import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Marker} from 'types/common';
import {MarkerDoc} from 'types/docs';

@Injectable()
export class MarkerService {
  constructor(
    @InjectModel('Marker') private readonly Marker: Model<MarkerDoc>
  ) {}

  async addNewMarker(markerData: Marker) {
    try {
      const newMarker = await new this.Marker(markerData).save();
      return newMarker;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async getAllMarkers() {
    try {
      return await this.Marker.find();
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async getAllActiveMarkers() {
    try {
      const response = await this.Marker.find();
      const activeData = response.filter((marker) => marker.active === 1);
      return activeData;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async updateMarker(id: string, markerData: Marker) {
    try {
      const response = await this.Marker.updateOne(
        {
          markerId: id
        },
        {
          $set: {
            ...markerData
          }
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async deleteMarker(id: string) {
    try {
      const response = await this.Marker.deleteOne({markerId: id});
      return response;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
}
