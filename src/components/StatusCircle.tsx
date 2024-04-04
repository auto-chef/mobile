import { View, ViewProps } from "react-native";

import { statusData } from "@/helpers";
import { OrderStatus } from "@/models";

interface StatusCircleProps extends ViewProps {
  status: OrderStatus;
}

export function StatusCircle({ status, style, ...props }: StatusCircleProps) {
  return (
    <View
      style={[
        {
          display: "flex",
          backgroundColor: statusData[status].color,
          width: 12,
          height: 12,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
}
