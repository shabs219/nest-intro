import { Module } from '@nestjs/common';
import { ExampleLibrary2121Service } from './example-library2121.service';

@Module({
  providers: [ExampleLibrary2121Service],
  exports: [ExampleLibrary2121Service],
})
export class ExampleLibrary2121Module {}
