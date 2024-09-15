import { Package } from '../entities/package';

export class PackageAggregate {
  constructor(
    public package_: Package
  ) {}
}
