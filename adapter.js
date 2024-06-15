class LegacyShipping {
  calculateCost(weight) {
    // Complex shipping cost calculation logic
    return weight * 1.5;
  }
}

// New class interface expected by the client but not yet ready
class ShippingService {
  requestShippingCost(weight) {
    // This method will be called by the client
    throw new Error("Not implemented");
  }
}

// Adapter: Adapts LegacyShipping to the new interface
class ShippingAdapter extends ShippingService {
  constructor() {
    super();
    this.legacyShipping = new LegacyShipping();
  }

  requestShippingCost(weight) {
    return this.legacyShipping.calculateCost(weight);
  }
}

// Client code
const weight = 5; // Weight of the package
const cost = new ShippingAdapter().requestShippingCost(weight);

console.log(`Shipping cost for ${weight} kg: $${cost}`);