import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    if (typeof value === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return undefined;
    }
    return super.transform(value, metadata);
  }
}
