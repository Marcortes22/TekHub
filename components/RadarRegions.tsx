"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { getRegionPerformance } from "../data/mock"

interface RadarRegionsProps {
  year: string
}

export function RadarRegions({ year }: RadarRegionsProps) {
  const regions = getRegionPerformance(year)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 space-y-4">
          {regions.map((region, index) => (
            <div key={region.region} className="space-y-2">
              <h4 className="font-medium text-sm">{region.region}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Sales:</span>
                  <span className="font-medium">{region.sales}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Satisfaction:</span>
                  <span className="font-medium">{region.satisfaction}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-medium">{region.growth}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Market Share:</span>
                  <span className="font-medium">{region.market_share}%</span>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(region.sales + region.satisfaction + region.growth + region.market_share) / 4}%`,
                    backgroundColor: `hsl(var(--chart-${index + 1}))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
