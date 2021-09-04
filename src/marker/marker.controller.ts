import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Put
} from '@nestjs/common';
import {Response} from 'express';
import {Marker} from 'types/common';
import {MarkerService} from './marker.service';

@Controller('marker')
export class MarkerController {
  constructor(private readonly markerService: MarkerService) {}

  @Post()
  async addNewProduct(@Body() productData: Marker, @Res() res: Response) {
    try {
      const data = await this.markerService.addNewMarker(productData);
      return res.status(200).json({success: true, data});
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Get()
  async getAllMarker(@Res() res: Response) {
    try {
      const data = await this.markerService.getAllMarkers();
      return res.status(200).json({success: true, data});
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Get('/active')
  async getAllActivePoints(@Res() res: Response) {
    try {
      const data = await this.markerService.getAllActiveMarkers();
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Delete(':markerId')
  async deleteProduct(@Param('markerId') id: string, @Res() res: Response) {
    try {
      const data = await this.markerService.deleteMarker(id);
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Put(':markerId')
  async updateProduct(
    @Param('markerId') id: string,
    @Body() productData: Marker,
    @Res() res: Response
  ) {
    try {
      const data = await this.markerService.updateMarker(id, productData);
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }
}
