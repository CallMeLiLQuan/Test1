"use client";

import { Card, Button, Progress } from "antd";
import Image from "next/image";
import {
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { cn } from "@/utils/utils";

interface RegionData {
  id: number;
  name: string;
  manager: string;
  time: string;
  swot: number;
  tasks: number;
  progress: number;
  status: string;
  image?: string;
  letter?: string;
}

const regionData: RegionData[] = [
  {
    id: 1,
    name: "Dự án Tera An Hưng",
    manager: "Nguyễn Thế Cường",
    time: "21/02 - 21/04/2024",
    swot: 9,
    tasks: 155,
    progress: 90,
    status: "Đang thực hiện",
    letter: "D",
  },
  {
    id: 2,
    name: "Khu vực B",
    manager: "Trần Thị B",
    time: "15/02/2024 - 15/07/2024",
    swot: 8,
    tasks: 180,
    progress: 90,
    status: "Đã hoàn thành",
    letter: "B",
  },
];

const RegionCard = ({ region }: { region: RegionData }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Đang thực hiện":
        return "bg-blue-100 text-blue-600";
      case "Đã hoàn thành":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Card
      className="w-full max-w-sm shadow-md rounded-lg overflow-hidden border border-gray-200"
      bodyStyle={{ padding: "16px" }}
    >
      <div className="flex items-start mb-3">
        {region.image ? (
          <Image
            src={region.image || "/placeholder.svg"}
            alt={region.name}
            width={48}
            height={48}
            className="rounded-md mr-3"
          />
        ) : (
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-md mr-3 text-xl font-bold">
            <span className="font-semibold">
              {region.letter || region.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-medium mb-0 text-gray-800"></h3>
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                getStatusClass(region.status)
              )}
            >
              {region.status}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <UserOutlined className="mr-2" />
              <span>Phụ trách: {region.manager}</span>
            </div>
            <div className="flex items-center mb-1">
              <CalendarOutlined className="mr-2" />
              <span>Thời gian: {region.time}</span>
            </div>
            <div className="flex items-center mb-1">
              <FileTextOutlined className="mr-2" />
              <span>Số SWOT: {region.swot}</span>
            </div>
            <div className="flex items-center mb-1">
              <CheckCircleOutlined className="mr-2" />
              <span>Task công việc: {region.tasks}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium">{region.progress}%</span>
        <Progress
          percent={region.progress}
          size="small"
          strokeColor="#4CAF50"
          className="flex-1 mx-2"
          showInfo={false}
        />
      </div>

      <Button
        type="default"
        block
        className="border-gray-300 hover:border-blue-500 hover:text-blue-500"
      >
        CHI TIẾT VISION
      </Button>
    </Card>
  );
};

export default function RegionCardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {regionData.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}
    </div>
  );
}
