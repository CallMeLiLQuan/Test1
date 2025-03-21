"use client";

import RegionCardList from "@/component/region/RegionCard";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Danh sách dự án</h1>
      <RegionCardList />
    </div>
  );
}
