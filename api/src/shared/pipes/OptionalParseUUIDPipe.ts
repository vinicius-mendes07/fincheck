import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  override async transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<string> {
    if (typeof value === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return undefined;
    }
    return super.transform(value, metadata);
  }
}
