export interface MonthlySale {
  month: string
  product: string
  revenue: number
  units: number
  region: string
  year: number
}

export interface KPIs {
  revenue: number
  cost: number
  margin: number
  growth: number
}

export interface Category {
  name: string
  value: number
}

export interface RegionPerformance {
  region: string
  sales: number
  satisfaction: number
  growth: number
  market_share: number
}

export const monthlySales2024: MonthlySale[] = [
  { month: "Jan", product: "Product A", revenue: 12000, units: 320, region: "North", year: 2024 },
  { month: "Jan", product: "Product B", revenue: 8500, units: 210, region: "South", year: 2024 },
  { month: "Jan", product: "Product C", revenue: 15200, units: 380, region: "East", year: 2024 },
  { month: "Feb", product: "Product A", revenue: 13500, units: 350, region: "North", year: 2024 },
  { month: "Feb", product: "Product B", revenue: 9200, units: 230, region: "South", year: 2024 },
  { month: "Feb", product: "Product C", revenue: 16800, units: 420, region: "East", year: 2024 },
  { month: "Mar", product: "Product A", revenue: 14200, units: 370, region: "North", year: 2024 },
  { month: "Mar", product: "Product B", revenue: 10100, units: 250, region: "South", year: 2024 },
  { month: "Mar", product: "Product C", revenue: 17500, units: 440, region: "East", year: 2024 },
  { month: "Apr", product: "Product A", revenue: 15800, units: 410, region: "North", year: 2024 },
  { month: "Apr", product: "Product B", revenue: 11300, units: 280, region: "South", year: 2024 },
  { month: "Apr", product: "Product C", revenue: 18900, units: 470, region: "East", year: 2024 },
  { month: "May", product: "Product A", revenue: 16500, units: 430, region: "North", year: 2024 },
  { month: "May", product: "Product B", revenue: 12000, units: 300, region: "South", year: 2024 },
  { month: "May", product: "Product C", revenue: 19800, units: 495, region: "East", year: 2024 },
  { month: "Jun", product: "Product A", revenue: 17200, units: 450, region: "North", year: 2024 },
  { month: "Jun", product: "Product B", revenue: 12800, units: 320, region: "South", year: 2024 },
  { month: "Jun", product: "Product C", revenue: 20500, units: 515, region: "East", year: 2024 },
]

export const monthlySales2023: MonthlySale[] = [
  { month: "Jan", product: "Product A", revenue: 10500, units: 280, region: "North", year: 2023 },
  { month: "Jan", product: "Product B", revenue: 7200, units: 180, region: "South", year: 2023 },
  { month: "Jan", product: "Product C", revenue: 13800, units: 345, region: "East", year: 2023 },
  { month: "Feb", product: "Product A", revenue: 11200, units: 295, region: "North", year: 2023 },
  { month: "Feb", product: "Product B", revenue: 7800, units: 195, region: "South", year: 2023 },
  { month: "Feb", product: "Product C", revenue: 14500, units: 365, region: "East", year: 2023 },
  { month: "Mar", product: "Product A", revenue: 12100, units: 315, region: "North", year: 2023 },
  { month: "Mar", product: "Product B", revenue: 8500, units: 210, region: "South", year: 2023 },
  { month: "Mar", product: "Product C", revenue: 15200, units: 380, region: "East", year: 2023 },
  { month: "Apr", product: "Product A", revenue: 13200, units: 345, region: "North", year: 2023 },
  { month: "Apr", product: "Product B", revenue: 9200, units: 230, region: "South", year: 2023 },
  { month: "Apr", product: "Product C", revenue: 16100, units: 405, region: "East", year: 2023 },
  { month: "May", product: "Product A", revenue: 14100, units: 370, region: "North", year: 2023 },
  { month: "May", product: "Product B", revenue: 9800, units: 245, region: "South", year: 2023 },
  { month: "May", product: "Product C", revenue: 17000, units: 425, region: "East", year: 2023 },
  { month: "Jun", product: "Product A", revenue: 14800, units: 385, region: "North", year: 2023 },
  { month: "Jun", product: "Product B", revenue: 10500, units: 265, region: "South", year: 2023 },
  { month: "Jun", product: "Product C", revenue: 17800, units: 445, region: "East", year: 2023 },
]

export const kpis2024: KPIs = {
  revenue: 285600,
  cost: 199920,
  margin: 85680,
  growth: 18.5,
}

export const kpis2023: KPIs = {
  revenue: 241800,
  cost: 169260,
  margin: 72540,
  growth: 12.3,
}

export const categories2024: Category[] = [
  { name: "Retail", value: 42 },
  { name: "SMB", value: 27 },
  { name: "Enterprise", value: 31 },
]

export const categories2023: Category[] = [
  { name: "Retail", value: 38 },
  { name: "SMB", value: 32 },
  { name: "Enterprise", value: 30 },
]

export const regionPerformance2024: RegionPerformance[] = [
  { region: "North", sales: 85, satisfaction: 92, growth: 78, market_share: 88 },
  { region: "South", sales: 72, satisfaction: 85, growth: 65, market_share: 75 },
  { region: "East", sales: 95, satisfaction: 88, growth: 82, market_share: 92 },
]

