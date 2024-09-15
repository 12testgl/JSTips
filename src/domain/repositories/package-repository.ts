import { Package } from "../entities/package";

export interface PackageRepository {
  save(package_: Package): Promise<void>;
  findById(id: string): Promise<Package | null>;
}
