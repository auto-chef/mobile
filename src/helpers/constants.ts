import { OrderStatus } from "@/models";
import { theme } from "@/styles";

export const statusData: Record<OrderStatus, { color: string; name: string }> =
  {
    PENDING: {
      color: theme.zinc[500],
      name: "Aguardando aprovação",
    },
    ACCEPTED: {
      color: theme.amber[500],
      name: "Pedidos em produção",
    },
    REJECTED: {
      color: theme.red[500],
      name: "Pedidos cancelados",
    },
    DELIVERED: {
      color: theme.green[500],
      name: "Pedidos concluídos",
    },
  };