export const regionPerformance2023: RegionPerformance[] = [
  { region: "North", sales: 78, satisfaction: 88, growth: 70, market_share: 82 },
  { region: "South", sales: 65, satisfaction: 82, growth: 58, market_share: 68 },
  { region: "East", sales: 88, satisfaction: 85, growth: 75, market_share: 85 },
]

export const getMonthlySales = (year: string): MonthlySale[] => {
  return year === "2024" ? monthlySales2024 : monthlySales2023
}

export const getKPIs = (year: string): KPIs => {
  return year === "2024" ? kpis2024 : kpis2023
}

export const getCategories = (year: string): Category[] => {
  return year === "2024" ? categories2024 : categories2023
}

export const getRegionPerformance = (year: string): RegionPerformance[] => {
  return year === "2024" ? regionPerformance2024 : regionPerformance2023
}

export const mockData = {
  2023: [
    {
      month: "Ene",
      revenue: 85000,
      units: 1200,
      productA: 32000,
      productB: 28000,
      productC: 25000,
      categories: {
        electronics: 35000,
        clothing: 25000,
        books: 15000,
        home: 10000,
      },
      regions: {
        north: 20000,
        south: 18000,
        east: 22000,
        west: 15000,
        center: 10000,
      },
    },
    {
      month: "Feb",
      revenue: 92000,
      units: 1350,
      productA: 35000,
      productB: 30000,
      productC: 27000,
      categories: {
        electronics: 38000,
        clothing: 27000,
        books: 16000,
        home: 11000,
      },
      regions: {
        north: 22000,
        south: 19000,
        east: 24000,
        west: 16000,
        center: 11000,
      },
    },
    {
      month: "Mar",
      revenue: 88000,
      units: 1280,
      productA: 33000,
      productB: 29000,
      productC: 26000,
      categories: {
        electronics: 36000,
        clothing: 26000,
        books: 15500,
        home: 10500,
      },
      regions: {
        north: 21000,
        south: 18500,
        east: 23000,
        west: 15500,
        center: 10000,
      },
    },
    {
      month: "Abr",
      revenue: 95000,
      units: 1400,
      productA: 36000,
      productB: 31000,
      productC: 28000,
      categories: {
        electronics: 39000,
        clothing: 28000,
        books: 17000,
        home: 11000,
      },
      regions: {
        north: 23000,
        south: 20000,
        east: 25000,
        west: 17000,
        center: 10000,
      },
    },
    {
      month: "May",
      revenue: 98000,
      units: 1450,
      productA: 37000,
      productB: 32000,
      productC: 29000,
      categories: {
        electronics: 40000,
        clothing: 29000,
        books: 17500,
        home: 11500,
      },
      regions: {
        north: 24000,
        south: 20500,
        east: 26000,
        west: 17500,
        center: 10000,
      },
    },
    {
      month: "Jun",
      revenue: 102000,
      units: 1500,
      productA: 38000,
      productB: 33000,
      productC: 31000,
      categories: {
        electronics: 42000,
        clothing: 30000,
        books: 18000,
        home: 12000,
      },
      regions: {
        north: 25000,
        south: 21000,
        east: 27000,
        west: 18000,
        center: 11000,
      },
    },
    {
      month: "Jul",
      revenue: 105000,
      units: 1550,
      productA: 39000,
      productB: 34000,
      productC: 32000,
      categories: {
        electronics: 43000,
        clothing: 31000,
        books: 18500,
        home: 12500,
      },
      regions: {
        north: 26000,
        south: 21500,
        east: 28000,
        west: 18500,
        center: 11000,
      },
    },
    {
      month: "Ago",
      revenue: 108000,
      units: 1600,
      productA: 40000,
      productB: 35000,
      productC: 33000,
      categories: {
        electronics: 44000,
        clothing: 32000,
        books: 19000,
        home: 13000,
      },
      regions: {
        north: 27000,
        south: 22000,
        east: 29000,
        west: 19000,
        center: 11000,
      },
    },
    {
      month: "Sep",
      revenue: 112000,
      units: 1650,
      productA: 41000,
      productB: 36000,
      productC: 35000,
      categories: {
        electronics: 46000,
        clothing: 33000,
        books: 19500,
        home: 13500,
      },
      regions: {
        north: 28000,
        south: 22500,
        east: 30000,
        west: 19500,
        center: 12000,
      },
    },
    {
      month: "Oct",
      revenue: 115000,
      units: 1700,
      productA: 42000,
      productB: 37000,
      productC: 36000,
      categories: {
        electronics: 47000,
        clothing: 34000,
        books: 20000,
        home: 14000,
      },
      regions: {
        north: 29000,
        south: 23000,
        east: 31000,
        west: 20000,
        center: 12000,
      },
    },
    {
      month: "Nov",
      revenue: 118000,
      units: 1750,
      productA: 43000,
      productB: 38000,
      productC: 37000,
      categories: {
        electronics: 48000,
        clothing: 35000,
        books: 20500,
        home: 14500,
      },
      regions: {
        north: 30000,
        south: 23500,
        east: 32000,
        west: 20500,
        center: 12000,
      },
    },
    {
      month: "Dic",
      revenue: 125000,
      units: 1850,
      productA: 45000,
      productB: 40000,
      productC: 40000,
      categories: {
        electronics: 51000,
        clothing: 37000,
        books: 22000,
        home: 15000,
      },
      regions: {
        north: 32000,
        south: 25000,
        east: 34000,
        west: 22000,
        center: 12000,
      },
    },
  ],
  2024: [
    {
      month: "Ene",
      revenue: 98000,
      units: 1380,
      productA: 37000,
      productB: 32000,
      productC: 29000,
      categories: {
        electronics: 40000,
        clothing: 29000,
        books: 17000,
        home: 12000,
      },
      regions: {
        north: 23000,
        south: 20000,
        east: 25000,
        west: 18000,
        center: 12000,
      },
    },
    {
      month: "Feb",
      revenue: 106000,
      units: 1550,
      productA: 40000,
      productB: 34000,
      productC: 32000,
      categories: {
        electronics: 43000,
        clothing: 31000,
        books: 18000,
        home: 14000,
      },
      regions: {
        north: 25000,
        south: 22000,
        east: 27000,
        west: 19000,
        center: 13000,
      },
    },
    {
      month: "Mar",
      revenue: 101000,
      units: 1470,
      productA: 38000,
      productB: 33000,
      productC: 30000,
      categories: {
        electronics: 41000,
        clothing: 30000,
        books: 17500,
        home: 12500,
      },
      regions: {
        north: 24000,
        south: 21000,
        east: 26000,
        west: 18000,
        center: 12000,
      },
    },
    {
      month: "Abr",
      revenue: 109000,
      units: 1610,
      productA: 41000,
      productB: 35000,
      productC: 33000,
      categories: {
        electronics: 44000,
        clothing: 32000,
        books: 19000,
        home: 14000,
      },
      regions: {
        north: 26000,
        south: 23000,
        east: 28000,
        west: 20000,
        center: 12000,
      },
    },
    {
      month: "May",
      revenue: 113000,
      units: 1670,
      productA: 42000,
      productB: 36000,
      productC: 35000,
      categories: {
        electronics: 46000,
        clothing: 33000,
        books: 19500,
        home: 14500,
      },
      regions: {
        north: 27000,
        south: 24000,
        east: 29000,
        west: 20500,
        center: 12500,
      },
    },
    {
      month: "Jun",
      revenue: 117000,
      units: 1730,
      productA: 44000,
      productB: 37000,
      productC: 36000,
      categories: {
        electronics: 48000,
        clothing: 34000,
        books: 20000,
        home: 15000,
      },
      regions: {
        north: 28000,
        south: 24500,
        east: 30000,
        west: 21000,
        center: 13500,
      },
    },
    {
      month: "Jul",
      revenue: 121000,
      units: 1790,
      productA: 45000,
      productB: 38000,
      productC: 38000,
      categories: {
        electronics: 49000,
        clothing: 35000,
        books: 21000,
        home: 16000,
      },
      regions: {
        north: 29000,
        south: 25000,
        east: 31000,
        west: 22000,
        center: 14000,
      },
    },
    {
      month: "Ago",
      revenue: 124000,
      units: 1840,
      productA: 46000,
      productB: 39000,
      productC: 39000,
      categories: {
        electronics: 50000,
        clothing: 36000,
        books: 21500,
        home: 16500,
      },
      regions: {
        north: 30000,
        south: 25500,
        east: 32000,
        west: 22500,
        center: 14000,
      },
    },
    {
      month: "Sep",
      revenue: 129000,
      units: 1900,
      productA: 47000,
      productB: 41000,
      productC: 41000,
      categories: {
        electronics: 52000,
        clothing: 38000,
        books: 22000,
        home: 17000,
      },
      regions: {
        north: 31000,
        south: 26000,
        east: 33000,
        west: 23000,
        center: 16000,
      },
    },
    {
      month: "Oct",
      revenue: 132000,
      units: 1950,
      productA: 48000,
      productB: 42000,
      productC: 42000,
      categories: {
        electronics: 53000,
        clothing: 39000,
        books: 22500,
        home: 17500,
      },
      regions: {
        north: 32000,
        south: 26500,
        east: 34000,
        west: 23500,
        center: 16000,
      },
    },
    {
      month: "Nov",
      revenue: 136000,
      units: 2010,
      productA: 49000,
      productB: 43000,
      productC: 44000,
      categories: {
        electronics: 55000,
        clothing: 40000,
        books: 23000,
        home: 18000,
      },
      regions: {
        north: 33000,
        south: 27000,
        east: 35000,
        west: 24000,
        center: 17000,
      },
    },
    {
      month: "Dic",
      revenue: 144000,
      units: 2130,
      productA: 52000,
      productB: 46000,
      productC: 46000,
      categories: {
        electronics: 58000,
        clothing: 42000,
        books: 25000,
        home: 19000,
      },
      regions: {
        north: 35000,
        south: 29000,
        east: 37000,
        west: 25000,
        center: 18000,
      },
    },
  ],
}
