import { PackageRepository } from '../repositories/package-repository';
import { Package } from '../entities/package';

export class PackageService {
  constructor(private packageRepository: PackageRepository) {}

  async createPackage(package_: Package): Promise<void> {
    await this.packageRepository.save(package_);
  }
}
