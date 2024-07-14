export interface Plan {
  plan: string;
  icon: string;
  pricePerMonth: number;
  addOns: {
    onlineService: number;
    largelStorage: number;
    customizableProfile: number;
  };
}
