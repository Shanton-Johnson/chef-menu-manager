import { MenuItem } from "@/context/MenuContext";

export function calculateAveragePrice(menuItems: MenuItem[], course: string): number {
  const filteredItems = menuItems.filter(item => item.course === course);
  if (filteredItems.length === 0) {
    return 0;
  }
  const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
  return total / filteredItems.length;
}
